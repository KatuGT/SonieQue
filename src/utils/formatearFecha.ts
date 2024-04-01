export const formateadorFecha = (fecha: string) => {


    const date = new Date(fecha);

    const año = date.getFullYear();
    const mes = String(date.getMonth() + 1).padStart(2, '0');
    const dia = String(date.getDate()).padStart(2, '0');

    const fechaFormateada = `${año}-${mes}-${dia}`;

    return fechaFormateada
}