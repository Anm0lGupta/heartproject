const bodyElement = document.querySelector("body");

function createHeart(xPos, yPos) {
  const spanElement = document.createElement("span");

  // Add basic styles for the heart
  spanElement.style.position = "absolute";
  spanElement.style.background = "red";
  spanElement.style.borderRadius = "50%";
  spanElement.style.transform = "rotate(45deg)";
  spanElement.style.pointerEvents = "none";

  // Position the heart
  spanElement.style.left = xPos + "px";
  spanElement.style.top = yPos + "px";

  // Random size
  const size = Math.random() * 40 + 10; // Keep heart sizes more realistic
  spanElement.style.width = size + "px";
  spanElement.style.height = size + "px";

  bodyElement.appendChild(spanElement);

  // Remove heart after 3 seconds
  setTimeout(() => {
    spanElement.remove();
  }, 3000);
}

// Mouse movement support
bodyElement.addEventListener("mousemove", (event) => {
  createHeart(event.pageX, event.pageY);
});

// Touch movement support (mobile)
bodyElement.addEventListener("touchmove", (event) => {
  event.preventDefault();
  const touch = event.touches[0];
  createHeart(touch.pageX, touch.pageY);
}, { passive: false }); // <- important for preventDefault to work on mobile
