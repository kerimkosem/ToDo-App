
const form = document.querySelector("form")
const input = document.querySelector("input")
const list = document.querySelector("#todos")

form.addEventListener("submit", (e) => {

    e.preventDefault()

    addToDo()

})

function addToDo() {

    let todoText = input.value

    if(todoText) {

        let todoList = document.createElement("li")

        todoList.innerText = todoText

        list.appendChild(todoList)

        input.value = ""

        todoList.addEventListener("click", () => {

            todoList.classList.toggle("completed")

        } )

        todoList.addEventListener("contextmenu", (e) => {
           
            e.preventDefault()

            todoList.remove()
        })

    }
}


