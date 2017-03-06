const initialState = {
    value: '',
    valueList: []
}

export default function reducer(state = initialState, action)  {
    switch (action.type) {
        case 'SEND': {
            return Object.assign({}, state, {
                value: action.value,
                valueList: [
                    ...state.valueList,
                    {value: action.value}
                ]
            })
        }
        default:
            return state
    }
}