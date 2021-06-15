import React,{useState} from 'react'
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import config from "../../config.json";
import Cookies from "universal-cookie";

class ToolBar extends React.Component{
    render(){
        const NewOption = ()=>{
            const popupUrl = config['project'] + '#/config/new/option'
            const popupWindow = window.open(popupUrl,/*'popUpWindow',*/'','location=no,height=500,width=400,top=100,left=300')
            popupWindow.body = "功能未開放"
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

function MenuConfigurator(){
    //const [storeId,setStoreId] = useState('')
    async function Send(){
        const name = document.getElementById('foodTitle').value
        const subtitle = document.getElementById('foodSub').value
        const price = document.getElementById('foodPrice').value
        const cookies = new Cookies()
        let allcookies = cookies.getAll()
        const storeId = allcookies['storeId']
        const postURL = config['baseURL'] + 'stores/' + storeId + '/products'

        var data = {
            'name': name,
            'price': price,
            'description': subtitle,
            'store_id': storeId,
            "image" : "https://google.com/favicon.ico"
        }
        window.alert(postURL)
        await fetch(postURL,{
            method: 'POST',
            body: JSON.stringify(data),
            headers:{
                "Accept": "application/json",
                "Authorization": `Bearer ${allcookies['session']}`
            }
        }).then(response => {
            if (response.ok) {
                return response.json()
            }
            return response.text().then(res => {
                throw new Error(res)
            })
        }).catch((error) => {
            console.log(error.message)
            let response = JSON.parse(error.message)
            window.alert(`${response.message}\n與伺服器連線錯誤，請再試一次\n如果問題無法解決，請聯絡管理員`)
        }).then(response =>{
            console.log(response)
            document.location.replace(`${config['project']}/#/config/menu`)
        })
    }


    return(
        <form
            className={"foodBlock"}
            onSubmit={e=>{
                e.preventDefault()
                Send()
            }}
        >
            <div className="form-group">
                <label>食物名</label>
                <input id="foodTitle" type="text" className="form-control" placeholder="標題" required />
            </div>
            <div className="form-group">
                <label>價錢</label>
                <input id="foodPrice" type="number" className="form-control" placeholder="價錢" required />
            </div>
            <div className="form-group">
                <label>副標題</label>
                <input id="foodSub" type="text" className="form-control" placeholder="副標(選填)" />
            </div>
            <div id="placeToAdd" />
            <Row>
                <Col/>
                <Col/>
                <Col><button className="btn btn-primary btn-block">送出</button></Col>
            </Row>
        </form>
    )
}

class NewMenu extends React.Component{
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

export default NewMenu