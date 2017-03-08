// Header
import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <header>
                 <nav>
                    <div className="nav-wrapper">
                        <a href="#!" className="brand-logo">Logo</a>
                        <ul className="right hide-on-med-and-down">
                            <li><a href="sass.html">Sass</a></li>
                            <li><a href="badges.html">Components</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header