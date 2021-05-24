import config from "./config.json"
import Cookies from 'universal-cookie'

function getUserId(){
  const cookies = new Cookies()
  const collection = cookies.getAll()
  return collection['id']
}

export const setting = [
  {
    "name": "啟動商店",
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
  "change_name":{
    "title": "變更商店名",
    "hint": "請輸入商店名",
    "placeholder": "新商店名",
    "submitUri": config['baseURL'] + 'stores',
    "method": "PUT",
  },
  "change_password":{
    "title": "變更密碼",
    "hint": "請輸入新密碼",
    "placeholder": "新密碼",
    "submitUri": config['baseURL'] + 'change_password',
    "method": "POST",
    "return": ["passwslword"]
  },
  "activate":{
    "title": "啟動商店",
    "hint": "請輸入商店名",
    "placeholder": "商店名",
    "submitUri": config['baseURL'] + 'stores',
    "method": "POST",
    "return" : ["name"]
  }
}