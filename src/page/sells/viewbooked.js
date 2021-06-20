import React, {useEffect, useState} from 'react'
import {Button, Card, Spinner, Container} from "react-bootstrap";
import Cookies from 'universal-cookie'
import config from '../../config.json'
import {Link} from "react-router-dom";

export default function ViewBooked(){
    const [loading,setLoading] = useState(true)
    const [data,setData] = useState()

    const cookies = new Cookies()
    const allcookies = cookies.getAll()

    const getData = async ()=>{
        try{
            const url = config['baseURL'] + 'transactions'
            let result =  await fetch(url,{
                method: 'GET',
                'headers':{
                    'Accept': 'application/json',
                    "Authorization": `Bearer ${allcookies['session']}`
                }
            })
            let json = await result.json()
            //console.log(json)
            let name = {}
            // eslint-disable-next-line
            json.map(item =>{
                if(name[item.product_id] === undefined){
                    name[item.product_id] = 1
                }else{
                    name[item.product_id] ++
                }
            })
            let toReturn = []
            for(let element in name){
                console.log(name[element])
                console.log(element)
                toReturn.push({
                    name: element,
                    count: name[element]
                })
            }
            setData(toReturn)
            setLoading(false)
        }catch{
            // wrong request or expired session
            // redirect to main page
            cookies.set('alert','操作錯誤，請重試',{path: '/'})
            document.location.href = '/'
        }
    }

    useEffect(()=>{
        return getData()
        // eslint-disable-next-line
    },[])

    return(
        <React.Fragment>
            <center><Spinner animation={"border"} hidden={!loading}/></center>
            <center><h1>已訂餐名單</h1></center>
            <Container>
                {
                    data ? data.map((item) =>
                        <Card key={item.id}>
                            <Card.Body style={{display: "flex"}}>
                                <div>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>{item.count}份</Card.Text>
                                </div>
                                <div style={{marginLeft: "auto"}}>
                                    <Button variant="primary" as={Link}
                                            to={{pathname: `/booked/detailed/${item.name}`}}>立即查看</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    ) : <React.Fragment><br/><h2 style={{textAlign: 'center'}}>查無資料</h2></React.Fragment>
                }
            </Container>
            <br />
        </React.Fragment>
    )
}