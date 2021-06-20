import Cookies from "universal-cookie";

export class API {
    cookies = new Cookies();

    call(endpoint: string, data: Object, cb) {
        endpoint = process.env.REACT_APP_API_ENDPOINT + endpoint
        for (let str in (data.params || {})) {
            endpoint = endpoint.replaceAll(":"+str, data.params[str])
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