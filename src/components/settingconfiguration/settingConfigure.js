import React from 'react'

import {configuration} from "../../settings";
import Cookies from "universal-cookie";
import {withRouter} from "react-router-dom"

class SettingConfigure extends React.Component{

    render(){
        const browserUrl = document.location.href
        const splitUrl = browserUrl.split('/')
        const urlSelected = splitUrl[5]

        const Send = ()=>{
            const cookies = new Cookies()
            const collection = cookies.getAll()
            if(!collection['session']){
                window.alert(`Session expired`)
                document.location.replace('/')
            }
            let init = {
                method: configuration[urlSelected]['method'],
                headers:{
                    "Accept": "application/json",
                    "Authorization": `Bearer ${collection['session']}`,
                    "Content-Type": "application/json"
                }
            }
            if(configuration[urlSelected]['method'] === 'POST'){
                let data = {}
                for(let i = 0;i < configuration[urlSelected]['return'].length;++i){
                    let selected = document.getElementById('userInput')
                    data[configuration[urlSelected]["return"][i]] = selected.value
                }
                init['body'] = JSON.stringify(data)
            }

            fetch(configuration[urlSelected]['submitUri'],init).then(response=>{
                if(response.ok){
                    return response.json()
                }
                return response.text().then(err =>{
                    throw new Error(err)
                })
            }).catch(error=>{
                console.log(error.message)
                let response = JSON.parse(error.message)
                window.alert(`${response.message}\n與伺服器連線錯誤，請再試一次\n如果問題無法解決，請聯絡管理員`)
            }).then(response=>{
                console.log(response)
                window.alert('更新成功')
                configuration[urlSelected]?.afterFetch?.(response)
                this.props.history.go(0);
            })
        }

        return(
            <React.Fragment>
                {configuration[urlSelected] &&
                <React.Fragment><h2>{configuration[urlSelected]['title']}</h2>
                    <div className="form-group">
                    <label>{configuration[urlSelected]['hint']}</label>
                    <input id='userInput' type='text' className='form-control' placeholder={configuration[urlSelected]['placeholder']} />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block" onClick={Send}>確認</button>
                </React.Fragment>}
                {!configuration[urlSelected] && urlSelected && <h2>請輸入合法功能</h2>}
                {!configuration[urlSelected] && !urlSelected && <h2>請選取左邊功能以繼續</h2>}
            </React.Fragment>
        )
    }
}

export default withRouter(SettingConfigure)
