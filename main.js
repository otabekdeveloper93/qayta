const pwr = document.querySelector('#pwr');
const form = document.querySelector('#form');
const ul = document.querySelector('#ul');

const upper = document.querySelector('#upper');
const special = document.querySelector('#special');
const num = document.querySelector('#num');
const more = document.querySelector('#more');

form.addEventListener('click', ()=>{
    ul.classList.toggle('d-blok');
});

pwr.addEventListener('keydown', ()=>{
    if(pwr.value.toUpperCase){
        upper.style.color = "red"
    }
    if(pwr.value < 8){
        more.style.color = "red";
    }
});