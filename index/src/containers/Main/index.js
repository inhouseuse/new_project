// Main
import React from 'react'
import Views from '../Views/index'

class Main extends React.Component {
    render() {

        const space = {
            height: '20px'
        }

        return (
            <main className="container">
                <div style={space}></div>
                <div className="flexBaseline">
                    <h1>Open Pages</h1>
                    <div className="buttonGroup">
                        <div onClick={() => {this.props.toggleViewMode()}} className={`toggleViewButton ${this.props.isCardView === false ? 'toggleViewButton--active' : ''}`} >
                            <i className="fa fa-th-list" aria-hidden="true"></i>
                            &nbsp;&nbsp;ListView
                        </div>
                        <div onClick={() => {this.props.toggleViewMode()}} className={`toggleViewButton ${this.props.isCardView ? 'toggleViewButton--active' : ''}`} >
                            <i className="fa fa-th" aria-hidden="true"></i>
                            &nbsp;&nbsp;CardView
                        </div>
                    </div>
                </div>
                <Views isCardView={this.props.isCardView} selectedTabIndex={this.props.selectedTabIndex} />
            </main>
        )
    }
}

export default Main