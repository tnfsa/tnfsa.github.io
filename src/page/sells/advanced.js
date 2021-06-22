import React from 'react'

import AdvancedConfig from '../../components/sells/advancedconfig'

class Advanced extends React.Component{
    componentDidMount() {
        window.scrollTo({top: 0,behavior: 'smooth'})
    }

    render() {
        return (
            <React.Fragment>
                <h1 style={{textAlign: 'center'}}>進階設定</h1>
                <AdvancedConfig product={this.props.match.params.product}/>
            </React.Fragment>
        )
    }
}

export default Advanced

