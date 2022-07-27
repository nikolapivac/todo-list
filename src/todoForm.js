import { createNewTodo } from "./newTodo";
import { listOfProjects } from "./projectForm";

let listOfTodos = [];

const loadTodoForm = () => {
    const content = document.getElementById("content");
    const todoContainer = document.querySelector(".todo_container");
    const newTodoBtn = document.querySelector(".new_todo_button");

    const todoFormDiv = document.createElement("div");
    todoFormDiv.classList.add("form_popup");
    todoFormDiv.setAttribute("id", "todo_form");
    content.appendChild(todoFormDiv);

    const form = document.createElement("form");
    form.classList.add("form_container");
    todoFormDiv.appendChild(form);

    const formTitle = document.createElement("h1");
    formTitle.textContent = "New Todo";
    form.appendChild(formTitle);

    const titleInput = document.createElement("input");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("name", "title");
    titleInput.setAttribute("placeholder", "Title");
    titleInput.setAttribute("id", "todo_title");
    form.appendChild(titleInput);

    const descInput = document.createElement("textarea");
    descInput.setAttribute("type", "text");
    descInput.setAttribute("name", "description");
    descInput.setAttribute("placeholder", "Description");
    descInput.setAttribute("id", "todo_description");
    form.appendChild(descInput);

    const dateInput = document.createElement("input");
    dateInput.setAttribute("type", "date");
    dateInput.setAttribute("name", "date");
    dateInput.setAttribute("placeholder", "Due Date");
    dateInput.setAttribute("id", "todo_date");
    form.appendChild(dateInput);

    const projectInput = document.createElement("select");
    projectInput.setAttribute("name", "project");
    projectInput.setAttribute("placeholder", "Project");
    projectInput.setAttribute("id", "todo_project");
    const defaultProjectName = document.createElement("option");
    defaultProjectName.setAttribute("value", "Todos (default)");
    defaultProjectName.textContent = "Todos (default)";
    projectInput.appendChild(defaultProjectName);
    listOfProjects.forEach(project => {
        const projectName = document.createElement("option");
        projectName.setAttribute("value", `${(project.querySelector(".project_card_title")).textContent}`);
        projectName.textContent = `${(project.querySelector(".project_card_title")).textContent}`;
        projectInput.appendChild(projectName);
    })
    form.appendChild(projectInput);

    const buttonDiv = document.createElement("div");
    buttonDiv.classList.add("form_buttons");
    form.appendChild(buttonDiv);
    
    const addBtn = document.createElement("button");
    addBtn.classList.add("add_btn");
    addBtn.setAttribute("type", "submit");
    addBtn.textContent = "Add New Todo";
    buttonDiv.appendChild(addBtn);
    
    const closeBtn = document.createElement("button");
    closeBtn.classList.add("close_btn");
    closeBtn.textContent = "Close";
    buttonDiv.appendChild(closeBtn);

    closeBtn.addEventListener("click", (e) => {
        e.preventDefault();
        todoFormDiv.style.display = "none";
        todoContainer.style.opacity = "1";
        newTodoBtn.style.opacity = "1";
    })

    addBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const title = document.getElementById("todo_title").value;
        const desc = document.getElementById("todo_description").value;
        const date = document.getElementById("todo_date").value;
        const selectProject = document.getElementById("todo_project");
        const project = selectProject.options[selectProject.selectedIndex].value;

        const newTodo = createNewTodo(title, desc, date, project);
        todoContainer.appendChild(newTodo);
        listOfTodos.push(newTodo);

        listOfProjects.forEach(item => {
            if(item.querySelector(".project_card_title").textContent === project){
                const list = item.querySelector(".todos_of_project");
                const listItem = document.createElement("div");
                listItem.classList.add("todo_under_project");
                list.appendChild(newTodo);
            }
        })
        todoFormDiv.style.display = "none";
        todoContainer.style.opacity = "1";
        newTodoBtn.style.opacity = "1";
        form.reset();
    })
}

export { loadTodoForm, listOfTodos }