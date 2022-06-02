var current = 0
const divs = [
    "directions",
    "intro1",
    "intro2",
    "puzzle1",
    "open1",
    "puzzle2"
]

document.addEventListener('keydown',typeInCells());
function next() {
    if (current == divs.length-1)
        return
    document.getElementById(divs[current]).style.display = "none"
    current++
    document.getElementById(divs[current]).style.display = "block"

    let div = document.getElementById(divs[current])
    if (div.classList.contains("locked")) {
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
    elevLock()
}

function elev3() {
    elevFail()
}

function elevFail() {
    let bar = document.getElementById("elevError")
    if (bar != null)
        bar.style.display = "block"
}

function elevLock() {
    document.getElementById("elevError").remove()
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
