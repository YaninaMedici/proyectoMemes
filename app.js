const btnImagen = document.getElementById('btn-imagen');
const btnTexto = document.getElementById('btn-texto');
const asideImagen = document.getElementById('aside-imagen');
const asideTexto = document.getElementById('aside-texto');
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
const btnDescarga = document.getElementById('btn-descarga');
const fondoColorImagen = document.getElementById('fondo-color-imagen');                        
const selectorFondoImagen = document.getElementById('selector-fondo-imagen');
const spanColorImagen = document.getElementById('span-color-imagen');
const dirImagen = document.getElementById('url');
const brightness = document.getElementById('brillito');
const opacity = document.getElementById('opaco');
const contrast = document.getElementById('contrasteu');
const blure = document.getElementById('desenfocado');
const gray = document.getElementById('grises');
const sepias = document.getElementById('sepia');
const huec = document.getElementById('hue');
const saturados = document.getElementById('saturado');
const negro = document.getElementById('negativo');
const btnRest = document.getElementById('btnRest');




/* /////////////////////////////////////////////////////////////// */
/* HEADER
/* /////////////////////////////////////////////////////////////// */



                                    /* *************** Alternar paneles - Texto / Imagen *************** */


btnImagen.addEventListener('click', () => {
    asideImagen.classList.remove('oculto');
    asideImagen.style.display = 'block';
    asideTexto.classList.add('oculto');
    asideTexto.style.display = 'none';
});

btnTexto.addEventListener('click', () => {
    asideTexto.classList.remove('oculto');
    asideTexto.style.display = 'block';
    asideImagen.classList.add('oculto');
    asideImagen.style.display = 'none';
});



                                    /* *************** Modo oscuro *************** */

const btnSwitch = document.querySelector('#switch');
btnSwitch.addEventListener('click', () => {
    document.getElementById('darki').classList.toggle('dark');
    document.getElementById('header').classList.toggle('dark');
    document.getElementById('nav').classList.toggle('dark');  
    document.getElementById('section').classList.toggle('dark-ligth');     
    document.getElementById('aside-imagen').classList.toggle('dark-medium');
    document.getElementById('aside-texto').classList.toggle('dark-medium');
    document.getElementById('btn-texto').classList.toggle('dark');
    document.getElementById('btn-imagen').classList.toggle('dark'); 
    document.getElementById('input-texto-superior').classList.toggle('dark-input');
    document.getElementById('input-texto-inferior').classList.toggle('dark-input');
    document.getElementById('seleccionar-fuente').classList.toggle('dark-input');
    document.getElementById('tamano-de-fuente').classList.toggle('dark-input');
    document.getElementById('alinear-izquierda').classList.toggle('dark-input');
    document.getElementById('alinear-centro').classList.toggle('dark-input');
    document.getElementById('alinear-derecha').classList.toggle('dark-input');
    document.getElementById('contenedor-input-texto-color').classList.toggle('dark-input');
    document.getElementById('contenedor-input-texto-fondo').classList.toggle('dark-input');
    document.getElementById('contorno-ninguno').classList.toggle('dark-input');
    document.getElementById('contorno-claro').classList.toggle('dark-input');
    document.getElementById('contorno-oscuro').classList.toggle('dark-input');
    document.getElementById('espaciado').classList.toggle('dark-input');
    document.getElementById('seleccionar-interlineado').classList.toggle('dark-input');
    document.getElementById('url').classList.toggle('dark-input');
    document.getElementById('contenedor-input-imagen-fondo').classList.toggle('dark-input');
    document.getElementById('selector-fondo-imagen').classList.toggle('dark-input');
    document.getElementById('btnRest').classList.toggle('dark-input');
    document.getElementById('btn-imagen').classList.toggle('dark-hover');
    document.getElementById('btn-texto').classList.toggle('dark-hover');
    document.getElementById('input-texto-superior').classList.toggle('dark-hover');
    document.getElementById('input-texto-inferior').classList.toggle('dark-hover');
    document.getElementById('seleccionar-fuente').classList.toggle('dark-hover');
    document.getElementById('tamano-de-fuente').classList.toggle('dark-hover');
    document.getElementById('alinear-izquierda').classList.toggle('dark-hover');
    document.getElementById('alinear-centro').classList.toggle('dark-hover');
    document.getElementById('alinear-derecha').classList.toggle('dark-hover');
    document.getElementById('contorno-ninguno').classList.toggle('dark-hover');
    document.getElementById('contorno-claro').classList.toggle('dark-hover');
    document.getElementById('contorno-oscuro').classList.toggle('dark-hover');
    document.getElementById('espaciado').classList.toggle('dark-hover');
    document.getElementById('seleccionar-interlineado').classList.toggle('dark-hover');
    document.getElementById('url').classList.toggle('dark-hover');
    document.getElementById('selector-fondo-imagen').classList.toggle('dark-hover');
    document.getElementById('btnRest').classList.toggle('dark-hover');
    btnSwitch.classList.toggle('active');  
});



                                    /* *************** Ocultar panel *************** */

const btnCerrarPanelImagen = document.getElementById('btn-cerrar-panel-imagen');
btnCerrarPanelImagen.addEventListener('click', () => {   
    asideImagen.style.display = 'none';
})

const btnCerrarPanelTexto = document.getElementById('btn-cerrar-panel-texto');
btnCerrarPanelTexto.addEventListener('click', () => {
    asideTexto.style.display = 'none';
})



/* /////////////////////////////////////////////////////////////// */
/* MAIN
/* /////////////////////////////////////////////////////////////// */



                                    /* *************** Botón de descarga *************** */

btnDescarga.addEventListener('click', () =>
    domtoimage.toBlob(document.getElementById('section-pp')).then(blob => 
        saveAs(blob, 'mi-meme.png')))

        

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

const spanColorTexto = document.getElementById('span-color-texto');
inputColorTexto.addEventListener('input', () => {
    memeTextoSuperior.style.color = inputColorTexto.value;
    memeTextoInferior.style.color = inputColorTexto.value;
    spanColorTexto.innerHTML = `${inputColorTexto.value}`;
});



                                    /* *************** Fondo *************** */

const spanFondoTexto = document.getElementById('span-fondo-texto');
inputColorFondo.addEventListener('input', () => {
    memeTextoSuperior.style.backgroundColor = inputColorFondo.value;
    memeTextoInferior.style.backgroundColor = inputColorFondo.value;
    spanFondoTexto.innerHTML = `${inputColorFondo.value}`; 
});

inputFondoTransparente.addEventListener('input', () => {
    if (inputFondoTransparente.checked){
        memeTextoSuperior.style.backgroundColor = 'transparent';
        memeTextoInferior.style.backgroundColor = 'transparent';
        memeTextoSuperior.style.position = 'absolute';
        memeTextoInferior.style.position = 'absolute';
        memeTextoInferior.style.top = '83%';
    }else{
        memeTextoSuperior.style.backgroundColor = inputColorFondo.value;
        memeTextoInferior.style.backgroundColor = inputColorFondo.value;
        memeTextoSuperior.style.position = 'static';
        memeTextoInferior.style.position = 'static';
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
espaciado.addEventListener('input', () => {
    memeTextoSuperior.style.padding = `${espaciado.value}px`;
    memeTextoInferior.style.padding = `${espaciado.value}px`;
})



                                    /* *************** Interlineado *************** */

seleccionarInterlineado.addEventListener('input', () => {
    memeTextoSuperior.style.lineHeight = seleccionarInterlineado.value;
    memeTextoInferior.style.lineHeight = seleccionarInterlineado.value;
})



/* /////////////////////////////////////////////////////////////// */
/*  ASIDE - IMAGEN
/* /////////////////////////////////////////////////////////////// */


                                    /* *************** URL *************** */

dirImagen.oninput = function() {
    memeImagen.style.backgroundImage = `url(${dirImagen.value})`;
};



                                    /* *************** Fondo *************** */
                                    
fondoColorImagen.addEventListener('input', () => {
    memeImagen.style.backgroundColor = fondoColorImagen.value;
    spanColorImagen.innerHTML = `${fondoColorImagen.value}`;
});

selectorFondoImagen.addEventListener('change', () => {
 memeImagen.style.backgroundBlendMode = selectorFondoImagen.value;
});



                                    /* *************** Filtros *************** */
     

const filtros = () => {
    memeImagen.style.filter = `brightness(${brightness.value}) 
    opacity(${opacity.value}) 
    contrast(${contrast.value}%) 
    blur(${blure.value}px)
    grayscale(${gray.value}%) 
    sepia(${sepias.value}%) 
    hue-rotate(${huec.value}deg) 
    saturate(${saturados.value}%) 
    invert(${negro.value})`;
    console.log('filtros');
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



                                    /* *************** BTN Restablecer filtros *************** */
              

btnRest.addEventListener('click', () => { 
    memeImagen.style.filter = `brightness(1)`;
    memeImagen.style.filter = `opacity(1)`;
    memeImagen.style.filter = `contrast(100)`;
    memeImagen.style.filter = `blur(0)`;
    memeImagen.style.filter = `grayscale(0)`;
    memeImagen.style.filter = `sepia(0)`;
    memeImagen.style.filter = `hue-rotate(0)`;
    memeImagen.style.filter = `saturate(100)`;
    memeImagen.style.filter = `invert(0)`;

    brightness.value = 1;
    opacity.value = 1;
    contrast.value = 100;
    blure.value = 0;
    gray.value = 0;
    sepias.value = 0;
    huec.value = 0;
    saturados.value = 100;
    negro.value = 0;
});

