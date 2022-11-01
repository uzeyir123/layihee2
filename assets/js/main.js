const textInputField = document.querySelector('.input-text');
const addButton = document.querySelector('.addbtn');
const todosContainer = document.querySelector('.todos');


addButton.addEventListener('click', ()=>{
    if(textInputField.value.trim().length=='')
    return;
    
    const todoItemContainer = document.createElement('div');
    todoItemContainer.classList.add('todo-item-container');

    todosContainer.appendChild(todoItemContainer)

    const todoText = document.createElement('p')
    todoText.id = 'todo-text';
    todoText.innerText = textInputField.value
    todoItemContainer.appendChild(todoText)


    const editButton = document.createElement('button')
    editButton.id = 'edit';
    editButton.innerHTML= 'Edit'
    todoItemContainer.appendChild(editButton)
    editButton.addEventListener('click', ()=>{
        textInputField.value = todoText.innerText;
        const parent = editButton.parentElement
        parent.parentElement.removeChild(parent);
    })

    const deleteButton = document.createElement('button')
    deleteButton.id = 'delete'
    deleteButton.innerHTML= 'Delete'
    todoItemContainer.appendChild(deleteButton)
    deleteButton.addEventListener('click', ()=>{
        const parent = deleteButton.parentElement;
        parent.parentElement.removeChild(parent)
    })

    textInputField.value='';

})