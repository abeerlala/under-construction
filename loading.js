const loaderEl = document.createElement("div");
const loaderChild = document.createElement("div");

document.body.appendChild(loaderEl); // Append to body
loaderEl.classList.add("loader"); // Add class

loaderEl.appendChild(loaderChild)
loaderChild.classList.add("loaderInner")

document.addEventListener("DOMContentLoaded", ()=> {
    loaderEl.remove()
})