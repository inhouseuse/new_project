// containers/Tabs
import React from 'react'
import Tab from '../../components/Tab'

class Tabs extends React.Component {


    render() {
        const li = []
        const all = [{ groupName: 'All' }]
        let tablist = all.concat(Window.contentslist)

        tablist.map((item, index)=>{
            li.push(<Tab key={item.groupName} idx={index} data={item} selectedTabIndex={this.props.selectedTabIndex} selectTab={this.props.selectTab} />)
        });

        return (
            <ul className="tab-flat-group teal lighten-2">
                {li}
            </ul>        
        )
    }
}

export default Tabs