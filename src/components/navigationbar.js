import React from 'react'
//import {Link} from "react-router-dom";

import {
    Navbar,
    Nav,
    NavDropdown,
} from 'react-bootstrap'

import GoogleLogout from 'react-google-login'

class Navibar extends React.Component{
    constructor(props) {
        super(props);
        //const {cookies} = props;

        this.state = {
            isLoggedIn: !true,//!cookies.get('loggedin') || true
            username: "Anonymous",
            sells: true,
            isGoogle: false
        }
    }
    render(){
        const logout = (response) => {
            //google logout
            console.log(response)
            //this.handleRemoveCookie()
        }
        const Signout = ()=>{
            //normal account signout

        }
        const toHello = "嗨! "+this.state.username
        return(
            <React.Fragment>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">臺南一中美廣訂餐系統</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#/restaurant">餐廳</Nav.Link>
                        {this.state.sells && <NavDropdown title="店家管理" id="basic-nav-dropdown">
                            <NavDropdown.Item href={"#/config/store"}>商家設定</NavDropdown.Item>
                            <NavDropdown.Item href={"#/config/menu"}>菜單設定</NavDropdown.Item>
                        </NavDropdown>}
                    </Nav>
                    {!this.state.isLoggedIn ? <NavDropdown title={toHello} id="basic-nav-dropdown">
                            <NavDropdown.Item href={"#/history"}>歷史紀錄</NavDropdown.Item>
                            <NavDropdown.Item href={"#/settings"}>設定</NavDropdown.Item>
                            <NavDropdown.Item>
                                {this.state.isGoogle ? <GoogleLogout
                                    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                                    render={renderProps => (
                                        <button onClick={renderProps.onClick} disabled={renderProps.disabled}>登出</button>
                                    )}
                                    buttonText="Log out"
                                    onLogoutSuccess={logout}
                                >
                                </GoogleLogout>: <a href="/" onClick={Signout}>Sign out</a>}
                            </NavDropdown.Item>
                        </NavDropdown>
                        :
                        <Nav.Link href="#/login">登入</Nav.Link>}
                </Navbar.Collapse>
            </Navbar>

            </React.Fragment>

        )
    }
}

export default Navibar