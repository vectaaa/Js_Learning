//Object Literals
const person = {
    firstNme: "Victor",
    lastName: "Onuchukwu",
    age: 21,
    hobbies: ["music", "movies", "sports"],
    address: {
        street: "14 Alhaja Alake Street",
        city: "Yaba",
        state: "Lagos State"
    }
}

// console.log(person.firstNme, person.lastName, person.hobbies[1]);

// person.email = "victoronuchukwu16@gmail.com";

// This is to display everything. 
console.log(person.firstNme, person.lastName, person.address.city);

//This display only the city from the list.
const{firstName, lastName, address: {city}} = person;
console.log(city);

//You can directly add feilds.
person.email = "victoronuchukwu16@gmail.com";
console.log(person);

//Creating an Array of Object
const todos = [
    {
        id: 1,
        txt: "Take my hand and let them move",
        age: 34,
        isCompleted: true
    },
    { 
        id: 2,
        txt: "Meeting with boss",
        age: 23,
        isCompleted: false
    },
    {
        id: 3,
        txt: "Dentistry is an oversight of medicine",
        age: 29,
        isCompleted: true 
    },
]

console.log(todos[1].txt); 

//How to convert to JSON for sending to a server.
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

//ForLoops in JS
for(j=0; j<10; j++){
console.log(`For Loop Number: ${j}`);
}   

//While Loop 
let i = 0;
while(i < 19){
    console.log(`While Loop Number: ${i}`);
    i++;
}
//Not The best way to loop through an array.
for(let i = 0; i<todos.length; i++){
    console.log(todos[i].age);
}

//A cleaner way to loop through arrays
for(let todo of todos){
    console.log(todo.txt);
}

