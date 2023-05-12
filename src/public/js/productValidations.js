window.addEventListener("load", () => {
    const fields = ["name", "description", "price", "discount", "category", "highlight", "model", "year", "size", "weight", "features"]

    const createBtn = document.querySelector(".create-button")

    fields.forEach(field => {
        const inputField = document.getElementById(field)

        inputField.addEventListener("focusout", () => {
            const sigleErrorMessage = document.querySelector(`p.error-${field}`);

            const errorMessage = document.createElement("p");

            if (field == "name" && inputField.value.length < 5) {
                errorMessage.classList.add("error", `error-${field}`)

                errorMessage.textContent = "5 caracteres minimo"

                inputField.parentNode.insertBefore(errorMessage, inputField.nextSibling);

                createBtn.addEventListener("click", (e) => {
                    e.preventDefault();
                })
            }

            if (field == "description" && inputField.value.length < 20) {
                errorMessage.classList.add("error", `error-${field}`)

                errorMessage.textContent = "20 caracteres minimo"

                inputField.parentNode.insertBefore(errorMessage, inputField.nextSibling);

                createBtn.addEventListener("click", (e) => {
                    e.preventDefault();
                })
            }

            if (!inputField.value) {
                errorMessage.classList.add("error", `error-${field}`)

                errorMessage.textContent = "Este campo no puede estar vacio"

                inputField.parentNode.insertBefore(errorMessage, inputField.nextSibling);

                createBtn.addEventListener("click", (e) => {
                    e.preventDefault();
                })
            }

            if (sigleErrorMessage) {
                sigleErrorMessage.remove()
            }
        })
    })
})