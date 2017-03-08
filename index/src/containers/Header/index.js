// Header
import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <header>
                 <nav className>
                    <div className="nav-wrapper">
                        <div className="container">
                            <a href="#!" className="brand-logo"><i className="fa fa-bars" aria-hidden="true"></i> IndexPage</a>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header