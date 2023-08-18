
const cowOpenModal= document.querySelector('.hero-cta');
const modal= document.querySelector('.modal-cow');
const closeModal= document.querySelector('.modal-cow__close');

const close1 =document.querySelector('.close');

cowOpenModal.addEventListener('click',(e)=>{
e.preventDefault();
modal.classList.add('modal-cow__show')
});


closeModal.addEventListener('click',(e)=>{
    e.preventDefault();
    modal.classList.remove('modal-cow__show')
    });
    
    close1.addEventListener('click',(e)=>{
        e.preventDefault();
        modal.classList.remove('modal-cow__show')

    });

    
