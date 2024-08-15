// Función para calcular el subtotal
function calcularSubtotal(precio, cantidad) {
    return precio * cantidad;
}

// Función para calcular el descuento
function calcularValorDescuento(subtotal, porcentajeDescuento) {
    return (subtotal * porcentajeDescuento) / 100;
}

// Función para calcular el IVA
function calcularIVA(subtotalConDescuento, porcentajeIVA = 12) {
    return (subtotalConDescuento * porcentajeIVA) / 100;
}

// Función para calcular el total
function calcularTotal(subtotal, descuento, iva) {
    return subtotal - descuento + iva;
}
