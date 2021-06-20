import React from 'react'
import {Button, ButtonGroup, Col, Row, Spinner, Toast, ToastBody, ToastHeader} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar, faTrash} from '@fortawesome/free-solid-svg-icons'
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
    wsHost: process.env.REACT_APP_WS_HOST,
    wsPath: process.env.REACT_APP_WS_PATH,
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

class SellsTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            transactions: [],
            rating: 1
        }
    }

    componentDidMount(props) {
        let x = new IntroJs()
        window.scrollTo({top: 0, behavior: 'smooth'})
        setTimeout(() => {
            if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
                // nope
            } else {
                x.start()
            }

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

    handleRate(i) {
        this.setState({
            rating: i
        })
        api.call('/products/:product/rate', {
            params: {'product': ''}
        }, (r) => {
            console.log(r)
        })
    }

    rating() {
        return (
            <Col>
                <ButtonGroup>
                    {[...Array(6).keys()].slice(1).map(i => {
                        if (i <= this.state.rating)
                            return (<Button key={i} variant={'primary'} className={["text-lg"]}
                                            onClick={this.handleRate.bind(this, i)} data-star={i}>
                                <FontAwesomeIcon icon={faStar}/>
                            </Button>)
                        else
                            return (<Button key={i} variant={'secondary'} className={["text-lg"]}
                                            onClick={this.handleRate.bind(this, i)} data-star={i}>
                                <FontAwesomeIcon icon={faStar}/>
                            </Button>)
                    })}
                </ButtonGroup>
                &nbsp;
                <Button variant={'danger'} className={["text-lg"]}
                        onClick={this.handleRate.bind(this, -1)}>
                    <FontAwesomeIcon icon={faTrash}/>
                </Button>
            </Col>
        )
    }

    render() {
        return (
            <React.Fragment>
                <h1 style={{textAlign: 'center'}}>訂單列表 <FontAwesomeIcon icon={faStar}/></h1>
                <Row>
                    <Col>
                        <center><Spinner animation={"border"} hidden={!this.state.loading}/></center>
                    </Col>
                </Row>
                <Button data-intro='Hello step one!' onClick={this.requestNotification}>傳送通知</Button>
                <Row>
                    {this.rating()}
                </Row>
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