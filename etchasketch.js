const container = document.getElementById("container");
const inputButton = document.getElementById("input-button");
const hideBordersButton = document.getElementById("hide-borders-button");
const bordersCheckBox = document.getElementById("grid-toggle");

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

bordersCheckBox.addEventListener("change", () => {
  const cells = document.getElementsByClassName("cell");

  Array.from(cells).forEach((cell) => {
    if (bordersCheckBox.checked) {
      cell.style.border = "none";
    } else {
      cell.style.border = "1px solid #333";
    }
  });
});

createGrid(16);
