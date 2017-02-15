import data from './user-info';

console.log(data);


const picture = document.querySelector('.card__top--pic')
picture.src = data.results[0].picture.large;

const name = document.querySelector('.card__bottom--name');
name.innerText = `${data.results[0].name.first} ${data.results[0].name.last}`;

const email = document.querySelector('.card__bottom--email');
email.innerText = data.results[0].email;

const phone = document.querySelector('.card__bottom--phone');
phone.innerText = data.results[0].cell;

const location = document.querySelector('.card__bottom--location');
location.innerText = `${data.results[0].location.city} ${data.results[0].location.state}`;
