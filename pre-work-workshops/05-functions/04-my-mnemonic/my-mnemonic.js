// ### My Mnemonic

// Write a function `myMnemonic` that accepts up to four strings. `myMnemonic`
// should return a new string of the first characters for each string argument.

// Note that the user may not pass in all four strings!

// ```javascript
// myMnemonic('Must', 'Accept', 'Sugar', 'Happiness'); // => MASH
// myMnemonic('We', 'Eat', 'Eggs'); // => WEE
// ```

// YOUR CODE BELOW

const myMnemonic = (...words) =>{
    let mnemonic = '';

    for(let i=0; i<words.length; i++){
        const currentWord = words[i];
        const currentCharacter = currentWord[0];

        mnemonic += currentCharacter;
    }
    return mnemonic
}

newstr = myMnemonic('Must', 'Accept', 'Sugar', 'Happiness')
console.log(newstr)