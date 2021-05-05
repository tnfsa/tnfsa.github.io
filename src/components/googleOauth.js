import React from 'react'

import GoogleLogin from 'react-google-login'
//import Cookies from 'universal-cookie'

class GoogleOauth extends React.Component{
    render(){
        const responseGoogle = (response) => {
            console.log(response.tokenId)
            // send request to backend
            //set cookie

        };
        return(
            <>
                <GoogleLogin
                    clientId="1081268402297-stef8id8lhkhjd7lvh1de82eubmcn3re.apps.googleusercontent.com"
                    buttonText="使用 Google 登入"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={"single_host_origin"}
                    isSignedIn={true}
                />
            </>
        )
    }
}

export default GoogleOauth