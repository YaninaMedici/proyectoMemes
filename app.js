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

// const quitarTextoSuperior = () => {
//     if ($('input-texto-superior').checked) {
//         $('meme-texto-superior').classList.add('oculto')
//     }else {
//         $('meme-texto-superior').classList.remove('oculto')
//     }

//     if ($('input-texto-inferior').checked) {
//         $('meme-texto-inferior').classList.add('oculto')
//     }else {
//         $('meme-texto-inferior').classList.remove('oculto')
//     }
// }

//   const alternarTextos = () => {
//     if ($('no-top-text-checkbox').checked) {
//       $('top-text').classList.add('oculto')
//     } else {
//       $('top-text').classList.remove('oculto')
//     }
  
//     if ($('no-bottom-text-checkbox').checked) {
//       $('bottom-text').classList.add('oculto')
//     } else {
//       $('bottom-text').classList.remove('oculto')
//     }
//   } 

// ------------------

// *****************************************
// OCULTAR Y MOSTRAR PANELES
// *****************************************

// const ocultarPanel = () => {
//     $('panel').classList.add('oculto')
//   }
  
//   const mostrarPanel = () => {
//     $('panel').classList.remove('oculto')
//   }
  
//   const mostrarPanelImagen = () => {
//     $(`panel-text`).classList.add('oculto')
//     $(`panel-img`).classList.remove('oculto')
//   }
  
//   const mostrarPanelTexto = () => {
//     $(`panel-img`).classList.add('oculto')
//     $(`panel-text`).classList.remove('oculto')
//   }

/* ***************
Fuente
*************** */

const cambioDeFuente = () => {
    const fuente = $('tipo-de-fuente').value
    $('meme-texto-superior').style.fontFamily = fuente
    $('meme-texto-inferior').style.fontFamily = fuente
  }









/**
 * Texto
 */


  
//   const alinearTexto = (alineacion) => {
//     $('top-text').style.textAlign = alineacion
//     $('bottom-text').style.textAlign = alineacion
//   }
  
//   const actualizarTamanioTexto = () => {
//     const tamanio = $('text-size-input').value
  
//     $('top-text').style.fontSize = `${tamanio}px`
//     $('bottom-text').style.fontSize = `${tamanio}px`
//   }
  
//   const actualizarFuente = () => {
//     const fuente = $('text-font-select').value
//     $('top-text').style.fontFamily = fuente
//     $('bottom-text').style.fontFamily = fuente
//   }
  
//   const actualizarColorTexto = () => {
//     const color = $('text-color-input').value.toUpperCase()
  
//     $('text-color').innerText = color
//     $('top-text').style.color = color
//     $('bottom-text').style.color = color
//   }
  
//   const actualizarFondoTexto = () => {
//     if (!$('text-no-background-checkbox').checked) {
//       const color = $('text-background-color-input').value
  
//       $('text-background-color').innerText = color.toUpperCase()
//       $('top-text').style.backgroundColor = color
//       $('bottom-text').style.backgroundColor = color
//     } else {
//       $('top-text').style.backgroundColor = 'transparent'
//       $('bottom-text').style.backgroundColor = 'transparent'
//     }
//   }
  
//   const actualizarPosicionTexto = () => {
//     if ($('text-no-background-checkbox').checked) {
//       $('top-text').style.position = 'absolute'
//       $('bottom-text').style.position = 'absolute'
//     } else {
//       $('top-text').style.position = 'static'
//       $('bottom-text').style.position = 'static'
//     }
//   }
  
//   const actualizarContorno = (contorno) => {
//     const grosor = '2px'
  
//     if (contorno === 'ninguno') {
//       $('top-text').style.textShadow = 'none'
//       $('bottom-text').style.textShadow = 'none'
//     } else if (contorno === 'claro') {
//       $(
//         'top-text'
//       ).style.textShadow = `${grosor} ${grosor} #FFF, -${grosor} ${grosor} #FFF, ${grosor} -${grosor} #FFF, -${grosor} -${grosor} #FFF`
//       $(
//         'bottom-text'
//       ).style.textShadow = `${grosor} ${grosor} #FFF, -${grosor} ${grosor} #FFF, ${grosor} -${grosor} #FFF, -${grosor} -${grosor} #FFF`
//     } else if (contorno === 'oscuro') {
//       $(
//         'top-text'
//       ).style.textShadow = `${grosor} ${grosor} #000, -${grosor} ${grosor} #000, ${grosor} -${grosor} #000, -${grosor} -${grosor} #000`
//       $(
//         'bottom-text'
//       ).style.textShadow = `${grosor} ${grosor} #000, -${grosor} ${grosor} #000, ${grosor} -${grosor} #000, -${grosor} -${grosor} #000`
//     }
//   }
  
//   const actualizarEspaciado = () => {
//     const paddingY = $('padding-input').value
//     $('top-text').style.padding = `${paddingY}px 50px`
//     $('bottom-text').style.padding = `${paddingY}px 50px`
//   }
  
//   const actualizarInterlineado = () => {
//     const lineHeight = $('line-height-input').value
//     $('top-text').style.lineHeight = lineHeight
//     $('bottom-text').style.lineHeight = lineHeight
//   }
  
//   const ajustarTexto = () => {
//     if (window.innerWidth > 1100) {
//       return
//     }
  
//     const tamanioTexto = Math.round((window.innerWidth / 10) * 0.5)
//     const padding = Math.round((window.innerWidth / 10) * 0.2)
  
//     $('text-size-input').value = tamanioTexto
//     $('padding-input').value = padding
  
//     actualizarEspaciado()
//     actualizarTamanioTexto()
//   }
  
