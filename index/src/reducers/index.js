const initialState = {
    selectedTabIndex: 0,
    isCardView: true,
    wordForSearch: '',
}

export default function reducer(state = initialState, action)  {
    switch (action.type) {
        case 'SELECT': {
            return Object.assign({}, state, {
                selectedTabIndex: action.value,
            })
        }
        case 'TOGGLEVIEW': {
            return Object.assign({}, state, {
                isCardView: !state.isCardView,
            })
        }
        case 'SEARCHTEXT' :{
            return Object.assign({}, state, {
                wordForSearch: action.value,
            })
        }

        default:
            return state
    }
}