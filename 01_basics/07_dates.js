const myDate=new Date()
console.log(myDate.toString())
// console.log(myDate)
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleDateString())
// console.log(typeof myDate)

const date1=new Date(2023,0,13)
// year-month-date
// console.log(date1.toDateString())
const date2=new Date(2023,2,6,14,8,12)
// year-month-date-hours-minutes-seconds
// console.log(date2.toLocaleString())
const date3=new Date("11-30-2003")
console.log(date3.toLocaleString())

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
// Months from 0-12
console.log(newDate.getDay());
// week days from 0-7

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})