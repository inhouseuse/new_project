import React from 'react'
import classNames from 'classnames'

class Button extends React.Component {
    
    render() {
        const className = classNames(
            {'disabled': this.props.disable},
            this.props.className
        )
        return (
            <button type="button" className={className}>
                {this.props.label}
            </button>
        )
    }
}

Button.defaultProps = {
  className: 'btn waves-effect btn-large pink accent-2'
}

export default Button