"use strict";

const modalWindow = document.querySelector(".modal-window"),
  modalContent = document.querySelector(".modal-content"),
  signUpBtn = document.querySelector(".register-btn"),
  closeBtn = document.querySelector(".close-btn"),
  introProduct = document.querySelector(".into__product--info");

signUpBtn.addEventListener("click", () => {
  modalWindow.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  modalWindow.classList.add("hidden");
});

window.addEventListener("click", (e) => {
//   console.log(e.target.classList.contains("modal-window"));
  if (e.target.classList.contains("modal-window")) {
    // modalContent.classList.toggle('shaker');
    modalWindow.classList.add("hidden");
  }
});

// --------------------------- DYNAMIC ELEMENTS -------------------
let cards = [
  {
    id: 1,
    img: "./images/user1.png",
    title: "30K",
    description: "User order",
  },
  {
    id: 2,
    img: "./images/star1.svg",
    title: "20K",
    description: "Reviews(4.8)",
  },
  {
    id: 1,
    img: "./images/Group.png",
    title: "200",
    description: "Items",
  },
];

const createElement = (tagName, className, content) => {
  const element = document.createElement(tagName);

  if (className) {
    element.setAttribute("class", className);
  }
  if (content) {
    element.innerHTML = content;
  }
  return element;
};

cards.forEach((items) => {
  const newElement = createElement(
    "div",
    "card hover:shadow-lg bg-white flex justify-between items-center py-5 pr-11 pl-8 rounded-sm mb-[30px]",
    `
    <span class="p-3 bg-green-100 rounded-full">
    <img src="${items.img}" alt="user" />
  </span>
  <div class="flex flex-col items-center justify-center ml-3">
    <h2 class="text-5xl font-normal">${items.title}</h2>
    <p>${items.description}</p>
  </div>
    `
  );
  introProduct.append(newElement);
});

let icon = document.querySelector('.icon');

// icon.onclick = function (e) {
//     console.log(this.style.color = "red")
// }

icon.addEventListener('click', (e) => {
    
})