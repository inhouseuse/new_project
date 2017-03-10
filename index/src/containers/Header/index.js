// Header
import React from 'react'
import Tabs from '../Tabs/index'

class Header extends React.Component {
    render() {
        return (
            <header className="teal lighten-2 z-depth-4 navbar-fixed">
                 <nav className="extended-nav teal lighten-2">
                    <div className="nav-wrapper">
                        <div className="container">
                            <a href="#" className="brand-logo"><i className="fa fa-bars" aria-hidden="true"></i> IndexPage</a>
                        </div>
                    </div>
                    <div className="nav-content teal lighten-2">
                        <div className="container">
                            <Tabs />
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header