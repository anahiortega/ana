function calcularValorTotal() {
    // 1. Recuperar los valores desde los campos de texto
    let nombreProducto = recuperarTexto("txtProducto");
    let precioProducto = recuperarFloat("txtPrecio");
    let cantidad = recuperarInt("txtCantidad");
    let porcentajeDescuento = recuperarInt("txtPorcentajeDescuento");

    // 2. Calcular el subtotal
    let valorSubtotal = calcularSubtotal(precioProducto, cantidad);
    mostrarTexto("lblSubtotal", valorSubtotal.toFixed(2));

    // 3. Calcular el descuento
    let valorDescuento = calcularValorDescuento(valorSubtotal, porcentajeDescuento);
    mostrarTexto("lblDescuento", valorDescuento.toFixed(2));

    // 4. Calcular el IVA sobre el subtotal menos el descuento
    let subtotalConDescuento = valorSubtotal - valorDescuento;
    let valorIVA = calcularIVA(subtotalConDescuento);
    mostrarTexto("lblValorIVA", valorIVA.toFixed(2));

    // 5. Calcular el total
    let valorTotal = calcularTotal(valorSubtotal, valorDescuento, valorIVA);
    mostrarTexto("lblTotal", valorTotal.toFixed(2));
}

