// view.js
const View = {
  render(formulario ) {
    const $table = $('#ol-item-list');
    $table.empty(); // Limpia la lista
    // Suponiendo que formulario es un objeto con propiedades nombre, apellido, etc.
    $table.append(`<tr><td>${formulario.nombre}</td><td>${formulario.apellido}</td><td>${formulario.edad}</td><td>${formulario.ciudad}</td></tr>`);
  },
  
};

