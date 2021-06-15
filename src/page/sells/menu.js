import React from 'react'
import MenuOption from '../../components/menuoption'
import {Container} from "react-bootstrap";
import ListAddedFood from '../../components/sells/listaddedfood'

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
                    <br />
                    <ListAddedFood />
                </Container>
            </React.Fragment>
        )
    }
}

export default MenuSetting