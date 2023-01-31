
// ------Boton leer mas/menos - seccion 2------

let hideP_btnH = document.getElementById('hideP_btnH');
let hidePH = document.getElementById('hidePH');

hideP_btnH.addEventListener('click', toggleText);

function toggleText() {
    hidePH.classList.toggle('show');

    if (hidePH.classList.contains('show')) {
        hideP_btnH.innerHTML = 'Leer Menos';
    }   else {
        hideP_btnH.innerHTML = 'Leer mas';
    }
}

let hideP_btnC = document.getElementById('hideP_btnC');
let hidePC = document.getElementById('hidePC');

hideP_btnC.addEventListener('click', toggleTextCss);

function toggleTextCss() {
    hidePC.classList.toggle('show');

    if (hidePC.classList.contains('show')) {
        hideP_btnC.innerHTML = 'Leer Menos';
    }   else {
        hideP_btnC.innerHTML = 'Leer mas';
    }
}

let hideP_btnJs = document.getElementById('hideP_btnJs');
let hidePJs = document.getElementById('hidePJs');

hideP_btnJs.addEventListener('click', toggleTextJs);

function toggleTextJs() {
    hidePJs.classList.toggle('show');

    if (hidePJs.classList.contains('show')) {
        hideP_btnJs.innerHTML = 'Leer Menos';
    }   else {
        hideP_btnJs.innerHTML = 'Leer mas';
    }
}


// let section2btn = document.querySelector(".section2btn");
// let hideP = document.querySelector(".hidep");

// section2btn.addEventListener('click', toggleText);

// function toggleText() {
//     hideP.classList.toggle('show');
//     if (hideP.classList.contains('show')) {
//         section2btn.innerHTML = 'Leer menos';
//     }   else {
//         section2btn.innerHTML = 'Leer mas';
//     }
// }


// ------Menu desplegable para mobile------

const navBarra = document.querySelector(".nav__bars");
const navUl = document.querySelector(".nav__ul");

navBarra.addEventListener("click", function () {
    navUl.classList.toggle("nav__ul-visible");
})


// ------Botón modo claro/oscuro para portfolio------

let modo = document.getElementById('modo');
let containerDark = document.getElementById('portfolio');

modo.addEventListener("click", function(){
    containerDark.classList.toggle('containerDark');
})
 

// ------Galeria de imágenes------

let fullImgContainer = document.getElementById('fullImgContainer');
let fullImg = document.getElementById('fullImg');

function abrirFullImg(foto) {
    fullImgContainer.style.display = "flex";
    fullImg.src = foto;
}

function cerrarFullImg() {
    fullImgContainer.style.display = "none";
}


// ------Alerts de calificación del usuario------

// let nombre = prompt('¡Hola! ¿Cómo te llamas?'); 
// alert('Hola ' + nombre);
// let puntuaje = prompt(nombre +' del uno al 10, ¿cuanto calificarías mi CV?');

// if(puntuaje >= 0 & puntuaje < 4){
//         alert('Te prometo que voy a intentar esforzarme mas.');
//     }
// else if(puntuaje >=4 & puntuaje < 7){
//         alert('Me gustaría que este mejor por eso voy a revisarlo nuevamente');
//     }
// else if(puntuaje >= 7 & puntuaje < 9) {
//         alert('No esta mal pero seguramente hay muchas cosas para mejorar.');
//     }
// else if(puntuaje == 9 || puntuaje == 10 ) {
//         alert('Me alegra que te haya gustado mi CV!!!');
//     }


