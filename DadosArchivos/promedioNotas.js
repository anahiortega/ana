  calcularPromedioNotas = function() {
    // Función que recupera el valor en punto flotante de un campo de texto
    const recuperarFlotante = (id) => {
        const valor = parseFloat(document.getElementById(id).value);
        return isNaN(valor) ? 0 : valor; // Retorna 0 si el valor no es un número
    };

    // Función que calcula el promedio de tres notas
    const calcularPromedio = (nota1, nota2, nota3) => {
        return (nota1 + nota2 + nota3) / 3;
    };

    // Recuperar notas
    let valorNota1 = recuperarFlotante("txtNota1");
    let valorNota2 = recuperarFlotante("txtNota2");
    let valorNota3 = recuperarFlotante("txtNota3");

    // Calcular promedio
    let promedio = calcularPromedio(valorNota1, valorNota2, valorNota3);
    let valorDosDecimales = promedio.toFixed(2);

    // Mostrar resultados según el promedio
    if (promedio >= 0 && promedio < 5) {
        mostrarTexto("lblMensaje", "REPROBADO: " + valorDosDecimales);
        mostrarImagen("imgResultado", "./imagenes/tumblr_lmwsamrrxT1qagx30.0.0.1488208493.gif");
    } else if (promedio >= 5 && promedio <= 8) {
        mostrarTexto("lblMensaje", "BUEN TRABAJO: " + valorDosDecimales);
        mostrarImagen("imgResultado", "./imagenes/4e2993fa23fefd30ccd09a17049ba745.gif");
    } else if (promedio > 8 && promedio <= 10) {
        mostrarTexto("lblMensaje", "EXCELENTE: " + valorDosDecimales);
        mostrarImagen("imgResultado", "./imagenes/4e2993fa23fefd30ccd09a17049ba745.gif");
    } else {
        mostrarTexto("lblMensaje", "DATOS INCORRECTOS");
        mostrarImagen("imgResultado", "./imagenes/no_gif.gif"); // Asegúrate de que esta ruta sea válida
    }

    // Imprimir el promedio en la consola
    console.log(valorDosDecimales);
};

// Función para mostrar texto en un elemento
const mostrarTexto = (id, mensaje) => {
    document.getElementById(id).innerText = mensaje;
};

// Función para mostrar una imagen en un elemento
const mostrarImagen = (id, ruta) => {
    const img = document.getElementById(id);
    img.src = ruta;
    img.style.display = 'block'; 
};
