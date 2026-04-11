// YOUR CODE BELOW

const mySlice = (originalString, startIdx, endIdx) => {
    newStr = '';
    for (let i = startIdx; i < endIdx; i++) {
        newStr += originalString[i]
    }
    if (endIdx == undefined) {
        for (let i = startIdx; i < originalString.length; i++) {
            newStr += originalString[i]
        }
    }
    if (startIdx == undefined && endIdx == undefined) {
        return originalString;
    }
    return newStr;
}