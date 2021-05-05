import React from 'react'

import Navibar from "../components/navigationbar";
import Carousels from '../components/carousel'

class Homepage extends React.Component{
	render(){
		return(
			<React.Fragment>
				<Navibar/>
				<Carousels />
			</React.Fragment>
		)
	}
}

export default Homepage
