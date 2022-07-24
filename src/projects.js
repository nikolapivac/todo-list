import { loadProjectForm } from "./projectForm";

const loadProjects = () => {
    const content = document.getElementById("content");

    const projectsMainTitle = document.createElement("h1");
    projectsMainTitle.classList.add("projects_main_title");
    projectsMainTitle.textContent = "Projects";
    content.appendChild(projectsMainTitle);

    const newProjectBtn = document.createElement("button");
    newProjectBtn.classList.add("new_project_button");
    newProjectBtn.textContent = "+ New Project";
    content.appendChild(newProjectBtn);

    const projectContainer = document.createElement("div");
    projectContainer.classList.add("project_container");
    content.appendChild(projectContainer);

    loadProjectForm();

    newProjectBtn.addEventListener("click", () => {
        const form = document.getElementById("project_form");
        form.style.display = "block";
    })
}

export { loadProjects }