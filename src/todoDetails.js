const handleTodoExpansion = () => {
    const description = document.querySelector(".todo_card_desc");
    const project = document.querySelector(".todo_card_project");

    const todo = document.querySelector(".todo_card");
    todo.addEventListener("click", (e) => {
        e.preventDefault();
        description.style.display = "block";
        project.style.display = "block";
    })
}

export { handleTodoExpansion }