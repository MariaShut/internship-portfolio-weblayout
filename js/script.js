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
  const emailInput = document.getElementById('email-input');
  const messageInput = document.getElementById('message-input');

  const nameFieldset = document.getElementById('name-fieldset');
  const emailFieldset = document.getElementById('email-fieldset');
  const messageFieldset = document.getElementById('message-fieldset');

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  nameInput.addEventListener("input", () => {
    const trimmedValue = nameInput.value.trim();
    nameFieldset.classList.toggle("error", trimmedValue === ''); // класс будет добавлен, если true (пустое поле)

    nameInput.value = capitalizeFirstLetter(trimmedValue);
  })

  messageInput.addEventListener("input", () => {
    messageFieldset.classList.toggle("error", messageInput.value.trim() === '');
  });

  emailInput.addEventListener("input", () => {
    const emailValue = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    emailFieldset.classList.toggle("error", !emailPattern.test(emailValue));
  });
});