import * as modal from './modal';

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


  const mod = {
    openModal: document.querySelector(".hero__img-flecha"), // Elemento que abrirá el modal
    modal: document.querySelector(".hero__img"), // Modal a mostrar
    closeModal: document.querySelector(".productsmodalone__closeone"), // Botón para cerrar el modal
  };
  

  // Agregar un evento de clic al elemento para abrir el modal
  mod.openModal.addEventListener("click", activarModal);

  // Función para abrir el modal
  function activarModal() {
    mod.modal.classList.add("display2"); // Agregar una clase para mostrar el modal
    
  }


  


})();

