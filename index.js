function findMinAndRemove(array){
    let minNum = array[0]
    let minIndex = 0
    for(let i = 0; i < array.length; i++) {
        let currentNum = array[i]
        if (currentNum < minNum) {
            minNum = currentNum
            minIndex = i
        }
    }
    array.splice(minIndex, 1)
    return minNum
}

function insertionSort(array){
    let newMin
    let sorted = []
    while (array.length > 0) {
        newMin = findMinAndRemove(array)
        sorted.push(newMin)
    }
    return sorted
}
