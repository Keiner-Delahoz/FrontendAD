const form_register = document.getElementById('form_register');
const tipoUsuarioSelect = document.getElementById('tipoUsuario');

//------------------------ Inputs Personas ------------------------//
const nombrePersonaInput = document.getElementById('nombrePersona');
const apellidoPersonaInput = document.getElementById('apellidoPersona');
const idInput = document.getElementById('id');
const emailPersonaInput = document.getElementById('emailPersona');
const passwordPersonaInput = document.getElementById('passwordPersona');
const fechaNacimientoInput = document.getElementById('Nacimiento');
const generoInput = document.getElementById('genero');

//------------------------ Inputs Fundaciones ------------------------//
const nitInput = document.getElementById('nit');
const nombreFundacionInput = document.getElementById('nombreFundacion');
const emailFundacionInput = document.getElementById('emailFundacion');
const passwordFundacionInput = document.getElementById('passwordFundacion');
const celularInput = document.getElementById('celular');
const direccionInput = document.getElementById('direccion');

const registrarBtn = document.getElementById('btnGuardarAvion');

registrarBtn.onclick = (e) => {
   e.preventDefault();
   
   if (tipoUsuarioSelect.value === 'Fundacion' ) {

      const usuarioFundacion = {
         tipo: tipoUsuarioSelect.value,
         nit: nitInput.value,
         nombre: nombreFundacionInput.value,
         email: emailFundacionInput.value,
         password: passwordFundacionInput.value,
         celular: celularInput.value,
         direccion: direccionInput.value
      }
      realizarPeticiónFetchPOST('fundaciones', usuarioFundacion, 'voluntario.html');
   } else {

      const nuevaFecha = formatearFecha();

      const usuarioPersona = {
         tipo: tipoUsuarioSelect.value,
         nombre: nombrePersonaInput.value,
         apellido: apellidoPersonaInput.value,
         identificacion: idInput.value,
         email: emailPersonaInput.value,
         password: passwordPersonaInput.value,
         fechaNacimiento: nuevaFecha,
         genero: generoInput.value
      }     
      realizarPeticiónFetchPOST('personas', usuarioPersona, 'voluntario.html');
   }
};

const realizarPeticiónFetchPOST = (ruta, objeto, rutaDeseada) => {
   let valores = JSON.stringify(objeto);
   fetch(`http://localhost:8080/usuarios/formulario/${ruta}`, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json'
      },
      body: valores,
   })
      .then((response) => {
         if(response.ok) {
            alert("Los datos se han INSERTADO correctamente")
            form_register.reset();
            window.location.href = rutaDeseada;
         } else {
            alert("ERROR!!!!! los datos NO se han insertado")
         }})
      .catch((error) => console.error(error));
};

function formatearFecha() {
   const fecha = fechaNacimientoInput.value;
  const [year, month, day] = fecha.split("-");
  const fechaFormateada = `${year}-${month}-${day}`;
  return fechaFormateada
}