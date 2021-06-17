import Cookies from "universal-cookie";
export class Auth {
    signOut(ui=true,cb=()=>{}){
        //normal account signout
        //window.alert('logging out')
        //remove cookie
        const cookies = new Cookies()
        cookies.remove('id')
        cookies.remove('isGoogle')
        cookies.remove('isSells')
        cookies.remove('session')
        cookies.remove('userName')
        cookies.remove('storeId')
        cookies.remove('name')
        if(ui) cookies.set('alert','登出成功',{path: '/'})
        //reload page
        cb()
    }
}