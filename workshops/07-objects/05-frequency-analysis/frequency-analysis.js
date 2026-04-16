// YOUR CODE BELOW

const frequencyAnalysis = (str) => {
    let newObj = {}

    for (let char of str) {
        if (newObj[char]) {
            newObj[char]++
        } else {
            newObj[char] = 1
        }
    }

    return newObj
}