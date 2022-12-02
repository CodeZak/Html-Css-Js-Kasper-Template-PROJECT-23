const landingSlides = [
    {
        title: "Hello World! We are Kasper",
        description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium modi, eveniet.",
        picture: "../images/landing.jpg",
    },
    {
        title: "Slide 2",
        description:
            "Atoms join together to form molecules. A water molecule has three atoms: two hydrogen (H) atoms and one oxygen (O) atom. That's why water is sometimes referred to as H2O.",
        picture: "../images/landing2.jpg",
    },
    {
        title: "Slide 3",
        description:
            "Once the meat has been broken down, the digestible material moves into the owl's intestine. ",
        picture: "../images/landing3.jpg",
    },
];

const landingElement = document.querySelector(".landing");
const next_btn = document.querySelector(".next_btn");
const prev_btn = document.querySelector(".prev_btn");
const landing_content = document.querySelector(".content");
const bullets = landingElement.querySelectorAll("li");

let count = 1;
let content = "";

let auto_slide;
const setInterval_slides = () => {
    auto_slide = setInterval(() => {
        count++;
        if (count === bullets.length) {
            count = 0;
            add_Content(count);
        }
        add_Content(count);
    }, 4000);
};

setInterval_slides();

bullets.forEach((bullet) => {
    bullet.addEventListener("click", () => {
        count = bullet.id;
        add_Content(count);
        clearInterval(auto_slide);
        setInterval_slides();
    });
});
const add_Content = (count) => {
    content = `
    <h2>${landingSlides[count].title}</h2>
    <p>
        ${landingSlides[count].description}
    </p>
    `;
    for (let i = 0; i < bullets.length; i++) {
        bullets[i].classList.remove("active");
    }
    bullets[count].classList.add("active");

    landing_content.innerHTML = content;
    if (count >= landingSlides.length - 1 && count !== 0) {
        next_btn.style.display = "none";
    } else {
        next_btn.style.display = "block";
    }
    if (count === 0 && count < landingSlides.length - 1) {
        prev_btn.style.display = "none";
    } else {
        prev_btn.style.display = "block";
    }
};

next_btn.addEventListener("click", () => {
    count++;
    add_Content(count);
    clearInterval(auto_slide);
    setInterval_slides();
});

prev_btn.addEventListener("click", () => {
    count--;
    add_Content(count);
    clearInterval(auto_slide);
    setInterval_slides();
});
