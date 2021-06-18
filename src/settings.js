import config from "./config.json"
import Cookies from "universal-cookie/lib";
import {GreatLog} from "./helpers/Log";

const cookies = new Cookies();

export const setting = [
    {
        "name": "啟動商店功能",
        "url": "/settings/activate"
        //what to do

    },
    {
        "name": "變更商店名",
        "url": "/settings/change_name"
    },
    {
        "name": "變更密碼",
        "url": "/settings/change_password"
    }
]

export const configuration = {
    "change_name": {
        "title": "變更商店名",
        "hint": "請輸入商店名",
        "placeholder": "新商店名",
        "submitUri": config['baseURL'] + 'stores',
        "method": "PUT",
        afterFetch(res) {
            GreatLog('debug', res.id)
            cookies.set('storeId', res.id)
        }
    },
    "change_password": {
        "title": "變更密碼",
        "hint": "請輸入新密碼",
        "placeholder": "新密碼",
        "submitUri": config['baseURL'] + 'change_password',
        "method": "POST",
        "return": ["newpassword"]
    },
    "activate": {
        "title": "啟動商店功能",
        "hint": "請輸入商店名",
        "placeholder": "商店名",
        "submitUri": config['baseURL'] + 'stores',
        "method": "POST",
        "return": ["name"],
        afterFetch(res) {
            GreatLog('debug', res.id)
            cookies.set('storeId', res.id)
        }
    }
}