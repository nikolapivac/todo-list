import { listOfProjects } from "./projectForm";

const deleteProjectCard = (project) =>{
    (project.parentElement).removeChild(project);
    const index = listOfProjects.indexOf(project);
    if (index > -1) { 
        listOfProjects.splice(index, 1); 
    }
}

export { deleteProjectCard }