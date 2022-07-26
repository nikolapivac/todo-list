const deleteProjectCard = (project) =>{
    (project.parentElement).removeChild(project);
}

export { deleteProjectCard }