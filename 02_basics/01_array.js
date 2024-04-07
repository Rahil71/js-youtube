const myArr1=[1,2,3,4,5,6]
// can contain same or different types of data in a single array
// console.log(myArr1)

const myArr2=new Array(1,7,3,5,4)
// console.log(myArr2)

myArr2.push(7)
// Adds element at end of the array
myArr2.push(9)
// console.log(myArr2)
myArr2.pop()
//Removes element from end of the array
// console.log(myArr2)

myArr1.unshift(7)
// Adds element at start of the array
myArr1.unshift(5)
// console.log(myArr1)
myArr1.shift()
// Removes element from start of the array
// console.log(myArr1)

// console.log(myArr1.includes(10))
// console.log(myArr1.indexOf(3))

const myArr3=myArr1.join()
// console.log(myArr3)

const myArr4=[1,2,3,4,5,6,7,8]
// console.log(myArr4)
const myArr5=[9,10,11,12,13,14]
// console.log(myArr5)

// slice: 
// does not include the last element mentioned 
// does not made modifications in the original array
console.log(`Array 4 before: ${myArr4}`)
console.log(myArr4.slice(2,5))
console.log(`Array 4 after: ${myArr4}`)

// splice:
// includes the last element mentioned
// modifies the original array
console.log(`Array 5 before: ${myArr5}`)
console.log(myArr5.splice(2,5))
console.log(`Array 5 after: ${myArr5}`)