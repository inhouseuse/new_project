// Cards
import React from 'react'
import Card from '../../components/Card/index'

class Cards extends React.Component {
    render() {
        return (
            <ul>
                {Window.contentslist.map((group, index) => {
                    const li_page = []
                    {group.pages.map((page, index)=> {
                        li_page.push(
                            <Card key={group.groupName+page.title} idx={index} data={page} />
                        ) 
                    })}
                    return (
                        <li key={group.groupName}>
                            <h4>{group.groupName}</h4>
                            <div className="row">
                                {li_page}
                            </div>
                        </li>
                    )
                })}
            </ul>        
        )
    }
}

export default Cards