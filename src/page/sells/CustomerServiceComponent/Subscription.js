import React from "react";
import {Card, Table} from "react-bootstrap";

class Subscription extends React.Component {
    render() {
        return (
            <Card className={["m-3", "p-3"]}>
                <b>到期時間： {this.props.subscription.expires_at ?? "永久有效"}</b>
                <br/>
                <Table>
                    <thead>
                    <tr>
                        <th>方案名稱</th>
                        <th>說明</th>
                        <th>儲存容量</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{this.props.subscription.plan.name}</td>
                        <td>{this.props.subscription.plan.description}</td>
                        <td>{this.props.subscription.plan.disk_quota} Mb</td>
                    </tr>
                    </tbody>
                </Table>
            </Card>
        )
    }

}

export default Subscription