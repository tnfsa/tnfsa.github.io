import React from 'react'
import Navibar from "../../components/navigationbar";

class Order extends React.Component{
    render(){
        return(
            <React.Fragment>
                <h1 style={{textAlign: 'center'}}>吃什麼</h1>
                <Navibar />
            </React.Fragment>
        )
    }
}

export default Order