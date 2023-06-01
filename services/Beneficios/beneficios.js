import validarBeneficio from "./BeneValidacion.js";

// Obtener referencias a los elementos del formulario
const tipoSolicitudSelect = document.getElementById('tipo-solicitud');
const descripcionTextarea = document.getElementById('descripcion');
const submitButton = document.getElementById("enviar");


// Función para enviar la solicitud
function enviarSolicitud(event) {
  event.preventDefault(); // Evitar que el formulario se envíe por defecto
  
  // Obtener los valores seleccionados del formulario
  const tipoSolicitud = tipoSolicitudSelect.value;
  const descripcion = descripcionTextarea.value;

  if(validarBeneficio(tipoSolicitud,descripcion)){
    alert("no se pueden dejar campos vacios")
    return;
  }
  // Crear un objeto con los datos de la solicitud
  const datosSolicitud = {
    tipoSolicitud: tipoSolicitud,
    descripcion: descripcion
  };
  console.log(datosSolicitud)
  // Enviar la solicitud mediante fetch
  fetch('http://localhost:8080/solicitud/beneficio', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datosSolicitud)
  })
  .then(response => response.json())
  .then(data => {
    // Manejar la respuesta del servidor
    console.log(data);
  })
  .catch(error => {
    // Manejar errores
    console.error(error);
  });
}

submitButton.addEventListener('click', enviarSolicitud);