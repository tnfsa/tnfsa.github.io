import React from 'react'

import {Link} from 'react-router-dom'

class MenuOption extends React.Component{
    render() {
        return (
            <div className="optionBar">
                <ul>
                    <li><Link to="/config/menu/new">新增</Link></li>
                </ul>
            </div>
        );
    }
}

export default MenuOption