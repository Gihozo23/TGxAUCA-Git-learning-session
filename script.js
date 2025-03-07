// Add Task Function (Trainee 2)
function addTask() {
            let taskInput = document.getElementById("taskInput").value;
            if (taskInput.trim() === "") return;

            let taskList = document.getElementById("taskList");
            let taskItem = document.createElement("li");
            taskItem.className = "flex justify-between items-center bg-gray-200 p-3 rounded-md";

            taskItem.innerHTML = `
                <span>${taskInput}</span>
                <div>
                    <button onclick="deleteTask(this)" class="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600">❌</button>
                    <button onclick="completeTask(this)" class="bg-green-500 text-white px-2 py-1 rounded-md hover:bg-green-600">✅</button>
                </div>
            `;

            taskList.appendChild(taskItem);
            // document.getElementById("taskInput").value = ""; // Clear the input field
        }

        function deleteTask(element) {
            // element.parentElement.parentElement.remove();
        }

        function completeTask(element) {
            element.parentElement.parentElement.style.textDecoration = "line-through";
            element.disabled = true; // Disable the complete button after task completion
        }


