import React, {useEffect, useRef, useState} from 'react'

import {Button, Card, Spinner} from 'react-bootstrap'
import {Link, useHistory} from "react-router-dom";

function ListFood(props) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const history = useHistory();
    const isInitialMount = useRef(true);

    async function getData() {
        setLoading(true)
        const url = process.env.REACT_APP_API_ENDPOINT + "/stores/" + props.storeId + '/products'
        fetch(url, {
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
            history.push('/login')
        }).then(myJson => {
            console.log(myJson)
            for (let i = 0; i < myJson.length; ++i) {
                myJson[i]['storeId'] = props.storeId
            }
            setData(myJson)
            setLoading(false)
        })
    }

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
            getData()
        }
    })
    return (
        <div className="ListStore">
            <center><Spinner animation={'border'} hidden={!loading}/></center>
            {
                data && (data.length > 0 ? data.map((item) =>
                    <Card key={item.id}>
                        <Card.Img variant="top" src={item.picUrl}/>
                        <Card.Body style={{display: "flex"}}>
                            <div>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>{item.description}</Card.Text>
                            </div>
                            <div style={{marginLeft: "auto"}}>
                                <Button variant="primary" as={Link}
                                        to={{pathname: `/purchase/${item.storeId}/${item.id}`}}>立即前往</Button>
                            </div>
                        </Card.Body>
                    </Card>
                ) : <React.Fragment><br/><h2 style={{textAlign: 'center'}}>查無資料</h2></React.Fragment>)
            }
        </div>
    )
}

export default ListFood