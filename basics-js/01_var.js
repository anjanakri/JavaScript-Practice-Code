/*
Prefer not to use var
because of issue in block scope and functional scope
*/


const account_id=144553
let account_email="anjanakri.work@gmail.com"
var account_password="12345"
account_city="India" // we can decalre a variable like this also, but its never prefered
let account_state;
// account_id=23456

account_email="ak@ak.com"
account_password="245"
account_city="Ranchi"

console.log(account_id);
console.table([account_id, account_email, account_password, account_city, account_state])
