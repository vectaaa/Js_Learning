const x = 9;
const y = 12;
 

// if(x === 10){
//     console.log('x is 10');
// }else if(x>10){
//     console.log('x is greated than 10');
// }
//  else {
//     console.log('x is not 10');
// }

//Conditionals using the OR conditional
if(x > 5 || y > 11) {
    console.log("x is more than 5 or y is more than 10")
}

//Conditionals using the && conditional
if(x > 5 && y > 10) {
    console.log("x is more than 5 and y is more that 10")
}

//Tenary Operators example
const a = 12;
const color = x>10 ? "red":"green";
console.log(color);
