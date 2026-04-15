// YOUR CODE BELOW

const mySlice = (arr, sidx, eidx) => {
    let newArr = [];

    // if both are undefined → full copy
    if (sidx === undefined && eidx === undefined) {
        sidx = 0;
        eidx = arr.length;
    }

    // default values
    if (sidx === undefined) {
        sidx = 0;
    }

    if (eidx === undefined) {
        eidx = arr.length;
    }

    // handle negative start
    if (sidx < 0) {
        sidx = arr.length + sidx;
    }

    // handle negative end
    if (eidx < 0) {
        eidx = arr.length + eidx;
    }

    // clamp values
    if (sidx < 0) sidx = 0;
    if (eidx > arr.length) eidx = arr.length;

    // build result
    for (let i = sidx; i < eidx; i++) {
        newArr.push(arr[i]);
    }

    return newArr;
};