const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

//The submit button and its function
//This is basically for validation.
function onSubmit(e) { 
    e.preventDefault();
//The condition for the onSubmit function
if(nameInput.value === '' || emailInput.value === ''){

//Lets make use of a proper validation 
msg.classList.add('error');
msg.innerHTML = 'Please enter all fields';
// alert('Entry firled cannot be blank');

setTimeout(() => msg.remove(), 3000); //this is to set the timeout for the validation message

}else{
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(
        `${nameInput.value} : ${emailInput.value}`
    ));
    userList.appendChild(li);

    //Clear fields: This is responsible for clearing the fields in the input area.
    nameInput.value = '';
    emailInput.value = '';
    console.log('success');
 }
}