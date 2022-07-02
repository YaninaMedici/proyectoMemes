const memeTextoSuperior = document.getElementById('meme-texto-superior');
const inputTextoSuperior = document.getElementById('input-texto-superior');
const memeTextoInferior = document.getElementById('meme-texto-inferior');
const inputTextoInferior = document.getElementById('input-texto-inferior');
const inputCheckboxTextoSuperior = document.getElementById('input-checkbox-texto-superior');
const inputCheckboxTextoInferior = document.getElementById('input-checkbox-texto-inferior');

const memeImagen = document.getElementById('meme-imagen');


/* ***************
Texto superior - Texto inferior
*************** */

inputTextoSuperior.addEventListener('input', (event) => {
    const textoIngresado = event.target.value;
    memeTextoSuperior.innerHTML = textoIngresado;
})

inputCheckboxTextoSuperior.addEventListener('input', () => {
    memeTextoSuperior.classList.toggle('oculto')
})

inputTextoInferior.addEventListener('input', (event) => {
    const textoIngresado = event.target.value;
    memeTextoInferior.innerHTML = textoIngresado;
})

inputCheckboxTextoInferior.addEventListener('input', () => {
    memeTextoInferior.classList.toggle('oculto')
})

/* ***************
Fuente
*************** */

const cambioDeFuente = () => {
    const fuente = $('tipo-de-fuente').value
    $('meme-texto-superior').style.fontFamily = fuente
    $('meme-texto-inferior').style.fontFamily = fuente
  }




/* ***************
Modo oscuro agregue este comentario nada mas-DATE 1 de julio
*************** */


const btnSwitch = document.querySelector(`#switch`);
btnSwitch.addEventListener('click',() => {
    document.getElementById(`darki`).classList.toggle(`dark`);
    document.getElementById(`nav`).classList.toggle(`dark`);  
    document.getElementById(`section`).classList.toggle(`dark`);     
   document.getElementById(`imagen-aside`).classList.toggle(`dark`); 
   document.getElementById(`texto-aside`).classList.toggle(`dark`); 
    btnSwitch.classList.toggle(`active`);  
});

/* *** FILTROS >> ** */ 

    rangeInput = document.getElementsByClassName(`input-estilo-deslizante`);    
    // probando console.log(rangeInput)
    meme = document.getElementById(`imagen-aqui`);       

         Array.from(rangeInput).forEach(function(element) {
            element.addEventListener('change',function(){ 
                //Probando que funcione console.log("algo",element.name) 
                meme.style.filter = element.name+"(" + element.value + element.title +")" 
            })          
          });

        /* *** Empece hacer esta funcion pero la reescribi para no tener que repetir varias veces 2deJulio FE
           

     meme.style.filter = "brightness(" + rangeInput.value + "%)"            

         });

            rangeInputOp = document.getElementById(`opaco`);  

             rangeInputOp.addEventListener("change",function(){
           
                  meme.style.filter = "opacity(" + rangeInputOp.value + "%)"            
     
              });

              rangeInputCo = document.getElementById(`contrasteu`);   
           
                   rangeInputCo.addEventListener("change",function(){
                 
                        meme.style.filter = "contrast(" + rangeInputCo.value + "%)"            
           
                    }); **/      

/* ***************
URL  Hoy hice esta funcion para agregar la imagen al generador  2 de julio - FE
*************** */

const urlImagen = document.getElementById("url");

    urlImagen.oninput = function() {
    
      // Probando que funcione con  console.log(urlImagen.value)

    meme.src = urlImagen.value

};

