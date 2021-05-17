import React from 'react'

class Histories extends React.Component{
    componentDidMount() {
        window.scrollTo({top: 0,behavior: 'smooth'})
    }

    render(){
        return(
            <React.Fragment>
                <h1 style={{textAlign: 'center'}}>歷史紀錄</h1>
            </React.Fragment>
        )
    }
}

export default Histories