const bars = document.querySelector(".fa-bars");
const ulLinks = document.querySelector(".ulLinks");

document.addEventListener("click", (e) => {
    if (e.target === bars) {
        ulLinks.classList.toggle("showLinks");
    }
    if (e.target !== bars) {
        ulLinks.classList.remove("showLinks");
    }
});