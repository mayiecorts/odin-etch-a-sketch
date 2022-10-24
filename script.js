//Initialize
let gridSize = 16;
const box = document.querySelector(".box");
const eraseBtn = document.querySelector(".erase");
const drawBtn = document.querySelector(".draw");
const resetBtn = document.querySelector(".reset");

//Function to display grid numbers
const createGrid = () => {
  for (i = 0; i <= gridSize; i++) {
    box.innerHTML = "<div class='row'></div>".repeat(i);

    let grids = document.querySelectorAll(".row");
    grids.forEach((grid) => {
      grid.innerHTML = "<div class='grid'></div>".repeat(i);
    });
  }
};

//Function to start drawing a sketch
const etchASketch = () => {
  const pixels = document.querySelectorAll(".grid");
  pixels.forEach((pixel) => {
    pixel.addEventListener("mouseover", () => {
      pixel.style.backgroundColor = "black";
    });
  });
  drawBtn.addEventListener("click", () => {
    drawBtn.style.border = "1px solid #CCC";
    drawBtn.style.borderRadius = "4px";
  });

  eraseBtn.style.border = "transparent";
  resetBtn.style.border = "transparent";
};

//Function to erase each grid using mouseover
const eraseGrid = () => {
  const pixels = document.querySelectorAll(".grid");
  pixels.forEach((pixel) => {
    pixel.addEventListener("mouseover", () => {
      pixel.style.backgroundColor = "white";
    });
  });

  eraseBtn.addEventListener("click", () => {
    eraseBtn.style.border = "1px solid #CCC";
    eraseBtn.style.borderRadius = "4px";
  });

  drawBtn.style.border = "transparent";
  resetBtn.style.border = "transparent";
};

//Function to reset all grids
const resetGrid = () => {
  const pixels = document.querySelectorAll(".grid");
  pixels.forEach((pixel) => {
    pixel.style.backgroundColor = "white";
  });

  resetBtn.addEventListener("click", () => {
    resetBtn.style.border = "1px solid #CCC";
    resetBtn.style.borderRadius = "4px";
  });

  drawBtn.style.border = "transparent";
  eraseBtn.style.border = "transparent";
};

//Function to start
createGrid();
