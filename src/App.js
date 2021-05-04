//import logo from './logo.svg';
import './App.css';

import {
HashRouter,
Route,
Switch,
Redirect
}from 'react-router-dom'

import Homepage from './components/main'
import Login from './components/login'

function App() {
  return (
  	<HashRouter>
	<Switch>
	  <Route path="/" component={Homepage} />
	  <Route path="/login" component={Login} />
	  </Switch>
	</HashRouter>
  )
}

export default App;
