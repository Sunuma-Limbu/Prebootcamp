// YOUR CODE BELOW

const mostVowels = (str) => {
    const wordsArray = str.split('.')
    .join('')
    .split(',')
    .join('')
    .split(' ');
    const VOWELS = 'aeiouAEIOU';

    let maxVowelCount = 0;
    let maxWord = '';

    for (let i = 0; i < wordsArray.length; ++i) {
        const currentWord = wordsArray[i];
        let currentVowelCount = 0;

        for (var j = 0; j < currentWord.length; ++j) {
            const currentLetter = currentWord[j];

            if (VOWELS.indexOf(currentLetter) !== -1) {
                ++currentVowelCount;
            }
        }

        if (currentVowelCount > maxVowelCount) {
            maxVowelCount = currentVowelCount;
            maxWord = currentWord;
        }
    }
    return maxWord;
}