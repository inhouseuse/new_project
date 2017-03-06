import React from 'react'

export default class FormDisplay extends React.Component {
    render() {

        let li = []

        {this.props.dataList.map((item, index) => {
            li.push(
                <li key={index}>{item.value}</li>
            )
        })}
        return (
            <ul>
                {li}
            </ul>
        )
    }
}

FormDisplay.propTypes = {
    dataList: React.PropTypes.array.isRequired
}