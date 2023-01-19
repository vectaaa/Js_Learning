
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

//forEach, map, filter
todos.forEach(function(todo) { 
    console.log(todo.txt);
});

//Map
todos.map(function(todo) {
    console.log(todo.txt);
});

const todoText = todos.map(function(todo){
    return todo.txt;
});
console.log(todoText); 

//filter. This returns all the ones with the isCompleted true.
const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
});
console.log(todoCompleted); 

//filter. This returns all the text that falls under isCompleted true using the map.
const todoComplted = todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.txt;
})
console.log(todoComplted); 
