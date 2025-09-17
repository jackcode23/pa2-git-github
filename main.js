const grid = new Muuri('.grid', {
  layout: {
    rounding: false,
  },
});

window.addEventListener('load', () => {
  grid.refreshItems().layout();
  document.getElementById('grid').classList.add('imagenes-cargadas');

  const enlaces = document.querySelectorAll('#categorias a');
  enlaces.forEach((elemento) => {
    elemento.addEventListener('click', (evento) => {
      evento.preventDefault();
      enlaces.forEach((enlace) => enlace.classList.remove('activo'));
      evento.target.classList.add('activo');

      const categoria = evento.target.innerHTML.toLowerCase();
      if (categoria === 'todos') {
        grid.filter('[data-categoria]');
      } else {
        grid.filter(`[data-categoria="${categoria}"]`);
      }
    });
  });

  // Barra de búsqueda
  document.querySelector('#barra-busqueda').addEventListener('input', (evento) => {
    const busqueda = evento.target.value.toLowerCase();
    grid.filter((item) => item.getElement().dataset.etiquetas.toLowerCase().includes(busqueda));
  });

  // Overlay para visualizar imágenes
  const overlay = document.getElementById('overlay');
  const overlayImagen = document.querySelector('#overlay img');
  const overlayDescripcion = document.querySelector('#overlay .descripcion');
  const btnCerrar = document.getElementById('btn-cerrar-popup');

  document.querySelectorAll('.grid .item img').forEach((elemento) => {
    elemento.addEventListener('click', () => {
      const ruta = elemento.getAttribute('src');
      const descripcion = elemento.parentNode.parentNode.dataset.descripcion || '';
      overlay.classList.add('activo');
      overlayImagen.src = ruta;
      overlayDescripcion.innerHTML = descripcion;
    });
  });

  // Cerrar overlay con botón
  btnCerrar.addEventListener('click', () => {
    overlay.classList.remove('activo');
    overlayImagen.src = '';
  });

  // Cerrar overlay haciendo clic fuera de la imagen
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.classList.remove('activo');
      overlayImagen.src = '';
    }
  });
});
