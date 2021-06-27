import React from 'react'

import {configuration} from "../../settings";
import Cookies from "universal-cookie";
import {withRouter} from "react-router-dom"
import Swal from "sweetalert2";

class SettingConfigure extends React.Component {

    render() {
        const browserUrl = document.location.href
        const splitUrl = browserUrl.split('/')
        const urlSelected = splitUrl[5]

        const Send = () => {
            const cookies = new Cookies()
            const collection = cookies.getAll()
            if (!collection['session']) {
                window.alert(`Session expired`)
                document.location.replace('/')
            }
            let init = {
                method: configuration[urlSelected]['method'],
                headers: {
                    "Accept": "application/json",
                    "Authorization": `Bearer ${collection['session']}`,
                    "Content-Type": "application/json"
                }
            }
            if (configuration[urlSelected]['method'] === 'POST' || configuration[urlSelected]['method'] === 'PUT') {
                let data = {}
                for (let i = 0; i < configuration[urlSelected]['return'].length; ++i) {
                    let selected = document.getElementById('userInput')
                    data[configuration[urlSelected]["return"][i]] = selected.value
                }
                init['body'] = JSON.stringify(data)
            }

            let SubmitURL = configuration[urlSelected]['submitUri']

            for (let str in (configuration[urlSelected]['params'] || {})) {
                let toSet = ''
                const data = configuration[urlSelected]['params'][str]
                if (data.split(':').length > 1) {
                    // 特殊parse
                    let _data = data.split(':')
                    switch (_data[0]) {
                        case "cookies":
                        default:
                            toSet = cookies.get(_data[1])
                            if (typeof toSet === 'undefined' || toSet === '' || toSet === 'undefined') {
                                this.props.history.push('/login');
                                return;
                            }
                    }
                } else {
                    toSet = data
                }
                SubmitURL = SubmitURL.replaceAll(":" + str, toSet)
            }

            fetch(SubmitURL, init).then(response => {
                if (response.ok) {
                    return response.json()
                }
                return response.text().then(err => {
                    throw new Error(err)
                })
            }).then(response => {
                console.log(response)
                Swal.fire({
                    title: '成功!',
                    text: `更新成功, 歡迎${response?.name ?? ''}!`,
                    icon: 'success',
                    confirmButtonText: 'Ok'
                }).then(() => {
                    configuration[urlSelected]?.afterFetch?.(response)
                    this.props.history.go(0);
                })
            }).catch(error => {
                let response = JSON.parse(error.message)
                Swal.fire({
                    title: '錯誤!',
                    html: (
                        `錯誤： ${response?.error?.localizedMessage ?? response?.error ?? response?.message ?? ''}! <br>
                        錯誤代碼： ${response?.error?.code}(${response?.error?.status})<br>
                        如問題持續發生，請提供這些資訊給工程師!
                        `),
                    icon: 'error',
                    confirmButtonText: 'Ok'
                })
            })
        }

        return (
            <React.Fragment>
                {configuration[urlSelected] &&
                <React.Fragment><h2>{configuration[urlSelected]['title']}</h2>
                    <div className="form-group">
                        <label>{configuration[urlSelected]['hint']}</label>
                        <input id='userInput' type='text' className='form-control'
                               placeholder={configuration[urlSelected]['placeholder']}/>
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
