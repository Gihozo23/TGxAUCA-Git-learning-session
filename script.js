// Add Task Function (Trainee 2)
function addTask() {
    let taskInput = document.getElementById("taskInput").value;
    if (taskInput.trim() === "") return;
    
    let taskList = document.getElementById("taskList");
    let taskItem = document.createElement("li");
    taskItem.innerHTML = `${taskInput} <button onclick="deleteTask(this)">❌</button> <button onclick="completeTask(this)">✅</button>`;
    
    taskList.appendChild(taskItem);
}

// Delete Task Function (Trainee 2)
function deleteTask(element) {
    element.parentElement.remove();
}

// Complete Task Function (Trainee 4)
function completeTask(element) {
    element.parentElement.style.textDecoration = "line-through";
}
