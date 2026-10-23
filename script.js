
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        console.log("You clicked: " + link.textContent);
    });
});

const projectButton = document.querySelector("#home a");

projectButton.addEventListener("click", function () {
    console.log("Welcome to my projects!");
});

const year = new Date().getFullYear();
const footerText = document.querySelector("footer p");

footerText.textContent =
    "© " + year + " Khizer Khan. Built with HTML, CSS & JavaScript.";
