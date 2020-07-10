import menuItem from '../templates/menuItem.hbs';
import menu from '../menu.json';
import '../styles.css';
// console.log(menuItem);

const menuRef = document.querySelector('.js-menu');

const markup = menuItem(menu);
menuRef.insertAdjacentHTML('beforeend', markup);
// console.log(markup);
