import React from 'react'
import Carousels from '../components/carousel'
import PWAUpdater from '../components/pwa updater'


import {
    Container,
    //Button
} from 'react-bootstrap'
//import {API} from "../helpers/API";

class Homepage extends React.Component {
    componentDidMount() {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }

    /*Test(){
        console.log(1)
        let api = new API()
        api.call('/stores',{},(r)=>{
            console.log(r)
        })
    }*/

    render() {
        return (
            <React.Fragment>
                <Container>
                    <PWAUpdater/>
                    {/*<Picture />*/}
                    <Carousels/>
                    {/*<Button onClick={this.Test}>Test</Button>*/}
                </Container>
            </React.Fragment>
        )
    }
}

export default Homepage
