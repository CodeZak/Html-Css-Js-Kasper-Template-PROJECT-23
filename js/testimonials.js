let testimonials = [
    {
        name: "Person",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ad  nemo numquam fugit sed velit laboriosam laudantium fugiat",
        job: "CEO",
        photo: "./images/skills-01.jpg",
    },
    {
        name: "Person",
        description:
            "sequi repellat accusantium praesentium impedit accusamus? Possimus quaerat corporis repellendus, provident sunt reprehenderit aut",
        job: "CEO",
        photo: "./images/skills-02.jpg",
    },
    {
        name: "Person",
        description:
            "eligendi nam quis impedit magnam. Expedita ipsum fugiat adipisci libero soluta maiores asperiores alias quia enim aspernatur vitae",
        job: "CEO",
        photo: "./images/person1.jpg",
    },
    {
        name: "Person",
        description:
            "repellat non nihil ex eaque possimus? Harum mollitia saepe rerum, consequatur, numquam quos earum sint consectetur molestias odio cum totam",
        job: "CEO",
        photo: "./images/person2.jpg",
    },
    {
        name: "Person",
        description:
            "eaque excepturi. Odit fugiat inventore voluptates accusamus unde ducimus, nulla numquam assumenda porro rerum repellat",
        job: "CEO",
        photo: "./images/person3.jpg",
    },
    {
        name: "Zakariae Mahi",
        description:
            "Necessitatibus voluptates laboriosam libero nemo error laudantium, possimus nostrum nobis harum explicabo quae assumenda ducimus",
        job: "Web Dev",
        photo: "./images/me.png",
    },
];

const testimonials_boxes = document.querySelector(".testimonials_boxes");
const testi_bullets = document.querySelectorAll(".testimonials .bullets li");

let steps = 2;
let length = Math.ceil(testimonials.length / steps);
let testi_array = Array.from({ length: length }, (_, index) => {
    return testimonials.slice(steps * index, steps * index + steps);
});

let testimonials_content = "";
let n = 0;

function show_testimonials(n) {
    testimonials_content = testi_array[n]
        .map((e) => {
            return `
                <div class="testimonials_box ${e.show ? "show" : ""}">
                                    <div class="photo">
                                        <img src=${e.photo} alt="" />
                                    </div>
                                    <div class="content">
                                        <p>
                                        ${e.description}
                                        </p>
                                        <h4> ${e.name},  ${e.job}</h4>
                                    </div>
                                </div>
                `;
        })
        .join("");

    testimonials_boxes.innerHTML = testimonials_content;
}

let testi_interval;

let autoSlidesFn = function () {
    n++;
    if (n >= testi_array.length) {
        n = 0;
    }
    show_testimonials(n);

    testi_bullets.forEach((i) => {
        i.classList.remove("active");
    });

    testi_bullets.forEach((i) => {
        if (+i.id === n) {
            i.classList.add("active");
        }
    });
};

testi_interval = setInterval(autoSlidesFn, 3000);

testi_bullets.forEach((e) => {
    e.addEventListener("click", (el) => {
        clearInterval(testi_interval);
        testi_bullets.forEach((i) => {
            i.classList.remove("active");
        });
        e.classList.add("active");
        n = e.id;
        show_testimonials(n);
        testi_interval = setInterval(autoSlidesFn, 3000);
    });
});

show_testimonials(n);
