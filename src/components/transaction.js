import React, {useEffect, useState} from 'react'
import Cookies from 'universal-cookie'
import {Card, Container} from 'react-bootstrap'


export default function Transaction(){
    const [transaction,setTransaction] = useState([])

    async function Update(){
        const cookies = new Cookies()
        const allcookies = cookies.getAll()
        const fetchURL = process.env.REACT_APP_API_ENDPOINT + '/transactions'
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
                                    <Card.Title>商品名稱：{item.product_id}</Card.Title>
                                    <Card.Title>金額：{item.total}</Card.Title>
                                    <Card.Text>留言：{item.comment}</Card.Text>
                                    <Card.Text>購買日期：{item.updated_at}</Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                    )
                }
            </div>
        </Container>
    )
}