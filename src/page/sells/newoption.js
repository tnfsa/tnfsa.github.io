import React, {useEffect, useState} from 'react'
import {Button, Card,Container} from "react-bootstrap";

function NewOption(){
    const json = [
        "good",
        "bad"
    ]
    const deleteFile = (node) => {
        window.alert(node)
    }
    const [data,setData] = useState([])
    const getData = ()=>{
        setData(json)
    }
    useEffect(()=>{
        getData()
    },[])

    return(
        <React.Fragment>
            <h1 style={{textAlign: 'center'}}>選項設定</h1>
            <Container>

                <input />

                {
                    data && data.length>0 && data.map((name,index)=>
                        <Card>
                            <Card.Body style={{display:"flex"}}>
                                <div>
                                    <Card.Title>{name}</Card.Title>
                                </div>
                                <div style={{marginLeft:"auto"}}>
                                    <Button variant="primary" onClick={() => deleteFile(index)}>刪除</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    )
                }
            </Container>


        </React.Fragment>
    )
}

export default NewOption