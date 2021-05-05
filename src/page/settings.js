import React from 'react'
import Navibar from "../components/navigationbar";

class Settings extends React.Component{
    render(){
        return(
            <React.Fragment>
                <h1 style={{textAlign: 'center'}}>設定</h1>
                <Navibar />
            </React.Fragment>
        )
    }
}

export default Settings