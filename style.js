const taskInput = document.getElementById("task");
const priorityInput = document.getElementById("priority");
const deadlineInput = document.getElementById("deadline");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

function validateInputs() {
    const task = taskInput.value.trim();
    const deadline = deadlineInput.value;
    const selectedDate = new Date(deadline);
    const currentDate = new Date();

    if (task !== "" && deadline !== "" && selectedDate > currentDate) {
        addTaskButton.disabled = false;
    } else {
        addTaskButton.disabled = true;
    }
}

taskInput.addEventListener("input", validateInputs);
deadlineInput.addEventListener("input", validateInputs);

addTaskButton.addEventListener("click", () => {
    const task = taskInput.value.trim();
    const priority = priorityInput.value;
    const deadline = deadlineInput.value;
    const selectedDate = new Date(deadline);
    const currentDate = new Date();

    if (task === "" || deadline === "") {
        alert("Please enter a task and select a deadline.");
        return;
    }

    if (selectedDate <= currentDate) {
        alert("Please select an upcoming date for the deadline.");
        return;
    }

    const taskItem = document.createElement("div");
    taskItem.classList.add("task");
    taskItem.innerHTML = `
        <p>${task}</p>
        <p>Priority: ${priority}</p>
        <p>Deadline: ${deadline}</p>
        <button class="mark-done">Mark Done</button>
    `;

    taskList.appendChild(taskItem);

    taskInput.value = "";
    priorityInput.value = "top";
    deadlineInput.value = "";

    addTaskButton.disabled = true;
});

taskList.addEventListener("click", (event) => {
    if (event.target.classList.contains("mark-done")) {
        event.target.textContent = "Done";
        event.target.disabled = true; 
        event.target.style.backgroundColor = "#6c757d"; 
    }
});

addTaskButton.disabled = true;
