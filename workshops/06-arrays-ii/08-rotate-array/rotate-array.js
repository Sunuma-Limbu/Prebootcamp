// YOUR CODE BELOW

const rotateArray = (arr, num) => {
    if (num === 0) {
        return arr
    }
    
    len = arr.length

    if (num > 0) {
        let lastPart = arr.slice(len-num)
        let firstPart = arr.slice(0, len-num)
        return lastPart.concat(firstPart)
    }

    if (num < 0) {
        num = Math.abs(num);

        let firstPart = arr.slice(0, num);
        let lastPart = arr.slice(num);

        return lastPart.concat(firstPart);
    }
}