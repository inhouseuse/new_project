import React from 'react';
import { connect } from 'react-redux';
import IndexApp from '../Index/index';
import {select}     from '../../actions/index'
import {toggelView} from '../../actions/index'


// グローバルなstateから必要な値を取ってきて、コンポーネントのthis.propsとして渡す処理
function mapStateToProps(state) {
    return state;
}

// clickでactionを飛ばす
function mapDispatchToProps(dispatch) {
    return {
        selectTab: (value) => { dispatch(select(value)) },
        toggleViewMode: () => { dispatch(toggelView) },
    }
}

// connect関数でReduxとReactコンポーネントを繋ぐ
export default connect (
    mapStateToProps,
    mapDispatchToProps
)(IndexApp)