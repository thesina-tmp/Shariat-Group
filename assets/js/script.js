let email = document.getElementById("emailForm");
let message = document.querySelector("div .messageEmail");
let password = document.getElementById("passwordForm");
let messagePassword = document.querySelector("div .messagePassword");
let messagePassword2 = document.querySelector("div .messagePasswords");
let passwordConfirm = document.getElementById("passwordForm2");
let messagePasswordConfirm = document.querySelector("div .messagePassword2");

const DOMScriptValidation = () => {
  function validateEmail(event) {
    let regex = /^[^@]+@gmail\.com$/;
    let emailValue = event.target.value;
    if (emailValue.match(regex)) {
      email.style.border = "green solid 1px";
      message.style.color = "green";
      message.textContent = "";
    } else if (emailValue === "") {
      email.style.border = "red solid 1px";
      message.textContent = "لطف ایمیل خود را وارد کنید؟";
      message.style.color = "red";
    } else {
      email.style.border = "red solid 1px";
      message.textContent =
        "ایمیل شما درست نمی باشد ایمیل شما باید gmail.com@ باشد";
      message.style.color = "red";
    }
  }
  function validatePassword(event) {
    let regex = /\w+[?!%#]$/;
    let passwordValue = event.target.value;
    if (passwordValue.length > 12 && passwordValue.match(regex)) {
      password.style.border = "green 1px solid";
      messagePassword.textContent = "";
      messagePassword2.textContent = "";
    } else if (passwordValue === "") {
      password.style.border = "red 1px solid";
      messagePassword.textContent = "گذرواژه خود را وارد کنید؟";
      messagePassword.style.color = "red";
    } else {
      password.style.border = "red 1px solid";
      messagePassword.textContent =
        "گذرواژه شما باید حداقل 12 کاراکتر داشته باشد؟";
      messagePassword2.textContent =
        "گذرواژه شما باید حداقل کاراکتر های ? ! % # باشد؟";
      messagePassword.style.color = "red";
      messagePassword2.style.color = "red";
    }
  }
  function validationPasswordConfirm(event) {
    let passwordConfirmValue = event.target.value;
    if (passwordConfirmValue !== password.value) {
      passwordConfirm.style.border = "red solid 1px";
      password.style.border = "red solid 1px";
      messagePasswordConfirm.textContent =
        "گذرواژه های با هم یکسان نمی باشد لطف دوباره سعی کنید";
      messagePasswordConfirm.style.color = "red";
    } else if (passwordConfirmValue === "") {
      passwordConfirm.style.border = "red solid 1px";
      messagePasswordConfirm.textContent = "گذرواژه خود را وارد کنید؟";
      messagePasswordConfirm.style.color = "red";
    } else {
      passwordConfirm.style.border = "green 1px solid";
      password.style.border = "green 1px solid";
      messagePasswordConfirm.textContent = "";
    }
  }
  email.addEventListener("keyup", validateEmail);
  password.addEventListener("keyup", validatePassword);
  if (passwordConfirm) {
    passwordConfirm.addEventListener("keyup", validationPasswordConfirm);
  }
};

document.addEventListener("DOMContentLoaded", DOMScriptValidation);
