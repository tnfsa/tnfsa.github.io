import React, {useEffect, useState} from 'react'

import {Button, Card, Container, Spinner} from "react-bootstrap";
import Cookies from 'universal-cookie'
import {Link} from "react-router-dom";
import Echo from "laravel-echo";
import axios from "axios";

const cookies = new Cookies()

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
            //console.log(json)
            console.log(json)

            let name = {}
            console.log(json)
            json.map(item =>{
                if(name[item.product_id] === undefined){
                    name[item.product_id] = 1
                }else{
                    name[item.product_id] ++
                }
                return null
            })

            let toReturn = []
            for(let element in name){
                console.log(name[element])
                console.log(element)
                toReturn.push({
                    name: element,
                    count: name[element]
                })
            }
            setData(toReturn)
            setLoading(false)
        }catch{
            // wrong request or expired session
            // redirect to main page
            cookies.set('alert','操作錯誤，請重試',{path: '/'})
            document.location.href = '/'
        }
    }

    useEffect(()=>{
        return getData()
        // eslint-disable-next-line
    },[])

    return(
        <React.Fragment>
            <center><Spinner animation={"border"} hidden={!loading}/></center>
            <center><h1>已訂餐名單</h1></center>
            <Container>
                {
                    data ? data.map((item) =>
                        <Card key={item.id}>
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
            <br />
        </React.Fragment>
    )
}