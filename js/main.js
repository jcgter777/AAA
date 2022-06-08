let current = 0
const panels = document.getElementById("allPanels").children
const cont = document.getElementById("continue")
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
        cont.style.display = "none"
    }
}

function elev1() {
    elevFail()
}

function elev2() {
    if (document.getElementById("elevSucc").style.display === "block")
        return
    cont.style.display = "block"
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
                cont.style.display = "block"
                document.removeEventListener('keydown', handler)
            }
        }
    }
}

const input3 = document.getElementById("puzzle3").children
const ans3 = [1, 2]
// const ans3 = [7193396, 9411920]
let currentQ = 0
function check(x) {
    if(event.key === 'Enter') {

        if (+x.value === ans3[currentQ]) {
            if (currentQ===1) {
                input3[1].disabled = true
                cont.style.display = "block"
            }
            else {
                input3[currentQ].style.display = "none"
                currentQ++
                input3[currentQ].style.display = "block"
                input3[currentQ].focus()
            }
        }
    }
}

const input4 = document.getElementById("puzzle4").children
const ans4 = [1,2]
let currentQ2 = 0
function checkV2(x){
       if(event.key === 'Enter'){
           if (+x.value === ans4[currentQ2]) {
                if(currentQ2 === 1){
                    input4[1].children[1].disabled = true
                    cont.style.display = "block"
                }
               else{
                    input4[currentQ2].style.display = "none"
                    currentQ2++
                    input4[currentQ2].style.display = "block"
                    input4[currentQ2].focus()
               }
           }
       }
}


function checkWork(x) {
    if (event.key === 'Enter') {
        if (+x.value === 53400) {
            document.getElementById("multiply2numbers").disabled = true
            cont.style.display = "block"
        }

    }
}

function showHint(id, button) {
    document.getElementById(id).style.display = "block"
    button.style.display = "none"
}
