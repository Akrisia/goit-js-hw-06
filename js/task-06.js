const validationField = document.querySelector("#validation-input");

validationField.addEventListener("input", (event) => {
    event.preventDefault();

    event.currentTarget.value.length === Number(validationField.dataset.length)
        ? validationField.setAttribute("class", "valid")
        : validationField.setAttribute("class", "invalid");
});