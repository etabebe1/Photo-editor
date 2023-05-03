const filterA = document.querySelector("#blur");
const filterB = document.querySelector("#contrast");
const filterC = document.querySelector("#hue-rotation");
const filterD = document.querySelector("#sepia");

const noFlip = document.querySelector("#no-rotation");
const horizontal = document.querySelector("#horizontal");
const vertical = document.querySelector("#vertical");

const imageContainer = document.querySelector(".image-container");
const imageUpload = document.querySelector("#upload-img");
const imageChosen = document.querySelector("#image-chosen");

let sliders = document.querySelectorAll(".sliders");

function resetAllFilters() {
  filterA.value = "0";
  filterB.value = "100";
  filterC.value = "0";
  filterD.value = "0";

  noFlip.checked = true;
  horizontal.checked = false;
  vertical.checked = false;

  flipFunc();
  slidersFunc();
}

imageUpload.onchange = () => {
  resetAllFilters();
  imageContainer.style.display = "block";

  let reader = new FileReader();
  reader.readAsDataURL(imageUpload.files[0]);
  reader.onload = () => {
    imageChosen.setAttribute("src", reader.result);
  };
};

sliders.forEach((slider) => {
  slider.addEventListener("input", slidersFunc);
});

function slidersFunc() {
  imageChosen.style.filter = `blur(${filterA.value}px) contrast(${filterB.value}%) hue-rotate(${filterC.value}deg) sepia(${filterD.value}%)`;

  //   console.log(imageChosen.style.filter);
}

const radioBtns = document.querySelectorAll(".flips input[type='radio']");
// console.log(radioBtns);

radioBtns.forEach((radioBtn) => {
  radioBtn.addEventListener("click", flipFunc);
});

function flipFunc() {
  if (horizontal.checked) {
    imageChosen.style.transform = "scaleY(-1)";
  } else if (vertical.checked) {
    imageChosen.style.transform = "scaleX(-1)";
  } else {
    imageChosen.style.transform = "scale(1,1)";
  }
}
