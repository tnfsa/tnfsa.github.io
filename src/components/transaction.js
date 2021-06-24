import React, {useEffect, useState} from 'react'
import Cookies from 'universal-cookie'
import {Card, Col, Container, Row} from 'react-bootstrap'
import {Rating} from "@material-ui/lab";
import {Grid, IconButton, LinearProgress} from "@material-ui/core";
import {API} from "../helpers/API";
import {Delete} from "@material-ui/icons";


export default function Transaction() {
    const [transaction, setTransaction] = useState([]);
    const [loading, setLoading] = useState(false);
    const api = new API();

    async function Update() {
        const cookies = new Cookies()
        const allcookies = cookies.getAll()
        const fetchURL = process.env.REACT_APP_API_ENDPOINT + '/transactions'
        setLoading(true);
        fetch(fetchURL, {
            method: 'GET',
            headers: {
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
            setLoading(false)
        })
    }

    function setNewRate(val, id) {
        setLoading(true)
        api.call('/transactions/:transaction/rate', {
            method: 'POST',
            params: {
                transaction: id
            },
            body: {
                rate: val
            }
        }, (r) => {
            Update()
        })
    }

    useEffect(() => {
        Update()
    }, [])

    return (
        <Container>
            <LinearProgress hidden={!loading}/>
            <div className={"History"}>
                {
                    transaction && transaction.length > 0 && transaction.map((item) =>
                        <Row key={item.id}>
                            <Col sm={12} md={6}>
                                <Card>
                                    <Card.Img variant="top" src={item.picUrl}/>
                                    <Card.Body style={{display: "flex", flexDirection: "column",}}>
                                        <Card.Title>商品名稱：{item.product.name}</Card.Title>
                                        <Card.Title>金額：{item.total}</Card.Title>
                                        <Card.Text>留言：{item.comment === null ? '': item.comment.length > 50 ? item.comment.slice(0,50)+' ...': item.comment}</Card.Text>
                                        <Card.Text>購買日期：{new Date(item.updated_at).toLocaleTimeString('zh-TW')}</Card.Text>
                                        <Card.Text>訂單編號：<b>{item.id.substring(0, 8)}</b>{item.id.substr(8)}</Card.Text>
                                        <Grid container spacing={1} justify="center" direction="row"
                                              alignItems="center">
                                            <Grid item>
                                                <Rating name="rating" value={parseFloat(item.rating)}
                                                        onChange={e => setNewRate(e.target.value, item.id)}/>
                                            </Grid>
                                            <Grid item>
                                                <IconButton
                                                    onClick={() => setNewRate(0, item.id)}
                                                ><Delete size="small"/></IconButton>
                                            </Grid>
                                        </Grid>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col sm={12} md={6} style={{justifyContent: 'center', display: "flex"}}>
                                <div>
                                    <span style={{
                                        alignItems: "center",
                                        fontSize: "5rem",
                                        fontStyle: "bold",
                                        display: "flex",
                                        textAlign: "center"
                                    }}>{item.id.substring(0, 8)}</span>
                                </div>
                            </Col>
                        </Row>
                    )
                }
            </div>
        </Container>
    )
}