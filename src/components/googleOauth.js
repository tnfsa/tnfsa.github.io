import React from 'react'

import GoogleLogin from 'react-google-login'
import Cookies from 'universal-cookie'
import config from '../config.json'

class GoogleOauth extends React.Component {
    render() {
        const googleCloudPlatformIdActual = config['googleCloudPlatformId'] + ".apps.googleusercontent.com"
        const responseGoogle = (google_response) => {
            console.log(JSON.stringify(google_response))
            // send request to backend
            let data = {
                'token': google_response['accessToken'],
            }

            const url = config['baseURL'] + 'google'
            fetch(url, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                })
            }).then(response => {
                if (response.ok) {
                    return response.json()
                }
                return response.text().then(res => {
                    throw new Error(res)
                })
            }).catch((error) => {
                console.log(error.message)
                let response = JSON.parse(error.message)
                window.alert(
                    `${response.message}\n與伺服器連線錯誤，請再試一次\n如果問題無法解決，請聯絡管理員`
                )
            }).then((response) => {
                // add cookies
                if(google_response['profileObj']['givenName'] === undefined){
                    return
                }
                const cookies = new Cookies()
                cookies.set('session', response['access_token'], {path: '/'})
                cookies.set('isGoogle', 'true', {path: '/'})
                cookies.set('alert', '登入成功', {path: '/'})
                cookies.set('userName', google_response?.profileObj?.givenName, {path: '/'})
                
                window.location.replace('/')
            }).catch(err=>{
                console.log(`Failed: ${err}`)
            })
        };
        return (
            <>
                <GoogleLogin
                    clientId={googleCloudPlatformIdActual}
                    buttonText="使用 Google 登入"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    hostedDomain={config['gmailSuffix']}
                    cookiePolicy={"single_host_origin"}
                    //uxMode={"redirect"}
                    //redirectUri={config['project']}
                />
            </>
        )
    }
}

export default GoogleOauth
