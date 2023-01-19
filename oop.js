//Constructors of the the function
function Person(firstName, lasName, dob ) {
    this.firstName = firstName;
    this.lasName = lasName;
    this.dob = dob;
}

//Instantiate object
const person1 = new Person('Josh Idah', 'Smith', '3-9-2021');
const person2 = new Person('Rashford', 'Jones', '23-9-1998');

console.log(person1.dob);
console.log(person2);


//Another function
function Sock(color, size, amount, date ){ 
    this.color = color;
    this.size = size;
    this.amount = amount;
    this.date =  new Date(date) ;
    this.getBirthYear = function(){
        return this.dob.getFullYear();
    }
    //Now we use a template to get both first and last name
    this.getFullDesc = function(){
        return `${this.color} ${this.size}`;
    }
}

//Instantiate Object
const sock1 = new Sock('red', 'large', '`₦23,000', '2-11-2013');

console.log(sock1.getFullDesc());
