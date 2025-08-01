const bodyElement = document.querySelector("body");
bodyElement.addEventListener("mousemove", (event) => {
    const xposition = event.offsetX;
    const yposition = event.offsetY;
    const spanElement = document.createElement("span");
    spanElement.style.left = xposition + "px";
    spanElement.style.top = yposition + "px";
    const size = Math.random() * 100;
    spanElement.style.width = size + "px";
    spanElement.style.height = size + "px";
    bodyElement.appendChild(spanElement);
    setTimeout(() => {
        spanElement.remove();
    }, 3000);

});