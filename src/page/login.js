import React from 'react'

import Navibar from "../components/navigationbar";
import Signinblock from "../components/signinblock";
import Notification from "../components/Notification";

class Login extends React.Component{
	componentDidMount() {
		window.scrollTo({top: 0,behavior: 'smooth'})
	}

	render() {
		return (
			<React.Fragment>
				<Notification />
				<Navibar/>
				<Signinblock />
			</React.Fragment>
		);
	}
}

export default Login