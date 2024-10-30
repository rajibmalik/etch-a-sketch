const container = document.getElementById("container");
const inputButton = document.getElementById("input-button");

inputButton.addEventListener("click", () => {
  const userInput = prompt(
    "Please enter the size of the grid (100 is the maximum)"
  );

  createGrid(userInput);
});

function createGrid(size) {
  if (size > 100) {
    alert("Grid size cannot be greater than 100, please try again");
    return;
  }

  removeGrid();

  cellSize = 600 / size;

  for (let i = 0; i < size; i++) {
    const cellsContainer = document.createElement("div");
    cellsContainer.className = "cells-container";

    for (let j = 0; j < size; j++) {
      const div = document.createElement("div");
      div.className = "cell";
      div.style.height = `${cellSize}px`;
      div.style.width = `${cellSize}px`;
      cellsContainer.appendChild(div);
    }
    container.appendChild(cellsContainer);
  }

  addMouseoverListeners();
}

function addMouseoverListeners() {
  const cells = document.getElementsByClassName("cell");

  Array.from(cells).forEach((cell) => {
    cell.addEventListener("mouseover", () => {
      console.log("hovered");
      cell.style.backgroundColor = "blue";
    });
  });
}

function removeGrid() {
  const containers = document.getElementsByClassName("cells-container");

  Array.from(containers).forEach((container) => {
    container.remove();
  });
}

createGrid(16);
