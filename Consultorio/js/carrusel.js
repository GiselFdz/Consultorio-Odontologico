const slider = document.querySelector("#slider");
let sliderSections = document.querySelectorAll(".slider--section");
let sliderSectionLast = sliderSections[sliderSections.length - 1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next() {
    let sliderSectionFirst = document.querySelectorAll(".slider--section")[0];
    slider.style.transition = "all 0.5s ease-in-out";  // Ajuste de transición más suave
    slider.style.marginLeft = "-200%"; // Movimiento para mostrar la siguiente sección
    setTimeout(function () {
        slider.style.transition = "none";  // Desactiva la transición para el siguiente movimiento
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);  // Mueve la primera imagen al final
        slider.style.marginLeft = "-100%";  // Regresa a la posición correcta
    }, 500);
}

function Prev() {
    let sliderSections = document.querySelectorAll(".slider--section");
    let sliderSectionLast = sliderSections[sliderSections.length - 1];

    slider.style.transition = "all 0.5s ease-in-out";  // Ajuste de transición más suave
    slider.style.marginLeft = "0"; // Movimiento para mostrar la sección anterior
    setTimeout(function () {
        slider.style.transition = "none";  // Desactiva la transición para el siguiente movimiento
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);  // Mueve la última imagen al principio
        slider.style.marginLeft = "-100%";  // Regresa a la posición correcta
    }, 500);
}

btnRight.addEventListener('click', function () {
    Next();
});

btnLeft.addEventListener('click', function () {
    Prev();
});

// Intervalo para pasar automáticamente las imágenes
setInterval(function () {
    Next();
}, 5000); // Cambia cada 5 segundos (ajustar el tiempo según necesidad)