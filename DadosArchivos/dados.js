jugar = function(){
    let aleatorio;
    let mensaje;
    aleatorio=lanzarDado();
    if(aleatorio>3){
        mensaje = "El resultado es "+aleatorio+"\nEs mayor a 3"+"\nGanaste";
        cambiarTexto("lblNumero",mensaje);
        //console.log("Es mayor a 3");
        //console.log("Ganaste");
    }else{
        mensaje = "El resultado es "+aleatorio+"\nEs menor a 3"+"\nPerdiste, estas de malas";
        cambiarTexto("lblNumero",mensaje);
        //console.log("Es menor a 3");
        //console.log("Perdiste");
    }
}

//crear una funcion llamada lanzarDado
//No recibe parámetros
//REtorna un numero aleatorio entre 1 y 6
lanzarDado=function(){
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero
    let valorDado;
    aleatorio = Math.random();
    numeroMultiplicado = aleatorio*6;
    numeroEntero = parseInt(numeroMultiplicado);// Entre 0 y 5
    valorDado = numeroEntero+1;//Entre 1 y 6
    return valorDado;
}


