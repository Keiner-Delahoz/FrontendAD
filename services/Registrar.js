const tipoUsuarioSelect = document.getElementById('tipoUsuario');
const idInput = document.getElementById('id');
const nombreInput = document.getElementById('nombre');
const apellidoInput = document.getElementById('apellido');
const edadInput = document.getElementById('edad');
const ubicacionInput = document.getElementById('ubicacion');
const claveInput = document.getElementById('clave');
const registrarBtn = document.getElementById('btnGuardarAvion');



const RegistraFundacion = async()=>{
    const response = await fetch("http://localhost:8080/usuarios/formulario/personas",{
        method:"POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body:body

    })
}