import React from 'react'

import '../App.css'

class LoadingSpinner extends React.Component{
    render(){
        return(
            <div class='lds-ellipsis' />
        )
    }
}

export default LoadingSpinner