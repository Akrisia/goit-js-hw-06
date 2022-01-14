const fontSizeControl = document.querySelector("#font-size-control");
const changedData = document.querySelector("#text");

fontSizeControl.addEventListener("input", (event) => {
    event.preventDefault();
    changedData.style.fontSize = event.currentTarget.value + "px";
});