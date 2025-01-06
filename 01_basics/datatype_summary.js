// Primitive 

// 7 types 
// - STRING
// - Number
// - Boolean
// - null
// - undefined
// - Symbol //used when there is a component and we want to make it unique
// - BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail = undefined; // let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 53724381384234325324565347814739n;
// console.log(bigNumber);

// Reference Types or Non - Primitive
// - Arrays
// - Objects
// - Functions

const heros = ["captain","rocket","groot"]

let myObj = {
    name: 'Satyanshu',
    age: 23,
}

const myFunction = function(){
    console.log("Hello World!");
    
}

console.log(typeof(anotherId));

