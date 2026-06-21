//PRIMITIVE
/*
Primitve datatypes are call by refrence 
ie. the value is copied then given to us.
String
Number
Boolean
null
Undefined
Symbol
BigInt for scientific
*/
const id=Symbol('123')
const anotherid=Symbol('123')
console.log(id===anotherid); //gives false

const bigNumber=345789000880989n //n in the end refers to the bigint



//  REFERENCE (Non Primitive)

/**
 * Array
 * Objects
 * Functions
 */

//Array
const avengers=["Ironman", "thor", "hulk"];

//Object

let myObj= {
    name: "Anjana",
    age: 19,
}

//Fuction

// we can also treat function as variable in JS

//a function without variable treatment
func=function(){        
    console.log("Hello World");
}

//function with variable treatment
const myfunction =function(){
    console.log("Hello World!");
}

console.log(typeof myfunction);// GIVES FUNCTION but is called object Function