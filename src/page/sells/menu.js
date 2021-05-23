import React from 'react'
import MenuOption from '../../components/menuoption'
import {Container} from "react-bootstrap";

class MenuSetting extends React.Component{
    componentDidMount() {
        window.scrollTo({top: 0,behavior: 'smooth'})
    }

    render() {
        return (
            <React.Fragment>
                <h1 style={{textAlign: 'center'}}>菜單設定</h1>
                <Container>
                    <MenuOption />
                    {/*<AddedFood />*/}
                </Container>
            </React.Fragment>
        )
    }
}

export default MenuSetting