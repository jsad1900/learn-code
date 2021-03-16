let items = document.querySelectorAll(".item");

const windowHeight = window.innerHeight;

window.addEventListener("scroll", ()=> {
    items.forEach(function(item){
        if(item.getBoundingClientRect().top < windowHeight*(5/4)) {
            item.classList.add("show");
        }
        else {
            item.classList.remove("show");
        }
    })
    
})
