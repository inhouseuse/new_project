// Main
import React from 'react'
import Cards from '../Cards/index'

class Main extends React.Component {
    render() {

        const space = {
            height: '20px'
        }

        return (
            <main className="container">
                <div style={space}></div>
                <h1>Start App</h1>
                <Cards />
            </main>
        )
    }
}

export default Main