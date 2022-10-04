const slider = document.querySelector(".slider");
const output = document.getElementById("slider-value");
const resetButton = document.querySelector(".reset-grid-button");
const drawingZone = document.querySelector(".drawing-zone");

// Display the default slider value
output.innerHTML = `${slider.value} x ${slider.value}`;

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
  output.innerHTML = `${this.value} x ${this.value}`;
};

resetButton.addEventListener("click", () => {
  drawingZone.innerHTML = "";
  for (let i = 0; i < slider.value; i++) {
    for (let j = 0; j < slider.value; j++) {
      const pixel = document.createElement("div");
      pixel.classList.add("pixel");
      drawingZone.appendChild(pixel);
    }
  }
  drawingZone.setAttribute(
    "style",
    `grid-template-columns: repeat(${slider.value}, ${
      100 / slider.value
    }%); grid-template-rows: repeat(${slider.value}, ${100 / slider.value}%);`
  );
  const pixel = document.createElement("div");
  pixel.setAttribute(
    "style",
    `width: ${100 / slider.value}%; height: ${100 / slider.value}%;`
  );
});
