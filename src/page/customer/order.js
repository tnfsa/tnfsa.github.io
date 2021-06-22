import React from 'react'
import {Container} from 'react-bootstrap'
import ListFood from '../../components/listfood'

class Order extends React.Component{
    componentDidMount() {
        window.scrollTo({top: 0, behavior: 'smooth'})
        console.log(this.props.match.params)
    }
    render(){
        return(
            <React.Fragment>
                <h1 style={{textAlign: 'center'}}>吃什麼</h1>
                <Container>
                    <ListFood storeId={this.props.match.params.storeId}/>
                </Container>

            </React.Fragment>
        )
    }
}

export default Order