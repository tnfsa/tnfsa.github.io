import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {HashRouter, Route, Switch} from 'react-router-dom'

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
import NewMenu from './page/sells/newmenu'
import NewOption from './page/sells/newoption'
import CustomerService from "./page/sells/service";
import SellsTest from "./page/sells/test";
import ViewBooked from './page/sells/viewbooked'
import ViewDetailedBooking from './page/sells/viewdetailedbooking'
import Query from "./page/customer/query";
import DeveloperSettings from "./page/developerSettings";


function App() {
  return (
      <HashRouter>
          <OfflineDetect />
          <Navibar />
          <Notification />
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/booked/detailed/:itemId" component={ViewDetailedBooking}/>
            <Route path="/booked" component={ViewBooked}/>
            <Route path="/query" component={Query}/>
            <Route path="/restaurant" component={Restaurant}/>
            <Route path="/settings" component={Settings} />
            <Route path="/purchase/:store/:product" component={Purchase} />
            <Route path="/order/:storeId" component={Order} />
            <Route path="/history" component={Histories} />
            <Route path="/service" component={CustomerService} />
            <Route path="/sells/test" component={SellsTest} />
            <Route path='/config/new/option' component={NewOption}/>
            <Route path="/config/store" component={StoreSetting} />
            <Route path="/config/menu/new" component={NewMenu}/>
            <Route path="/config/menu" component={MenuSetting} />
            <Route path="/config/advanced/:id" component={Advanced} />
            <Route path="/privacy" component={Privacy}/>
            <Route path="/COC" component={CodeOfConduct} />
            <Route path="/signup" component={Signup} />
            <Route path="/feedback" component={Feedback}/>
            <Route path="/dev" component={DeveloperSettings}/>
            <Route path="/" component={Homepage}/>
        </Switch>
        <Footer />
      </HashRouter>

  )
}

export default App;
