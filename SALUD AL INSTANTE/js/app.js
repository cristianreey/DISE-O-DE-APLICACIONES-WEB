// Event delegation
document.addEventListener("dragstart", function (evt) {
  if (evt.target.tagName == "IMG" || evt.target.tagName == "A") {
    evt.preventDefault();
  }
});

//Slider de productos
const slider = [...document.querySelectorAll(".slider-inner")];

//Slider 1
let sliderGrabbed1 = false;

slider[0].addEventListener("mouseenter", (e) => {
  slider[0].style.cursor = "grab";
});

slider[0].addEventListener("mousedown", (e) => {
  sliderGrabbed1 = true;
  slider[0].style.cursor = "grabbing";
});

slider[0].addEventListener("mouseup", (e) => {
  sliderGrabbed1 = false;
  slider[0].style.cursor = "grab";
});

slider[0].addEventListener("mouseleave", (e) => {
  sliderGrabbed1 = false;
});

slider[0].addEventListener("mousemove", (e) => {
  if (sliderGrabbed1) {
    slider[0].parentElement.scrollLeft -= e.movementX;
  }
});

slider[0].addEventListener("wheel", (e) => {
  e.preventDefault();
  slider[0].parentElement.scrollLeft += e.deltaY;
});

//Slider 2
let sliderGrabbed2 = false;

slider[1].addEventListener("mouseenter", (e) => {
  slider[1].style.cursor = "grab";
});

slider[1].addEventListener("mousedown", (e) => {
  sliderGrabbed2 = true;
  slider[1].style.cursor = "grabbing";
});

slider[1].addEventListener("mouseup", (e) => {
  sliderGrabbed2 = false;
  slider[1].style.cursor = "grab";
});

slider[1].addEventListener("mouseleave", (e) => {
  sliderGrabbed2 = false;
});

slider[1].addEventListener("mousemove", (e) => {
  if (sliderGrabbed2) {
    slider[1].parentElement.scrollLeft -= e.movementX;
  }
});

slider[1].addEventListener("wheel", (e) => {
  e.preventDefault();
  slider[1].parentElement.scrollLeft += e.deltaY;
});
