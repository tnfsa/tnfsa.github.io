import React from 'react'
import {Spinner} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faHeadphones } from '@fortawesome/free-solid-svg-icons'

class CustomerService extends React.Component {
    componentDidMount() {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }

    render() {
        return (
            <React.Fragment>
                <h1 style={{textAlign: 'center'}}>客服中心 <FontAwesomeIcon icon={faHeadphones}/></h1>
                <Spinner animation={"border"}/>
            </React.Fragment>
        )
    }
}

export default CustomerService