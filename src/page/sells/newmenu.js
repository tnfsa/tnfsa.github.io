import React from 'react'
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import GoogleOauth from "../../components/googleOauth";
import config from "../../config.json";
//import Cookies from "universal-cookie";

class ToolBar extends React.Component{
    render(){
        const NewOption = ()=>{
            const popupUrl = config['project'] + '#/config/new/option'
            const popupWindow = window.open(popupUrl,'popUpWindow','location=no,height=500,width=400,top=100,left=300')


        }
        return(
            <div className="optionBar">
                <ul>
                    <li><Link onClick={NewOption}><i className="fa fa-plus" aria-hidden="true">新增選項</i></Link></li>
                </ul>
            </div>
        )
    }
}

class MenuConfigurator extends React.Component{
    render(){
        const Send = () =>{
            window.alert(`sending message`)
        }
        return(
            <form className={"signInBlock"}>
                <div className="form-group">
                    <label>食物名</label>
                    <input id="foodTitle" type="text" className="form-control" placeholder="標題" required />
                </div>

                <div className="form-group">
                    <label>副標題</label>
                    <input id="foodSub" type="text" className="form-control" placeholder="副標(選填)" />
                </div>
                <div id="placeToAdd" />
                <Row>
                    <Col></Col>
                    <Col></Col>
                    <Col><Link type="submit" className="btn btn-primary btn-block" onClick={Send}>Submit</Link></Col>
                </Row>
                <hr />
                <label>其他登入方式？</label>
                <div className={"otherLoginMethod"} >
                    <GoogleOauth />
                </div>
            </form>
        )
    }
}

class NewNenu extends React.Component{
    componentDidMount() {
        window.scrollTo({top: 0,behavior: 'smooth'})
    }

    render() {
        return (
            <React.Fragment>
                <h1 style={{textAlign: 'center'}}>新增菜單</h1>
                <Container>
                    <ToolBar />
                    <br />
                    <MenuConfigurator />
                </Container>
            </React.Fragment>
        )
    }
}

export default NewNenu