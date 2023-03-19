const navMenu = document.querySelector(".nav-menu");
const navOpen = document.querySelector(".open-menu");
const navClose = document.querySelector(".close-menu");
function toggleMenu() {
    navMenu.classList.toggle("nav-menu_visible");
}
navOpen.addEventListener("click", toggleMenu);
navClose.addEventListener("click", toggleMenu);
const slider = document.getElementById("slider");
let section = document.querySelectorAll(".card");
let sectionLast = section[section.length - 1];
const btnLeft = document.querySelector(".left");
const btnRight = document.querySelector(".right");
slider.insertAdjacentElement("afterbegin", sectionLast);
function next() {
    let sliderFirst = document.querySelectorAll(".card")[0];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function() {
        slider.style.transition = "none";
        slider.insertAdjacentElement("beforeend", sliderFirst);
        slider.style.marginLeft = "0";
    }, 500);
}
btnRight.addEventListener("click", function() {
    next();
});
function prev() {
    let section = document.querySelectorAll(".card");
    let sectionLast = section[section.length - 1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function() {
        slider.style.transition = "none";
        slider.insertAdjacentElement("afterbegin", sectionLast);
        slider.style.marginLeft = "0";
    }, 500);
}
btnLeft.addEventListener("click", function() {
    prev();
});
setInterval(function() {
    next();
}, 5000);
const form = document.querySelector("#form");
form.addEventListener("submit", handleSubmit);
async function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(this);
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            "Accept": "application/json"
        }
    });
    if (response.ok) {
        this.reset();
        alert("El mensaje se envio con exito. Gracias");
    }
}

//# sourceMappingURL=index.579125c3.js.map
