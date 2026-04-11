// YOUR CODE BELOW

const zeroDarkThirty = (arg1) => {
    if (arg1 === 0) {
        return NaN
    }

    let str = String(arg1)
    let nonzero = '';
    
    for (let char of str) {
        if (char != '0') {
            nonzero += char;
        }
    }
    return Number(nonzero)
}