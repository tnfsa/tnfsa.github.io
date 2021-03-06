import React, {useState} from 'react'
import {Button, Col, Container, Figure, Row, Spinner} from "react-bootstrap";
import config from "../../config.json";
import Cookies from "universal-cookie";
import {useHistory} from "react-router-dom";

class ToolBar extends React.Component {
    render() {
        const NewOption = () => {
            const popupUrl = config['project'] + '#/config/new/option'
            const popupWindow = window.open(popupUrl,/*'popUpWindow',*/'', 'location=no,height=500,width=400,top=100,left=300')
            popupWindow.body = "功能未開放"
        }
        return (
            <div className="optionBar" hidden={true}>
                <ul>
                    <li><Button variant="dark" onClick={NewOption}><i className="fa fa-plus" aria-hidden="true"/>新增選項</Button></li>
                </ul>
            </div>
        )
    }
}

function MenuConfigurator() {
    const [image, setImage] = useState('')
    const [uploading, setUploading] = useState(false)
    const [imageUrl, setImageUrl] = useState('')
    const history = useHistory();
    const cookies = new Cookies()
    let allcookies = cookies.getAll()
    const storeId = allcookies['storeId']

    async function Send() {
        const name = document.getElementById('foodTitle').value
        const subtitle = document.getElementById('foodSub').value
        const price = document.getElementById('foodPrice').value
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
                setUploading(false)
            })
        };
        reader.readAsDataURL(file);
        console.log("Uploaded");
    }

    return (
        <form
            className={"foodBlock"}
            onSubmit={e => {
                e.preventDefault()
                Send()
            }}
        >
            <div className="form-group">
                <label>食物名</label>
                <input id="foodTitle" type="text" className="form-control" placeholder="標題" required/>
            </div>
            <div className="form-group">
                <label>價錢</label>
                <input id="foodPrice" type="number" className="form-control" placeholder="價錢" required/>
            </div>
            <div className="form-group">
                <label>副標題</label>
                <input id="foodSub" type="text" className="form-control" placeholder="副標" required/>
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
                                   required
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
    )
}

class NewMenu extends React.Component {
    componentDidMount() {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }

    render() {
        return (
            <React.Fragment>
                <h1 style={{textAlign: 'center'}}>新增菜單</h1>
                <Container>
                    <ToolBar/>
                    <br/>
                    <MenuConfigurator/>
                </Container>
            </React.Fragment>
        )
    }
}

export default NewMenu