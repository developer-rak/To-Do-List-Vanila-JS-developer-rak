// Selector
const todoInput = document.querySelector(".todo-input")
const todoButton = document.querySelector(".todo-button")
const todoList = document.querySelector(".todo-list")

// Event Listener
todoButton.addEventListener("click", addTodo);

// Function
function addTodo(event) {
    // preventing form from submitting
    event.preventDefualt();
    // todo DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    // create
}