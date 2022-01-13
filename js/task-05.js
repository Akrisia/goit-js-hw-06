const enteredName = document.querySelector("#name-input");
const greetingName = document.querySelector("#name-output");
const defaultName = greetingName.textContent;

enteredName.addEventListener("input", (event) => {
    event.preventDefault();
    greetingName.textContent = event.currentTarget.value;
    if(event.currentTarget.value === "") {
        greetingName.textContent = defaultName;
    };
});