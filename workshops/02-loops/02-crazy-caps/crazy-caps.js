// ### Crazy Caps

// Define a function, `crazyCaps`, that accepts a string as an argument.
// `crazyCaps` should return a string in which every other character is
// capitalized. The first letter should be lower-cased.

// ```javascript
// crazyCaps('fullstack is amazing'); // => fUlLsTaCk iS AmAzInG!
// ```

// YOUR CODE BELOW

const crazyCaps = (str) => {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        if (i % 2 === 0) {
            newStr += str[i].toLowerCase();
        } else {
            newStr += str[i].toUpperCase();
        }
    }
    return newStr;
}