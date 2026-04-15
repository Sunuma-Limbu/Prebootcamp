// YOUR CODE BELOW

const myIncludes = (arr, searchValue) => {
    for (let item of arr) {
        if (item === searchValue) {
            return true;
        }
    }
    return false;
}