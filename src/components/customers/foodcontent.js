import React, {useEffect, useState} from 'react'
import config from '../../config.json'
import {Container, Row, Col, Figure, Button} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
import Cookies from 'universal-cookie'
import Swal from 'sweetalert2'

export default function FoodContent(props) {
    const [title, setTitle] = useState('')
    const [picture, setPicture] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const history = useHistory()
    const URL = config['baseURL'] + 'stores/' + props.store + '/products/' + props.product;

    async function getData() {
        fetch(URL, {
            method: 'GET',
            headers: {
                "Accept": "application/json",
            }
        }).then(response => {
            if (response.ok) {
                return response.json()
            }
            return response.text().then(err => {
                throw new Error(err)
            })
        }).catch(error => {
            console.log(error.message)
            let response = JSON.parse(error.message)
            window.alert(`${response.message}\n與伺服器連線錯誤，請再試一次\n如果問題無法解決，請聯絡管理員`)
        }).then(response => {
            console.log(response)
            setPrice(response['price'])
            setDescription(response['description'])
            setTitle(response['name'])
            setPicture(response['image'])
        })
    }

    const cookies = new Cookies()
    const allcookies = cookies.getAll()

    function Send() {
        const confirmText =
            `請確認您的訂購資訊
名稱：${title}
售價：${price}
其他建議：(功能未開放)
按 OK 送出；cancel 取消`
        if (window.confirm(confirmText)) {
            //window.alert('Ok')
            // send transaction
            const url = config['baseURL'] + 'transactions'
            fetch(url, {
                method: 'POST',
                body: JSON.stringify({
                    "name": title,
                    "qty": 1,
                    "store_id": props.store,
                    "product_id": props.product,
                    "comment": "",
                    "options": {}
                }),
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${allcookies['session']}`
                }
            }).then(response => {
                if (response.ok) {
                    return response.json()
                }
                return response.text().then(res => {
                    throw new Error(res)
                })
            }).then(() => {
                // Transaction Made
                window.alert('訂購成功!')
                cookies.set('alert', '感謝您利用本系統訂購產品\n請記得於選取時間取餐，謝謝', {path: '/'})
                history.push('/')
            }).catch((error) => {
                // Transaction Error
                console.log(error)
                let response = JSON.parse(error.message)
                Swal.fire({
                    title: '錯誤!',
                    text: `${response.message}\n與伺服器連線錯誤，請再試一次\n如果問題無法解決，請聯絡管理員`,
                    icon: 'error',
                    confirmButtonText: 'Ok'
                }).then(() => history.push('/'))
            })
        } else {
            // fallback to center
            Swal.fire({
                title: '錯誤!',
                text: `訂單未成立`,
                icon: 'error',
                confirmButtonText: 'Ok'
            }).then(() => history.push('/'))
        }
    }

    useEffect(() => {
        getData()
    })

    return (
        <React.Fragment>
            <Container>
                <br/>
                <h1><Row><Col>餐點名稱：</Col><Col>{title}</Col></Row></h1>
                <Figure>
                    <Figure.Image
                        width={300}
                        height={180}
                        alt="餐點的照片"
                        src={picture}
                    />
                    <Figure.Caption>
                        {description}
                    </Figure.Caption>
                </Figure>
                <h2><Row><Col>建議售價：</Col><Col>{price}</Col></Row></h2>
                <div style={{display: "flex"}}>
                    <div style={{marginLeft: "auto"}}>
                        <Button variant="primary" onClick={Send}>訂購</Button>
                    </div>
                </div>
            </Container>
        </React.Fragment>
    )
}