const container = document.querySelector('.container');
const colors = ['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#FF8F33', '#33FFF0'];
const SQUARES = 800;

// Create 800 boxes
for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  // When hovered
  square.addEventListener('mouseover', () => setColor(square));

  // When mouse leaves
  square.addEventListener('mouseleave', () => removeColor(square));

  container.appendChild(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
}

function removeColor(element) {
  // keep the color for 1 second, then fade back
  setTimeout(() => {
    element.style.backgroundColor = '#1d1d1d';
  }, 1000);
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
