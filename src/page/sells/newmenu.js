import React from 'react'

class NewNenu extends React.Component{
    componentDidMount() {
        window.scrollTo({top: 0,behavior: 'smooth'})
    }

    render() {
        return (
            <React.Fragment>
                <h1 style={{textAlign: 'center'}}>新增菜單</h1>


            </React.Fragment>
        )
    }
}

export default NewNenu