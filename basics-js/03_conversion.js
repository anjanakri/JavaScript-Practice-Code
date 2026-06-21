let score="33abc"

console.log(typeof score);
console.log(typeof (score));

let value_in_number=Number(score) //we need to write first alphabet capital
console.log(typeof value_in_number)
console.log(value_in_number)

/*
Sometimes when we try to type convert the number
it is not accurate! why?
score="33" --- Number(score) --- number ------ which is okay!
score="33abc" --- Number(score) --- number --- it gives NaN--- 🔴Red Flag!
*/


/* 
in case of 
null converted into number gives 0
undefined gives NaN
true --- 1
false --- 0
string ---- NaN means Not a Number
*/

let isLoggedIn = ""
let booleanIsLoggedIn= Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

/*
BOOLEAN

1--- true
0---false
"" --- false
"abc" --- true
*/

//STRING

let someNumber = 33
let stringNumber= String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);
