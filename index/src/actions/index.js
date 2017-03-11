export const select = (value) => {
    return {
        type: 'SELECT',
        value
    }
}

export const toggelView = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}