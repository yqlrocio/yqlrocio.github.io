// model.js
 const Model = {

    filas: [],		// Usamos un array como BD para usar como ejemplo

  // Añade un nuevo objeto (datos del formulario) al array
  añadirFila(nombre, apellido, edad, ciudad) {
    const formulario = { nombre, apellido, edad, ciudad };
    this.filas.push(formulario);
    this.guardarEnStorage(); // Opcional: Persistencia
    return this.filas;
  },

  // Elimina un elemento del array usando su índice
  eliminarFila(index) {
    if (index >= 0 && index < this.filas.length) {
      this.filas.splice(index, 1);
      this.guardarEnStorage();
    }
    return this.filas;
  },

  // Obtiene las filas (Simula la deserialización JSON opcional)
  obtenerFilas() {
    const datosContenedor = localStorage.getItem('filasMVC');
    if (datosContenedor) {
      this.filas = JSON.parse(datosContenedor);
    }
    return this.filas;
  },

  // Serializa la lista a JSON y la guarda (Opcional)
  guardarEnStorage() {
    localStorage.setItem('filasMVC', JSON.stringify(this.filas));
  }
};
