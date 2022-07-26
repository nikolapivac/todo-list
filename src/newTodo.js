import { deleteTodoCard } from "./deleteTodo";
import { expandTodoCard } from "./expandTodo";

const createNewTodo = (title, desc, date, project) => {
    const todo = document.createElement("div");
    todo.classList.add("todo_card");

    const todoHeader = document.createElement("div");
    todoHeader.classList.add("todo_card_header");

    const todoTitle = document.createElement("h1");
    todoTitle.classList.add("todo_card_title");
    todoTitle.textContent = `${title}`;

    const options = document.createElement("div");
    options.classList.add("todo_card_options");

    const markAsChecked = document.createElement("i");
    markAsChecked.classList.add("gg-check-r");
    options.appendChild(markAsChecked);
    
    let isClicked = false;
    markAsChecked.addEventListener("click", (e) => {
        e.preventDefault();
        
        if (!isClicked){
            isClicked = true;
            markAsChecked.style.color = "rgb(96, 135, 96)";
            todoTitle.style.textDecoration = "line-through";
            todo.style.opacity = "0.5";
            expandTodo.style.display = "none";
        } else {
            isClicked = false;
            markAsChecked.style.color = "var(--side_color)"
            todoTitle.style.textDecoration = "none";
            todo.style.opacity = "1";
            expandTodo.style.display = "block";
        }
    })
    
    const expandTodo = document.createElement("i");
    expandTodo.classList.add("gg-more-alt");
    options.appendChild(expandTodo);

    expandTodo.addEventListener("click", (e) => {
        e.preventDefault();
        expandTodoCard(todo);
    })

    const deleteTodo = document.createElement("i");
    deleteTodo.classList.add("gg-trash");
    options.appendChild(deleteTodo);

    deleteTodo.addEventListener("click", (e) => {
        e.preventDefault();
        deleteTodoCard(todo);
    })

    const todoDesc = document.createElement("p");
    todoDesc.classList.add("todo_card_desc");
    todoDesc.textContent = `${desc}`;

    const todoDate = document.createElement("p");
    todoDate.classList.add("todo_card_date");
    todoDate.textContent = `Due: ${date}`;

    const todoProject = document.createElement("p");
    todoProject.classList.add("todo_card_project");
    todoProject.textContent = `Project: ${project}`;

    todoHeader.appendChild(todoTitle);
    todoHeader.appendChild(options);
    todo.appendChild(todoHeader);
    todo.appendChild(todoDesc);
    todo.appendChild(todoDate);
    todo.appendChild(todoProject);

    return todo;
}

export { createNewTodo }