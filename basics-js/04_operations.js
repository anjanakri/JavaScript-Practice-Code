// ************** Operations *************

let value =  3
let neg_value = -value // gives -3
console.log(neg_value);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2%2);
console.log(2/2);

let str1="hello"
let str2="anjana"

let str3=str1+str2
console.log(str3)

console.log("1"+2); //gives 12
console.log(1+"2"); //gives 12
console.log("1"+2+2); //gives 122
console.log(1+2+"2"); //gives 32


console.log(true) //gives true
console.log(+true) //gives 1
// console.log(true+) //gives error
console.log(+""); //gives 0

// ****** Comparioson Operations ********

console.log(2>1);
console.log(2<1);
console.log(2>=1);
console.log(2<=1);
console.log(2==1);
console.log(2!=1);

console.log("2">1); //although the JS converted the "2" to 2 but we should make sure that while compaaring both are of same datatype
console.log("02">1);

console.log(null>0); //gives false (comparison check)
console.log(null==0); //gives false (equality check)
console.log(null>0); //gives true! (it does not give predective result)

/*
The thing is that comparison converts null to a number, treating it as zero
*/


// for undefined it gives false in all the cases 

// strict check === means == turns conversion
console.log("2"===2);//=== strictly checks value and datatype both 