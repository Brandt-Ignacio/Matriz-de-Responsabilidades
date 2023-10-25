$(document).ready(function () {
  // Función para agregar una nueva fila a la tabla
  $(".agregar-fila").on("click", function () {
      var newRow = $("<tr>");
      var cols = "";

      cols += '<td class="dni" data-index="0"><input type="text" class="dni-input" placeholder="12345678"></td>';
      cols += '<td><input type="text" class="nombre-input" placeholder="Jhon"></td>';
      cols += '<td><input type="text" class="apellido-input" placeholder="Doe"></td>';
      cols += '<td><input type="text" class="disponibilidad-input" placeholder="07:00 a 13:00"></td>';
      cols += '<td><input type="text" class="rol-input" placeholder="Diseñador"></td>';
      cols += '<td><i class="fas fa-trash eliminar-fila"></i></td>';

      newRow.append(cols);
      $("table tbody").append(newRow);
  });

  // Función para eliminar una fila de la tabla
  $("table").on("click", ".eliminar-fila", function () {
      $(this).closest("tr").remove();
  });
});
