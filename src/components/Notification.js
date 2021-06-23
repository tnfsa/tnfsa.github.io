import React,{useState,useEffect} from 'react'

import Cookies from "universal-cookie";

export default function Notification(props){
    const cookies = new Cookies()

    const [alert,setAlert] = useState(false)
    const [alertSentence,setAlertSentence] = useState('')

    // eslint-disable-next-line
    useEffect(()=>{
        let allcookies = cookies.getAll()
        if(allcookies['alert'] !== undefined){
            setAlert(true)
            setAlertSentence(allcookies['alert'])
        }
    })



    return(
        <React.Fragment>
            <p className="p-3 mb-2 bg-success text-white" hidden={!alert}>
                {alertSentence}
            </p>
        </React.Fragment>
    )
}