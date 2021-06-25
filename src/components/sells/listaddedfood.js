import React, {useEffect, useRef, useState} from 'react'
import {Button, Card} from "react-bootstrap";
import Cookies from 'universal-cookie'
import {Link} from "react-router-dom";
import Swal from "sweetalert2";
import {API} from "../../helpers/API";

export default function ListAddedFood() {
    const [data, setData] = useState([])
    const [quota, setQuota] = useState(0)
    const isInitialMount = useRef(true);
    const cookies = new Cookies()
    const allcookies = cookies.getAll()
    const api = new API()
    if (!allcookies['storeId']) {
        Swal.fire({
            title: '錯誤!',
            text: '404 (STORE_NOT_FOUND)',
            icon: 'error',
            confirmButtonText: 'Ok'
        })
    }
    const getData = () => {
        const url = process.env.REACT_APP_API_ENDPOINT + '/stores/' + allcookies['storeId'] + '/products'
        fetch(url, {
            method: 'GET',
            headers: {
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
        }).then(myJson => {
            console.log(myJson)
            setData(myJson)
        })
        api.call('/stores/:id/promotion_quota', {
            params: {
                id: allcookies['storeId']
            }
        }, (r) => {
            console.log(r.remain)
            setQuota(r.remain)
        })
    }

    function promote(id) {
        Swal.fire({
            title: '確認',
            text: '確定要將宣傳點數用於這個商品嗎？',
            showCancelButton: true,
            confirmButtonText: '確定'
        }).then((result) => {
            if (result.isConfirmed) {
                api.call('/products/:id/promotion', {
                    method: "POST",
                    params: {
                        id
                    },
                    body: {
                        "type": "WEIGHT"
                    }
                }, (r) => {
                    console.log(r)
                    if (r.status === "error") {
                        Swal.fire({
                            title: "錯誤!",
                            text: "伺服器錯誤(" + r.error.message + ")",
                            icon: "error"
                        })
                    } else {
                        Swal.fire({
                            title: "成功!",
                            text: "權重增加成功",
                            icon: "success"
                        })
                    }
                })
            }
        })
    }

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
            getData()
        }
    })
    return (
        <div className="storeAdded">
            <div style={{textAlign: "right"}}>剩下的宣傳點數： {quota}點</div>
            {
                data && data.length > 0 && data.map((item) =>
                    <Card key={item.id}>
                        <Card.Img variant="top" src={item.picUrl}/>
                        <Card.Body style={{display: "flex"}}>
                            <div>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>{item.description}</Card.Text>
                            </div>
                            <div style={{marginLeft: "auto"}}>
                                <Button variant="danger" onClick={() => promote(item.id)}>提高排名</Button>
                            </div>
                            &nbsp;
                            <div>
                                <Button variant="primary" as={Link}
                                        to={{pathname: `/config/advanced/${item.id}`}}>修改</Button>
                            </div>
                        </Card.Body>
                    </Card>
                )
            }
        </div>
    )
}