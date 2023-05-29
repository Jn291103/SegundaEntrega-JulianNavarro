document.getElementById("cotizacionBtn").addEventListener("click", function () {
    var nombre = document.getElementById("nombre").value;
    var edad = parseInt(document.getElementById("edad").value);
    var monto = parseFloat(document.getElementById("monto").value);
    var plazo = parseInt(document.getElementById("plazo").value);
  
    // Cálculo de la cotización
    var cotizacion = monto * (edad / 100) * plazo;
  
    // Mostrar resultado en el HTML
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "Hola " + nombre + ", la cotización de tu seguro es: $" + cotizacion.toFixed(2);
  });
  