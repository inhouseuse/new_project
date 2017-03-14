// Header
import React from 'react'
import Tabs from '../Tabs/index'

class Header extends React.Component {

    render() {
    
        const serchPage = (value) => {
            console.log(value);
        }

        return (
            <header className="teal lighten-2 z-depth-4 navbar-fixed">
                 <nav className="extended-nav teal lighten-2">
                    <div className="nav-wrapper">
                        <div className="container">
                            <div className="flex">
                                <div>
                                    <a className="brand-logo"><i className="fa fa-flag" aria-hidden="true"></i> IndexPage</a>
                                </div>
                                <div className="searchForm marginLeft_auto">
                                    <div><i className="fa fa-search" aria-hidden="true"></i>&nbsp;&nbsp;</div>
                                    <div><input onChange={(e) => {serchPage(e.target.value)}} placeholder="Enter your text" type="text"/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="nav-content teal lighten-2">
                        <div className="container">
                            <Tabs selectedTabIndex={this.props.selectedTabIndex} selectTab={this.props.selectTab}/>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header