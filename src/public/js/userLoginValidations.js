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

        if (!form.email.value) {
            errors.push({
                name: "email",
                message: "El correo electronico no puede estar vacio",
            });
            form.email.classList.add("is-valid");
        } else if (form.email.value.length < 2) {
            errors.push({
              name: "email",
              message: "Tu correo electronico debe tener al menos 2 letras",
            });
            form.email.classList.add("is-invalid");
          } else if (form.email.value.includes("@")){
            errors.push({
                name: "email",
                message: "Tu correo electronico debe ser valido",
              });
              form.email.classList.add("is-invalid");
        } else if (form.email.value.includes(".")){
            errors.push({
                name: "email",
                message: "Tu correo electronico debe ser valido",
              });
              form.email.classList.add("is-invalid");
        } else {
            form.email.classList.remove("is-invalid");
            form.email.classList.add("is-valid");
          };

          // Password 
          if (!form.password.value) {
            errors.push({
                name: "password",
                message: "Debes llenar este campo", 
            });
            form.password.classList.add("is-invalid");
        } else {
            form.password.classList.remove("is-invalid");
            form.password.classList.add("is-valid");
          }
        })
    }