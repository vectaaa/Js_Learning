const btn = document.querySelector('.btn');

btn.addEventListener('mouseout', (e) => {
    e.preventDefault(); //This helps to make the onlick not disapear after the click effect takes place.
    // console.log(e.target.className);
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').firstElementChild.innerHTML = '<h1>Hello</h1>';
});
