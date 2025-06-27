function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
  
    if (taskText === "") {
      alert("Please enter a task!");
      return;
    }
  
    const li = document.createElement("li");
    li.textContent = taskText;
  
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "X";
    removeBtn.className = "remove-btn";
    removeBtn.onclick = function () {
      li.remove();
    };
  
    li.appendChild(removeBtn);
  
    document.getElementById("taskList").appendChild(li);
  
    taskInput.value = ""; // clear input
  }