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
            api.call('/stores/:id/simpleTransactions', {
                params: {
                    id: cookies.get('storeId')
                }
            }, (res) => {
                console.log(res)
                setData(res)
            })
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
                    data ? Object.keys(data).map((item) =>
                        <Card key={item}>
                            <Card.Body style={{display: "flex"}}>
                                <div>
                                    <Card.Title>{data[item].name}</Card.Title>
                                    <Card.Text>{data[item].total}份</Card.Text>
                                </div>
                                <div style={{marginLeft: "auto"}}>
                                    <Button variant="primary" as={Link}
                                            to={{pathname: `/booked/detailed/${item}`}}>立即查看</Button>
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