export const select = (value) => {
    return {
        type: 'SELECT',
        value
    }
}

export const toggelView = { type: 'TOGGLEVIEW' }

export const searchText = (value) => {
    return {
        type: 'SEARCHTEXT',
        value
    }
}