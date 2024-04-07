const num1=100;
// console.log(num1)

// console.log(num1.toString())
// console.log(num1.toString().length)

const num2=new Number(201.89)
// console.log(num2);
// console.log(num2.toFixed(2))
// tofixed is for numbers after decimal point
// console.log(num2.toPrecision(4))
// toPrecision is used to round-off from 0th position

const bigNum=125278390
// console.log(bigNum)
// console.log(bigNum.toLocaleString())
// This one follows american standard
// console.log((bigNum.toLocaleString('en-IN')))
// This one follows indian standard

// ***********MATH************

const num3=-2398
const num4=67.2
console.log(Math.abs(num3))
console.log(Math.floor(num4))
console.log(Math.ceil(num4))
console.log(Math.min(7,4,9,2))
console.log(Math.max(7,4,9,2))
console.log(Math.round(7.83))
console.log(Math.round(7.43))
console.log(Math.random());
// It always gives numbers from between 0-1
console.log(Math.random()*10)
// This will give number from between 0-10 but if number from random is like 0.0233
// it will give 0, so to avoid this we will add 1
console.log((Math.random()*10)+1)
console.log(Math.floor((Math.random()*10)+1))

const min=30
const max=50

console.log(Math.floor((Math.random()*(max-min+1)+min)))