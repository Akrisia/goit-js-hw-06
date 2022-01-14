const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;
    
    if(email.value === "" || password.value === "") {
        return alert("Fill in all the fields, please");
    };

    const enteredData = {
        email: email.value,
        password: password.value,
    }

    console.log(enteredData);
    event.currentTarget.reset();
});