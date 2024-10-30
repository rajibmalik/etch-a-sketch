const container = document.getElementById("container");

function createGrid() {
  for (let i = 0; i < 16; i++) {
    const cellsContainer = document.createElement("div");
    cellsContainer.className = "cells-container";
    for (let j = 0; j < 16; j++) {
      const div = document.createElement("div");
      //   div.textContent = `cell ${i + 1} ${j + 1}`;
      div.className = "cell";
      cellsContainer.appendChild(div);
    }
    container.appendChild(cellsContainer);
  }
}

createGrid();

/**
 * @type {HTMLCollectionOf<Element>}
 */

const cells = document.getElementsByClassName("cell");

Array.from(cells).forEach((cell) => {
  cell.addEventListener("mouseover", () => {
    console.log("hovered");
    cell.style.backgroundColor = "blue";
  });
});

const inputButton = document.getElementById("input-button");

inputButton.addEventListener("click", () => {
  const userInput = prompt(
    "Please enter the size of the grid (100 is the maximum)"
  );

  removeGrid();
});

function removeGrid() {
  const containers = document.getElementsByClassName("cells-container");

  Array.from(containers).forEach((container) => {
    container.remove();
  });
}
