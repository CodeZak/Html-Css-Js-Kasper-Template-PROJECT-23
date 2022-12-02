const services = document.querySelector(".services");
//Animation

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight) {
            reveals[i].classList.add("active");
        } /* else {
            reveals[i].classList.remove("active");
        } */
    }
}

reveal();

window.addEventListener("scroll", reveal);
