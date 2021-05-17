import React from 'react'

class MenuSetting extends React.Component{
    componentDidMount() {
        window.scrollTo({top: 0,behavior: 'smooth'})
    }

    render() {
        return (
            <React.Fragment>
                <h1 style={{textAlign: 'center'}}>菜單設定</h1>
            </React.Fragment>
        )
    }
}

export default MenuSetting