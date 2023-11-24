const createButton = document.querySelector('#create_button')
const input = document.querySelector('#input')
const todoList = document.querySelector('.todo_list')
const createTodo = () => {
    if (input.value.trim() === ''){
        return alert('error')
    }

    const div = document.createElement('div')
    div.setAttribute('class' , 'block_text')

    const divButton = document.createElement('div')
    divButton.setAttribute('class', 'div_button')

    const deleteButton = document.createElement('button')
    deleteButton.setAttribute('class' , 'delete_button')
    deleteButton.innerText = 'DELETE'

    const editButton = document.createElement('button')
    editButton.setAttribute('class' , 'edit_button')
    editButton.innerText = 'EDIT'

    const checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    checkbox.setAttribute('class', 'checkbox')


    const text = document.createElement('h3')
    text.innerText = input.value
    text.setAttribute('class', 'text')
    text.addEventListener('click', () => {
        text.classList.toggle('toggle')
    } )

    checkbox.addEventListener("click", () => {
        text.classList.toggle('toggle')
    })

    divButton.append(deleteButton, editButton)
    div.append(checkbox, text, divButton)

    todoList.prepend(div)


   deleteButton.addEventListener('click', () => {
       div.remove()
    })
    editButton.onclick=()=>{
        let newText = prompt(`${text.innerText}`)
        text.innerText = newText
        console.log(newText)
    }
    input.value = ''
}

createButton.onclick = () => createTodo()

window.onkeydown = (event)  => {
    if (event.code === 'Enter'){
        createTodo()
    } else if (event.code === 'Tab') {
        createTodo()
    }
}
