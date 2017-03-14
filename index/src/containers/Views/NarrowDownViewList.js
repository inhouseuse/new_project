export default (targetList, word) => {
    
    if (word === '') {
        return targetList
    }

    let newList = []

    targetList.map((item , index) => {

        let newGroup = []
        let newPages = []

        item.pages.map((item, index) => {
            
            if(item.title.includes(word)) {
                newPages.push(item)
            }

        })

        newGroup = Object.assign({}, item)
        delete newGroup.pages
        newGroup.pages = newPages
        newList.push(newGroup)
    });

    return newList

}

