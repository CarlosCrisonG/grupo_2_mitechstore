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
      form.first_name.classList.add("is-invalid");
    } else {
      form.last_name.classList.remove("is-invalid");
      form.last_name.classList.add("is-valid");
    }

    // Mostrar Errores
    errors.forEach((error) => {
      const errorLabel = document.getElementById("error-" + error.name);
      errorLabel.innerHTML = error.message;
    });
    if (errors.length === 0) {
      form.submit();
    }
  });
};
