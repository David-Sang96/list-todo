"use strict";

document.querySelector("button").addEventListener("click", addFunc);

const userInput = document.querySelector("#todo-input");

let num = 0;
function addFunc(e) {
  e.preventDefault();
  // const inputValue = `${num++}. ${userInput.value}`;
  const inputValue = userInput.value;
  if (inputValue === "") {
    alert("Please write your todo list!");
  } else {
    const divTag = document.createElement("div");
    divTag.innerHTML = `${++num}. ${userInput.value}`;
    divTag.classList.add("space");
    const iconTag = document.createElement("div");
    iconTag.classList.add("icon");
    const btnCheck = document.createElement("div");
    btnCheck.innerHTML = `<i class="fa-solid fa-check"></i>`;
    const btnTrash = document.createElement("div");
    btnTrash.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    iconTag.append(btnCheck, btnTrash);
    divTag.append(iconTag);
    document.querySelector(".todo-items").appendChild(divTag);

    // * check button
    btnCheck.addEventListener("click", () => {
      divTag.classList.toggle("line");
    });

    // * trash button
    btnTrash.addEventListener("click", () => {
      divTag.classList.add("delete");
      divTag.addEventListener("transitionend", () => {
        divTag.remove();
      });
    });
  }
  userInput.value = "";
}
