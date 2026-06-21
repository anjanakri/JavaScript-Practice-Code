const Coder_Name="Anjana";
const Repo_Count=40;

//just like in python we use f"Hello {abc}", in JS we use `${}` (backtick)
console.log(`Hello\nI'm ${Coder_Name}, and my repo count is ${Repo_Count}.`);

//another way of defining the String
const DC_username= new String ("anjanakri");
console.log(DC_username);

/*
 * if we run this code in the **console** it gives String object
 * it may look like array but it is a STRING OBJECT
 * When we run the in the console it gives us ***PROTOTYPE***
 * PROTOTYPE provides us with a operations we can perform on the string
 * those function we can use directly like 
        * string.operation()
 */

console.log(Coder_Name.__proto__);
console.log(Coder_Name.length);
console.log(Coder_Name.charAt(2)); // we pass index and it returns the element present there
console.log(Coder_Name.indexOf('a')); //we pass element to see its position

