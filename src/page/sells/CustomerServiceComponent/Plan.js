import React from "react";

class Plan extends React.Component {
    constructor(props) {
        super(props);
        this.generateECPay = this.generateECPay.bind(this)
    }

    generateECPay(){
        return (
            process.env.REACT_APP_API_HOST + '/' +
            this.props.storeId + '/' + this.props.plan.id + '/sendOrder'
        )
    }

    render() {
        return (
            <tr>
                <td>{this.props.plan.name}</td>
                <td>{this.props.plan.description}</td>
                <td>{this.props.plan.disk_quota} Mb</td>
                <td>
                    <a href={this.generateECPay()} rel="noreferrer" className="btn btn-primary" target={"_blank"}>購買</a>
                </td>
            </tr>
        )
    }

}

export default Plan