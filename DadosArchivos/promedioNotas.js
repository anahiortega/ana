
calcularPromedioNotas=function(){
    let valorNota1 = recuperarFlotante("txtNota1");
    let valorNota2 = recuperarFlotante("txtNota2");
    let valorNota3 = recuperarFlotante("txtNota3");
    let promedio = calcularPromedio(valorNota1,valorNota2,valorNota3);
    let valorDosDecimales = promedio.toFixed(2);
    if(valorDosDecimales > 0 && valorDosDecimales < 5){
        mostrarTexto("lblMensaje","REPROBADO "+valorDosDecimales);
        mostrarImagen("imgResultado","./imagenes/tumblr_lmwsamrrxT1qagx30.0.0.1488208493.gif");
    }else if(valorDosDecimales>=5 && valorDosDecimales<=8){
        mostrarImagen("imgResultado","./imagenes/4e2993fa23fefd30ccd09a17049ba745.gif");
        mostrarTexto("lblMensaje","BUEN TRABAJO: "+valorDosDecimales);
    }else if(valorDosDecimales>8 && valorDosDecimales<=10){
        mostrarImagen("imgResultado","./imagenes/4e2993fa23fefd30ccd09a17049ba745.gif");
        mostrarTexto("lblMensaje","EXCELENTE: "+valorDosDecimales);
    }else{
        mostrarTexto("lblMensaje","DATOS INCORRECTOS");
        mostrarImagen("imgResultado","./imagenes/no.gif");
    }

    if(valorDosDecimales>7){
    /*if(valorDosDecimales>7){
        mostrarImagen("imgResultado","./imagenes/4e2993fa23fefd30ccd09a17049ba745.gif");
    }else{
        mostrarImagen("imgResultado","./imagenes/tumblr_lmwsamrrxT1qagx30.0.0.1488208493.gif");
    }
    }*/
    console.log(promedio.toFixed(2));
}
}
