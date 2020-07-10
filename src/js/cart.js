import { cartModal } from './modal';

const refs = {
  cartBtn: document.querySelector('.card__main-button'),
};

console.log(document.querySelector('.card__main-button'));
console.log(refs.cartBtn);

export const cart = {
  order: [],
  totalSum: 0,
  totalQuantity: 0,
};

export const addToCart = dish => {
  const result = cart.order.find(item => item.name === dish.name);
  if (!result) {
    cart.order = [
      ...cart.order,
      {
        id: dish.id,
        name: dish.name,
        price: dish.price,
        quantity: 1,
      },
    ];
  } else {
    cart.order = cart.order.map(item => {
      if (item.name === dish.name) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      } else {
        return item;
      }
    });
  }

  getTotal();
  console.log(cart);
};

export const removeFromCart = id => {
  cart.order = cart.order.filter(dish => dish.id !== id);
  getTotal();
};

export const getTotal = () => {
  cart.totalSum = cart.order.reduce((acc, dish) => {
    acc += dish.price * dish.quantity;
    return acc;
  }, 0);
  cart.totalQuantity = cart.order.reduce((acc, dish) => {
    acc += dish.quantity;
    return acc;
  }, 0);
};

refs.cartBtn.addEventListener('click', cartModal);
// =============================================================

// import products from '../menu.json';

// const menu = document.querySelector('.menu');
// const addProduct = document.querySelector('.card__button');
// console.dir(addProduct);

// const shop = {
//   products: [],
//   product: {},
//   pagination: {
//     currentPage: 1,
//     totalProducts: 0,
//     productsPerPage: 4,
//     pagesCount: 0,
//   },
//   cart: [],
// };

// const product = {
//   id: '',
//   name: '',
//   description: '',
//   price: 0,
//   quantity: 0,
// };

// function addProductToCart(e) {
//   if (e.target.nodeName !== 'BUTTON') {
//     console.log('Кликнули мимо');
//     //   product[e.target.name] = e.target.value;
//   }
//   const productId = e.target.previousElementSibling.dataset.id;
//   //   console.log(productId);
//   //   console.log(shop.cart);

//   const currentProduct = products.find(product => product.id === productId);
//   //   console.log(currentProduct);

//   shop.cart = [...shop.cart, currentProduct];
//   console.log(shop.cart);

//   // console.log(currentProduct);

//   //   const newProduct = {
//   //     id: currentProduct.id,
//   //     name: currentProduct.name,
//   //     price: currentProduct.price,
//   //     quantity: 1,
//   //   };

//   //   shop.products = [newProduct, ...shop.products];

//   //   const cartIds = shop.products.map(product => product.id);
//   //   console.log(cartIds);

//   //   //   console.log('Added Products:', cartProducts);
//   //   console.log('Products in cart:', shop.products);
// }

// menu.addEventListener('click', addProductToCart);
