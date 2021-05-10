import React from 'react'

import GoogleLogin from 'react-google-login'
import Cookies from 'universal-cookie'
import config from '../config.json'

class GoogleOauth extends React.Component{
    render(){
        const responseGoogle = (response) => {
            console.log(response)
            // send request to backend
            //set cookie

            // push server data
            let data = {
                'email': response['tokenId'],
            }

            const url = config['baseURL']
            fetch(url,{
                method: 'POST',
                body: JSON.stringify(data),
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'user-agent': 'tnfsa-lunch-front-react',
                })
            }).then(response =>{
                if(response.status <300 && response >= 200) {
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
                    window.alert('伺服器錯誤，請稍後再試')
                    window.location.replace('#/login')
                }
            })
        };
        return(
            <>
                <GoogleLogin
                    clientId="1081268402297-stef8id8lhkhjd7lvh1de82eubmcn3re.apps.googleusercontent.com"
                    buttonText="使用 Google 登入"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={"single_host_origin"}
                />
            </>
        )
    }
}

export default GoogleOauth