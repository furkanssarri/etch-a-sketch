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
let rainBow = false;
let colorMode = true;
// For the appendActiveStatus function can probably be placed elsewhere
// for a cleaner code, but as of right now it works like this. Perhaps
// I would look back at this at some other time.
let prevBtn = null;



// Event Listeners
document.addEventListener("mousedown", () => mDown = true);
document.addEventListener("mouseup", () => mDown = false);
rangeValue.addEventListener("change", showValue);
document.addEventListener("DOMContentLoaded", createGrid(16, 16));

// generateBtn.addEventListener("click", getUserInput);
// drawBtn.addEventListener("click", drawColor);
// eraseBtn.addEventListener("click", manageControls);
controllers.addEventListener("click", manageControls);


function getUserInput() {
   let userInput = prompt("number?");
   createGrid(userInput, userInput);
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
            // cell.addEventListener("mouseleave", draw);
            cell.addEventListener("mousedown", draw);
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

function appendActiveStatus(e) {

   const isBtn = e.target.nodeName === "BUTTON";
   if (!isBtn) {
      return
   }
   e.target.classList.add("active");
   if (prevBtn !== null) {
      prevBtn.classList.remove("active");
   }
   prevBtn = e.target
}

function manageControls(e) {
   if (e.target.id === "grid-value") {
      numOfDivs.textContent = `${e.target.value} grid`
      return
   }
   let newColor;
   // Rainbow
   if (e.target.id === "rainbow") {
      rainBow = true;
      eraserMode = false;
      colorMode = false;
      appendActiveStatus(e);
      return
   }
   // Erase
   if (e.target.id === "eraser") {
      colorMode = false;
      rainBow = false;
      eraserMode = true;
      appendActiveStatus(e);
      return;
   }
   // Draw After Erasing
   if (e.target.id === "draw") {
      colorMode = true;
      eraserMode = false;
      rainBow = false;
      appendActiveStatus(e);
      return
   }
   // Clear
   if (e.target.id === "clear") {
      const currentDivNumber = rangeValue.value;
      while (canvas.firstChild) {
         canvas.firstChild.remove();
      }
      createGrid(currentDivNumber, currentDivNumber);
      appendActiveStatus(e);
      eraserMode = false;
      rainBow = false;
      colorMode = false;
      return
   }
   color = newColor;
}


function draw(e) {
   // IF WE WANT TO USE IT WITH MOUSEDOWN INSTEAD
   // THIS FEATURE WILL BE THE DEFAULT FOR ERASING
   if (e.type === "mouseover" && mDown === false) {
      return
   } else if (rainBow === true && mDown === true) {
      let colors = [];
      let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
      colors.push(randomColor);
      this.style.backgroundColor = colors;
      return
   } else if (colorMode === true && mDown === true) {
      this.style.backgroundColor = color;
   } else if (eraserMode === true && mDown === true) {
      let color = "#fff";
      this.style.backgroundColor = color;
   }
   // if (mDown) {
   //    this.style.backgroundColor = color;
   // }
}