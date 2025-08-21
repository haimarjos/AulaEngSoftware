document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('toggle-benefits');
  const list = document.getElementById('benefits-list');

  if (btn && list) {
    btn.addEventListener('click', function () {
      if (list.style.display === 'none' || list.style.display === '') {
        list.style.display = 'block';
        btn.textContent = 'Ocultar Benefícios';
      } else {
        list.style.display = 'none';
        btn.textContent = 'Mostrar Benefícios';
      }
    });
    // Inicializa o texto do botão
    btn.textContent = 'Ocultar Benefícios';
  }
});