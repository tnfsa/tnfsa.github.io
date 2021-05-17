import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {HashRouter,Switch,Route} from 'react-router-dom'

import OfflineDetect from "./components/offlineDetect";
import Navibar from "./components/navigationbar";
import Notification from "./components/Notification";
import Footer from "./components/footer";

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
import CodeOfConduct from "./page/codeofconduct"
import Privacy from './page/privacy'
import Signup from './page/signup'
import Feedback from './page/feedback';

function App() {
  return (
      <HashRouter>
          <OfflineDetect />
          <Navibar />
          <Notification />
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/restaurant" component={Restaurant} />
            <Route path="/settings" component={Settings} />
            <Route path="/purchase" component={Purchase} />
            <Route path="/order/:id" component={Order} />
            <Route path="/history" component={Histories} />
            <Route path="/config/store" component={StoreSetting} />
            <Route path="/config/menu" component={MenuSetting} />
            <Route path="/config/advanced/:id" component={Advanced} />
            <Route path="/privacy" component={Privacy}/>
            <Route path="/COC" component={CodeOfConduct} />
            <Route path="/signup" component={Signup} />
            <Route path="/feedback" component={Feedback}/>
            <Route path="/" component={Homepage} />
        </Switch>
        <Footer />
      </HashRouter>

  )
}

export default App;
