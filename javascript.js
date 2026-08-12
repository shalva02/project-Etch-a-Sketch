const container = document.getElementById("container");
const button = document.querySelector("button");
container.addEventListener("mouseover", (event) => {
  let target = event.target;
  const randomColor = () => Math.floor(Math.random() * 256);
  if (!target.style.background) {
    target.style.background = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
    target.style.opacity = "1.0";
  } else {
    const currentOpacity = parseFloat(target.style.opacity) || 0;
    const next = +(currentOpacity - 0.1).toFixed(1);
    target.style.opacity = String(next);
  }
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
