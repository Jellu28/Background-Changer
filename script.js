const button = document.getElementById("btn");
const color = document.getElementById("color");
const block = document.querySelector("h2");

const colors = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "F",
];

button.addEventListener("mouseenter", () => {
  let hexColor = generateColor();
  document.body.style.background = hexColor;
  color.textContent = hexColor;
  color.style.color = hexColor;
  block.style.color = hexColor;
  block.style.background = "white";
  button.style.background = "white";
  button.style.color = hexColor;
  button.style.border = "none";
});

button.addEventListener("mouseleave", () => {
  let hexColor = generateColor();
  document.body.style.background = hexColor;
  color.textContent = hexColor;
  color.style.color = hexColor;
  block.style.background = "black";
  block.style.color = hexColor;
  button.style.background = "black";
  button.style.color = hexColor;
  button.style.border = "none";
});

function generateColor() {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += colors[generateNumber()];
  }
  return hexColor;
}

function generateNumber() {
  return Math.floor(Math.random() * colors.length);
}
