// YOUR CODE BELOW

const myIndexOf = (source, searchValue, startIdx = 0) => {
    for(let i = startIdx; i <= source.length - searchValue.length; i++) {
        const curTerm = source.slice (i, i + searchValue.length);
        if (curTerm === searchValue) return i;
    }
    return -1;
}