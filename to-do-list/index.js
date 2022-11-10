// DOM Manipulation

// Variables

const addTask = document.getElementById("add-task");
const taskContainer = document.getElementById("task-container");
const inputTask = document.getElementById("input-task");

// Event Listeners for add task Button;

addTask.addEventListener('click', function() {
    let task = document.createElement('div');
    task.classList.add("task");

    let li = document.createElement("li");
    li.innerHTML = `${inputTask.value}`;
    task.appendChild(li);

    let checkButton = document.createElement('button');
    checkButton.innerHTML = `<i class="fa-solid fa-check"></i>`;
    checkButton.classList.add("checkTask");
    task.appendChild(checkButton);

    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
    deleteButton.classList.add("deleteTask");
    task.appendChild(deleteButton);

    if(inputTask.value === ""){
        inputTask.placeholder = "Please Enter a Task"
        // alert("Please Enter a Task");
    }else {
        taskContainer.appendChild(task);
    }

    inputTask.value = "";


    checkButton.addEventListener('click', function(){

        if(checkButton.parentElement.style.textDecoration === "line-through"){
            checkButton.parentElement.style.textDecoration = "none";
        }else {
            checkButton.parentElement.style.textDecoration = "line-through"
        }
     });

     deleteButton.addEventListener('click', function(e) {
        // task.remove();  Plan A;
        // Plan B;
        let target = e.target;
        target.parentElement.parentElement.remove();
     })
});