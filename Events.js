// DOM manipulation

// Event Listeners

const buttonTwo = document.querySelector(".btn2");

function alertBtn() {
    alert("I also love JavaScript");
}

buttonTwo.addEventListener("click", alertBtn);

// Mouseover

const newBackgroundColor = document.querySelector(".box3");

function changeColor() {
    newBackgroundColor.style.backgroundColor = "blue";
}

newBackgroundColor.addEventListener("mouseover", changeColor);
