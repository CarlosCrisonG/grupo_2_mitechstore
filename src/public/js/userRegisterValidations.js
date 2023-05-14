window.onload = function () {
  const form = document.querySelector("form.formulario-registro"); //Capturar formulario
  form.first_name.focus(); //Enfocar 1er Nombre

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const allErrorLabels = document.querySelectorAll(".error");
    allErrorLabels.forEach((element) => {
      element.innerHTML = "";
    });
    const errors = [];
    // 1er Nombre
    if (!form.first_name.value) {
      errors.push({
        name: "first_name",
        message: "Tu nombre no puede estar vacio",
      });
      form.first_name.classList.add("is-invalid");
    } else if (form.first_name.value.length < 2) {
      errors.push({
        name: "first_name",
        message: "Tu nombre debe tener al menos 2 letras",
      });
      form.first_name.classList.add("is-invalid");
    } else {
      form.first_name.classList.remove("is-invalid");
      form.first_name.classList.add("is-valid");
    }
    // 2do Nombre
    if (!form.last_name.value) {
      errors.push({
        name: "last_name",
        message: "Tu apellido no puede estar vacio",
      });
      form.last_name.classList.add("is-invalid");
    } else if (form.last_name.value.length < 2) {
      errors.push({
        name: "last_name",
        message: "Tu apellido debe tener al menos 2 letras",
      });
      form.last_name.classList.add("is-invalid");
    } else {
      form.last_name.classList.remove("is-invalid");
      form.last_name.classList.add("is-valid");
    }
    // Email
    if (!form.email.value) {
      errors.push({
        name: "email",
        message: "Tu email no puede estar vacio",
      });
      form.email.classList.add("is-invalid");
    } else if (form.email.value) {
      //Verificar si es email válido
      let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!form.email.value.match(mailformat)) {
        errors.push({
          name: "email",
          message: "Debes escribir un email válido",
        });
        form.email.classList.add("is-invalid");
      }
    } else {
      form.email.classList.remove("is-invalid");
      form.email.classList.add("is-valid");
    }

    // Password
    if (!form.password.value) {
      errors.push({
        name: "password",
        message: "Tu password no puede estar vacio",
      });
      form.password.classList.add("is-invalid");
    } else if (form.password.value) {
      let passformat = /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^-!@._*#%]*[-!@._*#%])[-A-Za-z0-9=!@._*#%]*$/;
      if (!form.password.value.match(passformat)) {
        errors.push({
          name: "password",
          message: "Tu contraseña no cumple los requerimientos",
        });
        form.password.classList.add("is-invalid");
      } else {
        form.password.classList.remove("is-invalid");
        form.password.classList.add("is-valid");
      }
    } else {
      form.password.classList.remove("is-invalid");
      form.password.classList.add("is-valid");
    }

    // Confirmar Password
    if (!form.password2.value) {
      errors.push({
        name: "password2",
        message: "Debes confirmar tu contraseña",
      });
      form.password2.classList.add("is-invalid");
    } else if (form.password2.value) {
      if (!form.password.value.match(form.password2.value)) {
        errors.push({
          name: "password2",
          message: "Tus contraseñas no coinciden",
        });
        form.password2.classList.add("is-invalid");
      } else {
        form.password2.classList.remove("is-invalid");
        form.password2.classList.add("is-valid");
      }
    } else {
      form.password2.classList.remove("is-invalid");
      form.password2.classList.add("is-valid");
    }

    // Mostrar Errores de Campos Vacios
    errors.forEach((error) => {
      const errorLabel = document.getElementById("error-" + error.name);
      errorLabel.innerHTML = error.message;
    });
    if (errors.length === 0) {
      form.submit();
    }
  });

  //Validador de Email
  //Cuando se hace clic en la caja de password
  form.password.addEventListener("focus", (e) => {
    let myInput = document.getElementById("password");
    let letter = document.getElementById("letter");
    let capital = document.getElementById("capital");
    let number = document.getElementById("number");
    let length = document.getElementById("length");

    document.getElementById("pass_validator_message").style.display =
      "inline-block";

    // Cuando se escribe algo en el campo
    myInput.onkeyup = function () {
      let passformat = /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^-!@._*#%]*[-!@._*#%])[-A-Za-z0-9=!@._*#%]*$/;
      // Validar minúsculas
      let lowerCaseLetters = /[a-z]/g;
      if (myInput.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
      } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
      }

      // Validar mayúsculas
      let upperCaseLetters = /[A-Z]/g;
      if (myInput.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
      } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
      }

      // Validar números
      let numbers = /[0-9]/g;
      if (myInput.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
      } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
      }

      // Validar símbolos
      let symbols = /[^a-zA-Z0-9 ]/g;
      if (myInput.value.match(symbols)) {
        symbol.classList.remove("invalid");
        symbol.classList.add("valid");
      } else {
        symbol.classList.remove("valid");
        symbol.classList.add("invalid");
      }

      // Validar longitud
      if (myInput.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
      } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
      }
    };
  });
  // Cuando se hace clic fuera de la caja de password
  form.password.addEventListener("blur", (e) => {
    document.getElementById("pass_validator_message").style.display = "none";
  });
};
