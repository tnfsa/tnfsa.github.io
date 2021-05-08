import React from 'react'

import Navibar from "../components/navigationbar";
import Carousels from '../components/carousel'

import {
	Container,
} from 'react-bootstrap'
import Notification from "../components/Notification";

class Homepage extends React.Component{
	componentDidMount() {
		window.scrollTo({top: 0,behavior: 'smooth'})
	}

	render(){
		return(
			<React.Fragment>
				<Notification />
				<Container>
					{/*<Picture />*/}
					<Navibar/>
					<Carousels/>
				</Container>
			</React.Fragment>
		)
	}
}

export default Homepage
