const memeTextoSuperior = document.getElementById('meme-texto-superior');
const inputTextoSuperior = document.getElementById('input-texto-superior');
const memeTextoInferior = document.getElementById('meme-texto-inferior');
const inputTextoInferior = document.getElementById('input-texto-inferior');
const inputCkeckboxTextoSuperior = document.getElementById('input-ckeckbox-texto-superior');

// const memeTextoSuperior = document.getElementById('meme-texto-superior');
// const memeImagen = document.getElementById('meme-imagen');
// const memeTextoInferior = document.getElementById('meme-texto-inferior')



inputTextoSuperior.addEventListener('input', (event) => {
    const textoIngresado = event.target.value;
    memeTextoSuperior.innerHTML = textoIngresado;
})

inputTextoInferior.addEventListener('input', (event) => {
    const textoIngresado = event.target.value;
    memeTextoInferior.innerHTML = textoIngresado;
})

// inputCkeckboxTextoSuperior.addEventListener('click', (event) => {

// })


