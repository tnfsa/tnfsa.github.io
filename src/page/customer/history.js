import React from 'react'
import Navibar from "../../components/navigationbar";

class Histories extends React.Component{
    componentDidMount() {
        window.scrollTo({top: 0,behavior: 'smooth'})
    }

    render(){
        return(
            <React.Fragment>
                <h1 style={{textAlign: 'center'}}>歷史紀錄</h1>
                <Navibar />
            </React.Fragment>
        )
    }
}

export default Histories