import React from 'react'

import Navibar from "../components/navigationbar";
import Signinblock from "../components/signinblock";

class Login extends React.Component{
	render() {
		return (
			<React.Fragment>
				<Navibar/>
				<Signinblock />
			</React.Fragment>
		);
	}
}

export default Login