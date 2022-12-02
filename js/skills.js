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
