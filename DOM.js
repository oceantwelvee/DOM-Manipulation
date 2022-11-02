// Styling Elements

const title = document.querySelector("#main-heading");
title.style.color = "red";

const listItems = document.querySelectorAll(".list-items");

for(let i = 0; i < listItems.length; i++) {
    listItems[i].style.fontSize = "2rem";
}

// Creating Elements

const ul = document.querySelector("ul");
const li = document.createElement("li");

// Adding Elements

ul.append(li);

// Modyfing the text

li.innerText = "X-Men";

// Modyfing Attributes & Classes;

li.classList.remove("list-items");

console.log(li.classList.contains("list-items"));

// Remove Elements;

li.remove();
