const tabs = document.querySelectorAll(".tab-nav__btn");
const table = document.querySelectorAll(".tab-body__content");

let counter = 0

tabs.forEach((elem, idx) => {
    elem.addEventListener("click", () => {
        for (let index = 0; index < tabs.length; index++) {
            tabs[index].classList.remove("active");
            table[index].classList.remove("active");
        }
        elem.classList.add("active");
        table[idx].classList.add("active");
    });
});