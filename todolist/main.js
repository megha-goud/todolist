window.addEventListener('load',() =>{
    todos = JSON.parse(localStorage.getItem('todos')) || [];
    const nameInput =document.querySelector('#name');
    const newTodoForm =document.querySelector('#new-todo-form');

    const username = localtorage.getItem('username') || '';

    nameInput.value = username;

    nameInput.addEventListener('change', e =>{
        localStorage.setItem('username',e.target.value);
    })

    newTodoForm.addEventListener('submit',e => {
        e.preventDefault();

        const todo ={
            constent: e.target.elements.content.value,
            category: e.target.elements.category.value,
            done: false,
            createdAt: new Date().getTime()
        }

        todo.push(todo);

        localStorage.setItem('todos',JSON.stringify(todos));

        e.target.reset();
    })
})

