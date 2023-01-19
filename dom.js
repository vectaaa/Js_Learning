
//Single Element.
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('.h1'));


//Multiple Element.
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('item'));

const items = document.querySelectorAll('.item');

items.forEach((item) => console.log(item));

//Now to remove the list items
const ul = document.querySelector('.items');

// ul.remove(); //This is to remove all the items in the list.

// ul.firstElementChild.remove(); //This is to remove the first item         

ul.firstElementChild.textContent = "Hello";
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>' 

const btn = document.querySelector('.btn');
btn.style.background = 'blue';
