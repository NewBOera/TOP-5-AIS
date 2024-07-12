const forms = document.querySelectorAll("form");
forms.forEach(function (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
  });
});

// ? You can add diferent validations for each form
function validateForm(formulario) {
  let inputs = formulario.querySelectorAll("input, textarea, checkbox");
  let isValid = true;

  inputs.forEach(function (input) {
    input.classList.remove("error");
    if (input.name === "email" && !isValidEmail(input.value)) {
      isValid = false;
      input.classList.add("error");
      notify.warning("El correo electrónico no es válido", 3000);
    }
  });
  return isValid;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
