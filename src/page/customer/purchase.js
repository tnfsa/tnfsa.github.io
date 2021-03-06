import React from 'react'
import FoodContent from '../../components/customers/foodcontent'

class Purchase extends React.Component{
    componentDidMount() {
        window.scrollTo({top: 0,behavior: 'smooth'})
    }

    render(){
        return(
            <React.Fragment>
                <h1 style={{textAlign: 'center'}}>訂餐</h1>
                {/*餐點內容*/}
                <FoodContent store={this.props.match.params.store} product={this.props.match.params.product}/>
            </React.Fragment>
        )
    }
}

export default Purchase