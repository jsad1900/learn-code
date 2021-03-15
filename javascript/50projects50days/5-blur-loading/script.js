let count = document.querySelector(".count");
let opa = document.querySelector(".opa");
count.textContent = "";

let x = 0;

window.addEventListener("load", ()=> {
    let init = setInterval(load, 60);
})

function load(){
    x++;
    if(x>100){
        clearInterval(init);
    }
    count.textContent = `${x} %`;
    opa.style.opacity = 1- x/100;
   
}