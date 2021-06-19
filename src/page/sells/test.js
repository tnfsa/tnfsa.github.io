import React from 'react'
import {Col, Spinner, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeadphones} from '@fortawesome/free-solid-svg-icons'
import Cookies from "universal-cookie/lib";
import {API} from "../../helpers/API";
import Echo from 'laravel-echo';
import axios from "axios";
import config from '../../config.json';
// TODO: Production
const api = new API()
const cookies = new Cookies();
window.Pusher = require('pusher-js');
window.Echo = new Echo({
    broadcaster: 'pusher',
    wsHost: 'lunchapi.hsuan.app',
    wsPath: '/websockets',
    path: '/websockets/',
    disableStats: true,
    key: 'test',
    forceTLS: false,
    authorizer: (channel, options) => {
        return {
            authorize: (socketId, callback) => {
                axios({
                    method: "POST",
                    url: config['baseURL'] + 'broadcasting/auth',
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

//`${"a017a273-16d4-4cfb-80b3-cb03e94e4cb9"}`
api.call('/me', {
    method: "GET"
}, (r) => {
    window.Echo.private(`user.${r.id}`)
        .listen('.transaction.created', function (e) {
            console.log(e)
        });
})

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