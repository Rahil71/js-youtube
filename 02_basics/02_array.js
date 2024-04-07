const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)
// array adds everything as an element
// so here it added another array as an element
// console.log(marvel_heros[3][2]);

const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);
// concat adds at last

const all_new_heros = [...marvel_heros, ...dc_heros]
// spread operator 
// u can even add more than 2
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// as here there are elements inside elements inside elements
// to bring all of them in same level we can use flat
const real_another_array = another_array.flat(Infinity)
// infinity means go upto last level
// we can even mention the specific level instead of infinity
// console.log(real_another_array);

// console.log(Array.isArray("Hitesh"))
// Array.isArray() returns true if an object is an arry, otherwise false
// console.log(Array.isArray(another_array))

console.log(Array.from("Rahil"))
// The Array.from() method returns an array from any iterable object

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))
// Array.of() creates a new array from any number of arguments