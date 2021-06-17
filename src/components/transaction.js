import React,{useState,useEffect} from 'react'
import config from '../config.json'
import Cookies from 'universal-cookie'
import {Button, Card, Container} from 'react-bootstrap'
import {Link} from "react-router-dom";


export default function Transaction(){
    const [transaction,setTransaction] = useState([])

    async function Update(){
        const cookies = new Cookies()
        const allcookies = cookies.getAll()
        const fetchURL = config['baseURL'] + 'transactions'
        fetch(fetchURL,{
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${allcookies['session']}`
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
            window.location.replace('/')
        }).then(r => {
            console.log(r)
            setTransaction(r)
        })
    }

    useEffect(()=>{
        Update()
    },[])

    return(
        <Container>
            <div className={"History"}>
                {
                    transaction && transaction.length>0 && transaction.map((item)=>
                        <Card>
                            <Card.Img variant="top" src={item.picUrl} />
                            <Card.Body style={{display:"flex"}}>
                                <div>
                                    <Card.Title>{item.product_id}</Card.Title>
                                    <Card.Text>{item.comment}</Card.Text>
                                </div>
                                <div style={{marginLeft:"auto"}}>
                                    <Button variant="primary" as={Link} to={{pathname:`/order/${item.id}`}}>查看</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    )
                }
            </div>
        </Container>
    )
}