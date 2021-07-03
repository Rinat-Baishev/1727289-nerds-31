const loginLink = document.querySelector(".modal-open-button");
const loginPopup = document.querySelector(".modal-connection");
const loginClose = loginPopup.querySelector(".modal-close");
const loginForm = loginPopup.querySelector(".connection-form");
const loginLogin = loginPopup.querySelector(".login-name");
const loginPassword = loginPopup.querySelector(".login-email");

loginLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginPopup.classList.add("modal-show");
  loginLogin.focus();
});

loginClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginPopup.classList.remove("modal-show");
});

loginForm.addEventListener("submit", function (evt) {
  if (!loginLogin.value || !loginPassword.value) {
    evt.preventDefault();
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (loginPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      loginPopup.classList.remove("modal-show");
    }
  }
});
