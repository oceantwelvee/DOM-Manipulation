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


// Traversy the DOM;

// Parent node Traversal;

// console.log(ul.parentNode.parentNode);
// console.log(ul.parentElement.parentElement);

// const html = document.documentElement;
// console.log(html.parentNode);

// Child Node Traversal;

// let ul = document.querySelector("ul");

// ul.childNodes[1].style.backgroundColor = "blue";

// ul.childNodes[3].style.backgroundColor = "red";

// console.log(ul.children);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);

// console.log(ul.childNodes);
// console.log(ul.firstChild);
// console.log(ul.lastChild);

// Sibling Node Traversal

let ul = document.querySelector("ul");

console.log(ul.previousSibling);
console.log(ul.nextSibling);
