const addButton = document.getElementById("addButton");
const createMenu = document.getElementById("createMenu");

addButton.addEventListener("click", function (event) {
    event.stopPropagation();
    createMenu.classList.toggle("show");
});

// Close the create menu when clicking outside of it
document.addEventListener("click", function (event) {
    createMenu.classList.remove("show");
});