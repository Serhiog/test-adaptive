const pics = document.querySelectorAll(".main__pic");
const popup = document.querySelector(".popup");

const popupOpen = (evt) => {
  const selectedPic = evt.target;
  const popupPic = document.querySelector(".popup__photo");
  const dataField = document.querySelector(".popup__title");
  dataField.textContent = "Номер изображения: " + selectedPic.dataset.id;
  popupPic.src = selectedPic.src;
  popup.style.display = "block";
};

const closeBtn = document
  .querySelector(".popup__close")
  .addEventListener("click", () => (popup.style.display = "none"));

pics.forEach((pic, id) => {
  pic.dataset = id;
  pic.addEventListener("click", popupOpen);
});

const onEscKeyDown = function (evt) {
  if (evt.key === "Escape") {
    popup.style.display = "none";
  }
};


document.addEventListener(`keydown`, onEscKeyDown);
