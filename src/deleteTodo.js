const deleteTodoCard = (todo) =>{
    (todo.parentElement).removeChild(todo);
}

export { deleteTodoCard }