import React from 'react'

import Navibar from "../components/navigationbar";
import Signupblock from "../components/signupblock";
import Notification from "../components/Notification";

class Signup extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Notification/>
                <Navibar />
                <Signupblock />
            </React.Fragment>
        )
    }
}

export default Signup