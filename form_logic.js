function sendSubscribeForm(idForm) {
  const susbcribeForm = document.getElementById(idForm);
  console.log(susbcribeForm);
  const isValidEmail = validateForm(susbcribeForm);
  if (!isValidEmail) return;

  document.querySelector("#form-title-1").classList.remove("gradient-button");
  document.querySelector("#form-title-1").classList.add("success-gradient");
  document.querySelector("#form-title-1").textContent =
    "¡Gracias por suscribirte!";
  document.querySelector("#form-subtitle").textContent =
    "Te mantendremos informado cuando haya nuevas publicaciones.";
  document.querySelector("#emailInputT").classList.add("hidden");
  document.querySelector("#cienp").classList.add("hidden");

  document.querySelector("#form-title-2").classList.remove("gradient-button");
  document.querySelector("#form-title-2").classList.add("success-gradient");
  document.querySelector("#form-title-2").textContent =
    "¡Gracias por suscribirte!";
  document.querySelector("#form-subtitle-2").textContent =
    "Te mantendremos informado cuando haya nuevas publicaciones.";
  document.querySelector("#emailInput").classList.add("hidden");
  document.querySelector("#cienp2").classList.add("hidden");

  notify.success("La subscripción se ha realizado con éxito", 4000);
  document.querySelector("#btn-form").classList.add("hidden");
  document.querySelector("#btn-form2").classList.add("hidden");
}
