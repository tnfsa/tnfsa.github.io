import React from 'react'
import Navibar from "../../components/navigationbar";

class Restaurant extends React.Component{
    render(){
        return(
            <React.Fragment>
                <h1 style={{textAlign: 'center'}}>餐廳</h1>
                <Navibar />
            </React.Fragment>
        )
    }
}

export default Restaurant