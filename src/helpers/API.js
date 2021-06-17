import Cookies from "universal-cookie";
import config from '../config.json'

export class API {
    cookies = new Cookies();

    call(endpoint: string, data: Object, cb) {
        endpoint = config['baseURL'].slice(0, -1) + endpoint
        for (let str in (data.params || {})) {
            endpoint.replace(new RegExp(`/:${str}/`, 'g'), data[str])
        }
        let body = (typeof data.body === 'object' ? JSON.stringify(data.body) : null)
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': "application/json",
            'Authorization': `Bearer ${this.cookies.get('session')}`,
            ...data.headers
        })
        fetch(endpoint, {
            method: data.method,
            body,
            headers
        }).then(r => r.json()).then(cb)
    }
}