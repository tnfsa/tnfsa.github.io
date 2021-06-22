import React,{useState} from 'react'

import Cookies from "universal-cookie";

export default function Notification(props){
    const cookies = new Cookies()
    const allcookies = cookies.getAll()

    const [alert,setAlert] = useState(false)
    const [alertSentence,setAlertSentence] = useState()

    window.addEventListener('hashchange',()=>{
        if(allcookies['alert'] !== undefined){
            setAlertSentence(allcookies['alert'])
            setAlert(true)
            cookies.remove('alert')
        }else{
            setAlert(false)
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
/*
class Notification extends React.Component {
    constructor(props) {
        super(props);
        let send = []
        const cookies = new Cookies()
        const combination = cookies.getAll()
        combination['alert'] ? send.push(true) : send.push(false)
        this.state = {
            alert: send[0],
            alertSentence: combination['alert']
        }
    }

    componentDidMount() {
        const cookies = new Cookies()
        cookies.remove('alert')
    }

    render() {
        return (

        )
    }
}

export default Notification*/