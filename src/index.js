

/* ---------------  custumer------------   */
(() => {
  const elements = [
      {
          womenName: document.querySelector(".custumer__women-one"),
          image: document.querySelector(".custumer__img"),
          svg: document.querySelector(".custumer__svg-one"),
          name: document.querySelector(".custumer__name-emily"),
          comment: document.querySelector(".custumer__coment-one"),
      },
      {
          womenName: document.querySelector(".custumer__women-two"),
          image: document.querySelector(".custumer__img"),
          svg: document.querySelector(".custumer__svg-two"),
          name: document.querySelector(".custumer__name-laura"),
          comment: document.querySelector(".custumer__coment-two"),
      },
      {
          womenName: document.querySelector(".custumer__women-three"),
          image: document.querySelector(".custumer__img"),
          svg: document.querySelector(".custumer__svg-three"),
          name: document.querySelector(".custumer__name-lara"),
          comment: document.querySelector(".custumer__coment-three"),
      },
  ];

  elements.forEach((element, index) => {
      element.womenName.addEventListener("click", () => activateElement(index));
  });

  function activateElement(index) {
      elements.forEach((el, i) => {
          el.svg.classList.remove("display");
          el.image.classList.remove(`image${i + 1}`);
          el.name.classList.remove("display2");
          el.comment.classList.remove("display2");
      });

      const selectedElement = elements[index];
      selectedElement.svg.classList.add("display");
      selectedElement.image.classList.add(`image${index + 1}`);
      selectedElement.name.classList.add("display2");
      selectedElement.comment.classList.add("display2");
  }
})();

/* ------------------------------------------------------------------------------ */
/* modal-products */

/* var productsmodalone { */
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
/* }

function productsmodaltwo (){

  const openModal = document.querySelector('.products__info-addtwo');
  const modal = document.querySelector('.productsmodaltwo');
  const closeModal = document.querySelector('.productsmodalone__closetwo');

    openModal.addEventListener('click', (e)=>{
      e.preventDefault();
      modal.classList.add('productsmodaltwo--show');
    });

    closeModal.addEventListener('click', (e)=>{
      e.preventDefault();
      modal.classList.remove('productsmodaltwo--show');
    });
 */


/* modal*/