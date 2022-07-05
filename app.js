const memeTextoSuperior = document.getElementById('meme-texto-superior');
const inputTextoSuperior = document.getElementById('input-texto-superior');
const memeTextoInferior = document.getElementById('meme-texto-inferior');
const inputTextoInferior = document.getElementById('input-texto-inferior');
const inputCheckboxTextoSuperior = document.getElementById('input-checkbox-texto-superior');
const inputCheckboxTextoInferior = document.getElementById('input-checkbox-texto-inferior');
const memeImagen = document.getElementById('meme-imagen');
const seleccionarFuente = document.getElementById('seleccionar-fuente');
const tamanoDeFuente = document.getElementById('tamano-de-fuente');
const alinearIzquierda = document.getElementById('alinear-izquierda');
const alinearCentro = document.getElementById('alinear-centro');
const alinearDerecha = document.getElementById('alinear-derecha');
const inputColorTexto = document.getElementById('input-color-texto');
const inputColorFondo = document.getElementById('input-color-fondo');
const inputFondoTransparente = document.getElementById('input-fondo-transparente');
const contornoNinguno = document.getElementById('contorno-ninguno');
const contornoClaro = document.getElementById('contorno-claro');
const contornoOscuro = document.getElementById('contorno-oscuro');
const seleccionarInterlineado = document.getElementById('seleccionar-interlineado');




/* /////////////////////////////////////////////////////////////// */
/* HEADER */
/* /////////////////////////////////////////////////////////////// */





/* /////////////////////////////////////////////////////////////// */
/*  ASIDE - TEXTO
/* /////////////////////////////////////////////////////////////// */



                                    /* *************** Texto superior *************** */

inputTextoSuperior.addEventListener('input', (event) => {
    const textoIngresado = event.target.value;
    memeTextoSuperior.innerHTML = textoIngresado;
})

inputCheckboxTextoSuperior.addEventListener('input', () => {
    if (inputCheckboxTextoSuperior.checked) {
        memeTextoSuperior.style.display = 'none';
        memeImagen.style.backgroundSize = 'cover';
    }else {
        memeTextoSuperior.style.display = 'block';
    }
})



                                    /* *************** Texto inferior *************** */

inputTextoInferior.addEventListener('input', (event) => {
    const textoIngresado = event.target.value;
    memeTextoInferior.innerHTML = textoIngresado;
})

inputCheckboxTextoInferior.addEventListener('input', () => {
    if (inputCheckboxTextoInferior.checked) {
        memeTextoInferior.style.display = 'none';
        memeImagen.style.backgroundSize = 'cover';
    }else {
        memeTextoInferior.style.display = 'block';
    }
})



                                    /* *************** Fuente *************** */

seleccionarFuente.addEventListener('input', () => {
    memeTextoSuperior.style.fontFamily = seleccionarFuente.value;
    memeTextoInferior.style.fontFamily = seleccionarFuente.value;
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



                                    /* *************** Color *************** */

inputColorTexto.addEventListener('input', () => {
    memeTextoSuperior.style.color = inputColorTexto.value;
    memeTextoInferior.style.color = inputColorTexto.value;
});



                                    /* *************** Fondo *************** */

inputColorFondo.addEventListener('input', () => {
    memeTextoSuperior.style.backgroundColor = inputColorFondo.value;
    memeTextoInferior.style.backgroundColor = inputColorFondo.value;
});

inputFondoTransparente.addEventListener('input', () => {
    if (inputFondoTransparente.checked){
        memeTextoSuperior.style.backgroundColor = 'transparent';
        memeTextoInferior.style.backgroundColor = 'transparent';
    }else{
        memeTextoSuperior.style.backgroundColor = inputColorFondo.value;
        memeTextoInferior.style.backgroundColor = inputColorFondo.value;
    }
});



                                    /* *************** Contorno *************** */

contornoNinguno.addEventListener('click', () => {
  memeTextoSuperior.style.textShadow = 'none';
  memeTextoInferior.style.textShadow = 'none';
});

contornoClaro.addEventListener('click', () => {
  memeTextoSuperior.style.textShadow = '2px 0 0 grey, -2px 0 0 grey, 0 2px 0 grey, 0 -2px 0 grey';
  memeTextoInferior.style.textShadow = '2px 0 0 grey, -2px 0 0 grey, 0 2px 0 grey, 0 -2px 0 grey';
});

contornoOscuro.addEventListener('click', () => {
  memeTextoSuperior.style.textShadow = '2px 0 0 black, -2px 0 0 black, 0 2px 0 black, 0 -2px 0 black';
  memeTextoInferior.style.textShadow = '2px 0 0 black, -2px 0 0 black, 0 2px 0 black, 0 -2px 0 black';
});



                                    /* *************** Espaciado *************** */

const espaciado = document.getElementById('espaciado');
memeTextoSuperior.addEventListener('input', () => {
    memeTextoSuperior.style.padding = `${espaciado.value}px`;
    memeTextoInferior.style.padding = `${espaciado.value}px`;
})



                                    /* *************** Interlineado *************** */

seleccionarInterlineado.addEventListener('input', () => {
    memeTextoSuperior.style.lineHeight = seleccionarInterlineado.value;
    memeTextoInferior.style.lineHeight = seleccionarInterlineado.value;
})


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

            rangeIv tg bvn.,jt095 yn0dxf p 7lnputOp = document.getElementById(`opaco`);  

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

