let color = "black";
let click = false;


document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
  createGrid(16);

  let popup = document.querySelector("#popup");
  popup.addEventListener("click", (event) => {
    let = size = getGridSize();
    createGrid(size);
  })


});


function createGrid(size) {
    let selectGrid = document.querySelector(".etch-a-Sketch");
    selectGrid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    selectGrid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let gridDivs = size * size;

    for(let i = 0; i < gridDivs; i++){
        let div = document.createElement("div");
        div.addEventListener("mouseover", colorDiv);
        selectGrid.insertAdjacentElement("beforeend", div);


    }

}

function getGridSize() {
  let input = prompt("Enter a grid size: ")
  let message = document.querySelector("#message");
  if(input == '' || input === NaN) {
    message.innerHTML = "please add a valid number!"
  }
  else if(input < 0 || input > 100){
    message.innerHTML = "add a number between 1 and 100!"
  }
  else{
    message.innerHTML = "Generated grid:"
    return input
  }

}

function colorDiv(params) {
  if (color == "rndm"){
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
  }
  else{
    this.style.backgroundColor = "black"
  }

}

function setColor(colorChoice) {
   color = colorChoice

}

function resetGrid(params) {
  let divs = document.querySelectorAll("div");
  divs.forEach((div) => div.style.backgroundColor = "white");

}
