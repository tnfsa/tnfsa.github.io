import React from 'react'

import GoogleOauth from "./googleOauth";

class Signinblock extends React.Component{
    render(){
        const Send = ()=>{
            const email = document.getElementById('userInputEmail')
            const passwd = document.getElementById('userInputPasswd')
            window.alert(email.value+" "+passwd.value)
        }
        return(
            <React.Fragment>
                <lebal style={{width:'15%',float:'left'}}>&nbsp;</lebal>
                <div>
                <form className={"signInBlock"} style={{width: '70%',display:'inline-block',float:'left'}}>
                    <h3>Sign In</h3>
                    <div className="form-group">
                        <label>Email address</label>
                        <input id="userInputEmail" type="email" className="form-control" placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input id="userInputPasswd" type="password" className="form-control" placeholder="Enter password" />
                    </div>

                    {/*<div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>*/}

                    <button type="submit" className="btn btn-primary btn-block" onClick={Send}>Submit</button>
                </form>
                <div className={"otherLoginMethod"} >
                    <lebal style={{width:'37%',float:'left'}}>&nbsp;</lebal>
                    <GoogleOauth />
                    <br />
                    <label style={{width:'60%',float:'right'}}>僅限本校google帳號</label>
                </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Signinblock