// YOUR CODE BELOW

let you = {
    name : 'Alyssa'
}

let me2 = {
    name : 'Tarana',
    getGreeting : function(otherPerson) {
        return `Hi ${otherPerson.name}, my name is ${this.name}.`
    }
}

console.log(me2.name)
console.log(you.name)
me2.getGreeting(you)