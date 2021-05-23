import React from 'react'
import {
    Link,
} from 'react-router-dom'
import {Card} from "react-bootstrap";
import {setting} from '../settings.js'


function SettingsOption(){
    return(
        setting.map((item)=>
            <Card>
                <Card.Body style={{display:"flex"}}>
                    <div>
                        <Link to={item.url}>{item.name}</Link>
                    </div>
                </Card.Body>
            </Card>
        )
    )
}



export default SettingsOption