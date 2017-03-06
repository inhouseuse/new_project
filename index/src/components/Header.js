import React from 'react'

export default class Header extends React.Component {
    render() {
        return (
            <header className="z-depth-1 navbar-fixed">
                <nav className="top-nav indigo">
                <div className="nav-wrapper">
                    <div className="container white-text">
                    <a className="brand-logo">
                        <span className="header-bar"><i className="fa fa-bars" aria-hidden="true"></i></span>
                        IndexPage
                    </a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                    </ul>
                    </div>
                </div>
                </nav>
            </header>
        )
    }
}