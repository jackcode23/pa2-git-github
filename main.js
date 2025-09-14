const grid = new Muuri('.grid', {
  layout: {
    rounding: false,
  },
});

window.addEventListener('load', () => {
  grid.refreshItems().layout();
  document.getElementById('grid').classList.add('imagenes-cargadas');

  const enlaces = document.querySelectorAll('#categorias a');
  enlaces.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        evento.preventDefault();
        enlaces.forEach((enlace) => enlace.classList.remove('activo'));
        evento.target.classList.add('activo'); 

        const categoria = evento.target.innerHTML.tolowerCase();
        categoria ==='todos' ? grid.filter('[data-gategoria]') : grid.filter(`[data-categoria="${categoria}"]`); 
    });
  });
})

hola borren esto cancelIdleCallback
<footer>
  <p>© 2025 Mi Portafolio</p>
</footer>
<footer>
  <p>© 2025 Portafolio de Deysi</p>
</footer>
