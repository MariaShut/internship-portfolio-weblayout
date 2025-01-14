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

  const submitButton = document.querySelector('.form__button');

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function validateName() {
    const trimmedValue = nameInput.value.trim();
    const isValid = trimmedValue !== '';

    nameFieldset.classList.toggle("error", !isValid);
    document.getElementById('name-error').textContent = isValid ? '' : 'Поле не может быть пустым. Введите ваше имя.';
    return isValid;
  }

  function validateEmail() {
    const emailValue = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailPattern.test(emailValue);

    emailFieldset.classList.toggle("error", !isValid);
    document.getElementById('email-error').textContent = isValid ? '' : 'Почта должна содержать символ @, доменное имя и точку после него.';
    return isValid;
  }

  function validateMessage() {
    const isValid = messageInput.value.trim() !== '';

    messageFieldset.classList.toggle("error", !isValid);
    document.getElementById('message-error').textContent = isValid ? '' : 'Поле не может быть пустым. Укажите сообщение.';
    return isValid;
  }

  function updateSubmitButtonState() {
    const isFormValid = validateName() && validateEmail() && validateMessage();
    submitButton.disabled = !isFormValid;
  }


  nameInput.addEventListener("blur", () => {
    nameInput.value = capitalizeFirstLetter(nameInput.value.trim());
    validateName();
    updateSubmitButtonState();
  });
  
  emailInput.addEventListener("blur", () => {
    validateEmail();
    updateSubmitButtonState();
  });
  
  messageInput.addEventListener("blur", () => {
    validateMessage();
    updateSubmitButtonState();
  });
});