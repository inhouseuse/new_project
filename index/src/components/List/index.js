// components/List
import React from 'react'

class List extends React.Component {

    render() {

        const bgcolor = {
            background: this.props.color
        }

        return (
            <li className="collection-item">
                <div>
                    {this.props.data.title}
                    <a href={this.props.data.url} className="secondary-content"><i className="fa fa-external-link" aria-hidden="true"></i></a>
                </div>
            </li>
        )
    }
}

export default List