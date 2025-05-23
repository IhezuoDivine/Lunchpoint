document.addEventListener("DOMContentLoaded", function () {
  const main = document.getElementById("main");

  const headerlogin = document.getElementById("headerlogin");
  const headerstartnow = document.getElementById("headerstartnow");

  const loginsection = document.getElementById("loginsection");

  const loginhidden = document.getElementById("loginhidden");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const Loginbtn = document.getElementById("Loginbtn");
  const gotosignup = document.getElementById("gotosignup");
  const errormessage = document.getElementById("errormessage");

  const startnowhidden = document.getElementById("startnowhidden");
  const nameInputup = document.getElementById("name");
  const emailInputup = document.getElementById("emailstartnow");
  const passwordInputup = document.getElementById("passwordstartnow");
  const signupbtn = document.getElementById("signupbtn");
  const gotologin = document.getElementById("gotologin");
  const errormessage1 = document.getElementById("errormessage1");

  const backbtn = document.getElementById("backbtn");

  headerlogin.addEventListener("click", function (event) {
    event.preventDefault();
    main.style.display = "none";
    loginsection.style.display = "block";
    loginhidden.style.display = "block";
    startnowhidden.style.display = "none";
  });

  headerstartnow.addEventListener("click", function (event) {
    event.preventDefault();
    main.style.display = "none";
    loginsection.style.display = "block";
    loginhidden.style.display = "none";
    startnowhidden.style.display = "block";
  });

  gotosignup.addEventListener("click", function (event) {
    event.preventDefault();
    main.style.display = "none";
    loginsection.style.display = "block";
    loginhidden.style.display = "none";
    startnowhidden.style.display = "block";
  });

  gotologin.addEventListener("click", function (event) {
    event.preventDefault();
    main.style.display = "none";
    loginsection.style.display = "block";
    loginhidden.style.display = "block";
    startnowhidden.style.display = "none";
  });

  backbtn.addEventListener("click", function (event) {
    event.preventDefault();
    main.style.display = "block";
    loginsection.style.display = "none";
  });

  //here's for validation

  function showError(element, message) {
    element.textContent = message;
    element.style.color = "red";

    setTimeout(() => {
      element.textContent = "";
    }, 2000);
  }

  function isValidEmail(email) {
    return (
      email.includes("@") && (email.endsWith(".com") || email.endsWith(".net"))
    );
  }

  function isValidPassword(password) {
    return password.length >= 8;
  }

  Loginbtn.addEventListener("click", function (event) {
    event.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) {
      showError(errormessage, "Please fill all fields!");
    } else if (!isValidEmail(email)) {
      showError(errormessage, "Enter a valid email!");
    } else if (!isValidPassword(password)) {
      showError(errormessage, "Password must be at least 8 characters long!");
    } else {
      errormessage.textContent = "Login Successful";
      errormessage.style.color = "green";
    }
  });

  signupbtn.addEventListener("click", function (event) {
    event.preventDefault();

    const email = emailInputup.value.trim();
    const password = passwordInputup.value.trim();
    const name = nameInputup.value.trim();

    if (!email || !password || !name) {
      showError(errormessage1, "Please fill all fields!");
    } else if (!isValidEmail(email)) {
      showError(errormessage1, "Enter a valid email!");
    } else if (!isValidPassword(password)) {
      showError(errormessage1, "Password must be at least 8 characters long!");
    } else {
      errormessage1.textContent = "Signup successful";
      errormessage1.style.color = "green";
    }
  });
});
