import React from 'react'
import Navibar from "../components/navigationbar";
import OfflineDetect from "../components/offlineDetect";

class Settings extends React.Component{
    componentDidMount() {
        window.scrollTo({top: 0,behavior: 'smooth'})
    }

    render(){
        return(
            <React.Fragment>
                <OfflineDetect/>
                <h1 style={{textAlign: 'center'}}>設定</h1>
                <Navibar />
            </React.Fragment>
        )
    }
}

export default Settings