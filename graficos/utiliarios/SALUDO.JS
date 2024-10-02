function recuperarTexto(IdComponente) {
    let componente = document.getElementById(IdComponente);
    return componente.value;
}
function recuperarInt(IdComponente) {
    let valorCaja = recuperarTexto(IdComponente);
    return parseInt(valorCaja);
}
function recuperarFloat(IdComponente) {
    let valorCaja = recuperarTexto(IdComponente);
    return parseFloat(valorCaja);
}
function mostrarTexto(IdComponente, mensaje) {
    let componente = document.getElementById(IdComponente);
    componente.innerText = mensaje;
}
mostrarTextoEnCaja=function(IdComponente,mensaje){
    let componente = document.getElementById(IdComponente);
    componente.value = mensaje;
}
function mostrarImagen(IdComponente, srcImagen) {
    let componente = document.getElementById(IdComponente);
    componente.src = srcImagen;
    componente.style.display = 'block';  
}
function HOLA() {
    let nombre = recuperarTexto("txtnombre");
    let apellido = recuperarTexto("txtapellido");
    let edad = recuperarInt("txtedad");
    let estatura = recuperarFloat("txtestatura");
    let mensajeBienvenido = "Bienvenido " + nombre + " " + apellido;
    mostrarTexto("lblResultado", mensajeBienvenido);
    mostrarImagen("imagensaludar", "./imagenes/j9O.gif");
    mostrarTextoEnCaja("txtnombre","")
}

