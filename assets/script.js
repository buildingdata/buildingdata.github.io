let bocina = document.querySelector("#bocina");
let bocinaA = document.querySelectorAll(".bocina-a");
let librero = document.querySelector("#librero");
let libreroPuerta = document.querySelector(".librero-r1");
let repisa = document.querySelector("#repisa");
let repisaPuerta = document.querySelector(".repisa-p");
let buro = document.querySelector("#buro");


let radioTocando = () => {
    bocinaA[0].classList.toggle('is-bocina-active')
    bocinaA[1].classList.toggle('is-bocina-active')
}

let libreroAbiero = () => {
    libreroPuerta.classList.toggle('is-librero-open')
}
let repisaAbierto = () => {
    repisaPuerta.classList.toggle('is-repisa-open')
}

bocina.addEventListener("click", radioTocando)
librero.addEventListener("click", libreroAbiero)
repisa.addEventListener("click", repisaAbierto)