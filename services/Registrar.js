const tipoUsuarioSelect = document.getElementById('tipoUsuario');
const idInput = document.getElementById('id');
const nombreInput = document.getElementById('nombre');
const apellidoInput = document.getElementById('apellido');
const edadInput = document.getElementById('edad');
const ubicacionInput = document.getElementById('ubicacion');
const claveInput = document.getElementById('clave');
const registrarBtn = document.getElementById('btnGuardarAvion');

const RegistraFundacion = async () => {
  const data = {
    tipoUsuario: tipoUsuarioSelect.value,
    id: idInput.value,
    nombre: nombreInput.value,
    apellido: apellidoInput.value,
    edad: edadInput.value,
    ubicacion: ubicacionInput.value,
    clave: claveInput.value
  };

  try {
    const response = await fetch('http://localhost:8080/usuarios/formulario/personas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      // La solicitud se completó correctamente
      console.log('Usuario registrado exitosamente');
    } else {
      // La solicitud no se completó correctamente
      console.error('Error al registrar el usuario');
    }
  } catch (error) {
    console.error('Error en la solicitud:', error);
  }
};

registrarBtn.addEventListener('click', RegistraFundacion);