var inputBox = document.querySelector(".add-note input");
var noteList = document.querySelector(".note-list");
var addBtn = document.querySelector(".btn-add");

function addTask() {
    var taskText = inputBox.value.trim(); // Trim any leading/trailing spaces

    if (taskText === "") {
        alert("You must write something!");
    } else {
        // Create a new list item
        var li = document.createElement("li");
        li.className = "row note-item"; // Add class for styling
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="btn-del"><i class="fa-solid fa-xmark"></i></button>
        `;

        // Append the new list item to the task list
        noteList.appendChild(li);

        // Clear the input box after adding a task
        inputBox.value = "";
    }
    saveData()
}

addBtn.addEventListener('click', addTask);

noteList.addEventListener('click', (e)=>{
    if (e.target.classList.contains("note-item")) {
        e.target.classList.toggle("checked");
        saveData()
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.classList.toggle("checked");
        saveData()
    }
    else if (e.target.tagName === "BUTTON") {
        e.target.parentElement.remove();
        saveData()
    }
    else if (e.target.tagName === "I") {
        e.target.parentElement.parentElement.remove();
        saveData()
    }
});

function saveData() {
    localStorage.setItem("data", noteList.innerHTML);
}

function showData() {
    noteList.innerHTML = localStorage.getItem("data");
}

showData()