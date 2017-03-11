const initialState = {
    selectedTabIndex: 0,
    isCardView: true,
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
                isCardView: !isCardView,
            })
        }
        default:
            return state
    }
}