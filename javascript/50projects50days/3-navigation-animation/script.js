const menu = document.querySelector(".menu");
document.querySelector(".btn-open").addEventListener("click", ()=> {
    menu.classList.add("open");
    document.querySelector(".list-menu").classList.remove("hidden-list");
    document.querySelector(".btn-closed").classList.remove("closed");
    document.querySelector(".container").classList.add("show-nav");
})

document.querySelector(".btn-closed").addEventListener("click", ()=> {
    menu.classList.remove("open");
    document.querySelector(".list-menu").classList.add("hidden-list");
    document.querySelector(".container").classList.remove("show-nav");
})