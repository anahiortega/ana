// Función para recuperar el valor de un componente de texto
recuperarTexto = function(IdComponente) {
    let componente;
    let valorIngresado;
    componente = document.getElementById(IdComponente);
    valorIngresado = componente.value; 
    return valorIngresado;
}
HOLA=function(){
    //recuperar el valor de la caja de texto txtnombre
    let nombre=recuperarTexto("txtnombre")
     //recuperar el valor de la caja de texto txtapellido
     let apellido=recuperarTexto("txtapellido")
     console.log("Nombre: " + nombre);
    console.log("Apellido: " + apellido);
}