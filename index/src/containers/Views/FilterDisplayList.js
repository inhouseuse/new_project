export default (index, cardlist) => {

    if (index !== 0) {
        let list = []
        list.push(cardlist[index - 1])
        return list
    }
    
    return cardlist

}