import React from 'react'
import ListFood from '../../components/listfood'

class Order extends React.Component{
    componentDidMount() {
        window.scrollTo({top: 0,behavior: 'smooth'})
    }
    render(){
        return(
            <React.Fragment>
                <h1 style={{textAlign: 'center'}}>吃什麼</h1>
                <ListFood id={this.props.match.params.storeId}/>
            </React.Fragment>
        )
    }
}

export default Order