// components/Tab
import React from 'react'

class Tab extends React.Component {
    render() {

        const isActive = this.props.data.groupName === 'group2' ? 'tab--active' : ''

        return (
            <li className={`tab-flat ${isActive}`}>
                {this.props.data.groupName}
            </li>        
        )
    }
}

export default Tab