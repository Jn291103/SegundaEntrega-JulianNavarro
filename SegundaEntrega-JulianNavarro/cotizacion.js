document.getElementById('cotizacionBtn').addEventListener('click', function() {
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var edad = parseInt(document.getElementById('edad').value);
    var monto = parseInt(document.getElementById('monto').value);
    var plazo = parseInt(document.getElementById('plazo').value);
  
    var cotizacion = calcularCotizacion(edad, monto, plazo);
  
    var resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `
      <p>Estimado(a) ${nombre},</p>
      <p>El monto asegurado para su vehículo ${monto} con un plazo de ${plazo} años será de $${cotizacion}.</p>
      <p>Le enviaremos un correo a ${email} con más detalles sobre su cotización.</p>
    `;
  });
  
  function calcularCotizacion(edad, monto, plazo) {
    // Lógica para calcular la cotización
    // Puedes implementar la lógica que corresponda a tu empresa de seguros
    // Aquí se muestra un ejemplo básico
    var cotizacion = monto * plazo * (1 + edad / 100);
  
    return cotizacion.toFixed(2);
  }
  
  
  
  