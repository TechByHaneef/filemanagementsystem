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


const createFileButton = document.getElementById("createFileButton");

createFileButton.addEventListener("click", function () {

    const name = prompt("Enter file name:");

    if (!name) return;

    createFile(name);

    console.log("File created:", name);
});


const createFolderButton = document.getElementById("createFolderButton");

createFolderButton.addEventListener("click", function () {

    const name = prompt("Enter Folder name:");

    if (!name) return;

    createFolder(name);

    console.log("Folder created:", name);
});