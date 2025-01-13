document.addEventListener('DOMContentLoaded', () => {
  // SIDEBAR MENU
  const burgerMenu = document.querySelector('.burger-menu');
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.overlay');
  const closeBtn = document.querySelector('.close-btn');

  // Открыть меню
  function openSidebar() {
      sidebar.classList.add('open');
      overlay.style.display = 'block';
  }

  // Закрыть меню
  function closeSidebar() {
      sidebar.classList.remove('open');
      overlay.style.display = 'none';
  }

  burgerMenu.addEventListener('click', openSidebar);
  closeBtn.addEventListener('click', closeSidebar);

  // закрыть меню по клику в любом месте экрана
  overlay.addEventListener('click', closeSidebar);

  // FORM VALIDATION
  const nameInput = document.getElementById('name-input');

  nameInput.addEventListener("input", () => {
    nameInput.classList.toggle("error", 
      nameInput.ariaValueMax.trim() === '' // класс будет добавлен, если true (пустое поле)
    ); 
  })

});