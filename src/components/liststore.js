import React, {useEffect, useState} from 'react'

import {Button, Card, Spinner} from 'react-bootstrap'
import {Link} from "react-router-dom";

function ListStore(){
    const [data,setData] = useState([])
    const [loading, setLoading] = useState(true)
    const getData = ()=>{
        const url = process.env.REACT_APP_API_ENDPOINT + '/stores'
        console.log(url)
        fetch(url,{
            method: 'GET'
        }).then(response => {
            setLoading(false)
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
        }).then(myJson =>{
            console.log(myJson)
            setData(myJson)
        })
    }
    useEffect(()=>{
        getData()
    },[])
    return(
        <div className="ListStore">
            {
                data && (data.length > 0 ? data.map((item)=>
                    <Card key={item.id}>
                        <Card.Img variant="top" src={item.picUrl} />
                        <Card.Body style={{display:"flex"}}>
                            <div>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>{item.description}</Card.Text>
                            </div>
                            <div style={{marginLeft:"auto"}}>
                                <Button variant="primary" as={Link} to={{pathname:`/order/${item.id}`}}>立即查看</Button>
                            </div>
                        </Card.Body>
                    </Card>
                ) : <React.Fragment><br/><h2 style={{textAlign: 'center'}}>目前無相關資料</h2></React.Fragment>)
            }
            <center>
                <Spinner animation={"border"} hidden={!loading}/>
            </center>
        </div>
    )
}

export default ListStore