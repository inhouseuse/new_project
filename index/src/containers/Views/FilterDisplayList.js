export default (index, targetList) => {

    if (index !== 0) {
        let list = []
        list.push(targetList[index - 1])
        return list
    }
    
    return targetList

}