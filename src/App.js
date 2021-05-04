//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'

import {
	HashRouter,
	Route,
	Switch
}from 'react-router-dom'

import Homepage from './page/main'
import Login from './page/login'

function App() {
  return (
  	<HashRouter>
		<Switch>
			<Route path="/login" component={Login} />
			<Route path="/" component={Homepage} />
		</Switch>
	</HashRouter>
  )
}

export default App;
