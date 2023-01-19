const x = 9;

//The tenary operator ? is the for the xcondition.
//That means if x is greater than 10, we set it to red and if not it changes to blue.
const color = x > 10 ? 'red' : 'blue';

console.log(color);

//switches
const collor = 'green';

//This switch case is another condition statement that will help handle 
switch(collor) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is NOT red or blue');
        break;
}
