const loader = document.querySelector(".loader");
const nav = document.querySelector("#nav");
const nav_menu = document.querySelector(".nav_menu");
const nav_menu_item = document.querySelectorAll(".nav_menu");
const nav_menu_btn = document.querySelector("#nav_menu_btn");
const scroll_up_btn = document.querySelector(".scroll_up_btn");

// setTimeout(() => {
//     loader.classList.add("loader_hidden");
// }, 3000);

window.addEventListener("scroll", () => {
    nav.classList.toggle("nav_active", scrollY > 0);
    scroll_up_btn.classList.toggle("scroll_up_btn_active", scrollY > 500);
});

nav_menu_btn.addEventListener("click", () => {
    nav_menu.classList.toggle("nav_menu_active");
    if(nav_menu.classList.contains("nav_menu_active"))
    {
        nav_menu_btn.textContent = "CLOSE";
    }
    else {
        
        nav_menu_btn.textContent = "MENU";
    }
});

nav_menu_item.forEach(e => e.addEventListener("click", () => {
    nav_menu.classList.remove("nav_menu_active");
    nav_menu_btn.textContent = "MENU";
}));


window.addEventListener("resize", () => {
    if(innerWidth > 768)
    {
        nav_menu.classList.remove("nav_menu_active");
        nav_menu_btn.textContent = "MENU";
    }
});

scroll_up_btn.addEventListener("click", () => {
    window.scrollTo ({
        top: 0
    });
});

