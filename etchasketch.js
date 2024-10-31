const gridContainer = document.getElementById("grid-container");
const hideBordersButton = document.getElementById("hide-borders-button");
const bordersCheckBox = document.getElementById("grid-toggle");
const rainbowCheckBox = document.getElementById("rainbow-toggle");
const resetButton = document.getElementById("reset-button");
const gridSizeSlider = document.getElementById("grid-size-slider");
const gridSizeValue = document.getElementById("grid-size-value");
const gridSizeNumber = document.getElementById("grid-size-number");
let rainbowMode = false;
const GRID_DIMENSION = 500;
let gridSize = 0;

function createGrid(size) {
  gridSize = size;
  if (size > 100) {
    alert("Grid size cannot be greater than 100, please try again");
    return;
  }

  removeGrid();

  cellSize = GRID_DIMENSION / size;

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
    gridContainer.appendChild(cellsContainer);
  }

  addMouseoverListeners();
}

function addMouseoverListeners() {
  const cells = document.getElementsByClassName("cell");

  Array.from(cells).forEach((cell) => {
    cell.addEventListener("mouseover", () => {
      if (rainbowMode) {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        cell.style.backgroundColor = `#${randomColor}`;
      } else {
        cell.style.backgroundColor = "blue";
      }
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

rainbowCheckBox.addEventListener("change", () => {
  if (rainbowMode) {
    rainbowMode = false;
  } else {
    rainbowMode = true;
  }
  addMouseoverListeners();
});

resetButton.addEventListener("click", () => {
  createGrid(gridSize);
});

gridSizeSlider.addEventListener("input", () => {
  const size = parseInt(gridSizeSlider.value, 10);
  gridSizeValue.textContent = size;
  gridSizeNumber.value = size;
  createGrid(size);
});

gridSizeNumber.addEventListener("input", () => {
  const size = gridSizeNumber.value;
  gridSizeValue.textContent = size;
  gridSizeNumber.value = size;
  createGrid(size);
});

createGrid(16);
