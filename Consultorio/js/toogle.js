// Obtener elementos
const toggle = document.querySelector('.toggle');
const links = document.querySelector('.links');

// Alternar clases al hacer clic en el toggle
toggle.addEventListener('click', () => {
    toggle.classList.toggle('rotate'); // Gira el icono
    links.classList.toggle('active'); // Muestra u oculta el menú
    // Añadir una transición de deslizamiento para el menú
    if (links.classList.contains('active')) {
        links.style.top = '80px';  // Abrir el menú
    } else {
        links.style.top = '-100vh'; // Cerrar el menú
    }
});

// Animación al hacer transición entre elementos de la lista
document.querySelectorAll('.slide ul li').forEach(item => {
    item.addEventListener('transitionend', () => {
        item.classList.remove('active');
    });
});

// Añadir la clase 'active' al primer elemento de la lista de manera inicial
document.querySelector('.slide ul li').classList.add('active');