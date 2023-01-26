let addButton = document.querySelector('#addButton')
let todoList = document.querySelector('.todos')
let title = document.querySelector('#title')
let todos = localStorage.getItem("todo-list")
    ? JSON.parse(localStorage.getItem("todo-list"))
    : [];
let select = document.getElementById("mySelect");

addButton.addEventListener('click', () => {
    let inputValue = title.value.trim();
    let value = select.options[select.selectedIndex].value;
    if (inputValue !== '') {
        let taskInfo = { name: inputValue, status: value }
        todos.push(taskInfo)
        localStorage.setItem('todo-list', JSON.stringify(todos))
        showTodo()
    }
    title.value = ''
})

showTodo()


function showTodo() {
    let li = "";
    if (todos) {
        todos.forEach((element, id) => {
            li += `<div class="todolist">
        <div class="text">
            <div>
                <input type="text" disabled value='${element.name}'/>
                <span>${element.status}</span>
            </div>
            <div>
                <button class='edit'><i class="bi bi-pencil-fill"></i></button>
                <button class='delete' onclick='deleteTask(${id})'><i class="bi bi-trash-fill"></i></button>
            </div>
        </div>
    </div>`
        })
    }
    todoList.innerHTML = li;
    editTask();
}

function deleteTask(id) {
    todos.splice(id, 1)
    localStorage.setItem('todo-list', JSON.stringify(todos))
    showTodo()
}

function editTask() {
    let editBtn = document.querySelectorAll('.edit')
    editBtn.forEach((item, id) => {
        item.addEventListener('click', (e) => {
            let input = e.target.parentElement.parentElement.previousElementSibling.firstElementChild;
            const end = input.value.length;
            input.disabled = false
            input.setSelectionRange(end, end);
            input.focus();
            input.addEventListener('keyup', (e) => {
                if (e.key == 'Enter') {
                    todos[id].name = input.value;
                    input.disabled = true;
                    localStorage.setItem('todo-list', JSON.stringify(todos))
                    showTodo()
                }
            })
        })
    })
}
