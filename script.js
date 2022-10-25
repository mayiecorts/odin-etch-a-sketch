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
    const grids = [...document.querySelectorAll(".row")];
    grids.map(
      (grid) => (grid.innerHTML = "<div class='grid'></div>".repeat(i))
    );
  }

  etchASketch();
};

//Function to start the sketch
const etchASketch = () => {
  const pixels = [...document.querySelectorAll(".grid")];
  drawBtn.addEventListener("click", () => {
    drawBtn.style.border = "1px solid #CCC";
    drawBtn.style.borderRadius = "4px";
    eraseBtn.style.border = "transparent";
    resetBtn.style.border = "transparent";
    pixels.map((pixel) => {
      pixel.addEventListener("mouseover", () => {
        pixel.style.backgroundColor = "black";
      });
    });
  });

  eraseBtn.addEventListener("click", () => {
    eraseBtn.style.border = "1px solid #CCC";
    eraseBtn.style.borderRadius = "4px";
    drawBtn.style.border = "transparent";
    resetBtn.style.border = "transparent";
    pixels.map((pixel) => {
      pixel.addEventListener("mouseover", () => {
        pixel.style.backgroundColor = "white";
      });
    });
  });

  resetBtn.addEventListener("click", () => {
    resetBtn.style.border = "1px solid #CCC";
    resetBtn.style.borderRadius = "4px";

    drawBtn.style.border = "transparent";
    eraseBtn.style.border = "transparent";
    pixels.map((pixel) => (pixel.style.backgroundColor = "white"));
    pixels.map((pixel) => {
      pixel.addEventListener("mouseover", () => {
        pixel.style.backgroundColor = "white";
      });
    });
  });
};

//Function to start
createGrid();
