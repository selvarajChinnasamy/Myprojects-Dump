function binarySearch(array, searchItem) {
    array.sort(comparator);
    console.log(array);
    arrayReducer(array, searchItem);
}

function arrayReducer(array, searchItem) {
    let n = Math.floor(array.length/2);
    if(n === 0 && array[n] !== searchItem){
        console.log(`No Match found`);
        return;
    }
    if(array[n] === searchItem){
        console.log(`Match found`);
        return;
    }
    if(array[n] > searchItem) {
        array.splice(n, n);
        arrayReducer(array, searchItem);
    } else {
        array.splice(0, n);
        arrayReducer(array, searchItem);
    }
}

function comparator(a, b) {
    return a - b;
}

binarySearch([1, 5, 19, 8, 10, 115, 120, 3, 4, 6], 9);

// arrayLength/2 > searchItem;