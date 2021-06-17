import React from "react";
import {Card} from "react-bootstrap";

const data = {
    labels: ['Used', 'Remain'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(238,7,22,0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1,
        },
    ],
};

class DiskQuota extends React.Component {
    componentDidMount() {
        data.datasets[0].data[0] = this.props.quota.total - this.props.quota.remain / 1024000;
        data.datasets[0].data[1] = this.props.quota.remain / 1024000;
    }

    render() {
        return (
            <Card className={["m-3", "p-3"]}>
                <div hidden={!this.props.quota.exceed_quota}>
                    儲存空間已滿
                </div>
                <div>
                    儲存空間剩餘 {(this.props.quota.remain / 1024000).toFixed(2)} Mb / {this.props.quota.total} Mb
                    (已用{(((this.props.quota.total - (this.props.quota.remain / 1024000)) / this.props.quota.total) * 100).toFixed(2)}%)
                </div>
            </Card>
        )
    }

}

export default DiskQuota