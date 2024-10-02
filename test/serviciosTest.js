generarSaludo = function(nombre, apellido){
    let componente1;
    let componente2;
    let dato1;
    let dato2;
    componente1 = document.getElementById(nombre);
    dato1 = componente1.value;
    componente2 = document.getElementById(apellido);
    dato2 = componente2.value;

    return "Hola" + " " + dato1 + " " + dato2;
    
}
function obtenerTexto(id) {
    return document.getElementById(id).value;
}
function mostrarTexto(id, texto) {
    document.getElementById(id).innerText = texto;
}