const Link = document.querySelector(".modal-open-button");
const Popup = document.querySelector(".modal-connection");
const Close = Popup.querySelector(".modal-close");

Link.addEventListener("click", function (evt) {
  evt.preventDefault();
  Popup.classList.add("modal-show");
});

Close.addEventListener("click", function (evt) {
  evt.preventDefault();
  Popup.classList.remove("modal-show");
});
