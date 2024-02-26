// Calcular el cumplimiento y actualizar la tabla
function calcularCumplimiento() {
    const rows = document.querySelectorAll('#productivity-table tbody tr');
    rows.forEach(row => {
      const objetivo = parseFloat(row.querySelector('.objetivo').value);
      const forecast = parseFloat(row.querySelector('.forecast').value);
      const actual = parseFloat(row.querySelector('.actual').value);
      const cumplimientoCell = row.querySelector('.cumplimiento');
      const cumplimiento = actual / objetivo * 100;
      cumplimientoCell.textContent = isNaN(cumplimiento) ? '-' : cumplimiento.toFixed(2) + '%';
    });
  }
  
  // Agregar evento de cambio a las celdas de entrada
  document.querySelectorAll('.objetivo, .forecast, .actual').forEach(input => {
    input.addEventListener('input', calcularCumplimiento);
  });
  
  // Calcular el cumplimiento inicial
  calcularCumplimiento();