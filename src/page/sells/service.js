import React from 'react'
import {Card, Col, Row, Spinner, Table} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeadphones} from '@fortawesome/free-solid-svg-icons'
import DiskQuota from "./CustomerServiceComponent/DiskQuota";
import Cookies from "universal-cookie/lib";
import {API} from "../../helpers/API";
import Subscription from "./CustomerServiceComponent/Subscription";
import Plan from "./CustomerServiceComponent/Plan";
import Swal from "sweetalert2";
import {withRouter} from "react-router-dom";

const api = new API()
const cookies = new Cookies()

class CustomerService extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quota: {},
            loading: false,
            subscriptions: [],
            plans: []
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

    getPlans(storeId) {
        this.setState({
            loading: true
        })
        api.call('/plans', {
            method: "GET",
            params: {
                store: storeId
            }
        }, (plans) => {
            console.log(plans)
            this.setState({
                plans,
                loading: false
            });
        })
    }

    componentDidMount(props) {
        window.scrollTo({top: 0, behavior: 'smooth'})
        let storeId = cookies.get('storeId')
        if (!storeId) {
            Swal.fire({
                title: '錯誤!',
                text: '404 (STORE_NOT_FOUND)',
                icon: 'error',
                confirmButtonText: 'Ok'
            }).then(()=>this.props.history.push('/settings/activate'))
        }else{
            this.setState({
                storeId
            })
            this.getDiskQuota(storeId)
            this.getSubscriptions(storeId)
            this.getPlans(storeId)
        }
    }

    render() {
        let subscriptionsElems = this.state.subscriptions.map((subscription, index) => {
            return (
                <Subscription key={subscription.id} subscription={subscription}/>
            )
        })

        let plansElems = this.state.plans.map((plan, index) => {
            return (<Plan key={plan.id} plan={plan} storeId={this.state.storeId}/>)
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
                            <Card className={["m-3", "p-3"]}>
                                您擁有的方案列表
                                <Table>
                                    <thead>
                                    <tr>
                                        <th>方案名稱</th>
                                        <th>說明</th>
                                        <th>儲存容量</th>
                                        <th>宣傳點數</th>
                                        <th>到期時間</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {subscriptionsElems}
                                    </tbody>
                                </Table>
                            </Card>

                            <Card className={["m-3", "p-3"]}>
                                可購買的方案列表
                                <div className="alert alert-danger">目前為測試階段請勿付款</div>
                                <Table>
                                    <thead>
                                    <tr>
                                        <th>方案名稱</th>
                                        <th>說明</th>
                                        <th>儲存容量</th>
                                        <th>宣傳點數</th>
                                        <th>購買</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {plansElems}
                                    </tbody>
                                </Table>
                            </Card>
                        </Card>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

export default withRouter(CustomerService)