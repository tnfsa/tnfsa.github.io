import React from 'react'
import {Container, Row} from "react-bootstrap";

class Settings extends React.Component{
    componentDidMount() {
        window.scrollTo({top: 0,behavior: 'smooth'})
    }

    render(){
        return(
            <React.Fragment>
                <h1 style={{textAlign: 'center'}}>設定</h1>
                <Container>
                    <Row>

                    </Row>
                    <Row>

                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

export default Settings