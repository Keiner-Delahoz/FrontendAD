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



registrarBtn.onclick = (e) => {
   e.preventDefault();
   
      const usuarioPersona = {
         tipoSolicitud: tipoSolicitud,
         descripcion: descripcion
      }     
      realizarPeticiónFetchPOST('personas', usuarioPersona, 'voluntario.html');
};

const realizarPeticiónFetchPOST = (ruta, objeto, rutaDeseada) => {
   let valores = JSON.stringify(objeto);
   fetch(`http://localhost:8080/solicitud/beneficios/${ruta}`, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json'
      },
      body: valores,
   })
      .then((response) => {
         if(response.ok) {
            alert("La solicitud de beneficio se han PUBLICADO correctamente")
            window.location.href = rutaDeseada;
         } else {
            alert("ERROR!!!!! No se ha podido publicar la solicitud")
         }})
      .catch((error) => console.error(error));
};