import { deleteProjectCard } from "./deleteProject"

const createNewProject = (title) => {
    const project = document.createElement("div");
    project.classList.add("project_card");

    const projectHeader = document.createElement("div");
    projectHeader.classList.add("project_card_header");

    const projectTitle = document.createElement("h1");
    projectTitle.classList.add("project_card_title");
    projectTitle.textContent = `${title}`;

    const options = document.createElement("div");
    options.classList.add("project_card_options");

    const expandProject = document.createElement("i");
    expandProject.classList.add("gg-more-alt");
    options.appendChild(expandProject);

    const deleteProject = document.createElement("i");
    deleteProject.classList.add("gg-trash");
    options.appendChild(deleteProject);

    deleteProject.addEventListener("click", (e) => {
        e.preventDefault();
        deleteProjectCard(project);
    })

    projectHeader.appendChild(projectTitle);
    projectHeader.appendChild(options);
    project.appendChild(projectHeader);

    return project;
}

export { createNewProject }