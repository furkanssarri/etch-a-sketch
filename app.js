const container = document.querySelector(".container");
const btn = document.querySelector("#generator");
const mainHeader = document.querySelector("#main-header");

btn.addEventListener("click", promptUser);

function promptUser() {
   let userInput = prompt("Number?");
   createGrid(userInput, userInput);
}

function createGrid(userInput, userInput) {
   while (container.firstChild) {
      container.firstChild.remove();
   }
   if (userInput > 100) {
      let errorMessage = document.createElement("h2");
      errorMessage.textContent = "Please specify a number below 100.";
      container.appendChild(errorMessage);
      return
   }
   for (let i = 0; i < userInput; i++) {
      let row = document.createElement("div");
      row.className = "row";
      for (let j = 0; j < userInput; j++) {
         let cell = document.createElement("div");
         cell.className = "grid";
         cell.style.width = 100 / userInput + "vw";
         cell.style.height = 100 / userInput + "vh";
         let randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
         cell.addEventListener("mouseenter", () => {
            cell.style.backgroundColor = randomColor;
         });
         container.appendChild(cell);
         mainHeader.remove();
      }
   }



}

