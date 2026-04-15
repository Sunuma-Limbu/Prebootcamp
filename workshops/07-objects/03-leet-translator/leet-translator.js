let letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
let leetChars = ['@', '8', '(', '|)', '3', 'ph', 'g', '#','l', '_|', '|<', '1', "|'|'|", '/\/', '0', '|D', '(,)', '|2', '5', '+', '|_|', '|/', "|/|/'",'><', 'j', '2'];

// YOUR CODE BELOW

const leetTranslator = (str) => {
    const lowerStr = str.toLowerCase();
    let result = '';

    let leetCodex = {};

    for (let i = 0; i < letters.length; i++) {
        leetCodex[letters[i]] = leetChars[i];
    }
    
    for (let char of lowerStr) {
        let letterChar = leetCodex[char];

        if (letterChar) {
            result += letterChar;
        } else {
            result += char;
        }
    }

    return result;
};