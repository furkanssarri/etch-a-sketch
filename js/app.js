// Constants
const generateBtn = document.getElementById("generator");
const container = document.querySelector(".container");


// Variables
let color = "#40e0d0";
let mDown = false;


// Event Listeners
document.addEventListener("mousedown", () => mDown = true);
document.addEventListener("mouseup", () => mDown = false);

generateBtn.addEventListener("click", getUserInput);

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

function draw() {
   // IF WE WANT TO USE IT WITH MOUSEDOWN INSTEAD
   // THIS FEATURE WILL BE THE DEFAULT FOR ERASING
   // if (mDown) {
   //    this.style.backgroundColor = color;
   // }
   this.style.backgroundColor = color;
}