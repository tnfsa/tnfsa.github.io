import React from 'react'

import GoogleLogin from 'react-google-login'
import Cookies from 'universal-cookie'
import config from '../config.json'

class GoogleOauth extends React.Component{
    render(){
        const googleCloudPlatformIdActual = config['googleCloudPlatformId']+".apps.googleusercontent.com"
        const responseGoogle = (response) => {
            console.log(response)
            // send request to backend
            let data = {
                'token': response['tokenId'],
            }

            const url = config['baseURL'] + 'google'
            fetch(url,{
                method: 'POST',
                body: JSON.stringify(data),
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'user-agent': 'tnfsa-lunch-front-react',
                })
            }).then(response =>{
                if(response.status <300 && response.status >= 200) {
                    //good
                    const data = JSON.stringify(response)
                    window.alert(data)
                    // add cookies
                    const cookies = new Cookies()
                    cookies.set('session',data['access_token'],{path:'/'})
                    cookies.set('isGoogle','true',{path:'/'})
                    cookies.set('userName',response['gt']['rU'],{path:'/'})
                    cookies.set('alert','登入成功',{path:'/'})
                    window.location.replace('/')
                }else{
                    window.alert(response.status+': \n與伺服器連線錯誤，請再試一次\n如果問題無法解決，請聯絡管理員')
                    window.location.replace('#/login')
                }
            })
        };
        return(
            <>
                <GoogleLogin
                    clientId={googleCloudPlatformIdActual}
                    buttonText="使用 Google 登入"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    hostedDomain={config['gmailSuffix']}
                    cookiePolicy={"single_host_origin"}
                    uxMode={"redirect"}
                    redirectUri={config['project']}
                />
            </>
        )
    }
}

export default GoogleOauth
