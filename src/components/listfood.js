import React,{useState,useEffect} from 'react'

import config from '../config.json'

import {
    Card,
    Button
} from 'react-bootstrap'
import {Link} from "react-router-dom";

function ListFood(props){
    const [data,setData] = useState([])

    async function getData(){
        const url = config['baseURL'] + "stores/" + props.storeId + '/products'
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
        }).then(myJson =>{
            console.log(myJson)
            for(let i = 0;i < myJson.length;++i){
                myJson[i]['storeId'] = props.storeId
            }
            setData(myJson)
        })
    }
    useEffect(()=>{
        getData()
    },[])
    return(
        <div className="ListStore">
            {
                data && (data.length>0 ? data.map((item)=>
                    <Card>
                        <Card.Img variant="top" src={item.picUrl} />
                        <Card.Body style={{display:"flex"}}>
                            <div>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>{item.description}</Card.Text>
                            </div>
                            <div style={{marginLeft:"auto"}}>
                                <Button variant="primary" as={Link} to={{pathname:`/purchase/${item.storeId}/${item.id}`}}>立即前往</Button>
                            </div>
                        </Card.Body>
                    </Card>
                ):<React.Fragment><br /><h2 style={{textAlign: 'center'}}>查無資料</h2></React.Fragment>)
            }
        </div>
    )
}

export default ListFood