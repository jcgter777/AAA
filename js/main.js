let current = 0
const panels = document.getElementById("allPanels").children

document.addEventListener('keydown',typeInCells());

for (let i = 1; i < panels.length; i++) {
    panels[i].style.display = "none"
}
function next() {
    if (current == panels.length-1)
        return
    panels[current].style.display = "none"
    current++
    panels[current].style.display = "block"

    if (panels[current].classList.contains("locked")) {
        document.getElementById("continue").style.display = "none"
    }
}

function elev1() {
    elevFail()
}

function elev2() {
    if (document.getElementById("elevSucc").style.display === "block")
        return
    document.getElementById("continue").style.display = "block"
    document.getElementById("elevSucc").style.display = "block"
    document.getElementById("elevError").remove()
}

function elev3() {
    elevFail()
}

function elevFail() {
    let bar = document.getElementById("elevError")
    if (bar != null)
        bar.style.display = "block"
}

function getInput(){
    document.addEventListener('keydown',typeInCells());
}

function typeInCells(){
    //cells of grid and index of box to type letter
    let cells = document.getElementById('passInput').children
    let i = -1
    let string = ""
    //Checks if letter or number
    let isAlpha = (ch) =>{
        if(ch === undefined || ch === null || ch.length > 1)
            return false

      return (/[a-zA-Z1-9]/).test(ch)
    }  
    
    //Event Listener when keys are pressed
    return function handler(event) {
        if(document.getElementById("puzzle2").style.display === 'block'){
            if(event.key === "Backspace"){
                if(i > -1){
                    cells[i].innerHTML = ""
                    i--
                    string = string.substring(0, string.length-1)
                }
            } else if(isAlpha(event.key) && i < cells.length - 1){
                i++
                let char = event.key.toUpperCase()
                string+=char
                cells[i].innerHTML = char
            }

            if (string === "FORCE") {
                document.getElementById("continue").style.display = "block"
                document.removeEventListener('keydown', handler)
            }
        }
    }
}
