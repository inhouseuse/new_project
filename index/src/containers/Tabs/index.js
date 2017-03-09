// containers/Tabs
import React from 'react'
import Tab from '../../components/Tab'

class Tabs extends React.Component {


    render() {
        const li = []
        const all = { groupName: 'All' }

        li.push(<Tab key='all' data={all} />)
        Window.contentslist.map((item, index)=>{
            li.push(<Tab key={item.groupName} idx={index} data={item} />)
        });

        return (
            <ul className="tab-flat-group teal lighten-2">
                {li}
            </ul>        
        )
    }
}

export default Tabs