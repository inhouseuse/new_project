// Header
import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <header>
                 <nav>
                    <div className="nav-wrapper">
                        <div className="container">
                            <a href="#!" className="brand-logo"><i className="fa fa-bars" aria-hidden="true"></i> IndexPage</a>
                            {/*<form>
                                <div className="input-field right">
                                    <input id="search" type="search" />
                                    <label className="label-icon" for="search"><i className="fa fa-search small" aria-hidden="true"></i></label>
                                    <i className="material-icons">close</i>
                                </div>
                            </form>*/}
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header