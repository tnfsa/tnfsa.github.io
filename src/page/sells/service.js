import React from 'react'
import {Col, Spinner, Row, Card} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeadphones} from '@fortawesome/free-solid-svg-icons'
import DiskQuota from "./CustomerServiceComponent/DiskQuota";
import Cookies from "universal-cookie/lib";
import {API} from "../../helpers/API";
import Subscription from "./CustomerServiceComponent/Subscription";

const api = new API()

class CustomerService extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quota: {},
            loading: false,
            subscriptions: []
        }
    }

    getDiskQuota(storeId) {
        this.setState({
            loading: true
        })
        api.call('/stores/:store/disk_quota', {
            method: "GET",
            params: {
                store: storeId
            }
        }, (quota) => {
            console.log(quota.remain)
            this.setState({
                quota,
                loading: false
            });
        })
    }

    getSubscriptions(storeId) {
        this.setState({
            loading: true
        })
        api.call('/stores/:store/subscriptions', {
            method: "GET",
            params: {
                store: storeId
            }
        }, (subscriptions) => {
            console.log(subscriptions)
            this.setState({
                subscriptions,
                loading: false
            });
        })
    }

    componentDidMount(props) {
        window.scrollTo({top: 0, behavior: 'smooth'})
        const cookies = new Cookies()
        let storeId = cookies.get('storeId')
        if (!storeId) {
            // Out
        }
        this.setState({
            storeId
        })
        this.getDiskQuota(storeId)
        this.getSubscriptions(storeId)
    }

    render() {
        let subscriptionsElems = this.state.subscriptions.map((subscription, index) => {
            return (
                <Subscription key={subscription.id} subscription={subscription}/>
            )
        })
        return (
            <React.Fragment>
                <h1 style={{textAlign: 'center'}}>客服中心 <FontAwesomeIcon icon={faHeadphones}/></h1>
                <Row>
                    <Col>
                        <center><Spinner animation={"border"} hidden={!this.state.loading}/></center>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card className={["m-3", "p-3"]}>
                            <h5>您的店家ID為： <b>{this.state.storeId}</b></h5>
                            <DiskQuota quota={this.state.quota}/>
                            {subscriptionsElems}
                        </Card>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

export default CustomerService