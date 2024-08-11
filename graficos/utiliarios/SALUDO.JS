// Función para recuperar el valor de un componente de texto
recuperarTexto = function(IdComponente) {
    let componente = document.getElementById(IdComponente);
    let valorIngresado = componente.value; 
    return valorIngresado;
}
// Función para recuperar un valor entero desde un componente de texto
recuperarInt = function(IdComponente) {
    let valorCaja = recuperarTexto(IdComponente);
    let valorEntero = parseInt(valorCaja);
    return valorEntero;
}
// Función para recuperar un valor flotante desde un componente de texto
recuperarFloat = function(IdComponente) {
    let valorCaja = recuperarTexto(IdComponente);
    let valorFlotante = parseFloat(valorCaja);
    return valorFlotante;
}
// Función principal que usa las funciones anteriores
HOLA = function() {
    // Recuperar el valor de la caja de texto txtnombre
    let nombre = recuperarTexto("txtnombre");
    // Recuperar el valor de la caja de texto txtapellido
    let apellido = recuperarTexto("txtapellido");
    console.log("Nombre: " + nombre);
    console.log("Apellido: " + apellido);
    // Recuperar el valor entero de la caja de texto txtedad
    let edad = recuperarInt("txtedad");
    console.log("Edad: " + edad);
    // Recuperar el valor flotante de la caja de texto txtestatura
    let estatura = recuperarFloat("txtestatura");
    console.log("Estatura: " + estatura);
}