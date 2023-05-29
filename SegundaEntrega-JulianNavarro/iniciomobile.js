// Obtener los elementos del DOM
const navegacion = document.querySelector('.navegacion');
const descripcion = document.querySelector('.descripcion');
const botonContacto = document.querySelector('#boton-contacto');

// Agregar clases de animación al cargar la página
window.addEventListener('load', () => {
  navegacion.classList.add('fade-in');
  descripcion.classList.add('fade-in');
  botonContacto.classList.add('fade-in');
});

// Función para desplazarse suavemente hacia abajo al hacer clic en el botón "Contacto"
botonContacto.addEventListener('click', (event) => {
  event.preventDefault();
  
  const destino = document.querySelector('#contacto');
  
  window.scrollTo({
    top: destino.offsetTop,
    behavior: 'smooth'
  });
});
