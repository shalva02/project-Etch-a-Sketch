const container = document.getElementById("container");
const button = document.querySelector("button");
container.addEventListener("mouseover", (event) => {
  let target = event.target;
  target.style.background = "red";
});
button.addEventListener("click", (event) => {
  let userInput = prompt("enter grid size. max: 100");
  if (userInput > 1 && userInput <= 100) {
    createGrid(userInput);
  } else {
    alert("please enter numbers from 1 to 100");
  }
});
function createGrid(gridNum = 16) {
  container.style.setProperty("--columns", gridNum);
  container.textContent = "";
  let grid = gridNum * gridNum;
  for (i = 0; i < grid; i++) {
    let div = document.createElement("div");
    div.classList.add("grid-items");
    container.appendChild(div);
  }
}
createGrid();
