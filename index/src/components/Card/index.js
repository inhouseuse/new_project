// components/Card
import React from 'react'

class Card extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="card-image">
                    <img src={this.props.data.imgUrl} />
                    <div className="card-content">
                        <h4>{this.props.data.title}</h4>
                    </div>
                    <div className="card-action">
                        <a href={this.props.data.url}>Open</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card