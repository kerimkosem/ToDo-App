
const form = document.querySelector("form")
const input = document.querySelector("input")
const list = document.querySelector("#todos")


const todoEl = JSON.parse(localStorage.getItem("todos"))


if (todoEl) {

    todoEl.forEach(item => addToDo(item))

}

form.addEventListener("submit", (e) => {

    e.preventDefault()

    addToDo()

})

function addToDo(todo) {

    let todoText = input.value

    if (todo) {
        todoText = todo.text
    }

    if (todoText) {

        let todoList = document.createElement("li")

        if (todo && todo.completed) {
            todoList.classList.add("completed")
        }

        todoList.innerText = todoText

        list.appendChild(todoList)

        input.value = ""

        todoList.addEventListener("click", () => {

            todoList.classList.toggle("completed")
            addLocale()

        })

        todoList.addEventListener("contextmenu", (e) => {

            e.preventDefault()

            todoList.remove()

            addLocale()
        })

        addLocale()

    }
}


function addLocale() {

    let todos = document.querySelectorAll("li")
    
    let todosList = []
  
    todos.forEach(item => todosList.push({ text: item.innerText, completed: item.classList.contains("completed") }))
    
    localStorage.setItem("todos", JSON.stringify(todosList))

}

