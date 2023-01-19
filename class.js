//Class
class Person{
    constructor(fName, lName, dob){
        this.fName = fName;
        this.lName = lName;
        this.dob = new Date(dob);
    }

    getBirthYear(){
        return this.dob.getBirthYear();
    }

    getFullName(){
        return `${this.fName} ${this.lName}`;
    }
}
    //Instantiate Object
    const person1 = new Person('John', 'Doe', '23-8-1998');
    const person2 = new Person('Mary', 'Ikono', '2-11-1998');

    console.log(person2.getFullName);
    console.log(person1);


