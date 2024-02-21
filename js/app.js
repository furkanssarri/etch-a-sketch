// Constants
const container = document.querySelector(".container");
const canvas = document.querySelector(".canvas");
const gridDivs = document.querySelectorAll(".grid");
const controllers = document.querySelector(".controllers");
const rangeValue = document.querySelector("#grid-value");
const numOfDivs = document.querySelector("#rangeValue");


// Variables
let color = "#40e0d0";
let mDown = false;
let eraserMode = false;


// Event Listeners
document.addEventListener("mousedown", () => mDown = true);
document.addEventListener("mouseup", () => mDown = false);
rangeValue.addEventListener("change", showValue);
document.addEventListener("DOMContentLoaded", createGrid(50, 50));

// generateBtn.addEventListener("click", getUserInput);
// drawBtn.addEventListener("click", drawColor);
// eraseBtn.addEventListener("click", manageControls);
controllers.addEventListener("click", manageControls);


function getUserInput() {
   let userInput = prompt("number?");
   createGrid(userInput, userInput);
}

function setRainbow() {
   let randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
   color = randomColor;
   
}


function createGrid(userInput, userInput) {
   while (canvas.firstChild) {
      canvas.firstChild.remove();
   }
   if (userInput >= 99) {
      console.log("That takes up too much of valuable resources. Please make a feasible request.");
      return
   } else {
      for (let i = 0; i < userInput; i++) {
         let row = document.createElement("div");
         row.classList.add("row");
         for (let j = 0; j < userInput; j++) {
            let cell = document.createElement("div");
            cell.classList.add("grid");
            cell.style.width = 100 / userInput + "%";
            cell.style.height = 100 / userInput + "%";
            cell.addEventListener("mouseenter", draw);
            canvas.appendChild(cell);
         }
         
         // canvas.appendChild(row);
      }
      numOfDivs.textContent = `${rangeValue.value} grid`;
   }
}

function showValue() {
   let newValue = Number(this.value);
   createGrid(newValue, newValue)
}

function manageControls(e) {
   if (e.target.id === "grid-value") {
      numOfDivs.textContent = `${e.target.value} grid`
   }
   let newColor;
   // Rainbow
   if (e.target.id === "rainbow") {
      setRainbow();
      return;
   }
   // Erase
   if (e.target.id === "eraser") {
      let erase = "#fff";
      newColor = erase;
   }
   // Draw After Erasing
   if (e.target.id === "draw") {
      let previousColor = "#40e0d0";
      newColor = previousColor;
   }
   // Clear - To be implemented
   if (e.target.id === "clear") {
      const currentDivNumber = rangeValue.value;
      while (canvas.firstChild) {
         canvas.firstChild.remove();
      }
      createGrid(currentDivNumber, currentDivNumber);
   }
   color = newColor;
}


function draw() {
   // IF WE WANT TO USE IT WITH MOUSEDOWN INSTEAD
   // THIS FEATURE WILL BE THE DEFAULT FOR ERASING
   // if (mDown) {
   //    this.style.backgroundColor = color;
   // }
   this.style.backgroundColor = color;
}