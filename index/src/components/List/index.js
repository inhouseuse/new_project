// components/List
import React from 'react'

class List extends React.Component {

    render() {

        const bgcolor = {
            background: this.props.color
        }

        return (
            <li className="collection-item">
                <div className="flexCenter">
                    <div>
                        <h6>{this.props.data.title}</h6>
                    </div>
                    <div className="marginLeft_auto">
                        <a onClick={() => {Window.OpenExternalLink(this.props.data.url)}} className="secondary-content pink-text accent-2-text link">
                            Open&nbsp;&nbsp;
                            <i className="fa fa-external-link" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </li>
        )
    }
}

export default List