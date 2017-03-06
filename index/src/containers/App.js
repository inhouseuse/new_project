import React from 'react';
import { connect } from 'react-redux';
import FormApp from './FormApp';
import { send } from '../actions/Actions'

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return {
        onClick: (value) => { dispatch(send(value)) },
    }
}

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(FormApp)