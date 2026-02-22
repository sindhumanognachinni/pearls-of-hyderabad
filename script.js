const scrollContainer = document.querySelector(".scroll-container");
const leftArrow = document.querySelector(".arrow.left");
const rightArrow = document.querySelector(".arrow.right");

rightArrow.addEventListener("click", () => {
    scrollContainer.scrollLeft += 300;
});

leftArrow.addEventListener("click", () => {
    scrollContainer.scrollLeft -= 300;
});