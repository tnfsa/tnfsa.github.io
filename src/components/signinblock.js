import React from 'react'

import GoogleOauth from "./googleOauth";
import {
    Container,
    Row,
    Col,
} from 'react-bootstrap'
import config from "../config.json";
import Cookies from "universal-cookie";

class Signinblock extends React.Component{
    render(){
        const Send = ()=>{
            const email = document.getElementById('userInputEmail')
            const passwd = document.getElementById('userInputPasswd')

            let emailRule = /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/
            //validate ok or not
            if (email.value.search(emailRule) === -1) {
                return
            }
            //send request
            let data = {
                'email': email.value,
                'password': passwd.value,
            }
            let url = config.baseURL + '/login'
            fetch(url,{
                method: 'POST',
                body: JSON.stringify(data),
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'user-agent': 'tnfsa-lunch-front-react',
                })
            }).catch(error =>{
                console.log('Error:',error)
                window.alert('1.伺服器聯絡失敗')
            }).then(response => {
                // file sent success
                if(response.status <300 && response.status >= 200){
                    //good
                    const data = JSON.stringify(response)
                    window.alert(data)
                ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                    // what if failed
                    if(true){
                        return
                    }
                /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                    // add cookies
                    const cookies = new Cookies()
                    cookies.set('session',data['access_token'],{path: '/'})
                    //get user information
                    fetch(url,{
                        method: 'GET',
                        headers: new Headers({
                            'Authorization': 'Bearer ' + data['access_token'],
                            'Content-Type': 'application/json',
                            'Accept': 'application/json',
                            'user-agent': 'tnfsa-lunch-front-react',
                        })
                    }).catch(error =>{
                        console.log('Error:',error)
                        window.alert('2.伺服器聯絡失敗')
                    }).then(response => {
                        // file sent success
                        if(response.status <300 && response.status >= 200){
                            //good
                            const getData = JSON.stringify(response)
                            window.alert(data)
                            // add cookies
                            cookies.set('userName',getData['name'],{path: '/'})
                            cookies.set('alert','登入成功',{path: '/'})
                        }else{
                            //bad
                            window.alert(response.status+': \n名稱取得錯誤，請再試一次\n如果問題無法解決，請聯絡管理員')
                        }
                    })

                    //redirect to main page
                    document.location.replace('/')
                }else{
                    //bad
                    window.alert(response.status+': \n登入失敗，請再試一次\n如果問題無法解決，請聯絡管理員')
                    document.location.replace('#/login')
                }
            })

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