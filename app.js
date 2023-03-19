const dropdownClickable = document.querySelectorAll(".dropdown__link--shown"); 
const dropdownHidden = document.querySelectorAll(".dropdown__link--hidden"); 
const dropdownArrows = document.querySelectorAll(".dropdown__link--shown img"); 
const burgerContainer = document.querySelector(".nav__mobile--clickable")
const burgers = document.querySelectorAll(".nav__mobile--clickable img"); 
const links = document.querySelector(".links__container")

dropdownClickable.forEach((link, index) => {
    link.addEventListener("click", () => {
        dropdownHidden[index].classList.toggle("invisible"); 
        dropdownArrows[index].classList.toggle("rotated")
    })
})

burgerContainer.addEventListener("click", ()=> {
    burgers[0].classList.toggle("invisible"); 
    burgers[1].classList.toggle("invisible"); 
    links.classList.toggle("invisible"); 
})

window.addEventListener("resize", () => {
    if (window.innerWidth > 899) {
        links.classList.remove("invisible"); 
    }
})

window.addEventListener("load", () => {
    if (window.innerWidth > 899) {
        links.classList.remove("invisible"); 
    }
})