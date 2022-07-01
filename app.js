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


    
    