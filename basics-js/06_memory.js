/**
 * Stack & Heap
    * Stack (Primitive)
    * Heap (Non-Primitive)
 */

//Stack
let Name="Anjana";
let updated_name=Name;
updated_name="Kumari";

console.log(updated_name);
console.log(Name);

//Heap
let user={
    Name: "Anjana",
    Enrollement: 24103005
}

let user2=user;
user2.Name="Anjana Kumari"

console.log(user.Name); //the name changes for both to Anjana Kumari
console.log(user2.Name);



