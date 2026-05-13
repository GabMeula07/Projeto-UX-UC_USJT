(function () {
  const btnSubscribe = document.getElementById("btnSubscribe");
  const email = document.getElementById("email");
  const privacy = document.getElementById("privacy");

  if (!btnSubscribe || !email || !privacy) return;

  btnSubscribe.addEventListener("click", () => {
    if (!email.value.trim() || !email.validity.valid) {
      email.reportValidity();
      email.focus();
      return;
    }
    if (!privacy.checked) {
      privacy.reportValidity();
      privacy.focus();
      return;
    }
    alert("Assinatura realizada com sucesso!");
  });
})();
