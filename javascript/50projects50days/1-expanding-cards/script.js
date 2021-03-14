let cards = document.querySelectorAll(".card-item");

cards.forEach(e => {
    e.addEventListener("click", function() {
        cards.forEach(function (card) {
            card.classList.remove("active");
        })
        e.classList.add("active");
    })
})