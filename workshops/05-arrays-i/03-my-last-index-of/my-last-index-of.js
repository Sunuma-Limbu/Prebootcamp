// YOUR CODE BELOW
const myLastIndexOf = (arr, searchValue, startIdx = arr.length - 1) => {
    let newArr = [];
    for (let i = 0; i <= startIdx; ++i) {
        if (arr[i] === searchValue) {
            newArr.push(i);
        }
    }
    if (newArr.length === 0) {
        return -1;
    }
    return newArr[newArr.length - 1];
}