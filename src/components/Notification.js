import React,{useState,useEffect} from 'react'

import Cookies from "universal-cookie";

export default function Notification(props){
    const cookies = new Cookies()

    const [alert,setAlert] = useState(false)
    const [alertSentence,setAlertSentence] = useState('')
    
    // eslint-disable-next-line
    useEffect(()=>{
        const alert1 = cookies.get('alert')
        if(alert1 !== undefined){
            setAlert(true)
            setAlertSentence(alert1)
            setTimeout(() => {
                cookies.remove('alert')
                setAlert(false)
            },3000)
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