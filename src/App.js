//import logo from './logo.svg';
import './App.css';

import {
HashRouter,
Route,
Switch,
Redirect
}from 'react-router-dom'

import Homepage from './components/mainpage'

function App() {
  return (
  	<HashRouter>
	<Switch>
	  <Route path="/" component={Homepage} />
	</Switch>
	</HashRouter>
  )
}

export default App;
