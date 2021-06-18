import React from 'react'
import {Col, Spinner, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeadphones} from '@fortawesome/free-solid-svg-icons'
import Cookies from "universal-cookie/lib";
//import {API} from "../../helpers/API";
import Echo from 'laravel-echo';
import axios from "axios";
// TODO: Production
//const api = new API()
const cookies = new Cookies();
window.Pusher = require('pusher-js');
window.Echo = new Echo({
    broadcaster: 'pusher',
    wsHost: window.location.hostname,
    wsPort: 6001,
    disableStats: true,
    key: 'test',
    forceTLS: false,
    authorizer: (channel, options) => {
        return {
            authorize: (socketId, callback) => {
                axios({
                    method: "POST",
                    url: 'http://local.sivir.pw:8000/api/broadcasting/auth',
                    headers: {
                        Authorization: `Bearer ${'2|7U1wAV74Ov2hglgCZ4lYbMnETGvWrg5qlxeX6tel' || cookies.get('session')}`,
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
window.Echo.private(`App.Models.User.${"a017a273-16d4-4cfb-80b3-cb03e94e4cb9"}`)
    .notification((notification) => {
        console.log(notification.type);
    });

class SellsTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount(props) {
        window.scrollTo({top: 0, behavior: 'smooth'})
        let storeId = cookies.get('storeId')
        if (!storeId) {
            // Out
        }
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
                <Row>
                    <Col>

                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

export default SellsTest