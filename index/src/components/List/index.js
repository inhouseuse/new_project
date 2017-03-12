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
                        <h5>{this.props.data.title}</h5>
                        <p>{this.props.data.desc}</p>
                    </div>
                    <div className="marginLeft_auto">
                        <a onClick={() => {Window.OpenExternalLink(this.props.data.url)}} className="secondary-content waves-effect waves-light btn pink accent-2">
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