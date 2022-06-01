var current = 0
const divs = [
    "intro1",
    "intro2",
    "puzzle1",
    "open1",
    "puzzle2"
]
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

function getInput() {
    document.addEventListener('keydown',typeInCells()); 
}
function typeInCells(){
    //cells of grid and index of box to type letter
    let cells = document.getElementById('passInput').children;
    let i = -1;
    
    //Checks if letter or number
    let isAlpha = (ch) =>{
      if(ch === undefined || ch === null || ch.length > 1){
        return false;
      }
      return (/[a-zA-Z1-9]/).test(ch);
    }  
    
    //Event Listener when keys are pressed
    return event => {
      if(event.key === "Backspace"){
        if(i > -1){
          cells[i].innerHTML = "";
          i--;
        }
      } else if(isAlpha(event.key) && i < cells.length - 1){
        i++;
        cells[i].innerHTML = event.key.toUpperCase(); 
      }
    }
  }
  
  