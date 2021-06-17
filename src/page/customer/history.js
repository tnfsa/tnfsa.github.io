import React from 'react'
import Transaction from '../../components/transaction'

class Histories extends React.Component{
    componentDidMount() {
        window.scrollTo({top: 0,behavior: 'smooth'})
    }

    render(){
        return(
            <React.Fragment>
                <h1 style={{textAlign: 'center'}}>歷史紀錄</h1>
                <Transaction />
            </React.Fragment>
        )
    }
}

export default Histories