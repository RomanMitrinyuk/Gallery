const images = document.querySelectorAll("img");
const modalWindow = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const activeImage = document.querySelector("#active-image");
const close = document.querySelector(".close");
function displayImage(event) {
  activeImage.src = event.target.src;
  modalWindow.style.display = "block";
  overlay.style.display = "block";
}
images.forEach((img) => {
  img.addEventListener("click", displayImage);
});
close.addEventListener("click", () => {
  modalWindow.style.display = "none";
  overlay.style.display = "none";
});
