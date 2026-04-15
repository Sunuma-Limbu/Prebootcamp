// YOUR CODE BELOW

const oddCouple = (arr) => {
    let newArr = []
    let oddArrElem = []
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 1) {
            newArr.push(arr[i])
        }
    }
    oddArrElem = newArr.slice(0,2)
    return oddArrElem;
}