const expandProjectCard = (project) => {
    const listItem = project.querySelector(".todos_of_project");

    if (listItem.style.display === "none") {
        listItem.style.display = "block";
    } else {
        listItem.style.display = "none"
    }
}

export { expandProjectCard }