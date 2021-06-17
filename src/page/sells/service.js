import React from 'react'
import {Col, Spinner, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeadphones} from '@fortawesome/free-solid-svg-icons'
import DiskQuota from "./CustomerServiceComponent/DiskQuota";
import Cookies from "universal-cookie/lib";
import {API} from "../../helpers/API";

class CustomerService extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quota: {},
            loading: false
        }
    }

    componentDidMount(props) {
        window.scrollTo({top: 0, behavior: 'smooth'})
        const cookies = new Cookies()
        const api = new API()
        this.setState({
            loading: true
        })
        api.call('/stores/:store/disk_quota', {
            method: "GET",
            params: {
                store: cookies.get('storeId')
            }
        }, (quota) => {
            console.log(quota.remain)
            this.setState({
                quota,
                loading: false
            });
        })
    }

    render() {
        return (
            <React.Fragment>
                <h1 style={{textAlign: 'center'}}>客服中心 <FontAwesomeIcon icon={faHeadphones}/></h1>
                <Row>
                    <Col>
                        <center><Spinner animation={"border"} hidden={!this.state.loading}/></center>
                    </Col>
                </Row>
                <Row>
                    <Col><DiskQuota quota={this.state.quota}/></Col>

                </Row>
            </React.Fragment>
        )
    }
}

export default CustomerService