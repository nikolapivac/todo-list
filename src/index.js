import { loadProjects } from "./projects";
import { loadTodos } from "./todos";


loadTodos();

const content = document.getElementById("content");
const showTodos = document.querySelector(".todos_button");
const showProjects = document.querySelector(".projects_button");

showTodos.addEventListener("click", () => {
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
    loadTodos();
})

showProjects.addEventListener("click", () => {
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
    loadProjects();
})