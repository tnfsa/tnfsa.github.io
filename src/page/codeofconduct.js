import React from 'react'
import {Container} from "react-bootstrap";
import config from "../config.json"

class CodeofConduct extends React.Component{
    componentDidMount() {
        window.scrollTo({top: 0,behavior: 'smooth'})
        // eslint-disable-next-line
        let toBeReplace = new RegExp("\n", "g")
        const titleUrl = config['docRoot'] + "title.json"
        fetch(titleUrl).then(response =>{
            return response.json()
        }).then(json=>{
            let title = document.getElementById('title')
            title.innerHTML = json['title']
        })
        const url = config['docRoot'] + "coc.json"

        fetch(url)
            .then(response => {
                return response.json()
            }).then(json => {
                for (let i = 0; i < json['title'].length; ++i) {
                    let ptitle = document.createElement('H2')
                    ptitle.textContent = json['title'][i]

                    document.getElementById('COC').appendChild(ptitle)
                    document.getElementById('COC').innerHTML += "<p>" + json['context'][i].replace(toBeReplace, "<br>") + "</p>"
                }
            })
    }

    render() {
        return(
            <React.Fragment>
                <h1 style={{textAlign: 'center'}}>使用者使用條款</h1>
                <Container>
                    <br />
                    <p id="title" />
                    <div id="COC" />
                </Container>
            </React.Fragment>
        )
    }
}

export default CodeofConduct