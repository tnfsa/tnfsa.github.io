import React from 'react'
import {Button, Col, Row, Spinner, Toast, ToastBody, ToastHeader} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeadphones} from '@fortawesome/free-solid-svg-icons'
import Cookies from "universal-cookie/lib";
import {API} from "../../helpers/API";
import Echo from 'laravel-echo';
import axios from "axios";
import IntroJs from 'intro.js'
import 'intro.js/introjs.css';

const api = new API()
const cookies = new Cookies();
window.Pusher = require('pusher-js');
window.Echo = new Echo({
    broadcaster: 'pusher',
    wsHost: process.env.WS_HOST,
    wsPath: process.env.WS_PATH,
    disableStats: true,
    key: 'test',
    forceTLS: false,
    authorizer: (channel, options) => {
        return {
            authorize: (socketId, callback) => {
                axios({
                    method: "POST",
                    url: process.env.API_ENDPOINT + '/broadcasting/auth',
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

class SellsTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            transactions: []
        }
    }

    componentDidMount(props) {
        let x = new IntroJs()
        window.scrollTo({top: 0, behavior: 'smooth'})
        setTimeout(() => {
            x.start()
        }, 5000)
        let storeId = cookies.get('storeId')
        if (!storeId) {
            // Out
        } else {
            let that = this
            api.call('/me', {
                method: "GET"
            }, (r) => {
                window.Echo.private(`user.${r.id}`)
                    .listen('.transaction.created', function (e) {
                        console.log(e)
                        new Notification(`${e.transaction.id} ${e.transaction?.product?.name}`);
                        that.setState(prev => ({
                            transactions: [
                                e.transaction,
                                ...prev.transactions
                            ]
                        }))
                    });
            })
        }
    }

    requestNotification() {
        if (Notification && Notification.permission === "granted") {
            new Notification("測試通知");
        } else if (Notification && Notification.permission !== "denied") {
            Notification.requestPermission(function (status) {
                if (Notification.permission !== status) {
                    Notification.permission = status;
                }
                if (status === "granted") {
                    new Notification("測試通知");
                } else {
                    alert("你不開通知我也不能提醒你");
                }
            });
        } else {
            alert("你不開通知我也不能提醒你");
        }
    }

    transactionsToast() {
        return this.state.transactions.map((value, index) => {
            return (
                <Toast>
                    <ToastHeader>
                        <strong className="mr-auto">({value.id.substring(0, 5)}) {value?.product?.name}</strong>
                    </ToastHeader>
                    <ToastBody>
                        {value?.product?.name} x {value?.qty} <br/>
                        {value?.product?.description}
                    </ToastBody>
                </Toast>
            )
        })
    }


    render() {
        return (
            <React.Fragment>
                <h1 style={{textAlign: 'center'}}>訂單列表 <FontAwesomeIcon icon={faHeadphones}/></h1>
                <Row>
                    <Col>
                        <center><Spinner animation={"border"} hidden={!this.state.loading}/></center>
                    </Col>
                </Row>
                <Button data-intro='Hello step one!' onClick={this.requestNotification}>傳送通知</Button>
                <Row>
                    <Col>
                        {this.transactionsToast()}
                    </Col>
                    <Col>
                        {this.state.transactions.length}{JSON.stringify(this.state.transactions)}
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

export default SellsTest