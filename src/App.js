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
import Purchase from './page/customer/purchase'
import Order from './page/customer/order'
import Settings from './page/settings'
import Restaurant from './page/customer/restaurant'
import Histories from './page/customer/history'
import StoreSetting from './page/sells/store'
import MenuSetting from './page/sells/menu'
import Advanced from './page/sells/advanced'

function App() {
  return (
  	<HashRouter>
		<Switch>
			<Route path="/login" component={Login} />
			<Route path={"/restaurant"} component={Restaurant} />
			<Route path={"/settings"} component={Settings} />
			<Route path={"/purchase"} component={Purchase} />
			<Route path={"/order"} component={Order} />
			<Route path={"/history"} component={Histories} />
			<Route path="/config/store" component={StoreSetting} />
			<Route path="/config/menu" component={MenuSetting} />
			<Route path="/config/advanced/:id" component={Advanced} />
			<Route path="/" component={Homepage} />
		</Switch>
	</HashRouter>
  )
}

export default App;
