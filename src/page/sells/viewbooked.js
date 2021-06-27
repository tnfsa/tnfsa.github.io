import React, {useEffect, useRef, useState} from 'react'

import {Button, Card, Container, Spinner} from "react-bootstrap";
import Cookies from 'universal-cookie'
import {Link} from "react-router-dom";
import Echo from "laravel-echo";
import axios from "axios";
import {API} from "../../helpers/API";

const cookies = new Cookies()
const api = new API()

window.Pusher = require('pusher-js');
window.Echo = new Echo({
    broadcaster: 'pusher',
    wsHost: process.env.REACT_APP_WS_HOST,
    wsPath: process.env.REACT_APP_WS_PATH,
    wsPort: process.env.REACT_APP_WS_PORT,
    disableStats: true,
    key: 'test',
    forceTLS: false,
    authorizer: (channel, options) => {
        return {
            authorize: (socketId, callback) => {
                axios({
                    method: "POST",
                    url: process.env.REACT_APP_API_ENDPOINT + '/broadcasting/auth',
                    headers: {
                        Authorization: `Bearer ${cookies.get('session')}`,
                    },
                    data: {
                        socket_id: socketId,
                        channel_name: channel.name,
                    },
                }).then(response => {
                    callback(false, response.data);
                }).catch(error => {
                    callback(true, error);
                });
            }
        };
    },
});
export default function ViewBooked() {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState()
    const [productTransaction, setProductTransaction] = useState([])

    const initState = useRef(true)

    const allcookies = cookies.getAll()

    const getData = async () => {
        try {
            const url = process.env.REACT_APP_API_ENDPOINT + '/stores/' + allcookies['storeId'] + '/transactions'
            let result = await fetch(url, {
                method: 'GET',
                'headers': {
                    'Accept': 'application/json',
                    "Authorization": `Bearer ${allcookies['session']}`
                }
            })
            let json = await result.json()
            /*[{
                "id": "9a999973-7ee7-4052-8ad7-fa09295594b7",
                "user_id": "07fc06be-eb1e-4a7f-a24e-0d0ee07c8c89",
                "product_id": "70a230ca-ccc4-4ebd-b7cc-0f986c0ec2aa",
                "qty": 1,
                "total": 50,
                "status": "PREPARE",
                "comment": null,
                "options": [],
                "created_at": "2021-06-26T16:25:32.000000Z",
                "updated_at": "2021-06-27T09:23:26.000000Z",
                "rating": "0.00",
                "product": {
                    "id": "70a230ca-ccc4-4ebd-b7cc-0f986c0ec2aa",
                    "store_id": "b369fca8-d9e7-4d1b-abbb-096aec8f209b",
                    "name": "\u934b\u71d2\u70cf\u9f8d",
                    "price": 50,
                    "description": "\u934b\u5b50\u71d2\u6389\u7684\u70cf\u9f8d\u9eb5",
                    "image": "product_images\/b369fca8-d9e7-4d1b-abbb-096aec8f209b\/BMOIk",
                    "created_at": "2021-06-26T15:54:28.000000Z",
                    "updated_at": "2021-06-26T15:56:10.000000Z",
                    "store": {
                        "id": "b369fca8-d9e7-4d1b-abbb-096aec8f209b",
                        "name": "Default Store",
                        "created_at": "2021-06-26T15:48:24.000000Z",
                        "updated_at": "2021-06-26T15:48:24.000000Z"
                    }
                }
            }]*/
            let name = {}
            json.forEach(item => {
                if (typeof name[item.product_id] === 'undefined') {
                    name[item.product_id] = 1
                } else {
                    name[item.product_id]++
                }
            })

            let toReturn = []
            for (let element in name) {
                console.log(name[element])
                console.log(element)
                toReturn.push({
                    name: element,
                    count: name[element]
                })
            }
            setData(toReturn)
            setLoading(false)
        } catch {
            // wrong request or expired session
            // redirect to main page
            cookies.set('alert', '操作錯誤，請重試', {path: '/'})
            document.location.href = '/'
        }
    }

    function parseData() {

    }

    useEffect(() => {
        if (initState.current) {
            api.call('/me', {
                method: "GET"
            }, (r) => {
                window.Echo.private(`user.${r.id}`)
                    .listen('.transaction.created', function (e) {
                        console.log(e)
                        new Notification(`${e.transaction.id} ${e.transaction?.product?.name}`);
                        setData([
                            e.transaction,
                            ...data
                        ])
                    });
            })
            getData()
            initState.current = false
        }
        // eslint-disable-next-line
    }, [])

    return (
        <React.Fragment>
            <center><Spinner animation={"border"} hidden={!loading}/></center>
            <center><h1>已訂餐名單</h1></center>
            <Container>
                {
                    data ? data.map((item) =>
                        <Card key={item.name}>
                            <Card.Body style={{display: "flex"}}>
                                <div>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>{item.count}份</Card.Text>
                                </div>
                                <div style={{marginLeft: "auto"}}>
                                    <Button variant="primary" as={Link}
                                            to={{pathname: `/booked/detailed/${item.name}`}}>立即查看</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    ) : <React.Fragment><br/><h2 style={{textAlign: 'center'}}>查無資料</h2></React.Fragment>
                }
            </Container>
            <br/>
        </React.Fragment>
    )
}