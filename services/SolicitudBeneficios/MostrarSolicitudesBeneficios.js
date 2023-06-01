const listSolicitudes = async() => {
   try {
      const response = await fetch("http://localhost:8080/solicitud/beneficios");
      const solicitudes = await response.json();

      const solicitudesContainer = document.getElementById("solicitudesContainer");
      // solicitudesContainer.innerHTML = "";

      solicitudes.forEach((solicitud) => {

         // Crear un nuevo div para cada solicitud
         const cardDiv = document.createElement('div');
         cardDiv.className = 'card mb-5';

         // Crear un div interno para la card-body
         const cardBodyDiv = document.createElement('div');
         cardBodyDiv.className = 'card-body';

         const nombreElement = document.createElement('h5');
         nombreElement.textContent = `Hola mi nombre es ${solicitud.beneficiario.nombre} ${solicitud.beneficiario.apellido}`;

         // Crear elementos HTML para mostrar la información de cada solicitud
         const descripcionElement = document.createElement('p');
         descripcionElement.textContent = solicitud.descripcion;

         const contactarBtn = document.createElement('a');
         contactarBtn.href = 'Contactar.html';
         contactarBtn.className = 'btn btn-primary';
         contactarBtn.textContent = 'Contactar';

         // Agregar los elementos al div interno de card-body
         cardBodyDiv.appendChild(nombreElement);
         cardBodyDiv.appendChild(descripcionElement);
         // cardBodyDiv.appendChild(vesSolicitudBtn);
         cardBodyDiv.appendChild(contactarBtn);

         // Agregar el div interno de card-body al div de la card
         cardDiv.appendChild(cardBodyDiv);

         // Agregar el div de la card al contenedor
         solicitudesContainer.appendChild(cardDiv);
      });
   } catch (ex) {
      alert(ex)
   }
}