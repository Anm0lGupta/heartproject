const bodyElement = document.querySelector("body");

// This function creates a heart at a specific position
function createHeart(xPos, yPos) {
  const spanElement = document.createElement("span");
  spanElement.style.left = xPos + "px";
  spanElement.style.top = yPos + "px";

  // Randomize the size of the heart
  const size = Math.random() * 100;
  spanElement.style.width = size + "px";
  spanElement.style.height = size + "px";

  bodyElement.appendChild(spanElement);

  // Remove the heart after 3 seconds
  setTimeout(() => {
    spanElement.remove();
  }, 3000);
}

// Listen for mouse movement on desktop
bodyElement.addEventListener("mousemove", (event) => {
  const xPosition = event.offsetX;
  const yPosition = event.offsetY;
  createHeart(xPosition, yPosition);
});

// Listen for finger movement on touch screens
bodyElement.addEventListener("touchmove", (event) => {
  // Use the first touch point
  const xPosition = event.touches[0].pageX;
  const yPosition = event.touches[0].pageY;
  createHeart(xPosition, yPosition);
});
