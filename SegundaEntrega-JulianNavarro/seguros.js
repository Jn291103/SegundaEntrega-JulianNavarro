// Obtenemos la referencia al botón "Obtener cotización" de la sección "Seguros para autos"
var obtenerCotizacionBtn = document.querySelector('#seguros-autos button');

// Añadimos un evento de clic al botón
obtenerCotizacionBtn.addEventListener('click', function() {
  // Acciones a realizar cuando se hace clic en el botón
  alert('¡Gracias por solicitar una cotización de seguros para autos! Nos pondremos en contacto contigo pronto.');
});
