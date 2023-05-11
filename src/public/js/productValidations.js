window.addEventListener("load", () => {
    const fields = ["name", "description", "price", "discount", "category", "highlight", "model", "year", "size", "weight", "features"]

    fields.forEach(field => {
        const inputField = document.getElementById(field)

        inputField.addEventListener("focusout", () => {
            const sigleErrorMessage = document.querySelector(`p.error-${field}`);

            if (!inputField.value) {
                const errorMessage = document.createElement("p");

                errorMessage.classList.add("error", `error-${field}`)

                errorMessage.textContent = "Este campo no puede estar vacio"

                inputField.parentNode.insertBefore(errorMessage, inputField.nextSibling);
            }

            if (sigleErrorMessage) {
                sigleErrorMessage.remove()
            }
        })
    })
})