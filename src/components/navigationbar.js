import React from 'react'

import {
    Navbar,
    Nav,
    NavDropdown,
} from 'react-bootstrap'

import Cookies from 'universal-cookie'

class Navibar extends React.Component{
    constructor(props) {
        super(props);
        //const {cookies} = props;
        const cookies = new Cookies()
        const combination = cookies.getAll()
        //window.alert(combination['isGoogle'])
        let send = []
        combination['isGoogle'] ? send.push(true):send.push(false)
        combination['isSells'] ? send.push(true):send.push(false)
        combination['session'] ? send.push(true):send.push(false)
        this.state = {
            isGoogle: send[0],
            isSells: send[1],
            isLoggedIn: send[2],//!cookies.get('loggedin') || true
            username: combination['userName'] || "Anonymous",
        }
    }

    render(){
        const signOut = ()=>{
            //normal account signout
            //window.alert('logging out')
            //remove cookie
            const cookies = new Cookies()
            cookies.remove('isGoogle')
            cookies.remove('isSells')
            cookies.remove('session')
            cookies.remove('userName')
            cookies.remove('userPhoto')
            cookies.set('alert','登出成功',{path: '/'})
            //reload page
            window.location.replace('/')
        }
        const toHello = "嗨! "+this.state.username
        return(
            <React.Fragment>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="/">美廣訂餐系統</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#/restaurant">餐廳</Nav.Link>
                            {this.state.isSells && <NavDropdown title="店家管理" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#/config/store">商家設定</NavDropdown.Item>
                                <NavDropdown.Item href="#/config/menu">菜單設定</NavDropdown.Item>
                            </NavDropdown>}
                            <NavDropdown title="相關連結" id="basic-nav-dropdown">
                                <NavDropdown.Item href="https://sites.google.com/view/tnfshsu/" rel="noreferrer noopener" target="_blank">學聯會</NavDropdown.Item>
                                <NavDropdown.Item href="https://tnfsacec.github.io" rel="noreferrer noopener" target="_blank">選委會</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        {this.state.isLoggedIn ? <NavDropdown title={toHello} id="basic-nav-dropdown">
                                <NavDropdown.Item href="#/history">歷史紀錄</NavDropdown.Item>
                                <NavDropdown.Item href="#/settings">設定</NavDropdown.Item>
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

export default Navibar