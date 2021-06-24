import React, {useEffect, useRef} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {HashRouter, Route, Switch, useLocation} from 'react-router-dom'

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
import * as FingerprintJS from "@fingerprintjs/fingerprintjs";
import {API} from "./helpers/API";
import Profile from "./page/customer/profile";

const api = new API()

function App() {
    const initState = useRef(true);
    const location = useLocation();
    useEffect(() => {
        if (initState.current) {
            const fpPromise = FingerprintJS.load()

            ;(async () => {
                // Get the visitor identifier when you need it.
                const fp = await fpPromise
                const result = await fp.get()

                // This is the visitor identifier:
                const fingerprint = result.visitorId
                api.call('/log', {
                    method: "POST",
                    body: {
                        fingerprint,
                        location: location.pathname
                    }
                })
            })()

            initState.current = false;
        }
    })

    return (
        <HashRouter>
            <OfflineDetect/>
            <Navibar/>
            <Notification/>
            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/booked/detailed/:itemId" component={ViewDetailedBooking}/>
                <Route path="/booked" component={ViewBooked}/>
                <Route path="/query" component={Query}/>
                <Route path='/profile' component={Profile}/>
                <Route path="/restaurant" component={Restaurant}/>
                <Route path="/settings" component={Settings}/>
                <Route path="/purchase/:store/:product" component={Purchase}/>
                <Route path="/order/:storeId" component={Order}/>
                <Route path="/history" component={Histories}/>
                <Route path="/service" component={CustomerService}/>
                <Route path="/sells/test" component={SellsTest}/>
                <Route path='/config/new/option' component={NewOption}/>
                <Route path="/config/store" component={StoreSetting}/>
                <Route path="/config/menu/new" component={NewMenu}/>
                <Route path="/config/menu" component={MenuSetting}/>
                <Route path="/config/advanced/:product" component={Advanced}/>
                <Route path="/privacy" component={Privacy}/>
                <Route path="/COC" component={CodeOfConduct}/>
                <Route path="/signup" component={Signup}/>
                <Route path="/feedback" component={Feedback}/>
                <Route path="/dev" component={DeveloperSettings}/>
                <Route path="/" component={Homepage}/>
            </Switch>
            <Footer/>
        </HashRouter>

  )
}

export default App;
