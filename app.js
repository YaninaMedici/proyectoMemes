const memeTextoSuperior = document.getElementById('meme-texto-superior');
const inputTextoSuperior = document.getElementById('input-texto-superior');
const memeTextoInferior = document.getElementById('meme-texto-inferior');
const inputTextoInferior = document.getElementById('input-texto-inferior');
const inputCheckboxTextoSuperior = document.getElementById('input-checkbox-texto-superior');
const inputCheckboxTextoInferior = document.getElementById('input-checkbox-texto-inferior');
const memeImagen = document.getElementById('meme-imagen');
const tipoDeFuente = document.getElementById('tipo-de-fuente');
const tamanoDeFuente = document.getElementById('tamano-de-fuente');
const alinearIzquierda = document.getElementById('alinear-izquierda');
const alinearCentro = document.getElementById('alinear-centro');
const alinearDerecha = document.getElementById('alinear-derecha');
const inputColorTexto = document.getElementById('input-color-texto');
const inputColorFondo = document.getElementById('input-color-fondo');
const inputFondoTransparente = document.getElementById('input-fondo-transparente');





/* ***************
Texto superior - Texto inferior
*************** */

inputTextoSuperior.addEventListener('input', (event) => {
    const textoIngresado = event.target.value;
    memeTextoSuperior.innerHTML = textoIngresado;
})



inputTextoInferior.addEventListener('input', (event) => {
    const textoIngresado = event.target.value;
    memeTextoInferior.innerHTML = textoIngresado;
})

// inputCheckboxTextoSuperior.addEventListener('input', () => {
//     memeTextoSuperior.classList.toggle('oculto')
// })

inputCheckboxTextoSuperior.addEventListener('input', () => {
    if (inputCheckboxTextoSuperior.checked) {
        memeTextoSuperior.style.display = 'none';
        memeImagen.style.backgroundSize = 'cover';
    }else {
        memeTextoSuperior.style.display = 'block';
    }
})

// inputCheckboxTextoInferior.addEventListener('input', () => {
    //     memeTextoInferior.classList.toggle('oculto')
// })

inputCheckboxTextoInferior.addEventListener('input', () => {
    if (inputCheckboxTextoInferior.checked) {
        memeTextoInferior.style.display = 'none';
        memeImagen.style.backgroundSize = 'cover';
    }else {
        memeTextoInferior.style.display = 'block';
    }
})

/* ***************
Fuente
*************** */

tipoDeFuente.addEventListener('input', () => {
    memeTextoSuperior.style.fontFamily = tipoDeFuente.value;
    memeTextoInferior.style.fontFamily = tipoDeFuente.value;
})

tamanoDeFuente.addEventListener('input', () => {
    memeTextoSuperior.style.fontSize = `${tamanoDeFuente.value}px`;
    memeTextoInferior.style.fontSize = `${tamanoDeFuente.value}px`;
});

alinearIzquierda.addEventListener('click', () => {
    memeTextoSuperior.style.textAlign = 'left';
    memeTextoInferior.style.textAlign = 'left';
});

alinearCentro.addEventListener('click', () => {
    memeTextoSuperior.style.textAlign = 'center';
    memeTextoInferior.style.textAlign = 'center';
});

alinearDerecha.addEventListener('click', () => {
    memeTextoSuperior.style.textAlign = 'right';
    memeTextoInferior.style.textAlign = 'right';
});

inputColorTexto.addEventListener('input', () => {
    memeTextoSuperior.style.color = inputColorTexto.value;
    memeTextoInferior.style.color = inputColorTexto.value;
});

inputColorFondo.addEventListener('input', () => {
    memeTextoSuperior.style.backgroundColor = inputColorFondo.value;
    memeTextoInferior.style.backgroundColor = inputColorFondo.value;
});

inputFondoTransparente.addEventListener('input', () => {
    if (inputFondoTransparente.checked){
        memeTextoSuperior.style.backgroundColor = "transparent";
        memeTextoInferior.style.backgroundColor = "transparent";
    }else{
        memeTextoSuperior.style.backgroundColor = inputColorFondo.value;
        memeTextoInferior.style.backgroundColor = inputColorFondo.value;
    }
});

/* ***************
// Modo oscuro agregue este comentario nada mas-DATE 1 de julio
// *************** */


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

    const rangeInput = document.getElementsByClassName(`input-estilo-deslizante`);    
    // probando console.log(rangeInput)
    const meme = document.getElementById(`imagen-aqui`);
    const brightness = document.getElementById(`brillito`)
    const opacity = document.getElementById(`opaco`)
    const contrast = document.getElementById(`contrasteu`)
    const blure = document.getElementById(`desenfocado`)
    const gray = document.getElementById(`grises`)
    const sepias = document.getElementById(`sepia`)
    const huec = document.getElementById(`hue`)
    const saturados = document.getElementById(`saturado`)
    const negro = document.getElementById(`negativo`)
    
   
    
    
    
    const filtros = () => {

        meme.style.filter = `brightness(${brightness.value}) 
        opacity(${opacity.value}) 
        contrast(${contrast.value}%) 
        blur(${blure.value}px)
        grayscale(${gray.value}%) 
        sepia(${sepias.value}%) 
        hue-rotate(${huec.value}deg) 
        saturate(${saturados.value}%) 
        invert(${negro.value})`;
    }

    brightness.addEventListener(`change`, filtros)
    opacity.addEventListener(`change`, filtros)
    contrast.addEventListener(`change`, filtros)
    blure.addEventListener(`change`, filtros)
    gray.addEventListener(`change`, filtros)
    sepias.addEventListener(`change`, filtros)
    huec.addEventListener(`change`, filtros)
    saturados.addEventListener(`change`, filtros)
    negro.addEventListener(`change`, filtros)




        //  Array.from(rangeInput).forEach(function(element) {
        //     element.addEventListener('change',function(){ 
        //         //Probando que funcione console.log("algo",element.name) 
        //         meme.style.filter = element.name+"(" + element.value + element.title +")" 
        //     })          
        //   });



        /* *** Empece hacer esta funcion pero la reescribi para no tener que repetir varias veces 2deJulio FE
           

                meme.style.filter = "brightness(" + rangeInput.value + "%)"    
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

/* ***************
BOTON REESTABLECER Hoy hice esta funcion para agregar la imagen al generador  2 de julio - FE
*************** */

 /* **const botonRes = document.getElementById("btnRest");
 rangeInput = document.getElementsByClassName(`input-estilo-deslizante`);

botonRes.addEventListener("click", function(event){
  
  botonRes.click = clear;

  
    
});** */
/* **const restablecer = (e) => {
    e.preventDefault()
    meme.style.filter = ` `;
}


                
            btnRest.addEventListener(`click`,(e) => {restablecer});
     //   change();
   // }* */

   const btnRest = document.getElementById("btnRest");

   const restablecer = (e) => {

    e.preventDefault()
    meme.style.filter = `brightness(1)`;
    meme.style.filter = `opacity(1)`;
    meme.style.filter = `contrast(100)`;
    meme.style.filter = `blur(0)`;
    meme.style.filter = `grayscale(0)`;
    meme.style.filter = `sepia(0)`;
    meme.style.filter = `hue-rotate(0)`;
    meme.style.filter = `saturate(100)`;
    meme.style.filter = `invert(0)`;
   

    brightness.value = 1;
    opacity.value = 1;
    contrast.value = 100;
    blure.value = 0;
    gray.value = 0;
    sepias.value = 0;
    huec.value = 0;
    saturados.value = 100;
    negro.value = 0;
       
   }
   btnRest.addEventListener(`click`,restablecer)
   //  const btnResta = document.getElementById("btnRest");
   // btnResta.addEventListener('click', (element) => {
  //  document.getElementById("rangeInput").reset(); 


//rangeInput.display.value = `clear` ;
 //});

//FUNCION RESTABLER PERO NO FUNCIONA
   // document.getElementById('reset').onclick = function(){
   // document.getElementById('rangeInput').value = 0;
//}