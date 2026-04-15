// YOUR CODE BELOW
const evenAndOdd = (arr) => {
    let evenArr = []
    let oddArr = []

    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] % 2 === 0) {
            evenArr.push(arr[i])
        } else {
            oddArr.push(arr[i])
        }
    }

    let newArr = [evenArr, oddArr]
    return newArr;

}