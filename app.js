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







const btnSwitch = document.querySelector(`#switch`);
btnSwitch.addEventListener('click',() => {
    document.getElementById(`nav`).classList.toggle(`dark`);  
    document.getElementById(`section-principal`).classList.toggle(`dark`);     
    document.getElementById(`imagen-aside`).classList.toggle(`dark`); 
    document.getElementById(`texto-aside`).classList.toggle(`dark`);    
    btnSwitch.classList.toggle(`active`);  
});


    rangeInput = document.getElementById(`Brillito`);    
    
    container = document.getElementsByClassName(`container`)[0];

    rangeInput.addEventListener("change",function(){
            container.style.filter = "brightness(" + rangeInput.value + "%)"
            

    });


    rangeInput = document.getElementById(`opaco`);       
    container = document.getElementsByClassName(`container`)[0];

    rangeInput.addEventListener("change",function(){
            container.style.filter = "opacity(" + rangeInput.value + "%)"            

    });

    rangeInput = document.getElementById(`contrasteu`);       
    container = document.getElementsByClassName(`container`)[0];

    rangeInput.addEventListener("change",function(){
            container.style.filter = "contrast(" + rangeInput.value + "%)"            

    });

    rangeInput = document.getElementById(`desenfocado`);       
    container = document.getElementsByClassName(`container`)[0];

    rangeInput.addEventListener("change",function(){
            container.style.filter = "blur(" + rangeInput.value + "%)"            

    });


    
    
