document.addEventListener('DOMContentLoaded', () => {
  // SIDEBAR MENU
  const burgerMenu = document.querySelector('.burger-menu');
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.overlay');
  const closeBtn = document.querySelector('.close-btn');

  function openSidebar() {
    sidebar.classList.add('open');
    overlay.style.display = 'block';
  }

  function closeSidebar() {
    sidebar.classList.remove('open');
    overlay.style.display = 'none';
  }

  burgerMenu.addEventListener('click', openSidebar);
  closeBtn.addEventListener('click', closeSidebar);

  // закрыть меню по клику в любом месте экрана
  // overlay.addEventListener('click', closeSidebar);


  // FORM VALIDATION
  const nameInput = document.getElementById('name-input');
  const emailInput = document.getElementById('email-input');
  const messageInput = document.getElementById('message-input');

  const nameFieldset = document.getElementById('name-fieldset');
  const emailFieldset = document.getElementById('email-fieldset');
  const messageFieldset = document.getElementById('message-fieldset');

  const submitButton = document.querySelector('.form__button');
  const form = document.querySelector('.form');

  let isFormValid = false;

  function getTrimmedValue(input) {
    return input.value.trim();
  }

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
    isFormValid = validateName() && validateEmail() && validateMessage();
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


  // закоментирвоать, чтобы увидеть данные что отправляются на сервер
  form.addEventListener('submit', (event) => {
    event.preventDefault();
  
    if (isFormValid) {
      const formData = {
        name: getTrimmedValue(nameInput),
        email: getTrimmedValue(emailInput),
        message: getTrimmedValue(messageInput),
      };
  
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      .then(response => {
        if (response.ok) {
          nameInput.value = '';
          emailInput.value = '';
          messageInput.value = '';
        } else {
          console.error('Ошибка при отправке данных на сервер');
        }
      })
    }
  });

});




// To Fix validation

// function validateTextField(input, fieldset, errorElementId, errorMessage) {
//   const isValid = getTrimmedValue(input) !== '';
//   fieldset.classList.toggle("error", !isValid);

//   document.getElementById(errorElementId).textContent = isValid ? '' : errorMessage;
//   return isValid;
// }

// function validateEmail() {
//   const emailValue = getTrimmedValue(emailInput);
//   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   const isValid = emailPattern.test(emailValue);

//   emailFieldset.classList.toggle("error", !isValid);
//   document.getElementById('email-error').textContent = isValid ? '' : 'Почта должна содержать символ @, доменное имя и точку после него.';
//   return isValid;
// }

// function updateSubmitButtonState() {
//   isFormValid = validateTextField(nameInput, nameFieldset, 'name-error', 'Поле не может быть пустым. Введите ваше имя.') &&
//                 validateEmail() &&
//                 validateTextField(messageInput, messageFieldset, 'message-error', 'Поле не может быть пустым. Укажите сообщение.');
//   submitButton.disabled = !isFormValid;
// }

// nameInput.addEventListener("blur", () => {
//   nameInput.value = capitalizeFirstLetter(getTrimmedValue(nameInput));
//   updateSubmitButtonState();
// });
// emailInput.addEventListener("blur", updateSubmitButtonState);
// messageInput.addEventListener("blur", updateSubmitButtonState);