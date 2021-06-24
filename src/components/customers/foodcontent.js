import React, {useEffect, useState} from 'react'
import {Button, Col, Container, Figure, Row} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
import Cookies from 'universal-cookie'
import Swal from 'sweetalert2'
import {TextareaAutosize} from "@material-ui/core";

export default function FoodContent(props) {
    const [title, setTitle] = useState('')
    const [picture, setPicture] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [comment, setComment] = useState('')
    const history = useHistory()
    const URL = process.env.REACT_APP_API_ENDPOINT + '/stores/' + props.store + '/products/' + props.product;

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
        }).then(response => {
            //console.log(response)
            setPrice(response['price'])
            setDescription(response['description'])
            setTitle(response['name'])
            setPicture(response['image'])
        }).catch(error => {
            //console.log(error.message)
            let response = JSON.parse(error.message)
            Swal.fire({
                title: '錯誤!',
                text: `${response.message}\n與伺服器連線錯誤，請再試一次\n如果問題無法解決，請聯絡管理員`,
                icon: 'error',
                confirmButtonText: 'Ok'
            }).then(() => history.push('/'))
        })
    }

    const cookies = new Cookies()
    const allcookies = cookies.getAll()

    async function Send() {
        const confirmText =
`請確認您的訂購資訊
名稱：${title}
售價：${price}
其他建議：${comment}
按 OK 送出；cancel 取消`
        if (window.confirm(confirmText)) {
            //window.alert('Ok')
            // send transaction
            try {
                const url = process.env.REACT_APP_API_ENDPOINT + '/transactions'
                const fetchedData = await fetch(url, {
                    method: 'POST',
                    body: JSON.stringify({
                        "name": title,
                        "qty": 1,
                        "store_id": props.store,
                        "product_id": props.product,
                        "comment": comment,
                        "options": {}
                    }),
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${allcookies['session']}`
                    }
                })
                const parsed = await fetchedData.json()
                console.log(parsed)
                if (fetchedData.ok) {
                    Swal.fire({
                        title: '訂購成功!',
                        html: (
                            `感謝您利用本系統訂購產品<br>` +
                            `請記得於選取時間取餐，謝謝<br>` +
                            `您的交易ID為： <b>${parsed.id}</b>`),
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    }).then(() => {
                        document.location.href = '/'
                    })
                } else {
                    throw await fetchedData.text()
                }
            } catch (err) {
                Swal.fire({
                    title: '錯誤!',
                    text: `${err}\n與伺服器連線錯誤，請再試一次\n如果問題無法解決，請聯絡管理員\n訂單未成立`,
                    icon: 'error',
                    confirmButtonText: 'Ok'
                }).then(() => {
                    document.location.href = '/'
                })
            }
        }
    }

    useEffect(() => {
        getData()
        const isSells = cookies.get('isSells')
        const session = cookies.get('session')

        if(session === undefined){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '請先登入',
            }).then(() =>{
                document.location.href = '/'
            })
        }
        if(isSells === 'true'){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '此功能商家無法使用',
            }).then(() =>{
                document.location.href = '/'
            })
        }
        // eslint-disable-next-line
    },[])

    return (
        <React.Fragment>
            <Container>
                <br/>
                <Row>
                    <Col>
                        <Figure>
                            <Figure.Caption className={"text-center"}>
                                <h1>餐點：{title}</h1>
                            </Figure.Caption>
                            <Figure.Image
                                width={300}
                                alt="餐點的照片"
                                src={process.env.REACT_APP_API_HOST + '/' + picture}
                                resizeMode="contain"
                            />
                        </Figure>
                    </Col>
                    <Col>描述：{description}</Col>
                </Row>

                <Row>
                    <Col>
                        <h5>建議售價：{price}</h5>
                    </Col>
                </Row>
                <Row>
                    <Col lg={10}>
                        <TextareaAutosize className="form-control" placeholder="留言" rows="5"
                                          onChange={event => setComment(event.target.value)}
                                          value={comment}/>
                    </Col>
                    <Col lg={3}>
                        <br />
                        <div style={{display: "flex"}}>
                            <div style={{marginLeft: "auto"}}>
                                <Button variant="primary" onClick={Send}>訂購</Button>
                            </div>
                        </div>
                    </Col>
                </Row>

            </Container>
        </React.Fragment>
    )
}
