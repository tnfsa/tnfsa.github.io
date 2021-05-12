import React from 'react'
import Carousels from '../components/carousel'

import {
	Container,
} from 'react-bootstrap'

class Homepage extends React.Component{
	componentDidMount() {
		window.scrollTo({top: 0,behavior: 'smooth'})
	}

	render(){
		return(
			<React.Fragment>
				<Container>
					{/*<Picture />*/}
					<Carousels/>
				</Container>
			</React.Fragment>
		)
	}
}

export default Homepage
