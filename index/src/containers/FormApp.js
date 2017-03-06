import React from 'react'
import FormInput from '../components/FormInput'
import FormDisplay from '../components/FormDisplay'


export default class FormApp extends React.Component {
    render() {
        return (
            <div>
                <FormInput handleClick={this.props.onClick} />
                <FormDisplay dataList={this.props.valueList} />
            </div>
        )
    }
}
FormApp.propTypes = {
    onClick: React.PropTypes.func.isRequired,
    value: React.PropTypes.string.isRequired,
}