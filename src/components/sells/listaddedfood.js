import React, {useEffect, useState} from 'react'
import {Button, Card} from "react-bootstrap";
import config from "../../config.json";
import Cookies from 'universal-cookie'
import {Link} from "react-router-dom";
import Swal from "sweetalert2";

export default function ListAddedFood(){
    const [data,setData] = useState([])
    const cookies = new Cookies()
    const allcookies = cookies.getAll()
    if(!allcookies['storeId']){
        Swal.fire({
            title: '錯誤!',
            text: '404 (STORE_NOT_FOUND)',
            icon: 'error',
            confirmButtonText: 'Ok'
        })
    }
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
    })
    return(
        <div className="storeAdded">
            {
                data && data.length>0 && data.map((item)=>
                    <Card key={item.id}>
                        <Card.Img variant="top" src={item.picUrl} />
                        <Card.Body style={{display:"flex"}}>
                            <div>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>{item.description}</Card.Text>
                            </div>
                            <div style={{marginLeft:"auto"}}>
                                <Button variant="primary" as={Link} to={{pathname:`/order/${item.id}`}}>修改</Button>
                            </div>
                        </Card.Body>
                    </Card>
                )
            }
        </div>
    )
}