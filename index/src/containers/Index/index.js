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
                <Header selectedTabIndex={this.props.selectedTabIndex} selectTab={this.props.selectTab} searchText={this.props.searchText} />
                <Sidebar />
                <Main selectedTabIndex={this.props.selectedTabIndex} isCardView={this.props.isCardView} toggleViewMode={this.props.toggleViewMode} wordForSearch={this.props.wordForSearch} />
                <Footer />
            </div>
        )
    }
}

App.propTypes = {
    selectTab: React.PropTypes.func.isRequired,
    toggleViewMode: React.PropTypes.func.isRequired,
}

export default App