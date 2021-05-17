import React from 'react'

import config from '../config.json'

class Liststore extends React.Component{
    componentDidMount() {
        //fetch store files
        //rerender
        //append child
        const url = config['baseURL'] + 'stores'
        fetch(url,{
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
            window.location.replace('#/login')
            return
        }).then(json =>{
            if(json['name'] === undefined){
                document.getElementById('Chunk').innerHTML = "查無資料"
            }else{
                for(let i = 0;i < json['name'].length;++i){
                    let node = document.createElement('DIV')
                    let blockId = 'store' + i
                    node.setAttribute('id',blockId)
                    document.getElementById('Chunk').appendChild(node)

                    let nody = document.getElementById(blockId)
                    nody.innerHTML += <h2>{json['name'][{i}]}</h2>
                    const linkTo = config['project'] + "order/" + json['id'][i]
                    nody.innerHTML += <a href={linkTo}>{json['name'][i]}</a>
                }
            }
        })
    }

    render(){
        return(
            <div id="Chunk" />
        )
    }
}

export default Liststore