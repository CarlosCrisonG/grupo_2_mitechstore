window.onload = function () {
  const form = document.querySelector("form.form"); //Capturar formulario
  form.email.focus()

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const errorsElement = document.querySelectorAll(".error");
    errorsElement.forEach(element => {
      element.innerHTML = "";
    })
    const errors = [];

    // Email
    if (!form.email.value) {
      errors.push({
        name: "email",
        message: "Es obligatorio llenar este campo",
      });
      form.email.classList.remove("is-valid");
      form.email.classList.add("is-invalid");
    } else if (form.email.value) {
      let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!form.email.value.match(mailformat)) {
        errors.push({
          name: "email",
          message: "El email debe ser valido",
        });
        form.email.classList.remove("is-valid");
        form.email.classList.add("is-invalid");
      } else {
        form.email.classList.remove("is-invalid");
        form.email.classList.add("is-valid");
      }
    } else {
      form.email.classList.remove("is-invalid");
      form.email.classList.add("is-valid");
    }

    // Contraseña
    if (!form.password.value) {
      errors.push({
        name: "password",
        message: "Tu contraseña no puede estar vacia",
      });
      form.password.classList.remove("is-valid");
      form.password.classList.add("is-invalid");
    } else {
      form.password.classList.remove("is-invalid");
      form.password.classList.add("is-valid");
    }
  });
}