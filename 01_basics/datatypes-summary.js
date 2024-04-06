//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof myFunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3



// ***************************************************************



// Memory allocations

// Stack: 
// gives copy of original data
// all primitive datatypes

// Heap: 
// changes made in original data
// all non primitive datatypes

let uname="Rahil"
let anotherName=uname
anotherName="Love"
console.log(uname)
console.log(anotherName)

let empData={
    email: "rahil@gmail.com",
    id: 1,
    name: "rahil",
}
console.log(empData.email)
console.log(empData.id)
console.log(empData.name)

let emp2Data=empData
console.log(emp2Data.email)
console.log(emp2Data.id)
console.log(emp2Data.name)

emp2Data.email="kartik@gmail.com"
console.log(emp2Data.email)
console.log(emp2Data.id)
console.log(emp2Data.name)

// Here now after checking 1st employee data it has also got changed
// as heap always give reference of real data
console.log(empData.email)