let firstItems = []

const getNoofRows = (totalLength, rowLength) => {
    return totalLength / rowLength
}

const generateRowFirstItem = (rowLength, totalLength) => {
    let arr = []
    let rows = getNoofRows(totalLength, rowLength)

    let item = 1
    for (let i = 0; i < rows; i++) {
        arr.push(item)
        item = item + rowLength
    }
    firstItems = arr
}

const getFirstItemofRow = (number, rowLength, totalLength) => {
    generateRowFirstItem(rowLength, totalLength)
    let value = 0;
    firstItems.map((item) => {
        if (number > item) {
            value = item
        } else if (number == item) {
            value = number
        }
        else {
            value = value
        }
    })
    return value
}

export default getFirstItemofRow