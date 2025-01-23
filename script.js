const body = document.querySelector("body")
const face = document.querySelector("#face")
face.addEventListener("mousedown", (e) => {
    face.setAttribute("src", "rps-pressed.svg")

})
body.addEventListener("mouseup", (e) => {
    face.setAttribute("src", "rps-smiling.svg")
})