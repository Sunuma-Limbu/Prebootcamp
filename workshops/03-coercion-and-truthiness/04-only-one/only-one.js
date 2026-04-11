// YOUR CODE BELOW

const onlyOne = (arg1, arg2, arg3) => {
    let count = 0;
    if (arg1) count ++;
    if (arg2) count ++;
    if (arg3) count ++;

    if (count < 2 && count >0) {
        return true;
    } else {
        return false;
    }
}