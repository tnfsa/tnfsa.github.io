import React from 'react'

import config from '../config.json'
import store from "../page/sells/store";
import {
    Card,
    Button,
    Row
} from 'react-bootstrap'


class Liststore extends React.Component{
    render(){
        let listFile = []
        const url = config['baseURL'] + 'stores'
        fetch(url,{
            method: 'GET'
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
            window.alert(
                `${response.message}\n與伺服器連線錯誤，請再試一次\n如果問題無法解決，請聯絡管理員`
            )
            window.location.replace('#/login')
            return
        }).then(storeData =>{
            listFile = storeData
        })

        const ListItem = listFile.map((item)=>
            <Card id={item.toString()}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.text}</Card.Text>
                    <Button variant="primary" target="_blank" href={item.link}>前往察看</Button>
                </Card.Body>
            </Card>
        )

        return(
            {ListItem}
        )
    }
}

export default Liststore