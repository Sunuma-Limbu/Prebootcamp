// YOUR CODE BELOW

const lastFridayNight = (transaction) =>{
    let totalAmount = 0;
    for (let i = 0; i < transaction.length; i++) {
        totalAmount += transaction[i].amount;
    }
    return totalAmount;
}
