// YOUR CODE BELOW

const zooInventory = (arr) => {
    let newArr = []
    for (let i = 0; i < arr.length; ++i) {
        let name = arr[i][0];
        let animal = arr[i][1][0];
        let age = arr[i][1][1]

        newArr.push(`${name} the ${animal} is ${age}.`)
    }
    return newArr;
}