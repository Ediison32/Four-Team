

/* ---------------  custumer------------   */
(()=>{

    const dato ={

        /* selecciona cursor del elemento al cual se le hace click */
        womenNameOne: document.querySelector(".custumer__women-one"),
        womenNameTwo:document.querySelector(".custumer__women-two"),
        womenNameThree:document.querySelector(".custumer__women-three"),
        
        /* selecciona la clase a donde queremos poner la foto  */
        imageOne:document.querySelector(".custumer__img"),
        imageTwo:document.querySelector(".custumer__img"),
        imageThree:document.querySelector(".custumer__img"),


        /* selecciona la clase donde queremos poner el svg  */
        svgOne:document.querySelector(".custumer__svg-one"),
        svgTwo:document.querySelector(".custumer__svg-two"),
        svgThree:document.querySelector(".custumer__svg-three"),
        
        nameEmily:document.querySelector(".custumer__name-emily"),
        nameLaura:document.querySelector(".custumer__name-laura"),
        nameLara:document.querySelector(".custumer__name-lara"),

        comentOne:document.querySelector(".custumer__coment-one"),
        comentTwo:document.querySelector(".custumer__coment-two"),
        comentThree:document.querySelector(".custumer__coment-three"),

    };
 
     
    dato.womenNameOne.addEventListener("click", imageOne);
    dato.womenNameTwo.addEventListener("click", imageTwo);
    dato.womenNameThree.addEventListener("click",imageThree);

    
    function  imageOne() {
        const svg2 = dato.svgTwo.classList.contains("display");
        const svg3 = dato.svgThree.classList.contains("display");
       
        if(svg2){
            dato.svgTwo.classList.remove("display");
            dato.imageTwo.classList.remove("imageTwo");
            dato.nameLaura.classList.remove("display2");
            dato.comentTwo.classList.remove("display2");
    
            
        }
        if (svg3){
            dato.svgThree.classList.remove("display");
            dato.imageThree.classList.remove("imageThree")
            dato.nameLara.classList.remove("display2");
            dato.comentThree.classList.remove("display2");
        }
        dato.svgOne.classList.add("display");
        dato.imageOne.classList.add("imageOne");
        dato.nameEmily.classList.add("display2");
        dato.comentOne.classList.add("display2");
    } 
    
    function  imageTwo() {

        const svg1= dato.svgOne.classList.contains("display");
        const svg3 = dato.svgThree.classList.contains("display");
    
        if(svg1){
            
            dato.svgOne.classList.remove("display");
            dato.imageOne.classList.remove("imageTwo");
            dato.nameEmily.classList.remove("display2");
            dato.comentOne.classList.remove("display2");
    
            
        }
        if (svg3){
            dato.svgThree.classList.remove("display");
            dato.imageThree.classList.remove("imageThree");
            dato.nameLara.classList.remove("display2");
            dato.comentThree.classList.remove("display2");
        }

        dato.svgTwo.classList.add("display");
        dato.imageTwo.classList.add("imageTwo");
        dato.nameLaura.classList.add("display2");
        dato.comentTwo.classList.add("display2");
    }

    function  imageThree() {

        const svg1= dato.svgOne.classList.contains("display");
        const svg2 = dato.svgTwo.classList.contains("display");
        
        
     /*    dato.imageThree.classList.toggle("imageThree");
        dato.svgThree.classList.toggle("display"); */
       if (svg1){
        dato.svgOne.classList.remove("display");
        dato.imageOne.classList.remove("imageOne");
        dato.nameEmily.classList.remove("display2");
        dato.comentOne.classList.remove("display2");
        
       }
       if (svg2){
        dato.svgTwo.classList.remove("display");
        dato.imageTwo.classList.remove("imageTwo");
        dato.nameLaura.classList.remove("display2");
        dato.comentTwo.classList.remove("display2");
       }

       dato.svgThree.classList.add("display");
       dato.imageThree.classList.add("imageThree");
       dato.nameLara.classList.add("display2");
       dato.comentThree.classList.add("display2");


    } 

})();


/* ------------------------------------------------------------------------------ */
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