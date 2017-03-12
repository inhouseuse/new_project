// Views
import React from 'react'
import Card from '../../components/Card/index'
import List from '../../components/List/index'
import FilterDisplayList from './FilterDisplayList'


class Views extends React.Component {
    render() {
        
        let viewList = FilterDisplayList(this.props.selectedTabIndex, Window.contentslist);
        let isCardView = this.props.isCardView

        return (
            <ul>
                {viewList.map((group, index) => {
                    const li_page = []
                    const group_color = {
                       color: group.groupColor
                    }

                    {group.pages.map((page, index)=> {

                        if (isCardView) {
                            li_page.push(   
                                <Card key={group.groupName+page.title} idx={index} data={page} color={group.groupColor} />
                            )
                        } else {
                            li_page.push(   
                                <List key={group.groupName+page.title} idx={index} data={page} />
                            )
                        }

                    })}

                    return (
                        <li key={group.groupName}>
                            <h3 style={group_color}>{group.groupName}</h3>
                            <ul className={`row ${isCardView ? '' : 'collection'}`}>
                                {li_page}
                            </ul>
                        </li>
                    )
                })}
            </ul>        
        )


    }
}

export default Views