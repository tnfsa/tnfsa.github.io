import React from "react";
import {Card} from "react-bootstrap";


class DiskQuota extends React.Component {
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