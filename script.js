const player = document.querySelector("#player")
const computer = document.querySelector("#computer")
const body = document.querySelector("body")
const face = document.querySelector("#face")
const buttons = document.querySelectorAll("button")
const options = document.querySelector("#options")
buttons.forEach((button) => {
    button.addEventListener("mousedown", handleMousedown)
})
body.addEventListener("mouseup", handleMouseup)

function handleMouseup() {
    face.setAttribute("src", "rps-smiling.svg")
}
function handleMousedown(){
        face.setAttribute("src", "rps-cautious.svg")
}
options.addEventListener("click", (e) => {
    switch (e.target.id){
        case "Rock":
            removeRelevantListeners()
            compare(0, computerInput())
            player.textContent = "Rock"
            break
        case "Paper":
            removeRelevantListeners()
            compare(1, computerInput())
            player.textContent = "Paper"
            break
        case "Scissors":
            removeRelevantListeners()
            compare(2, computerInput())
            player.textContent = "Scissors"
            break
    }
}, {once: true})

function computerInput(){
    computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0){
        computer.textContent = "Rock"
    } else if(computerChoice === 1){
        computer.textContent = "Paper"
    } else{
        computer.textContent = "Scissors"
    }
    return computerChoice
}
function compare(userInput, computerInput){
    if (userInput !== computerInput){
        if (userInput + computerInput !== 2){
            if (userInput > computerInput){
                face.setAttribute("src", "rps-winning.svg")
                return 0
            } else {
                face.setAttribute("src", "rps-death.svg")
                return 1
            }
        } else if (userInput > computerInput){
            face.setAttribute("src", "rps-death.svg")
            return 1
        } else{
            face.setAttribute("src", "rps-winning.svg")
            return 0
        }
    } else{
        face.setAttribute("src", "rps-smiling.svg")
        return 2
    }
}
function removeRelevantListeners(){
    body.removeEventListener("mouseup", handleMouseup)
    buttons.forEach((button) => {
        button.removeEventListener("mousedown", handleMousedown)
    })
}
face.addEventListener("mousedown", () => {
    face.setAttribute("src", "rps-pressed.svg")
})
face.addEventListener("click", () => {
    location.reload()
})