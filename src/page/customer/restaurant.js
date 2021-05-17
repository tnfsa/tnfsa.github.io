import React from 'react'

import Liststore from '../../components/liststore'
import {
    Container
} from 'react-bootstrap'

class Restaurant extends React.Component{
    componentDidMount() {
        window.scrollTo({top: 0,behavior: 'smooth'})
    }

    render(){
        return(
            <React.Fragment>
                <h1 style={{textAlign: 'center'}}>餐廳</h1>
                <Container>
                    <Liststore />
                </Container>
            </React.Fragment>
        )
    }
}

export default Restaurant