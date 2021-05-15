import React from 'react'
import {Container} from "react-bootstrap";
import config from "../config.json"


class Privacy extends React.Component{
    componentDidMount() {
        window.scrollTo({top: 0,behavior: 'smooth'})
        // eslint-disable-next-line
        let toBeReplace = new RegExp("\n","g")
        let titleUrl = config['docRoot'] + "title.json"

        fetch(titleUrl)
            .then(response =>{
                return response.json()
            }).then(json =>{
                let title = document.getElementById('title')
                title.innerHTML = json['title']
            })

        let url = config['docRoot'] + "privacy.json"

        fetch(url)
            .then(response => {
                return response.json()
            }).then(json => {
                for (let i = 0; i < json['title'].length; ++i) {
                    let ptitle = document.createElement('H2')
                    ptitle.textContent = json['title'][i]

                    document.getElementById('policy').appendChild(ptitle)
                    document.getElementById('policy').innerHTML += "<p>" + json['context'][i].replace(toBeReplace, "<br>") + "</p>"
                }
                let updateTime = document.createElement('H3')
                updateTime.innerText = "最後更新日期："+json['date']
                document.getElementById('policy').appendChild(updateTime)
            })

    }

    render(){
        return(
            <React.Fragment>
                <h1 style={{textAlign: 'center'}}>隱私權聲明</h1>
                <Container>
                    <br />
                    <p id="title" />
                    <div id='policy' />
                </Container>
            </React.Fragment>
        )
    }
}

export default Privacy