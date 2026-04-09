// ### Only Odds

// Define a function, `onlyOdds`, that accepts a number as an argument. `onlyOdds`
// should should return the sum of all the odd numbers between the given number
// and 1.

// If `onlyOdds` receives an argument less than 1, it should return 0.

// ```javascript
// onlyOdds(6); // => 9 (5 + 3 + 1)
//```
// YOUR CODE BELOW

const onlyOdds = (n) =>{
    if(n < 1) return 0;

    let sum = 0;

    for (let i = 1; i <= n; i++){
        if (i % 2 !== 0){
            sum+=i;
        } 
    }

    return sum
}

