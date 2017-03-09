// Cards
import React from 'react'
import Card from '../../components/Card/index'

class Cards extends React.Component {
    render() {
        const li_group = []
        const li_page = []

        Window.contentslist.map((group, index)=>{
            group.pages.map((page, index) => {
                li_page.push(
                    <Card key={group.groupName+page.title} idx={index} data={page} />
                )
            })
            li_group.push(
                <li key={group.groupName}>
                    <h2>{group.groupName}</h2>
                    <div className="row">
                        {li_page}
                    </div>
                </li>
            )
        });

        return (
            <ul>
                {li_group}
            </ul>        
        )
    }
}

export default Cards