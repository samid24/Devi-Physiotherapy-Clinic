const hBtn = document.querySelectorAll(".hBtn");
const resNav = document.querySelector(".resNav")
const l1 = document.querySelector(".l1")
const l2 = document.querySelector(".l2")
const l3 = document.querySelector(".l3")

hBtn.forEach(element => {
    element.addEventListener("click", () => {

        resNav.classList.toggle("hide");

        l1.classList.toggle("rl1")
        l2.classList.toggle("rl2")
        l3.classList.toggle("rl3")

    })
});