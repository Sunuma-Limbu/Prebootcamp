// ### Do You Play the Theremin

// Define a function `doYouPlayTheTheremin` that accepts a string as an argument.
// `doYouPlayTheTheremin` should return true if the inputted string starts with the
// letters `s` or `S`. Otherwise, `doYouPlayTheTheremin` should return false.

// ```javascript
// doYouPlayTheTheremin('Griffin'); // => false
// doYouPlayTheTheremin('Scott'); // => true
// ```

// YOUR CODE BELOW

const doYouPlayTheTheremin = (str) =>{
    if (str[0]=='s' || str[0]=='S'){
        return true;
    }
    return false
}
