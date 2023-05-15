window.addEventListener("load", () => {
    function preventCreateBtn() {
        createBtn.style.display = "none";
    }

    function validations(field, inputField) {
        const singleErrorMessage = document.querySelector(`p.error-${field}`);

        const errorMessage = document.createElement("p");

        if (field == "name" && inputField.value.length < 5) {
            errorMessage.classList.add("error", `error-${field}`)

            errorMessage.textContent = "5 caracteres minimo"

            inputField.parentNode.insertBefore(errorMessage, inputField.nextSibling);

            preventCreateBtn()
        }

        if (field == "description" && inputField.value.length < 20) {
            errorMessage.classList.add("error", `error-${field}`)

            errorMessage.textContent = "20 caracteres minimo"

            inputField.parentNode.insertBefore(errorMessage, inputField.nextSibling);

            preventCreateBtn()
        }

        if (field == "images" && inputField.files.length > 0) {
            const acceptedExtensions = ['jpg', 'jpeg', 'png'];

            for (let i = 0; i < inputField.files.length; i++) {
                const filetType = inputField.files[i].type.split("/")[1];

                if (!acceptedExtensions.includes(filetType)) {
                    errorMessage.classList.add("error", `error-${field}`)

                    errorMessage.textContent = "No aceptamos ese formato, aceptamos: ." + acceptedExtensions.join(" .")

                    inputField.parentNode.insertBefore(errorMessage, inputField.nextSibling);

                    inputField.value = ""

                    preventCreateBtn()
                }
            }
        }

        if (field != "images" && (!inputField.value || !inputField.value.trim().length > 0)) {
            errorMessage.classList.add("error", `error-${field}`)

            errorMessage.textContent = "Este campo no puede estar vacio"

            inputField.parentNode.insertBefore(errorMessage, inputField.nextSibling);

            preventCreateBtn()
        }

        if (singleErrorMessage) {
            singleErrorMessage.remove()
        }

        if (!document.querySelectorAll("p.error").length) {
            createBtn.style.display = "revert"
            return true
        }
    }

    function colorsValidations() {
        const checkboxes = document.querySelectorAll("input.checkbox-color");

        let bool

        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                bool = true
            }
        })

        const divColors = document.getElementById("colors")
        const errorMessage = document.createElement("p");
        errorMessage.classList.add("error", `error-checkbox-color`)
        errorMessage.textContent = "Selecciona un color"
        if (!bool && !document.querySelector("p.error-checkbox-color")) {
            preventCreateBtn();
            divColors.parentNode.insertBefore(errorMessage, divColors);
        }

        return bool
    }


    const fields = ["name", "description", "price", "discount", "category", "highlight", "model", "year", "size", "weight", "features", "images"]

    const createBtn = document.querySelector(".create-button")

    fields.forEach(field => {
        const inputField = document.getElementById(field)

        inputField.addEventListener("focusout", () => {
            validations(field, inputField);
        })

        createBtn.addEventListener("click", (e) => {
            const validationsBool = validations(field, inputField)

            const colorsValidationsBool = colorsValidations()

            if (!validationsBool || !colorsValidationsBool) {
                e.preventDefault()
            }
        })
    })
})