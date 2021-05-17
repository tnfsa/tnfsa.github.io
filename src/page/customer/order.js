import React from 'react'

import config from '../../config.json'

class Order extends React.Component{
    componentDidMount() {
        //go to top
        window.scrollTo({top: 0,behavior: 'smooth'})

        // show foods
        // this.props.match.params.id
        const url = config['baseURL'] + 'stores/' + this.props.match.params.id
        fetch(url,{
            method: 'GET'
        }).then(response =>{
            if(response.ok){
                return response.json()
            }
            return response.text().then(res => {
                throw new Error(res)
            })
        }).catch(err =>{
            console.log(err.message)
            let response = JSON.parse(err.message)
            window.alert(
                `${response.message}\n與伺服器連線錯誤，請再試一次\n如果問題無法解決，請聯絡管理員`
            )
            window.location.replace('/')
        }).then(json => {
            if(json['name'] === undefined){
                document.getElementById('Food').innerHTML = "查無資料"
            }else{
                for(let i = 0;i < json['name'].length;++i){
                    let node = document.createElement('DIV')
                    let blockId = 'store' + i
                    node.setAttribute('id',blockId)
                    document.getElementById('Food').appendChild(node)

                    let nody = document.getElementById(blockId)

                    let picaddress = json['pic'][i]
                    let name = json['name'][i]
                    let link = json['']
                    nody.innerHTML += <h2>{json['name'][{i}]}</h2>
                    const linkTo = config['project'] + "order/" + json['id'][i]
                    nody.innerHTML += <a href={linkTo}>{json['name'][i]}</a>
                }
            }
        })
    }
    render(){
        return(
            <React.Fragment>
                <h1 style={{textAlign: 'center'}}>吃什麼</h1>
                <div id="Food" />
            </React.Fragment>
        )
    }
}

export default Order