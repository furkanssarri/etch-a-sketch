const canvas = document.querySelector(".canvas");
const mainHeader = document.querySelector("#main-header");
let mdown = false;
let color = "#494e4c"
let colorpicker = document.getElementById("colorpicker");
let controllers = document.querySelector(".controllers");



eventListeners();

function eventListeners() {
   document.addEventListener("DOMContentLoaded", () => {
      createGrid(33, 33);
   });
   // colorpicker.addEventListener("input", updateColor, false);
   // colorpicker.addEventListener("change", watchColorPicker, false);
   controllers.addEventListener("click", manageControls);
}

function appendRainbow(e) {
   let randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
   color = randomColor;
}

function manageControls(e) {
   let newColor;
   if (e.target.id === "clear") {
      while (canvas.firstChild) {
         canvas.firstChild.remove();
      }
   } else if (e.target.id === "colorpicker") {
      updateColor(e);
      colorpicker.addEventListener("change", () => {
         watchColorPicker(e);
         newColor = e.target.value;
         console.log(color)
         color = newColor;
         return color;
      });
   } else if (e.target.id === "colorMode") {
      
      console.log(newColor);
   } else if (e.target.id === "eraser") {
      erase = "#fff";
      color = erase;
   }
}

function colorMode() {
   let newColor = watchColorPicker(e);
   console.log(newColor);
   color = newColor;
}

// Color picker and update
function watchColorPicker(e) {
   newColor = e.target.value;
   color = newColor;
   return color;
   
}
function updateColor(e) {
   pickedColor = e.target.value;
   color = pickedColor;
   return color;
}

// Accept user input via data slider
function showValue(newValue) {
   document.getElementById("value").textContent = newValue;
   let userInput = newValue;
   createGrid(userInput, userInput);
}

// Mouse down flag check
["mousedown", "mouseup"].forEach(draw => canvas.addEventListener(draw, () => mdown = !mdown));

// Mouse down control
function cellEnter() {
   if (mdown) {
      this.style.backgroundColor = color;
   }
}

function createGrid(userInput, userInput) {
   while (canvas.firstChild) {
      canvas.firstChild.remove();
   }
   if (userInput > 100) {
      let errorMessage = document.createElement("h2");
      errorMessage.textContent = "Please specify a number below 100.";
      canvas.appendChild(errorMessage);
      return
   }
   for (let i = 0; i < userInput; i++) {
      let row = document.createElement("div");
      row.className = "row";
      for (let j = 0; j < userInput; j++) {
         let cell = document.createElement("div");
         cell.className = "grid";
         cell.style.width = 100 / userInput + "%";
         cell.style.height = 100 / userInput + "%";
         cell.addEventListener("mouseenter", cellEnter);

         canvas.appendChild(cell);
      }
   }
}



