// Main
import React from 'react'
import Views from '../Views/index'

class Main extends React.Component {
    render() {

        const space = {
            height: '20px'
        }

        console.log(this.props);

        return (
            <main className="container">
                <div style={space}></div>
                <div className="flexBaseline">
                    <h1>Start App</h1>
                    <div className="buttonGroup">
                        <div
                        onClick={() => {this.props.toggleViews()}}
                        className={`toggleViewButton ${this.props.isCardView === false ? 'toggleViewButton--active' : ''}`}
                        >
                            <i className="fa fa-th-list" aria-hidden="true"></i>
                            &nbsp;&nbsp;ListView
                        </div>
                        <div
                        onClick={() => {this.props.toggleViews()}}
                        className={`toggleViewButton ${this.props.isCardView ? 'toggleViewButton--active' : ''}`}
                        >
                            <i className="fa fa-th" aria-hidden="true"></i>
                            &nbsp;&nbsp;CardView
                        </div>
                    </div>
                </div>
                <Views selectedTabIndex={this.props.selectedTabIndex} />
            </main>
        )
    }
}

export default Main