const inputEl = document.getElementById('example')
const btnEl = document.querySelector('.todo-list__btn')
const fieldEl = document.querySelector('.todo-list__field')

const todoList = [
    {
        id: 1,
        text: 'some text',
        isDone: true
    }
]

let id = 2

function render() {
    fieldEl.innerHTML = ''
    for(let item of todoList){
        const el = createHtmlElement(item)
        fieldEl.appendChild(el)
    }
}

function createHtmlElement(item)  {
        const divEl = document.createElement('div')
        divEl.classList.add('todo-list__item')
        divEl.innerText = inputEl.value
        // console.log(divEl.value)

        const checkbox = document.createElement('input')  
        checkbox.type = 'checkbox' 
        if(item.idDone) {
            checkbox.checked = true
            divEl.classList.add('todo-list__item_done')
        }   

        const text = document.createElement('p')  
        text.classList.add('todo-list__item-text')
        text.interText = item.text

        const img = document.createElement('img')
        img.src ='/img/trash.svg'

        img.addEventListener('click', () => {
            removeItem(item.id)
        })

        divEl.appendChild(checkbox)
        divEl.appendChild(text)
        divEl.appendChild(img)

        //fieldEl.appendChild(divEl)

        //checkbox.addEventListener('change',() => {
           // item.isDone = !item.isDone
           // render()
            //console.log(todoList)
      //  }
       // )

        return divEl
}

function updateItem(id) {
    const item = todoList.find((id) => i.id === id)
    item.isDone = !item.isDone
    render()
} 

function removeItem(id) {
    const idx = todoList.findIndex((i) => i.id === id)
    todoList.splice(idx, 1)
    render()
}

function addItem() {
    if (inputEl.value) {
        const obj = {
            text: inputEl.value,
            isDone: false,
            id: id++ 
        }
        todoList.push(obj)
        //console.log(todoList)
        inputEl.value = ''
        render()
    }
}

btnEl.addEventListener('click', addItem)

render()
