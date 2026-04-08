// ### Max of Three

// Write a function `maxOfThree` that accepts three number arguments. `maxOfThree`
// should return largest number of the three.

// ```javascript
// maxOfThree(5, 4, 10); // => 10

// maxOfThree(7, 7, 4); // => 7
// ```

// YOUR CODE BELOW
 const maxOfThree = (num1, num2, num3) =>{
    if(num1>num2 && num1>num3){
        return num1
    }
    else if (num2>num1 && num2>num3){
        return num2
    }
    else{
        return num3
    }
 }

 max = maxOfThree(20,30,10)
 console.log(max)