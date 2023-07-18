let productos = localStorage.getItem("productoList");
productos = productos ? JSON.parse(productos) : [];
showProducto();

function AddProducto() {
    let pedido = document.getElementById('pedido').value;
    let cantidad = document.getElementById('cantidad').value;
    let producto = document.getElementById('producto').value;
    let valor  = document.getElementById('valor').value;
    
    if (pedido && cantidad && producto && valor) 
    {
        productos.push({'pedido': pedido, 'producto': producto,'cantidad': cantidad,'valor': valor});
        showProducto();
    }
}

function showProducto() {
    let divDinamico = document.getElementById('dinamico');
    let dibujarTabla ='';
    if (productos.length > 0){
        dibujarTabla = '<div class="tituloDinamico"><h3>Listado de Pedidos</h3></div>';
        dibujarTabla += `<div class="tituloTable">Producto</div>`;
        dibujarTabla += `<div class="tituloTable">Pedido</div>`;
        dibujarTabla += `<div class="tituloTable">Cantidad</div>`;
        dibujarTabla += `<div class="tituloTable">Valor</div>`;
        dibujarTabla += `<div class="rowDelete">Borrar</div>`;
        divDinamico.innerHTML = dibujarTabla;
    }

    productos.forEach((producto, index) => {
        dibujarTabla += `<div class="rowDinamico">${producto.pedido}</div>`;
        dibujarTabla += `<div class="rowDinamico">${producto.producto}</div>`;
        dibujarTabla += `<div class="rowDinamico">${producto.cantidad}</div>`;
        dibujarTabla += `<div class="rowDinamico">${producto.valor}</div>`;
        dibujarTabla += `<div class="rowDelete"><a href="#" class="btn btn-danger" onclick="deleteProducto(${index})">X</a></div>`;    
    });
    localStorage.setItem("productoList", JSON.stringify(productos));
    divDinamico.innerHTML = dibujarTabla;
}

function deleteProducto(item){
    productos.splice(item,1);
    showProducto();
}