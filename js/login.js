const body = document.getElementById("body");
const footer = document.getElementById("footer");
const mode = document.getElementById("mode");
const mode1 = document.getElementById("mode1");
const create = document.getElementById("create")
const bod = document.getElementById("bod2")

mode.addEventListener("click", (eo) => {
    body.classList.add("dark");
    footer.classList.remove("footer");
    footer.classList.add("darkfoot");
    mode1.style.display = "block";
    mode.style.display = "none";
});
mode1.addEventListener("click", (eo) => {
    body.classList.remove("dark");
    footer.classList.add("footer");
    footer.classList.remove("darkfoot");
    mode1.style.display = "none";
    mode.style.display = "block";
});

create.addEventListener("click", (params) => {
    bod2.classList.remove("non")

})