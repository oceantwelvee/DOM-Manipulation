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


//  Делигирования

const football = document.getElementById("football");
const basketball = document.getElementById("basketball");
const tennis = document.getElementById("tennis");
const boxing = document.getElementById("boxing");

window.addEventListener("click", (e) => {

    if(e.target === football) {
        console.log("football is clicked");
        e.target.style.backgroundColor = "green";
    } else if(e.target === basketball) {
        console.log("basketball is clicked");
        e.target.style.backgroundColor = "orange";
    } else if(e.target === tennis) {
        console.log("tennis is clicked");
        e.target.style.backgroundColor = "yellow";
    } else if(e.target === boxing) {
        console.log("boxing is clicked");
        e.target.style.backgroundColor = "red";
    }

    setTimeout(() => {
        e.target.style.backgroundColor = "rgb(50, 50, 88)";
    }, 6000)
})

// Another Variants;

document.querySelector("#sports").addEventListener("click", (e) => {
    console.log(e.target.getAttribute("id") + " is clicked");

    const target = e.target;

    if(target.matches("li")) {
        target.style.backgroundColor = "green";
    }


    if(e.target.getAttribute("id") === "football") {
        e.target.style.backgroundColor = "green";
    } else if(e.target.getAttribute("id") === "basketball") {
        e.target.style.backgroundColor = "orange";
    } else if(e.target.getAttribute("id") === "tennis") {
        e.target.style.backgroundColor = "yellow";
    } else if(e.target.getAttribute("id") === "boxing") {
        e.target.style.backgroundColor = "red";
    }
})

// Add a new list element

const sports = document.querySelector("#sports");
const newSport = document.createElement("li");

newSport.innerText = "Rugby";
newSport.getAttribute("id", "rugby");
sports.appendChild(newSport);
