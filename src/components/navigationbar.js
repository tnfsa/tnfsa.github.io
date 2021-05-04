import React from 'react'
//import {Link} from "react-router-dom";

import {
    Navbar,
    Nav,
} from 'react-bootstrap'

class Navibar extends React.Component{
    render(){
        return(
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">臺南一中美廣訂餐系統</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">主頁面</Nav.Link>
                        <Nav.Link href="#/restaurant">餐廳</Nav.Link>
                        <Nav.Link href="#/order">訂餐</Nav.Link>
                    </Nav>
                    <Nav.Link href="#/login">登入</Nav.Link>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navibar