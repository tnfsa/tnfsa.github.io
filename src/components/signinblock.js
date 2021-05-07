import React from 'react'

import GoogleOauth from "./googleOauth";
import {
    Container,
    Row,
    Col,
} from 'react-bootstrap'

class Signinblock extends React.Component{
    render(){
        const Send = ()=>{
            const email = document.getElementById('userInputEmail')
            const passwd = document.getElementById('userInputPasswd')
            window.alert(email.value+" "+passwd.value)
        }
        return(
            <React.Fragment>
                <Container>
                    <form className={"signInBlock"}>
                        <h3 style={{textAlign: 'center'}}>登入</h3>
                        <div className="form-group">
                            <label>電子郵件</label>
                            <input id="userInputEmail" type="email" className="form-control" placeholder="Enter email" />
                        </div>

                        <div className="form-group">
                            <label>密碼</label>
                            <input id="userInputPasswd" type="password" className="form-control" placeholder="Enter password" />
                        </div>

                        {/*<div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>*/}
                        <Row>
                            <Col></Col>
                            <Col></Col>
                            <Col><button type="submit" className="btn btn-primary btn-block" onClick={Send}>Submit</button></Col>
                        </Row>
                        <hr />
                        <label>其他登入方式？</label>
                        <div className={"otherLoginMethod"} >
                            <GoogleOauth />
                        </div>
                    </form>
                </Container>
            </React.Fragment>
        )
    }
}

export default Signinblock