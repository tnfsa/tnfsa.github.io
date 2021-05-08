import React from 'react'

class StoreBlock extends React.Component{
    componentDidMount() {
        //fetch store files

        //rerender
        //append child
        for(let i = 1;i <= 10;++i){
            let node = document.createElement('DIV')
            node.textContent = "Hello"

            document.getElementById('Chunk').appendChild(node)
        }

    }

    render(){
        return(
            <div id="Chunk" />
        )
    }
}

export default StoreBlock