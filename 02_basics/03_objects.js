// object can be created using two types:

// literals
// when object is made using literals no singleton is created
// const user ={}

// constructors
// singleton gets automatically created when we made object using constructros
// Object.create

// here we will see abt literals

const empData={
    name: "Rahil",
    // object stores in key-value format
    // it always stores key as string
    age: 21,
    email: "rahil@gmail.com",
    location: "Mumbai",
    isLoggedIn: "True",
    "full name":"Rahil Sameer Shaikh"
}

// console.log(empData.name)
// Using dot (.) should not be accessed

// console.log(empData["name"])
// using brackets is a good practice
// and as we know the keys are stored in string format we should use ""\

empData.email="rahil@apple.com"
// console.log(empData)
// Object.freeze(empData)
// we cant modify the data after using freeze
// It wont be showing any error but it wont be updating any data

// empData.email="rahil@tcs.com"
// console.log(empData)

empData.greets=function(){
    console.log("Hello JS user")
}

console.log(empData.greets())
// Now if we kept the freeze line uncomment it will give error