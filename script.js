const container = document.getElementById("container");
const resizeBtn = document.getElementById("resize-btn");
const clearBtn = document.getElementById("clear-btn");

const CONTAINER_SIZE = 640; // Must match #container width/height in CSS
let currentGridSize = 16;

function getRandomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function createGrid(squaresPerSide) {
  // Remove existing grid squares
  container.innerHTML = "";

  const squareSize = CONTAINER_SIZE / squaresPerSide;
  const totalSquares = squaresPerSide * squaresPerSide;

  for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement("div");
    square.classList.add("grid-square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    // Track hover count for the 10% progressive darkening extra credit
    square.dataset.interactions = 0;

    square.addEventListener("mouseenter", () => {
      let interactions = Number(square.dataset.interactions);

      if (interactions === 0) {
        // First pass: assign a random RGB color and 10% opacity
        square.style.backgroundColor = getRandomRGB();
        square.style.opacity = "0.1";
      } else if (interactions < 10) {
        // Subsequent passes: increase opacity by 0.1 until fully solid (1.0)[cite: 1]
        square.style.opacity = ((interactions + 1) * 0.1).toFixed(1);
      }

      if (interactions < 10) {
        square.dataset.interactions = interactions + 1;
      }
    });

    container.appendChild(square);
  }
}

resizeBtn.addEventListener("click", () => {
  const input = prompt("Enter the number of squares per side (1 - 100):");
  if (input === null) return; // User clicked Cancel

  const newSize = parseInt(input, 10);

  if (isNaN(newSize) || newSize < 1 || newSize > 100) {
    alert("Please enter a valid number between 1 and 100.");
    return;
  }

  currentGridSize = newSize;
  createGrid(currentGridSize);
});

clearBtn.addEventListener("click", () => {
  createGrid(currentGridSize);
});

// Initialize default 16x16 grid on page load[cite: 1]
createGrid(currentGridSize);