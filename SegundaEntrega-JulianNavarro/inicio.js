// Obtenemos la referencia al botón "Obtener cotización" de la sección "Inicio"
var obtenerCotizacionBtn = document.querySelector('#inicio button');

// Añadimos un evento de clic al botón
obtenerCotizacionBtn.addEventListener('click', function() {
  // Acciones a realizar cuando se hace clic en el botón
  alert('¡Gracias por solicitar una cotización! Nos pondremos en contacto contigo pronto.');
});
