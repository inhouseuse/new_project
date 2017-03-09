// Main
import React from 'react'
import Cards from '../Cards/index'

class Main extends React.Component {
    render() {
        return (
            <main className="container">
                <h1>Main</h1>
                <div className="row">
                    <div className="col s12">
                        <Cards />
                    </div>
                </div>
            </main>
        )
    }
}

export default Main