import React, {useEffect, useState} from 'react'
import {Button, Card} from "react-bootstrap";
import config from "../../config.json";
import Cookies from 'universal-cookie'

export default function (){
    const [data,setData] = useState([])
    const cookies = new Cookies()
    const allcookies = cookies.getAll()
    const getData = ()=>{
        const url = config['baseURL'] + 'stores/'+ allcookies['storeId'] + '/products'
        fetch(url,{
            method: 'GET',
            headers:{
                "Accept": "application/json"
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
            window.alert(
                `${response.message}\n與伺服器連線錯誤，請再試一次\n如果問題無法解決，請聯絡管理員`
            )
            window.location.replace('#/login')
        }).then(myJson =>{
            console.log(myJson)
            setData(myJson)
        })
    }
    useEffect(()=>{
        getData()
    },[])
    return(
        <div className="storeAdded">
            {
                data && data.length>0 && data.map((item)=>
                    <Card>
                        <Card.Img variant="top" src={item.picUrl} />
                        <Card.Body style={{display:"flex"}}>
                            <div>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>{item.description}</Card.Text>
                            </div>
                            <div style={{marginLeft:"auto"}}>
                                <Button variant="primary" href={config["project"]+'#/order/'+item.id}>修正</Button>
                            </div>
                        </Card.Body>
                    </Card>
                )
            }
        </div>
    )
}