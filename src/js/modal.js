
const openModal= document.querySelector('.hero-cta');
const modal= document.querySelector('.modal');
const closeModal= document.querySelector('.modal-close');

const close1 =document.querySelector('.close');

openModal.addEventListener('click',(e)=>{
// alert("hola javier");
e.preventDefault();
modal.classList.add('modal-show')
});


closeModal.addEventListener('click',(e)=>{
    // alert("hola javier");
    e.preventDefault();
    modal.classList.remove('modal-show')
    });
    
    close1.addEventListener('click',(e)=>{
        e.preventDefault();
        modal.classList.remove('modal-show')

    });
    




