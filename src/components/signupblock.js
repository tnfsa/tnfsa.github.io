import React from 'react'
import {Col, Container, Row} from "react-bootstrap";
import Cookies from 'universal-cookie'
import config from '../config.json'

class Signupblock extends React.Component{

    componentDidMount() {

    }

    render(){
        const Send = ()=> {
            const passwd = document.getElementById('userInputPasswd')
            const passwdVerify = document.getElementById('userInputPasswdVerification')
            const email = document.getElementById('userInputEmail')
            const token = document.getElementById('activateToken')
            const username = document.getElementById('username')

            //verify inputs
            if (!(passwd.value && passwdVerify.value && email.value && token.value && username.value)) {
                return
            }

            //verify and password is not the same
            if (passwd.value !== passwdVerify.value) {
                window.alert('密碼與密碼驗證不符')
                //empty the input box
                passwd.value = ''
                passwdVerify.value = ''
                return
            }

            //verify email
            let emailRule = /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/
            //validate ok or not
            if (email.value.search(emailRule) === -1) {
                return
            }

            //send things to server
            let data = {
                'email': email.value,
                'name': username.value,
                'password': passwd.value,
                'token': token.value
            }

            let url = config.baseURL + '/register'
            //send request
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
                    window.alert('與伺服器聯絡失敗')
            }).then(response => {
                // file sent success

                if(response.status <300 && response.status >= 200){
                    //good
                    window.alert(JSON.stringify(response))
                    // add cookies
                    ////////////////////////////////////////////////////////////////////////////////////////////////////
                    //what if failed
                    if(true){
                        return
                    }
                    ////////////////////////////////////////////////////////////////////////////////////////////////////
                    const cookies = new Cookies()
                    cookies.set('alert','註冊成功',{path: '/'})
                    //redirect to main page
                    document.location.replace('/')
                }else{
                    //bad
                    window.alert(response.status+': \n註冊失敗，請再試一次\n如果問題無法解決，請聯絡管理員')
                    document.location.replace('#/login')
                }
            })

        }

        return(
            <React.Fragment>
            <Container>
                <form className={"signInBlock"}>
                    <h3 style={{textAlign: 'center'}}>帳號註冊</h3>
                    <div className="form-group">
                        <label>啟動碼</label>
                        <input id="activateToken" type="text" className="form-control" placeholder="Enter the activate code" required/>
                    </div>
                    <div className="form-group">
                        <label>電子郵件</label>
                        <input id="userInputEmail" type="email" className="form-control" placeholder="Enter email" required/>
                    </div>
                    <div className="form-group">
                        <label>密碼</label>
                        <input id="userInputPasswd" type="password" className="form-control" placeholder="Enter password" required/>
                    </div>
                    <div className="form-group">
                        <label>密碼確認</label>
                        <input id="userInputPasswdVerification" type="password" className="form-control" placeholder="Enter password" required/>
                    </div>
                    <div className="form-group">
                        <label>使用者名稱</label>
                        <input id="username" type="text" className="form-control" placeholder="Enter the username" required/>
                    </div>

                    <Row>
                        <Col></Col>
                        <Col></Col>
                        <Col><button type="submit" className="btn btn-primary btn-block" onClick={Send}>Submit</button></Col>
                    </Row>
                </form>
            </Container>
            </React.Fragment>
        )
    }
}

export default Signupblock