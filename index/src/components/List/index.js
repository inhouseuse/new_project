// components/List
import React from 'react'

class List extends React.Component {

    render() {

        const bgcolor = {
            background: this.props.color
        }

        const delay = {
            animationDelay: (this.props.idx * 0.05) + 's'
        }

        return (
            <div className="col s12 m6 l4">
                <div className="card bottom_up" style={delay}>
                    <div className="card-image">
                        <img src={this.props.data.imgUrl} />
                        <div className="card-content" >
                            <h5>{this.props.data.title}</h5>
                        </div>
                        <div className="card-action center-align">
                            <a href={this.props.data.url} className="waves-effect waves-light btn pink accent-2">Open</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default List