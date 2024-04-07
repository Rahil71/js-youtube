let name="Rahil"
let repoCount=3
// console.log(name+" "+repoCount);
// this method is not preferred

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)
// This is known as string interpolation
const myData=new String("Hello my name is Rahil")
// console.log(myData);

// console.log(myData[7])
// console.log(myData.length);

console.log(myData.toUpperCase())
console.log(myData.charAt(6))
console.log(myData.indexOf('i'))
console.log(myData.substring(0,8))
console.log(myData.slice(-10))
console.log(myData.slice(3,8))

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))
console.log(myData.split('-'));