const createNewTodo = (title, desc, date, project) => {
    const todo = document.createElement("div");
    todo.classList.add("todo_card");

    const todoTitle = document.createElement("h1");
    todoTitle.classList.add("todo_card_title");
    todoTitle.textContent = `${title}`;

    const todoDesc = document.createElement("p");
    todoDesc.classList.add("todo_card_desc");
    todoDesc.textContent = `${desc}`;

    const todoDate = document.createElement("p");
    todoDate.classList.add("todo_card_date");
    todoDate.textContent = `Due date: ${date}`;

    const todoProject = document.createElement("p");
    todoProject.classList.add("todo_card_project");
    todoProject.textContent = `Project: ${project}`;

    todo.appendChild(todoTitle);
    todo.appendChild(todoDesc);
    todo.appendChild(todoDate);
    todo.appendChild(todoProject);

    return todo;
}

export { createNewTodo }