window.onload = function () {
    const form = document.querySelector("form.input"); //Capturar formulario
    form.email.focus()

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const errorsElement = document.querySelector(".error");
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
      //Validar si tiene un formato de email
    } else if (!form.password.value.match(/^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^-!@._*#%]*[-!@._*#%])[-A-Za-z0-9=!@._*#%]*$/)) { 
        errors.push({
          name: "password",
          message: "Tu contraseña no cumple los requerimientos",
        });
        form.password.classList.remove("is-valid");
        form.password.classList.add("is-invalid");
    } else if (form.password.value.length < 8) { 
      errors.push({
        name: "password",
        message: "Tu contraseña debe tener mínimo 8 caracteres",
      });
      form.password.classList.remove("is-valid");
      form.password.classList.add("is-invalid");
  }
    else {
      form.password.classList.remove("is-invalid");
      form.password.classList.add("is-valid");
    }