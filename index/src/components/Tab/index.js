// components/Tab
import React from 'react'

class Tab extends React.Component {

    render() {
        const isActive = this.props.selectedTabIndex === this.props.idx ? 'tab--active' : ''
        return (
            <li className={`tab-flat ${isActive}`} onClick={() => {this.props.selectTab(this.props.idx)}}>
                {this.props.data.groupName}
            </li>        
        )
    }
}

export default Tab