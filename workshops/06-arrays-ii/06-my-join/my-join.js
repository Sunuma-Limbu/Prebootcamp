// YOUR CODE BELOW

const myJoin = (arr, separator) => {
    let joinedstring = '';

    if (separator === undefined) {
        separator = ',';
    }

    for (let i = 0; i < arr.length - 1; ++i) {
        let currentElem = arr[i];

        if (currentElem === undefined || currentElem === null) {
            currentElem = '';
        }

        joinedstring += currentElem + separator;
    }

    if (arr.length) {
        let lastElem = arr[arr.length - 1];

        if (lastElem === undefined || lastElem === null) {
            lastElem = '';
        }

        joinedstring += lastElem;
    }

    return joinedstring;
}