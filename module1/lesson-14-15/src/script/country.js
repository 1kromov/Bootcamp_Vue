"use strict";

let them = document.querySelector("#them"),
  header = document.querySelector("header");

them.addEventListener("input", (e) => {
  localStorage.setItem("them", e.target.checked);
  changeMode();
});

function changeMode() {
  let mode = localStorage.getItem("them");

  if (mode === "true") {
    document.body.style.cssText = "background-color:#202C36; color:#fff";
    header.style.cssText = "background-color:#2b3844; color:#ffff";
    them.style.cssText = `background-image: url("../images/Group\ 3\ \(1\).svg")`;
  } else {
    document.body.style.cssText = "background-color:#F2F2F2; color:#000";
    header.style.cssText = "background-color:#ffff; color:#000";
  }
}
changeMode();

let country = document.querySelector("#country");
let name = localStorage.getItem("isname");
let title = localStorage.getItem("title");
country.innerHTML = name;

async function getCountry() {
  try {
    const response = await fetch(`https://restcountries.com/v2/name${name}`);
    const result = await response.json();
  } catch (error) {
    console.log(error);
  }
}
getCountry();
