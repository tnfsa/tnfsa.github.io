import React from 'react'
//import {Link} from "react-router-dom";

import {
    Navbar,
    Nav,
    NavDropdown,
} from 'react-bootstrap'

import GoogleLogout from 'react-google-login'
import {instanceOf} from 'prop-types'
import {Cookies} from 'react-cookie'

class Navibar extends React.Component{
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };
    constructor(props) {
        super(props);
        const {cookies} = props;

        this.state = {
            isLoggedIn: !true//!cookies.get('loggedin') || true
        }
    }
    handleRemoveCookie = () => {
        const { cookies } = this.props;
        cookies.remove("user"); // remove the cookie
        this.setState({ user: cookies.get("user") });
    };
    render(){
        const logout = (response) => {
            console.log(response)
            this.handleRemoveCookie()
        }

        return(
            <React.Fragment>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">臺南一中美廣訂餐系統</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">主頁面</Nav.Link>
                        <Nav.Link href="#/restaurant">餐廳</Nav.Link>
                        <Nav.Link href="#/order">訂餐</Nav.Link>
                    </Nav>
                    {!this.state.isLoggedIn ? <NavDropdown title="已登入" id="basic-nav-dropdown">
                            <NavDropdown.Item>
                                <GoogleLogout
                                    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                                    buttonText="Logout"
                                    onLogoutSuccess={logout}
                                >
                                </GoogleLogout>
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