import { loadForm } from "./form";

const createNewTodo = (title, description, date, project) => {
    const todo = document.createElement("div");
    todo.classList.add("todo");

    const todoTitle = document.createElement("h1");
    todoTitle.classList.add("todo_title");
    todoTitle.textContent = `${title}`;

    const todoDesc = document.createElement("p");
    todoDesc.classList.add("todo_desc");
    todoDesc.textContent = `${description}`;

    const todoDate = document.createElement("p");
    todoDate.classList.add("todo_date");
    todoDate.textContent = `${date}`;

    const todoProject = document.createElement("p");
    todoProject.classList.add("todo_project");
    todoProject.textContent = `${project}`;

    return todo;
}

const openForm = () => {
    document.getElementById("todo_form").style.display = "block";
}
const closeForm = () => {
    document.getElementById("todo_form").style.display = "none";
}



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

    loadForm();

    newTodoBtn.addEventListener("click", () => {
        const form = document.getElementById("todo_form");
        form.style.display = "block";
    })
}

export { loadTodos }