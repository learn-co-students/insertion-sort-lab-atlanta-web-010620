function findMinAndRemove(array){
    array.sort((a,b) => a-b) 
    let min = array[0]
    array.shift() 
    return min; 
}

function insertionSort(array){
    let newArray = []; 
    while (array.length > 0){
        newArray.push(findMinAndRemove(array)); 
    }
    return newArray;
}
