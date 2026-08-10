let gridPrompted = 56;
let grid = gridPrompted * gridPrompted;
const container = document.getElementById("container");
function createGrid() {
  container.style.setProperty("--columns", gridPrompted);
  for (i = 0; i < grid; i++) {
    let div = document.createElement("div");
    div.classList.add("grid-items");
    container.appendChild(div);
  }
}
createGrid();
