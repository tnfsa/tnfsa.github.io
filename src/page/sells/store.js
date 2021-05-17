import React from 'react'

class StoreSetting extends React.Component{
    componentDidMount() {
        window.scrollTo({top: 0,behavior: 'smooth'})



    }

    render() {
        return (
            <React.Fragment>
                <h1 style={{textAlign: 'center'}}>商家設定</h1>

            </React.Fragment>
        )
    }
}

export default StoreSetting