const tipoUsuarioSelect = document.getElementById('tipoUsuario');
const idInput = document.getElementById('id');
const nombreInput = document.getElementById('nombre');
const apellidoInput = document.getElementById('apellido');
const edadInput = document.getElementById('edad');
const ubicacionInput = document.getElementById('ubicacion');
const claveInput = document.getElementById('clave');
const registrarBtn = document.getElementById('btnGuardarAvion');

const RegistraFundacion = async () => {
  const tipoUsuario = tipoUsuarioSelect.value;
  const id = idInput.value;
  const nombre = nombreInput.value;
  const apellido = apellidoInput.value;
  const edad = edadInput.value;
  const ubicacion = ubicacionInput.value;
  const clave = claveInput.value;

  let endpoint = '';

  if (tipoUsuario === 'Voluntario'|| tipoUsuario === 'Beneficiario' ) {
    endpoint = 'http://localhost:8080/usuarios/formulario/personas';
  } else if (tipoUsuario === 'Fundacion') {
    endpoint = 'http://localhost:8080/usuarios/formulario/fundaciones';
  } 

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id,
        nombre,
        apellido,
        edad,
        ubicacion,
        clave
      })
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