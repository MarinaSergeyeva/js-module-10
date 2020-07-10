import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { cart } from './cart.js';
import { removeFromCart } from './cart.js';
import template from './cartTemplate.hbs';
import { getTotal } from './cart.js';

// const openModal = document.querySelector('.card__main-button');
// const modalTemplate = document.querySelector('#modal');

console.log(basicLightbox);

export const cartModal = () => {
  const markup = template(cart.order);
  console.log(markup);

  const instance = basicLightbox.create(
    `
      <div class="modal">
    <div class="modal__form-wrapper"><h2 class="modal__form-title">Cart</h2>
  ${
    cart.order.length > 0
      ? `<ol class="order-list">${markup}</ol>`
      : `<p>No products in cart</p>`
  }
  <hr>
  <div class="card-order-total">
  <span class="total_quantity"><b>All products in cart: </b>${
    cart.totalQuantity
  } serv.</span>
  <span class="total_sum"><b>Total products price: </b>${
    cart.totalSum
  } cred.</span>
    </div>
    ${
      cart.order.length > 0
        ? "<button class='orderButton'>Confirm order</button>"
        : ''
    }
          <button class="close-modal">Close modal</button>
    </div>
    </div>
    `,
    {
      onShow: instance => {
        instance.element().querySelector('.close-modal').onclick =
          instance.close;
      },
    },
  );

  instance.show();

  const removeDish = e => {
    if (
      e.target.nodeName === 'BUTTON' &&
      e.target.classList.contains('remove')
    ) {
      removeFromCart(e.target.dataset.id);
      document.querySelector('.order-list').innerHTML = template(cart.order);
      getTotal();

      document.querySelector(
        '.total_sum',
      ).innerHTML = `<b>Total products price: </b>${cart.totalSum} cred.`;
      document.querySelector(
        '.total_quantity',
      ).innerHTML = `<b>All products in cart: </b>${cart.totalQuantity} serv.`;
    }
    console.log(cart);
  };
  document.querySelector('.order-list').addEventListener('click', removeDish);
};

// const instance = basicLightbox.create(modalTemplate, {
//   onShow(instance) {
//     const closeModal = getCloseModal(instance);
//     closeModal.addEventListener('click', instance.close);
//   },
//   onClose(instance) {
//     const closeModal = getCloseModal(instance);
//     closeModal.removeEventListener('click', instance.close);
//   },
// });

// openModal.addEventListener('click', instance.show);

// function getCloseModal(parent) {
//   return parent.element().querySelector('.close-modal');
// }
