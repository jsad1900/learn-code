let btns = document.querySelectorAll(".button-item");
let dots = document.querySelectorAll(".item");
let next = document.querySelector(".next");
let pre = document.querySelector(".pre");

next.addEventListener("click", ()=> {
    for(let i =0; i<dots.length; i++){
        if(i == dots.length-1){
            next.classList.remove("active-btn");
            pre.classList.add("active-btn");
        }
        if(!dots[i].classList.contains("active")){
            dots[i].classList.add("active");
            break;
        }
    }
    
})

pre.addEventListener("click", ()=> {
    for(let i =dots.length-1; i>0; i--){
        if(i == 1){
            pre.classList.remove("active-btn");
            next.classList.add("active-btn");
        }

        if(dots[i].classList.contains("active")){
            dots[i].classList.remove("active");
            break;
        }
    }
})
