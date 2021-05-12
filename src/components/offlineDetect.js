import React from 'react'
import {Offline} from "react-detect-offline";

import config from '../config.json'

class OfflineDetect extends React.Component{
    render(){
        const polling = {url: config['docRoot']+'status.json'}
        return(
            <Offline polling={polling}>
                <p style={{textAlign: 'center'}} className="p-3 mb-2 bg-danger text-white">離線中，請檢察您的連線狀況</p>
            </Offline>
        )
    }
}

export default OfflineDetect