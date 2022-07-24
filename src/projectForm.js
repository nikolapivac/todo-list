const loadProjectForm = () => {
    const content = document.getElementById("content");

    const projectFormDiv = document.createElement("div");
    projectFormDiv.classList.add("form_popup");
    projectFormDiv.setAttribute("id", "project_form");
    content.appendChild(projectFormDiv);

    const form = document.createElement("form");
    form.classList.add("form_container");
    projectFormDiv.appendChild(form);

    const formTitle = document.createElement("h1");
    formTitle.textContent = "New Project";
    form.appendChild(formTitle);

    const titleInput = document.createElement("input");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("name", "title");
    titleInput.setAttribute("placeholder", "Project Name");
    titleInput.setAttribute("id", "project_title");
    form.appendChild(titleInput);

    const buttonDiv = document.createElement("div");
    buttonDiv.classList.add("form_buttons");
    form.appendChild(buttonDiv);
    
    const addBtn = document.createElement("button");
    addBtn.classList.add("add_btn");
    addBtn.setAttribute("type", "submit");
    addBtn.textContent = "Create New Project";
    buttonDiv.appendChild(addBtn);
    
    const closeBtn = document.createElement("button");
    closeBtn.classList.add("close_btn");
    closeBtn.textContent = "Close";
    buttonDiv.appendChild(closeBtn);

    closeBtn.addEventListener("click", () => {
        projectFormDiv.style.display = "none";
    })
}

export { loadProjectForm }