function sendSubscribeForm(idForm) {
  const susbcribeForm = document.getElementById(idForm);
  console.log(susbcribeForm);
  const isValidEmail = validateForm(susbcribeForm);
  if (!isValidEmail) return;

  notify.success("La subscripción se ha realizado con éxito", 4000);

  document.querySelector("#emailInput").value = "";
}
