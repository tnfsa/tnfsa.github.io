import React from "react";

class Subscription extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.subscription.plan.name}</td>
                <td>{this.props.subscription.plan.description}</td>
                <td>{this.props.subscription.plan.disk_quota} Mb</td>
                <td>{this.props.subscription.expires_at ?? "永久有效"}</td>
            </tr>
        )
    }

}

export default Subscription