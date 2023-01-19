function addNums(num1 = 1, num2 = 1) {
 return num1 + num2;
}
console.log(addNums(5,7));

//Arrow function 
const addSub = (num1 = 1, num2 = 1) => {
    return num1 + num2;
}
console.log(addSub(4,4));


//simplify arrow function
const addDiv = numA => numA + 8;
console.log(addDiv(3));

//ForEach()
todos.forEach((todo) => console.log(todo));
