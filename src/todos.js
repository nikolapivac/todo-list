import { loadTodoForm } from "./todoForm";

const loadTodos = () => {
    const content = document.getElementById("content");

    const todosMainTitle = document.createElement("h1");
    todosMainTitle.classList.add("todos_main_title");
    todosMainTitle.textContent = "Todos";
    content.appendChild(todosMainTitle);

    const newTodoBtn = document.createElement("button");
    newTodoBtn.classList.add("new_todo_button");
    newTodoBtn.textContent = "+ New Todo";
    content.appendChild(newTodoBtn);
    
    const todoContainer = document.createElement("div");
    todoContainer.classList.add("todo_container");
    content.appendChild(todoContainer);
    
    loadTodoForm();
    newTodoBtn.addEventListener("click", () => {
        const todoForm = document.querySelector(".form_popup");
        todoForm.style.display = "block";
        todoContainer.style.opacity = "0.5";
        newTodoBtn.style.opacity = "0.5";
    })


    
}

export { loadTodos }