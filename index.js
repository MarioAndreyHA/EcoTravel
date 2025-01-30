function toggleText(button) {
    var text = button.previousElementSibling;
    if (text.style.display === "none" || text.style.display === "") {
        text.style.display = "block";
        button.textContent = "Ver menos";
    } else {
        text.style.display = "none";
        button.textContent = "Ver más";
    }
}