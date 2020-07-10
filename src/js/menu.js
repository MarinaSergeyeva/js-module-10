import dishesTemplate from '../templates/menuItem.hbs';
import dishes from '../menu.json';
import { addToCart } from './cart';

const menuList = {
  dishes,
};

console.log(menuList);

const refs = {
  menuRef: document.querySelector('.menu'),
};

const addToOrder = e => {
  if (e.target.nodeName === 'BUTTON' && e.target.dataset.btn === 'cartBtn') {
    const id = e.target.closest('[data-id]').dataset.id;
    const dish = menuList.dishes.find(dish => dish.id === id);
    // console.log(dish);
    addToCart(dish);
  } else return;
};

const markup = dishesTemplate(dishes);

refs.menuRef.insertAdjacentHTML('afterbegin', markup);
refs.menuRef.addEventListener('click', addToOrder);
