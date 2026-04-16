// YOUR CODE BELOW

const callThemAll = (obj, value) => {
    let result = []

    for (let key in obj) {
        if (typeof obj[key] === 'function') {
            result.push(obj[key](value))
        }
    }

    return result;
}