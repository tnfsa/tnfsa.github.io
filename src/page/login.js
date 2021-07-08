import React,{useEffect,useState} from 'react'
//import Signinblock from "../components/signinblock";
import {Col, Container, Row, Spinner} from "react-bootstrap";
import GoogleOauth from "../components/googleOauth";
import Cookies from "universal-cookie";
import {Link} from 'react-router-dom'

export default function Login(){
    const cookies = new Cookies()
    const [loading,setLoading] = useState(false)
    const [email,setEmail] = useState('')
    const [passwd,setPasswd] = useState('')

    const Send = async ()=>{
        let emailRule = /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/
        //validate ok or not
        if (email.search(emailRule) === -1) {
            return
        }
        setLoading(true)
        const response = await postFile()
        console.log(response)
        if(response['status'] !== 'error'){
            await fetchInfo(response)
        }
        setLoading(false)
    }

    const postFile = async ()=>{
        let toReturn = {}
        try{
            let postData = {
                'email': email,
                'password': passwd,
            }

            let url = process.env.REACT_APP_API_ENDPOINT + '/login'
            const data = await fetch(url,{
                method: 'POST',
                body: JSON.stringify(postData),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            const response = await data.json()
            toReturn = response
            if(response['status'] !== 'error'){
                const cookies = new Cookies()
                cookies.set('session', response['access_token'], {path: '/'})
                cookies.set('alert', '登入成功', {path: '/'})
            }else{
                window.alert('帳號或密碼錯誤')
            }

        }catch(err){
            window.alert(
                `伺服器存取錯誤：${err}`)
        }
        return toReturn
    }

    async function fetchInfo(loginResponse){
        const url = process.env.REACT_APP_API_ENDPOINT + '/me'
        try{
            const data = await fetch(url,{
                method: 'GET',
                headers: {
                    "Accept": "application/json",
                    "Authorization": `Bearer ${loginResponse['access_token']}`
                }
            })
            const response = await data.json()

            cookies.set('userName', response['name'], {path: '/'})
            cookies.set('id', response['id'], {path: '/'})
            cookies.set('isSells', true, {path: '/'})
            if (response['stores'][0] !== undefined) {
                cookies.set('storeId', response['stores'][0]['id'], {path: '/'})
            }
            document.location.href = '/'
        }catch(err){
            window.alert(
`意外的錯誤：${err}`)
        }
    }

    useEffect(()=>{
       window.scrollTo({top: 0, behavior: 'smooth'})
    },[])

    return(
        <React.Fragment>
            
                    <h3 style={{textAlign: 'center'}} className={"p-2"}>登入</h3>
                    <center hidden={!loading}>
                        <Spinner animation={"border"} />
                    </center>
                    
	    <br />
	    {/*<div style={{"width": "65%","float":"left"}}>*/}
	    <Row>
	    <Col>
	    <Container>
                <form className={"signInBlock"}>
	    	
	    <h2><center>商家登入</center></h2>
		
                    <div className="form-group">
                        <label>電子郵件</label>
                        <input type="email"
                               className="form-control"
                               placeholder="Enter email"
                               value={email}
                               onChange={e =>{setEmail(e.target.value)}}
                               required />
                    </div>

                    <div className="form-group">
                        <label>密碼</label>
                        <input type="password"
                               className="form-control"
                               placeholder="Enter password"
                               value={passwd}
                               onChange={e => {setPasswd(e.target.value)}}
                               required />
                    </div>
                    <Row>
                        <Col/>
                        <Col/>
                        <Col><Link className="btn btn-primary btn-block" onClick={Send}>Submit</Link></Col>
                    </Row>
                </form>
	    </Container>
	    </Col>
	    {/*<div className="vl" style={{"border-left": "6px solid green", "height": "100px","display":"flex","align-items":"center","vertical-align":"middle"}}/>*/}
	    {/*<div style={{"width":"25%","float":"right"}}>*/}	
	    <Col>
	    <h2><center>學生登入</center></h2>
                    <div className={"otherLoginMethod"}>
                        <center><GoogleOauth/></center>
                    </div>
	    </Col>
	    </Row>
        </React.Fragment>
    )
}
