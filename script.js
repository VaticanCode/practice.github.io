// Declaring variables
// var oruko = "Adesuyi";
// let apele = " Adebola";
// const apemo = "Adetutu";

// // console.log(apele)

// console.log(oruko)
// // console.log(apemo)

// oruko = "Sijuwade";

// console.log(oruko)

// let age = 25
// console.log(age)

// let food = ['garri','fufu','isu']
// console.log(food)

// let num = [1, 2, 3, 4]
// console.log(num)

// let orisirisi = ['isu', 'garri','elubo', 23, 'agbado',3]
// console.log(orisirisi)

// let studentData = {name: 'Ojo Ade', age: 23, class:'SSS1'}
// console.log(studentData)


// Properties - Length
var oruko = "Adesuyi";
console.log(oruko.length)

// toUpperCase()

var oruko = "Adesuyi";
console.log(oruko.toUpperCase())

// toLowerCase()
console.log(oruko.toLocaleLowerCase())

// includes()
console.log(oruko.includes())
console.log(oruko.includes('Ade'))

// slice()
console.log(oruko.slice(0, 4));
console.log(oruko.slice(0, 6));

console.log(oruko.includes('Ade'));

// number properties
console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)

// Number methods
let num = 5.6789;
console.log(num.toFixed(2));
console.log(parseInt('100'));
console.log(parseFloat('100'))

let num1 = '236'
console.log(parseInt(num1))

let num2 = '23.456'
console.log(parseFloat(num2))


// Working oon array
let food = ['garri','fufu','isu']
const lenFood = food.length
console.log(lenFood) 
console.log(food[1])

//Array methods  - push()

const addItem = food.push('Iyan')
console.log(food)

// pop()
food.pop()
console.log(food)


// unshift() - Adds to the start
const addItem1= food.unshift('Iyan')
console.log(food)

// shift() - Removes from the start
food.shift()
console.log(food)

// Map
let num4 = [1, 2, 3, 4]
const addMap = num4.map( n=> n+1)
console.log(addMap)

// Object properties

let studentData1 = {name: 'Ojo Ade', age: 23, class:'SSS1'}
console.log(studentData1.name)
console.log(studentData1['name'])

// Operators- Arithmetic
const number1 = 10 - 5
console.log(number1)

// Assignment 

let total = 5
// total = total + 20
// console.log(total)

total +=15
console.log(total)

// comparison

let check = 6 == '6'
console.log(check)

let check1 = 6 === '6'
console.log(check1)

let test = 12 < 10
console.log(test)

// Control flow - if statement 

let age = 18
if (age>=18){
    console.log('You can vote')
}

// else statement 

let age1 = 10
if (age1 >=18){
    console.log('You can vote')
}else{
    console.log('You are too old for this category')
}

// else if statement 

const castVote = 15

if (castVote <=10){
    console.log('You can only vote once')
} else if (castVote <=18){
    console.log('You are allowed to vote twice')
}