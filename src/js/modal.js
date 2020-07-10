import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

const openModal = document.querySelector('.card__main-button');
const modalTemplate = document.querySelector('#modal');

const instance = basicLightbox.create(modalTemplate, {
  onShow(instance) {
    const closeModal = getCloseModal(instance);
    closeModal.addEventListener('click', instance.close);
  },
  onClose(instance) {
    const closeModal = getCloseModal(instance);
    closeModal.removeEventListener('click', instance.close);
  },
});

openModal.addEventListener('click', instance.show);

function getCloseModal(parent) {
  return parent.element().querySelector('.close-modal');
}
