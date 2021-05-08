import React from 'react'

import {Offline} from 'react-detect-offline'
import Cookies from "universal-cookie";

class Notification extends React.Component{
    constructor(props) {
        super(props);
        let send = []
        const cookies = new Cookies()
        const combination = cookies.getAll()
        combination['alert'] ? send.push(true):send.push(false)
        this.state = {
            alert: send[0],
            alertSentence: combination['alert']
        }
    }
    componentDidMount() {
        const cookies = new Cookies()
        cookies.remove('alert')
    }

    render(){
        return(
            <React.Fragment>
                <Offline>
                    <p style={{textAlign: 'center'}} className="p-3 mb-2 bg-danger text-white">離線中，請檢察您的連線狀況</p>
                </Offline>
                {this.state.alert && <p className="p-3 mb-2 bg-success text-white">
                    {this.state.alertSentence}
                </p>}
            </React.Fragment>
        )
    }
}

export default Notification