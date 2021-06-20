import React, {useEffect, useState} from 'react'
import {Spinner} from "react-bootstrap";
import Cookies from 'universal-cookie'

export default function ViewBooked(){
    const [loading,setLoading] = useState(true)
    const [data,setData] = useState()

    const cookies = new Cookies()
    const allcookies = cookies.getAll()
    const storeId = allcookies['storeId']

    async function getData(){
        try{
            const url = process.env.REACT_APP_API_HOST + '/stores/ ' + storeId + '/transactions'
            let result = await fetch(url, {
                method: 'GET',
                'headers': {
                    'Accept': 'application/json',
                    "Authorization": `Bearer ${allcookies['session']}`
                }
            })
            let json = await result.json()
            console.log(json)
        }catch{
            // wrong request or expired session
            // redirect to main page
            cookies.set('alert','操作錯誤，請重試',{path: '/'})
            document.location.href = '/'
        }
    }

    useEffect(()=>{
        getData()
    },[])

    return(
        <React.Fragment>
            {loading ?
                <Spinner animation={"border"} hidden={!loading}/>
                :
                <h1>Hello</h1>
            }
        </React.Fragment>
    )
}