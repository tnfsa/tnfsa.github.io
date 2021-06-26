import React, {useEffect, useState} from 'react'
import {useHistory} from "react-router-dom";
import Cookies from "universal-cookie";
import {Button, Col, Container, Figure, Row, Spinner} from "react-bootstrap";

export default function AdvancedConfig(props){
    const [image, setImage] = useState('')
    const [uploading, setUploading] = useState(false)
    const [imageUrl, setImageUrl] = useState('')
    const history = useHistory();
    const cookies = new Cookies()
    let allcookies = cookies.getAll()
    const storeId = allcookies['storeId']

    const [name,setName] = useState('')
    const [subtitle,setSubtitle] = useState('')
    const [price,setPrice] = useState('')


    async function Send() {
        const name = document.getElementById('foodTitle').value
        const subtitle = document.getElementById('foodSub').value
        let price = document.getElementById('foodPrice').value
        const postURL = process.env.REACT_APP_API_ENDPOINT + '/stores/' + storeId + '/products'

        var data = {
            'name': name,
            'price': price,
            'description': subtitle,
            'store_id': storeId,
            "image": imageUrl
        }
        //window.alert(postURL)
        await fetch(postURL, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                "Accept": "application/json",
                "Authorization": `Bearer ${allcookies['session']}`
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
            window.alert(`${response.message}\n與伺服器連線錯誤，請再試一次\n如果問題無法解決，請聯絡管理員`)
        }).then(response => {
            console.log(response)
            history.push('/config/menu')
        })
    }

    function handleChangeImage(evt) {
        console.log("Uploading");
        const storeId = allcookies['storeId']
        var reader = new FileReader();
        var file = evt.target.files[0];

        reader.onload = function (upload) {
            console.log(file)
            setImage(upload.target.result);
            const formData = new FormData()
            formData.append('image', file)
            setUploading(true)
            fetch(process.env.REACT_APP_API_ENDPOINT + '/stores/' + storeId + '/images', {
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Authorization": `Bearer ${allcookies['session']}`
                },
                body: formData
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
                window.alert(`${response.message}\n與伺服器連線錯誤，請再試一次\n如果問題無法解決，請聯絡管理員`)
            }).then(response => {
                console.log(typeof response)
                //window.alert(response)
                setImageUrl(response.result.data)
                window.alert(response.result.data)
                setUploading(false)
            })
        };
        reader.readAsDataURL(file);
        console.log("Uploaded");
    }

    async function firstFetch(){
        //instant fetch settings from history
        const url = process.env.REACT_APP_API_ENDPOINT +'/stores/'+ allcookies['storeId']+ '/products/'+ props.product
        try{
            const data = await fetch(url,{
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${allcookies['session']}`,
                    'Accept': 'application/json'
                }
            })
            let parsed = await data.json()
            setPrice(parsed['price'])
            setName(parsed['name'])
            setSubtitle(parsed['description'])

            setImageUrl(parsed['image'])
            console.log(parsed)
        }catch(err){
            window.alert(
`錯誤!!!
error: ${err}
立即返回首頁
`)
            document.location.href = '/'
        }
    }
    useEffect(()=>{
        firstFetch()
        // eslint-disable-next-line
    },[])
    return(
        <Container>
            <form
                className={"foodBlock"}
                onSubmit={e => {
                    e.preventDefault()
                    Send()
                }}
            >
                <div className="form-group">
                    <label>食物名</label>
                    <input type="text" className="form-control" placeholder="標題" value={name} onChange={e =>setName(e.target.value)} required/>
                </div>
                <div className="form-group">
                    <label>價錢</label>
                    <input type="text" className="form-control" placeholder="價錢" value={price} onChange={e => setPrice(parseInt(e.target.value))} required/>
                </div>
                <div className="form-group">
                    <label>副標題</label>
                    <input type="text" className="form-control" placeholder="副標" value={subtitle} onChange={e=> setSubtitle(e.target.value)} required/>
                </div>
                <Row>
                    <Col>
                        <div className="form-group">
                            <Button as={"label"} variant={"primary"} hidden={imageUrl !== ''}>
                                上傳圖片
                                <input type="file" name="file"
                                       className="upload-file"
                                       id="file"
                                       onChange={handleChangeImage}
                                       hidden
                                />
                            </Button>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <center>
                            <Spinner hidden={uploading === false} animation={"border"}/>
                            <br/>
                            <a href={process.env.REACT_APP_API_HOST + '/' + imageUrl} target="_blank"
                               hidden={!image || uploading}
                               rel="noreferrer">{process.env.REACT_APP_API_HOST + '/' + imageUrl}</a>
                            <br/>
                            <Figure.Image
                                width={300}
                                src={image && !uploading ? process.env.REACT_APP_API_HOST + '/' + imageUrl : "https://via.placeholder.com/300x180?text=Product+Image"}
                                resizeMode="contain"
                            />
                        </center>
                    </Col>
                </Row>
                <Row>
                    <div className="h-100 align-items-center">
                        <div id="placeToAdd"/>
                    </div>
                </Row>
                <Row>
                    <Col>
                        <button className="btn btn-primary btn-block">送出</button>
                    </Col>
                </Row>
            </form>
        </Container>
    )
}