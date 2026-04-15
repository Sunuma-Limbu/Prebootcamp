// YOUR CODE BELOW

const myUnshift = (arr, value) => {
    let newArr = []
    newArr[0] = value;

    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i])
    }

    return newArr;
}