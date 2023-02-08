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

// -------------------------------------DYNAMIC CARDS-------------------

let baseUrl = "https://restcountries.com/v2/all";
let filterUrl = "https://restcountries.com/v2/region";
let searchUrl = "https://restcountries.com/v2/name";
let wrapperCards = document.querySelector(".card__wrapper");
let select = document.querySelector("#region");

const getAllCountries = async () => {
  wrapperCards.innerHTML = "<span class='loader'></span>";
  try {
    const response = await fetch(baseUrl);

    const result = await response.json();

    if (response.status === 200) {
      renderCards(result);
      filterRegion(result);
    }
  } catch (error) {
    console.log("Error message" + error);
  }
};
getAllCountries();
// -----------------------render cards-------------------

function renderCards(cards) {
  wrapperCards.innerHTML = "";
  cards.forEach((element) => {
    const card = createElement(
      "div",
      "rounded-[5px] shadow-lg bg-white max-w-sm w-[264px] h-[336px]",
      `
    <a href="#!">
    <img
      class="rounded-t-lg w-full h-[160px]"
      src="${element.flags.svg}"
      alt="img"
    />
  </a>
  <div class="p-6 pb-7">
    <h5 class="text-gray-900 text-xl font-medium mb-2">
      ${element.name}
    </h5>
    <ul class="list-none">
      <li><strong>Population:</strong> ${element.population}</li>
      <li><strong>Region:</strong>${element.region}</li>
      <li><strong>Capital:</strong>${element.capital}</li>
    </ul>
  </div>
    `
    );
    wrapperCards.append(card);
  });
}

// -----------------------dynamic section option------------------

function filterRegion(data) {
  const region = [];
  data.forEach((item) => {
    if (!region.includes(item.region)) {
      region.push(item.region);
    }
  });
  region.sort();
  region.forEach((item) => {
    const option = createElement("option", "item", item);
    select.append(option);
  });
}

async function fetchRegions(region) {
  wrapperCards.innerHTML = "<span class='loader'></span>";
  const response = await fetch(`${filterUrl}/${region}`);
  const result = await response.json();
  renderCards(result);
}

select.addEventListener("change", (e) => {
  wrapperCards.innerHTML = "";
  fetchRegions(e.target.value);
});

// -----------------------dynamic section option------------------

// -------------------------------search--------------------------

let searchInput = document.querySelector("#search");

async function searchCountries(country) {
  wrapperCards.innerHTML = "<span class='loader'></span>";
  try {
    const response = await  fetch(`${searchUrl}/${country}`);
    const result = await response.json()
    if(response.status === 200) {
      renderCards(result)
    }else {
      wrapperCards.innerHTML = '<h1 class="text-red-800 text-4xl text-center">COUNTRY NOT FOUND!</h1>'
    }
  } catch (error) {
    console.log(error);
  }
}

searchInput.addEventListener("keyup", (e) => {
  wrapperCards.innerHTML = " ";
  if (e.target.value.trim().length > 0) {
    wrapperCards.innerHTML = " ";
    searchCountries(e.target.value);
  }else {
    searchInput.setAttribute('placeholder','Please enter country name')
    getAllCountries()
  }
});
