/* Start header */
// header => bars
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
/* End header */

/* Start landing */
// landing => switch landing photo/title/description

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

/* End landing */

/* Start Services */
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

/* Start Portfolio */
const portfolio_menu = [
    { name: "all", id: 0 },
    { name: "app", id: 1 },
    { name: "photo", id: 2 },
    { name: "web", id: 3 },
    { name: "print", id: 4 },
];

const portfolio_items = [
    {
        title: "Awesome image",
        caption: "Photography",
        image: "./images/shuffle-01.jpg",
        link: "",
        show: true,
        category: "App",
        id: 0,
    },
    {
        title: "Awesome image",
        caption: "Photography",
        image: "./images/shuffle-02.jpg",
        link: "",
        show: true,
        category: "App",
        id: 1,
    },
    {
        title: "Awesome image",
        caption: "Photography",
        image: "./images/shuffle-07.jpg",
        link: "",
        category: "Print",
        id: 6,
    },
    {
        title: "Awesome image",
        caption: "Photography",
        image: "./images/shuffle-08.jpg",
        link: "",
        category: "Web",
        id: 7,
    },
    {
        title: "Awesome image",
        caption: "Photography",
        image: "./images/shuffle-05.jpg",
        link: "",
        category: "Photo",
        id: 4,
    },
    {
        title: "Awesome image",
        caption: "Photography",
        image: "./images/shuffle-06.jpg",
        link: "",
        category: "Photo",
        id: 5,
    },
    {
        title: "Awesome image",
        caption: "Photography",
        image: "./images/shuffle-07.jpg",
        link: "",
        category: "Photo",
        id: 6,
    },
    {
        title: "Awesome image",
        caption: "Photography",
        image: "./images/shuffle-08.jpg",
        link: "",
        category: "Print",
        id: 7,
    },
    {
        title: "Awesome image",
        caption: "Photography",
        image: "./images/shuffle-08.jpg",
        link: "",
        category: "Print",
        id: 7,
    },
];

let portfolio_items_array;
function showItems(n, arr) {
    let count_ = 1;
    portfolio_items_array = arr.map((item) => {
        if (count_ <= n) {
            count_++;
            return { ...item, show: true };
        }
        return item;
    });
    displayItems(portfolio_items_array);
}

const more_btn = document.querySelector(".more_btn");
const less_btn = document.querySelector(".less_btn");

let displayed_items = [];
let items = [...portfolio_items];

const portfolio_items_li = document.querySelectorAll(".menu_wrapper li");
let i = 3;
portfolio_items_li.forEach((item) => {
    item.addEventListener("click", (e) => {
        portfolio_items_li.forEach((item) => {
            item.classList.remove("active");
        });
        item.classList.add("active");
        portfolio_items.forEach((i) => {
            if (i.category === item.id) {
                displayed_items.push(i);
            } else if (item.id === "All") {
                displayed_items.push(i);
            }
        });
        items = [...displayed_items];
        showItems(i, displayed_items);
        displayed_items = [];
        console.log("i", i);
        console.log("items.length", items.length);

        if (items.length <= 4) {
            more_btn.style.display = "none";
        } else {
            more_btn.style.display = "block";
        }
    });

    /*     showItems(4,displayed_items)
     */
});

showItems(i, portfolio_items);
more_btn.addEventListener("click", () => {
    i = i + 3;
    showItems(i, items);
    if (i >= items.length) {
        more_btn.style.display = "none";
        less_btn.style.display = "block";
    }
});
less_btn.addEventListener("click", () => {
    showItems(3, items);
    more_btn.style.display = "block";
    less_btn.style.display = "none";
    i = 3;
});

function displayItems(array) {
    const content_wrapper = document.querySelector(".content_wrapper");

    let port_content = array
        .map((item) => {
            return `
    <div class="portfolio_item ${item.show ? "show_item" : ""}">
                    <div class="item_img">
                        <img src=${item.image} alt="" />
                    </div>
                    <div class="item_description">
                        <h2>${item.title}</h2>
                        <h3>${item.caption}</h3>
                    </div>
                </div>
    `;
        })
        .join("");
    content_wrapper.innerHTML = port_content;
}

/* End Portfolio */

/* Start Video */
const play_btn = document.querySelector(".play_btn");
const pause_btn = document.querySelector(".pause_btn");

const video = document.querySelector(".video_wrapper video");

play_btn.addEventListener("click", () => {
    play_btn.style.display = "none";
    pause_btn.style.display = "block";
    video.play();
});
pause_btn.addEventListener("click", () => {
    pause_btn.style.display = "none";
    play_btn.style.display = "block";
    video.pause();
});
/* End Video */

/* Start About */

//Stats
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

/************************ * skills - Stats ********************** */

const skills_bars = document.querySelector(".skills_bars");
const bar_boxes = document.querySelectorAll(".bar_box");
const colored_bars = document.querySelectorAll(".colored_bar");
let skills_bar = "";
const skills = [
    { name: "HTML & CSS", percentage: 80 },
    { name: "TYPESCRIPT", percentage: 65 },
    { name: "REACT", percentage: 75 },
    { name: "GOOGLE SEARCH", percentage: 100 },
];

const skillsHtmlContent = (name, percentage) => {
    return `<div class="bar_box">
<h2>${name}</h2>
<div class="bar">
    <div class="colored_bar" style="width:${percentage}%">
    <div class="tooltip">${percentage}%</div></div>
</div>

</div>`;
};
//initial state
const skillsContent = skills
    .map((el) => {
        return skillsHtmlContent("x", 0);
    })
    .join("");

skills_bars.innerHTML = skillsContent;

// display the stats
function display_skills_stats() {
    let n = 0;
    const skills_count = setInterval(() => {
        skills_bar = skills
            .map((el) => {
                if (el.percentage > n) {
                    n += (el.percentage / 700)
                    return `<div class="bar_box">
        <h2>${el.name}</h2>
        <div class="bar">
            <div class="colored_bar" style="width:${n}%">
            <div class="tooltip">${n.toFixed(0)}%</div></div>
        </div>
        
    </div>`;
                }
                if (n === 100) {
                    clearInterval(skills_count);
                }
                return skillsHtmlContent(el.name, el.percentage);
            })
            .join("");

        skills_bars.innerHTML = skills_bar;
    }, 1);
}

// start counting when the section is reached by the user when scrolling
function countSkillsStats() {
    let count = document.querySelector(".countSkills");
    const windowHeight = window.innerHeight;
    const elementTop = count.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
        display_skills_stats();
        window.removeEventListener("scroll", countSkillsStats);
    }
}
window.addEventListener("scroll", countSkillsStats);

/************************ End skills - Stats ********************** */

/* Start Testimonials */

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

/* Start Pricing */

/* End Pricing */
