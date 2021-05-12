import React from 'react'

class Order extends React.Component{
    componentDidMount() {
        window.scrollTo({top: 0,behavior: 'smooth'})
    }

    render(){
        return(
            <React.Fragment>
                <h1 style={{textAlign: 'center'}}>吃什麼</h1>
            </React.Fragment>
        )
    }
}

export default Order