menuItems = document.getElementById("menu-items");

function controlMenu() {
    if (menuItems.style.display == "flex") {
        menuItems.style.display = "none";
    } else {
        menuItems.style.display = "flex";
    }
}