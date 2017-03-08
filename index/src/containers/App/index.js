// containers/App
import React from 'react'
import Header from '../Header/index'
import Sidebar from '../Sidebar/index'
import Main from '../Main/index'
import Footer from '../Footer/index'

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Sidebar />
                <Main />
                <Footer />
            </div>
        )
    }
}

export default App