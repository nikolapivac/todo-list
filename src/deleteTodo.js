import { listOfTodos } from "./todoForm";

const deleteTodoCard = (todo) =>{
    (todo.parentElement).removeChild(todo);
    const index = listOfTodos.indexOf(todo);
    if(index > -1) { 
        listOfTodos.splice(index, 1); 
    }
}

export { deleteTodoCard }