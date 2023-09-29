const inputEl = document.getElementById('example')
const btn = document.querySelector('.todo-list__btn')
const fieldEl = document.querySelector('.todo-list__field')

const arr = [
    {
        isDone: false,
        text: 'asdasd',
        id: 1
    }
]

function onBtnClick() {
    if(inputEl.value.length) {
        const divEl = document.createElement('div')
        divEl.classList.add('todo-list__item')
        //divEl.innerText = inputEl.value
        // console.log(divEl.value)

        const checkbox = document.createElement('input')  
        checkbox.type = 'checkbox'    

        const text = document.createElement('p')  
        text.classList.add('todo-list__item-text')
        text.interText = inputEL.value

        const img = document.createElement('img')
        img.src ='/img/trash.svg'

        divEl.appendChild(checkbox)
        divEl.appendChild(text)
        divEl.appendChild(img)

        fieldEl.appendChild(divEl)
        inputEl.value = ''
    }
}

bhtEL.addEventListener('click', onBtnClick)