const formSolicitud = document.getElementById('form_solicitud');
const tipoSolicitudInput = document.getElementById('tipo_solicitud');
const descripcionInput = document.getElementById('descripcion');
const idInput = document.getElementById('identificacion');

const btnEnviar = ocument.getElementById('enviar');

import { listSolicitudes } from "./MostrarSolicitudesBeneficios";


btnEnviar.onclick = (e) => {
   e.preventDefault();
   
   const solicitudBeneficio = {
      tipo: tipoSolicitudInput.value,
      descripcion: descripcionInput.value
   }
   realizarPeticiónFetchPOST(idInput.value, solicitudBeneficio, 'voluntario.html');
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
            alert("se ha PUBLICADO la solicitud correctamente")
            listSolicitudes();
            formSolicitud.reset();
            window.location.href = rutaDeseada;
         } else {
            alert("ERROR!!!!! NO se ha publicado la solicitud correctamente")
         }})
      .catch((error) => console.error(error));
};