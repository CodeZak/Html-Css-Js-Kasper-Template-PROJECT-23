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
