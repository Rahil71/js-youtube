const accountId=21
// const is permanent you cannot change the value
let accountName="Rahil"
// let is use instead of var as there was a problem with block scope and functional scope in var
// u can re-assign a value
var accountEmail="rahilshaikh7117@gmail.com"
// Not a good practice
accountCity="Mumbai"
// Not a good practice
let accountState
// The value is not assigned so it is undefined

console.table([accountId,accountName,accountEmail,accountCity,accountState])