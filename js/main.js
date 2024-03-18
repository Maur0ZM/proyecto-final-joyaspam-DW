document.addEventListener("DOMContentLoaded", function() {
    const toggle = document.getElementById("toggle");
    const nav = document.querySelector(".nav");

    toggle.addEventListener("change", function() {
        if (toggle.checked) {
            nav.style.display = "block";
        } else {
            nav.style.display = "none";
        }
    });
});
