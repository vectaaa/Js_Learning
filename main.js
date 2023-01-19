//The types of wannings and notifications in conosle.
console.log('Hellow Nigeria');
// consohle.error('This is an error');
// console.warn('This is a warning'); 

//The let and const
let score = 34;
score = 45;
console.log(score);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
//The const 
const scores = 56;
console.log(score)


//String, Numbers, Boolesan,numm and undefined.
const person = "Vecta";
const age =  23;
const rating = 9.8;
const isCool = false;
const x = null;
const y = undefined;
let z;

console.log(typeof z);

//Concattenation
console.log("My name is " + person + " and i am " + age);

//Template String
const hello = `My name is ${person} and i am ${age} `;

console.log(hello);

//How to count string
const s = "Hello World i am new year"
console.log(s.substring(0, 20).toUpperCase());

//Returning an Array of Split
const v = "Hello Nigeria";
console.log(v.split(""));

//Returning an Array of Split making use of Comma space
const m = "Hello, Technology, Computers, Nigeria";
console.log(m.split(","));

//Arrays - variables that hold multiple values
 const numbers = new Array(1,2,3,4,5);
 console.log(numbers);

 const fruits = ["cabbage","apples","oranges","sugarcane","carrots","apples"];
 fruits[5] = "oranges"; //This just adds the oranges to the 5th index in the array
 fruits.push("cabbage"); //This basically means adding something to the end of the array.
 fruits.unshift("strawberries"); //This takes the strawberries to the first index.
 fruits.pop();
 console.log(fruits);
 console.log(Array.isArray(fruits)); //This is tyo che4ck if something is in an array. You can always put in the this func. 
 console.log(fruits.indexOf("oranges"));