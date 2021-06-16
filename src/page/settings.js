import React from 'react'
import {Container, Row,Col} from "react-bootstrap";

import SettingOption from '../components/settingsOption'
import SettingConfigure from '../components/settingconfiguration/settingConfigure'

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
                        <Col xs={3}>
                            <SettingOption />
                        </Col>
                        <Col xs={7}>
                            <SettingConfigure/>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

export default Settings