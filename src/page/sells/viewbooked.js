import React, {useEffect, useRef, useState} from 'react'

import {Button, Card, Container, Spinner} from "react-bootstrap";
import Cookies from 'universal-cookie'
import {Link, useHistory} from "react-router-dom";
import Echo from "laravel-echo";
import axios from "axios";
import {API} from "../../helpers/API";
import {SnackbarProvider, useSnackbar} from 'notistack';

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

function ViewBookedComponent() {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState({})
    //const [newTrans, setNewTrans] = useState([])
    const initState = useRef(true)
    const {enqueueSnackbar} = useSnackbar();

    const getData = async () => {
        try {
            api.call('/stores/:id/simpleTransactions', {
                params: {
                    id: cookies.get('storeId')
                }
            }, (res) => {
                console.log(res)
                window.data = res
                setData(res)
            })
            setLoading(false)
        } catch {
            // wrong request or expired session
            // redirect to main page
            cookies.set('alert', '????????????????????????', {path: '/'})
            document.location.href = '/'
        }
    }

    function requestNotification() {
        if (Notification && Notification.permission === "granted") {
            new Notification("????????????");
        } else if (Notification && Notification.permission !== "denied") {
            Notification.requestPermission(function (status) {
                if (Notification.permission !== status) {
                    Notification.permission = status;
                }
                if (status === "granted") {
                    new Notification("????????????");
                } else {
                    alert("????????????????????????????????????");
                }
            });
        } else {
            alert("????????????????????????????????????");
        }
    }

    useEffect(() => {
        function handleWebsockets(e) {
            console.log(e)
            new Notification(`${e.transaction.id} ${e.transaction?.product?.name}`);
            enqueueSnackbar(`??????: (${e.transaction?.product?.id.substring(0, 5)}) ${e.transaction?.product?.name} ${e.transaction?.qty}???`, 'success');
        }

        if (initState.current) {
            api.call('/me', {
                method: "GET"
            }, (r) => {
                window.Echo.private(`user.${r.id}`).listen('.transaction.created', handleWebsockets);
            })
            getData()
            initState.current = false
            window.newMessage = false
        }
        // eslint-disable-next-line
    }, [])

    return (
        <React.Fragment>
            <center><Spinner animation={"border"} hidden={!loading}/></center>
            <center><h1>???????????????</h1></center>
            <Container>
                {
                    data ? Object.keys(data).map((item) =>
                        <Card key={item}>
                            <Card.Body style={{display: "flex"}}>
                                <div>
                                    <Card.Title>{data[item].name}</Card.Title>
                                    <Card.Text>{data[item].total}???</Card.Text>
                                </div>
                                <div style={{marginLeft: "auto"}}>
                                    <Button variant="primary" as={Link}
                                            to={{pathname: `/booked/detailed/${item}`}}>????????????</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    ) : <React.Fragment><br/><h2 style={{textAlign: 'center'}}>????????????</h2></React.Fragment>
                }
                <hr/>
                <Button onClick={requestNotification}>?????????</Button>
            </Container>
            <br/>

        </React.Fragment>
    )
}

export default function Viewbooked() {
    const history = useHistory()
    return (
        <SnackbarProvider maxSnack={3}
                          action={(key) => (
                              <Button onClick={() => {
                                  history.go(0)
                              }} variant={"dark"}>
                                  ????????????
                              </Button>
                          )}
        >
            <ViewBookedComponent/>
        </SnackbarProvider>
    );
}
