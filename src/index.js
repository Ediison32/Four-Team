/* modal-products */

const openModal = document.querySelector('.products__info-addone');
const modal = document.querySelector('.productsmodalone');
const closeModal = document.querySelector('.productsmodalone__closeone');

  openModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('productsmodalone--show');
  });

  closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('productsmodalone--show');
  });



/* const openModal = document.querySelector('.products__info-addtwo');
const modal = document.querySelector('.productsmodaltwo');
const closeModal = document.querySelector('.productsmodalone__closetwo');

  openModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('productsmodaltwo--show');
  });

  closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('productsmodaltwo--show');
  }); */


/* modal*/