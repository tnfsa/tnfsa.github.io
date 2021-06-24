import React from 'react'

import {Nav, Navbar, NavDropdown} from 'react-bootstrap'

import Cookies from 'universal-cookie'
import {Link, withRouter} from "react-router-dom";
import {IconButton, TextField} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';

class Navibar extends React.Component {
    constructor(props) {
        super(props);
        const cookies = new Cookies()
        const combination = cookies.getAll()
        let send = []
        combination['isGoogle'] ? send.push(true) : send.push(false)
        combination['isSells'] ? send.push(true) : send.push(false)
        combination['session'] ? send.push(true) : send.push(false)
        this.state = {
            isGoogle: send[0],
            isSells: send[1],
            isLoggedIn: send[2],//!cookies.get('loggedin') || true
            username: combination['userName'] || "Anonymous",
            searchTerm: ""
        }
        this.handleSearchTermChange = this.handleSearchTermChange.bind(this)
        this.searchProduct = this.searchProduct.bind(this)
    }

    searchProduct() {
        if (this.props.location.pathname.indexOf('query') > -1) {
            this.props.history.replace('/query?q=' + this.state.searchTerm)
            this.props.history.go(0)
        } else {
            this.props.history.push('/query?q=' + this.state.searchTerm)
        }

    }

    handleSearchTermChange(e) {
        this.setState({
            searchTerm: e.target.value
        })
    }

    render() {
        const signOut = () => {
            //normal account signout
            //window.alert('logging out')
            //remove cookie
            const cookies = new Cookies()
            cookies.remove('id')
            cookies.remove('isGoogle')
            cookies.remove('isSells')
            cookies.remove('session')
            cookies.remove('userName')
            cookies.remove('storeId')
            cookies.remove('name')
            cookies.set('alert','登出成功',{path: '/'})
            //reload page
            window.location.href = '/'
        }
        const toHello = "嗨! "+this.state.username
        return(
            <React.Fragment>
                <Navbar bg="light" expand="lg" collapseOnSelect={true}>
                    <Navbar.Brand href="/">美廣訂餐系統</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#/restaurant">餐廳</Nav.Link>
                            {this.state.isSells && <NavDropdown title="商家管理" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#/config/menu">菜單設定</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/service">客服服務</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/booked">出餐</NavDropdown.Item>
                            </NavDropdown>}
                            <NavDropdown title="相關連結" id="basic-nav-dropdown">
                                <NavDropdown.Item href="https://sites.google.com/view/tnfshsu/"
                                                  rel="noreferrer noopener" target="_blank">學聯會</NavDropdown.Item>
                                <NavDropdown.Item href="https://tnfsacec.github.io" rel="noreferrer noopener"
                                                  target="_blank">選委會</NavDropdown.Item>
                            </NavDropdown>
                            <TextField value={this.state.searchTerm} onChange={this.handleSearchTermChange} id="term"
                                       label="搜尋想吃的" variant="outlined" size="small"
                                       InputProps={{
                                           endAdornment:
                                               (<IconButton onClick={this.searchProduct}>
                                                   <SearchIcon/>
                                               </IconButton>)
                                       }}/>
                        </Nav>
                        {this.state.isLoggedIn ? <NavDropdown title={toHello} id="basic-nav-dropdown">
                                <NavDropdown.Item href="#/history">歷史紀錄</NavDropdown.Item>
                                <NavDropdown.Item href="#/settings">設定</NavDropdown.Item>
                                <NavDropdown.Item href="#/profile">個人檔案</NavDropdown.Item>
                                <NavDropdown.Item onClick={signOut}>登出</NavDropdown.Item>
                            </NavDropdown>
                            :
                            <Nav>
                                <Nav.Link href="#/signup">註冊</Nav.Link>
                                <Nav.Link href="#/login">登入</Nav.Link>
                            </Nav>}
                    </Navbar.Collapse>
                </Navbar>
            </React.Fragment>
        )
    }
}

export default withRouter(Navibar)