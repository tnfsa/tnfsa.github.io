import React, {useEffect, useState} from 'react'
import {Button, Card} from "react-bootstrap";
import config from "../../config.json";

function NewOption(){

    const [data,setData] = useState([])
    const getData = ()=>{
        let json = [
            {"picUrl": "helloworld","name":"good","description":"yammy","id":"no"},
            {"picUrl": "helloworld","name":"good","description":"yammy","id":"no"}
        ]
        setData(json)
    }
    useEffect(()=>{
        getData()
    },[])

    return(
        <React.Fragment>
            <h1 style={{textAlign: 'center'}}>菜單設定</h1>

            <input />

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
                                <Button variant="primary" href={config["project"]+'#/order/'+item.id}>立即前往</Button>
                            </div>
                        </Card.Body>
                    </Card>
                )
            }

        </React.Fragment>
    )
}

export default NewOption