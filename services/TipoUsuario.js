// const form_register = document.getElementById('form_register');
// const selecTipoUsuario = document.getElementById('tipoUsuario');

function mostrarCampos() {
   var tipoSeleccionado = document.getElementById("tipoUsuario").value;
   
   // Ocultar todos los campos
   document.getElementById("camposFundacion").style.display = "none";
   document.getElementById("camposPersona").style.display = "none";
   
   if (tipoSeleccionado === "Fundacion") {
     // Mostrar campos para Fundación
     document.getElementById("camposFundacion").style.display = "block";
   } else {
     // Mostrar campos para Voluntario o Beneficiario
     document.getElementById("camposPersona").style.display = "block";
   }
 }
 

