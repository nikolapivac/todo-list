const expandTodoCard = (todo) =>{
    const description = todo.querySelector(".todo_card_desc");
    const project = todo.querySelector(".todo_card_project");

    if (description.style.display === "none") {
        description.style.display = "block";
    } else {
        description.style.display = "none"
    }


    if (project.style.display === "none") {
        project.style.display = "block";
    } else {
        project.style.display = "none"
    }
}


export { expandTodoCard }