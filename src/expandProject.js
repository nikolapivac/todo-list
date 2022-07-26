const expandProjectCard = (project) => {
    const listItem = document.querySelector(".todo_under_project");

    if (listItem.style.display === "none") {
        listItem.style.display = "block";
    } else {
        listItem.style.display = "none"
    }
}

export { expandProjectCard }