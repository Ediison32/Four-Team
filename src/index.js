/* modal-products */

const openModal = document.querySelector('.products__info-addone', '.products__info-addtwo');
const modal = document.querySelector('.productsmodalone','.productsmodaltwo');
const closeModal = document.querySelector('.productsmodalone__closeone','.productsmodalone__closetwo');

  openModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('productsmodalone--show','productsmodaltwo--show' );
  });

  closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('productsmodalone--show','productsmodaltwo--show');
  });

