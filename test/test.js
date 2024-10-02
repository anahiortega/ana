saludar = function(){
    let saludo;
    saludo = generarSaludo("txtNombre", "txtApellido");
    console.log(saludo);

    let resultado = document.getElementById("lblResultado");
    resultado.innerText = saludo;
    
}