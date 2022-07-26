import { loadProjects } from "./projects";
import { loadTodos } from "./todos";


const content = document.getElementById("content");
const todoContainer = document.createElement("div");
todoContainer.classList.add("todo_container");
const projectContainer = document.createElement("div");
projectContainer.classList.add("project_container");

const showTodos = document.querySelector(".todos_button");
const showProjects = document.querySelector(".projects_button");

content.appendChild(todoContainer);
loadTodos();

showTodos.addEventListener("click", () => {
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
    content.appendChild(todoContainer);
    loadTodos();
})

showProjects.addEventListener("click", () => {
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
    content.appendChild(projectContainer);
    loadProjects();
})
    


