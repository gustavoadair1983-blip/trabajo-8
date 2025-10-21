// 1. Cargar la informacion del televisor dentro de un array llamado productos
const productos = [
    {
        nombre: 'Toyota Corolla 2021',
        descripcion: 'Sedán compacto con excelente rendimiento de combustible y sistema de navegación integrado.',
        precio: 15999.99,
        imagen: 'imagenes/img1.webp',
      },
      {
        nombre: 'Ford F-150 2020',
        descripcion: 'Camioneta potente con gran capacidad de carga, ideal para trabajo pesado y aventuras off-road.',
        precio: 27999.99,
        imagen: 'imagenes/img2.webp',
      },
      {
        nombre: 'Chevrolet Spark 2022',
        descripcion: 'Auto urbano, económico y fácil de manejar, perfecto para la ciudad.',
        precio: 9999.99,
        imagen: 'imagenes/img3.webp',
      },
      {
        nombre: 'BMW Serie 3 2019',
        descripcion: 'Vehículo de lujo con interior premium, motor turbo y tecnología avanzada.',
        precio: 24999.99,
        imagen: 'imagenes/img4.webp',
      }
      
  ];
  
  // 2. Crear las tarjetas mediante la funcion crearTarjetaProducto
  const catalogo = document.getElementById('catalogo');
  
  function crearTarjetaProducto(producto) {
    const card = document.createElement('div');
    card.className = 'producto-card';
    
    const card_imagen = document.createElement('img');
    card_imagen.src = producto.imagen;
    card_imagen.alt = producto.nombre;
    
    const card_titulo = document.createElement('h2');
    card_titulo.textContent = producto.nombre;
    
    const descripcion = document.createElement('p');
    descripcion.textContent = producto.descripcion;
  
    const precio = document.createElement('span');
    precio.className = 'precio';
    precio.textContent = `$${producto.precio.toFixed(2)}`;
    
    const boton = document.createElement('button');
    boton.className = 'btn-comprar';
    boton.textContent = 'Comprar';
    
    card.appendChild(card_imagen);
    card.appendChild(card_titulo);
    card.appendChild(descripcion);
    card.appendChild(precio);
    card.appendChild(boton);
    
    catalogo.appendChild(card);
  }
  
  // Llamamos a la funcion para cada producto
  productos.forEach(producto => crearTarjetaProducto(producto));
  
// 3. Mediante una funcion llamada renderizarCatalogo, se encargara de tomar todos los datos de tus productos y dibujarlos (o renderizarlos) como tarjetas HTML dentro del contenedor principal de tu página. Utilizando un bucle para procesar cada producto individualmente y agregarlo al catálogo.

function renderizarCatalogo() {
    productos.forEach(producto => {
      const tarjeta = crearTarjetaProducto(producto);
      catalogo.appendChild(tarjeta);
    });
  }
  
  // 4. Por ultimo, se llama a la funcion renderizarCatalogo para cargar la pagina
  
  window.onload = renderizarCatalogo;
  
  