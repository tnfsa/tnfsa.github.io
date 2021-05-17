import React from 'react'

import {
    Button,
    Container,
    Form
} from 'react-bootstrap'
import Cookies from "universal-cookie";

class Feedback extends React.Component{
    render() {
        const Send = () => {
            //send form
            // data to send
            let name = document.getElementById('nickName')
            let question = document.getElementById('question')

            if(name.value === ''){
                return
            }
            if(question.value === ''){
                return
            }

            let toSend = new FormData()
            toSend.append('entry.1239005013',name.value)
            toSend.append('entry.664971969',question.value)

            //link to send
            const url = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSdppxPAZlPuLMgelWDJ1wP6fIB4vScvivNrn3BZ9g7etGklCA/formResponse'

            fetch(url,{
                method: 'POST',
                mode: 'no-cors',
                body: toSend
            }).then(response=>{
                if(response.ok){
                    return response.json()
                }
                return response.text().then(res => {
                    throw new Error(res)
                })
            }).catch(err=>{
                console.log(err.message)
                let response = JSON.parse(err.message)
                window.alert(
                    `${response.message}\n與伺服器連線錯誤，請再試一次\n如果問題無法解決，請聯絡管理員`
                )
                return
            }).then(json=>{
                window.alert('message sent')
                console.log(json)
            })
            window.alert('已經收到你的訊息了\n我們將會努力改進')
            const cookies = new Cookies()
            cookies.set('alert','傳送成功',{path:'/'})
            document.location.replace('#/feedback')
        }
        return (
            <React.Fragment>
                <h1 style={{textAlign: 'center'}}>意見反饋</h1>
                <Container>
                    <Form>
                        <Form.Group>
                            <Form.Label>暱稱：</Form.Label>
                            <Form.Control id='nickName' type="text" placeholder="小/大明" required/>
                            <Form.Text className="text-muted">
                                我們絕對不會因為你的暱稱很智障就不理你
                            </Form.Text>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>問題：</Form.Label>
                            <Form.Control as="textarea" rows='5' id='question' required/>
                        </Form.Group>

                        <Button variant="primary" type="submit" onClick={Send}>
                            送出
                        </Button>
                    </Form>
                </Container>
            </React.Fragment>
        )
    }
}

export default Feedback