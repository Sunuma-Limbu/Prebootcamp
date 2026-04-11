// YOUR CODE BELOW
const myOr = (a, b, c) => {
    if (a) {
        return a;
    }
    if (b) {
        return b;
    }
    return c;
}

const myAnd = (a, b, c) => {
    if (!a) {
        return a;
    }
    if (!b) {
        return b;
    }
    return c;
}