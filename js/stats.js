const stats_numbers = document.querySelectorAll(".stats_number");

function stats_counting() {
    stats_numbers.forEach((el) => {
        let initialValue = 0;
        const value = parseInt(el.dataset.value);

        const increaseCount = setInterval(() => {
            initialValue += Math.ceil(value / 1000);
            el.textContent = `${initialValue}+`;
            if (initialValue >= value) {
                clearInterval(increaseCount);
            }
        }, 1);
    });
}

// start counting when the section is reached by the user when scrolling

function start_counting() {
    let count = document.querySelector(".count");
    const windowHeight = window.innerHeight;
    const elementTop = count.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
        stats_counting();
        window.removeEventListener("scroll", start_counting);
    }
}

window.addEventListener("scroll", start_counting);