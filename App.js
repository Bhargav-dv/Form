const submitButton = document.getElementById("submit-button");
const showpopUp = document.querySelector(".pop-up");

const userInputArray = [];

const showError = (userNameValue, errMess) => {
  const fromError = userNameValue.parentElement;
  const smallErrMess = fromError.querySelector("small");
  smallErrMess.textContent = errMess;
  fromError.classList.add("error", "fail");
  return false;
};

const showSucces = (userNameValue) => {
  const fromSucess = userNameValue.parentElement;
  fromSucess.classList.remove("error", "fail");
  fromSucess.classList.add("scucess");
  return true;
};

const validateEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const apendCapLeter = (value) => {
  return value.toUpperCase().slice(0, 1) + value.slice(1);
};

const checkLength = (userInput, min, max) => {
  if (userInput.value.replace(/ /g, "").length < min) {
    return showError(
      userInput,
      `${apendCapLeter(userInput.id)} length is less than ${min}`
    );
  } else if (userInput.value.replace(/ /g, "").length > max) {
    return showError(
      userInput,
      `${apendCapLeter(userInput.id)} length is more than ${max}`
    );
  } else {
    return showSucces(userInput);
  }
};

const checkValidPass = (pas1, pas2) => {
  if (pas1.value.trim() === "" || pas1.value.trim() === "") {
    return showError(pas1, `${apendCapLeter(email.id)} cant be empty`);
  } else if (pas1.value.replace(/ /g, "") !== pas2.value.replace(/ /g, "")) {
    showError(pas1, `${apendCapLeter(pas1.id)} does not match`);
    return showError(pas2, ` does not match the above entered password`);
  } else {
    return showSucces(pas2);
  }
};

const checkEmail = (email) => {
  if (email.value.trim() === "") {
    return showError(email, `${apendCapLeter(email.id)} cant be empty`);
  } else if (!validateEmail(email.value)) {
    return showError(email, "Enter a Valid Email");
  } else {
    return showSucces(email);
  }
};
const checkInputValues = (e) => {
  e.preventDefault();
  const userNameValue = document.getElementById("username");
  const userEmailValue = document.getElementById("email");
  const userPasswordValue = document.getElementById("password");
  const usePasswordCheckValue = document.getElementById("password2");

  const a = checkLength(userNameValue, 3, 10);
  const b = checkLength(userPasswordValue, 3, 10);
  const c = checkEmail(userEmailValue);
  const d = checkValidPass(userPasswordValue, usePasswordCheckValue);

  if (a && b && c && d) {
    const getPopID = document.querySelector(".pop-up");
    const closePop = document.getElementById("close");
    document.body.style.background = "grey";
    getPopID.classList.add("show");
    userNameValue.value = userEmailValue.value = userPasswordValue.value = usePasswordCheckValue.value = "";
    var newcontent = document.createElement('h2');
    getPopID.appendChild(newcontent);
    closePop.addEventListener("click", () => {
      getPopID.classList.remove("show");
      document.body.style.background = "";
    });

  }
};

submitButton.addEventListener("click", checkInputValues);
