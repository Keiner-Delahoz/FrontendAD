const tipoUsuarioSelect = document.getElementById('tipoUsuario');
const idInput = document.getElementById('id');
const nombreInput = document.getElementById('nombre');
const apellidoInput = document.getElementById('apellido');
const edadInput = document.getElementById('edad');
const fechaNacimientoInput = document.getElementById('Nacimiento');
const claveInput = document.getElementById('clave');
const GeneroInput = document.getElementById('genero');
const emailInput = document.getElementById('email');
const registrarBtn = document.getElementById('btnGuardarAvion');



const RegistraFundacion = async (e) => {
    e.preventDefault();
    const fechaInput = fechaNacimientoInput.value;
    const fechaObj = new Date(fechaInput);
    const yy = fechaObj.getFullYear();
    const mm = ("0" + (fechaObj.getMonth() + 1)).slice(-2);
    const dd = ("0" + fechaObj.getDate()).slice(-2);
    const nuevaFecha = yy + "-" + mm + "-" + dd;
    console.log(nuevaFecha);


  const tipo = tipoUsuarioSelect.value;
  const identificacion = idInput.value;
  const nombre = nombreInput.value;
  const apellido = apellidoInput.value;
  const email = emailInput.value;
  const fechaNacimiento = nuevaFecha;
  const password = claveInput.value;
  const genero = GeneroInput.value;
  

  const datos = {
        tipo,
        nombre,
        apellido,
        identificacion,
        email,
        password,
        fechaNacimiento,
        genero
  }
  console.log(datos)
  console.log(JSON.stringify(datos))
  let endpoint = '';

  if (tipo === 'Voluntario'|| tipo === 'Beneficiario' ) {
    endpoint = 'http://localhost:8080/usuarios/formulario/personas';
  } else if (tipo === 'Fundacion') {
    endpoint = 'http://localhost:8080/usuarios/formulario/fundaciones';
  } 

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(datos)
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