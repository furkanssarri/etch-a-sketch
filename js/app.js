// Constants
const container = document.querySelector(".container");
const gridDivs = document.querySelectorAll(".grid");
const controllers = document.querySelector(".controllers");


// Variables
let color = "#40e0d0";
let mDown = false;
let eraserMode = false;


// Event Listeners
document.addEventListener("mousedown", () => mDown = true);
document.addEventListener("mouseup", () => mDown = false);
document.addEventListener("DOMContentLoaded", createGrid(33,33));

// generateBtn.addEventListener("click", getUserInput);
// drawBtn.addEventListener("click", drawColor);
// eraseBtn.addEventListener("click", manageControls);
controllers.addEventListener("click", manageControls);


function getUserInput() {
   let userInput = prompt("number?");
   createGrid(userInput, userInput);
}


function createGrid(userInput, userInput) {
   while (container.firstChild) {
      container.firstChild.remove();
   }
   if (userInput >= 99) {
      console.log("That takes up too much of valuable resources. Please make a feasible request.");
   } else {
      for (let i = 0; i < userInput; i++) {
         let row = document.createElement("div");
         row.classList.add("row");
         for (let j = 0; j < userInput; j++) {
            let cell = document.createElement("div");
            cell.classList.add("grid");
            cell.style.width = 100 / userInput + "vw";
            cell.style.height = 100 / userInput + "vh";
            cell.addEventListener("mouseenter", draw);
            container.appendChild(cell);
         }
      }
   }
}

function manageControls(e) {
   let newColor;
   // Create Canvas
   if (e.target.id === "generator") {
      getUserInput();
   }
   // Erase
   if (e.target.id === "eraser") {
      let erase = "#e5e5e5";
      newColor = erase;
   }
   // Draw After Erasing
   if (e.target.id === "draw") {
      let previousColor = "#40e0d0";
      newColor = previousColor;
   }
   // Clear - To be implemented
   color = newColor;
}


function draw() {
   // IF WE WANT TO USE IT WITH MOUSEDOWN INSTEAD
   // THIS FEATURE WILL BE THE DEFAULT FOR ERASING
   if (mDown) {
      this.style.backgroundColor = color;
   }
   // this.style.backgroundColor = color;
}