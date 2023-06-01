const validarBeneficio = (tipo, descripcion)=> {

    if(tipo === null && descripcion === null){
        return false;
    }
    return true
}

export default validarBeneficio;