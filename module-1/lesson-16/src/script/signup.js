"use strict";

// ----------------------------SIGN UP---------------------------

let username = document.getElementById("email-address");
let password = document.getElementById("password");
let signup = document.getElementById("signup");

function submitSignup(e) {
  e.preventDefault();
  const user = {
    username: username.value,
    password: password.value,
  };
  console.log(user);
  if (user.password.trim().length === 0 || user.password.trim().length === 0) {
    console.log("please enter your email address and password");
  } else {
    fetch("http://178.62.198.221:3003/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((resolve) => console.log(resolve));
  }
}

signup.addEventListener("submit", (e) => {
  submitSignup(e);
});
