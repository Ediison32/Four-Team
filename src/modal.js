(() => {
    
    const mod = [
        {
            modals: document.querySelector(".productsmodalone"),
            openModal:  document.querySelector(".products__info-addone"),
            closeModal: document.querySelector(".productsmodalone__closeone"),
            stilos:"productsmodalone--show",
        },
        {
            modals: document.querySelector(".productsmodaltwo"),
            openModal:   document.querySelector(".products__info-addtwo"),
            closeModal:  document.querySelector(".productsmodaltwo__closetwo"),
            stilos:"productsmodaltwo--show",
        },
        {
            modals:document.querySelector(".productsmodalthree"),
            openModal:document.querySelector(".products__info-addthree"),
            closeModal:document.querySelector(".productsmodalthree__closethree"),
            stilos:"productsmodalthree--show"
        },
        {
            modals:document.querySelector(".modalcow"),
            openModal:document.querySelector(".about-us__button-read"),
            closeModal:document.querySelector(".modalcow__close"),
            stilos:"modalcow--show",
        },
        {
            modals:document.querySelector(".officemodalone"),
            openModal:document.querySelector(".office__btn-locations"),
            closeModal:document.querySelector(".officemodalone__close"),
            stilos:"officemodalone--show",
        },
        {
            modals:document.querySelector(".officemodaltwo"),
            openModal:document.querySelector(".office__btn-franchise"),
            closeModal:document.querySelector(".officemodaltwo__close"),
            stilos:"officemodaltwo--show",
        },
        { /* heder encabezado  */
            modals:document.querySelector(".buy"),
            openModal:document.querySelector(".nav__btn-buy"),
            closeModal:document.querySelector(".buy__btn--close"),
            stilos:"buy--show"
        },
        {   /* header fecla  */
            modals:document.querySelector(".flecha"),
            openModal:document.querySelector(".hero__img-flecha"),
            closeModal:document.querySelector(".flecha__btn--close"),
            stilos:"flecha--show"
        },
    ];
    
    mod.forEach((ele, ind) => {
        console.log("click activar");
        ele.openModal.addEventListener("click", () => Activar(ind));
    });
    
    mod.forEach((elem, a) => {
        console.log("click desactivar ");
        elem.closeModal.addEventListener("click", () => desactivar(a));
    });
    
    function Activar(ind) {
        mod[ind].modals.classList.add(mod[ind].stilos);
        console.log("activo");
    }
    
    function desactivar(a)  {
        mod[a].modals.classList.remove(mod[a].stilos);
        console.log("desactivo");
    }

})();