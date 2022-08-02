import './style.scss'
import { Task } from "./task";

const projectInput = document.querySelector('#new-project-input')
const taskInput = document.querySelector('#new-task-input')
const addProjectIcon = document.querySelector('.add-project-icon')
const addTaskIcon = document.querySelector('.add-task-icon')
let newItem
let completeItem
let newTask

addProjectIcon.addEventListener('click', function () {
    const newProject = projectInput.value
    const newDOMItem = document.createElement('li')
    const newDOMItemLink = document.createElement('a')
    const projectList = document.querySelector('.project-list')

    newDOMItem.classList.add('list-item')
    projectList.appendChild(newDOMItem)
    newDOMItemLink.textContent = newProject
    newDOMItemLink.setAttribute('href', '#')
    newDOMItem.appendChild(newDOMItemLink)
    resetInput()
})

addTaskIcon.addEventListener('click', function () {
    newTask = new Task(taskInput.value)
    const newDOMItem = document.createElement('li')
    const newDOMItemLink = document.createElement('a')
    const taskList = document.querySelector('.task-list')
    const completeTask = document.createElement('span')
    const completeTaskIcon = document.createElement('div')

    completeTask.classList.add('iconify')
    completeTask.dataset.icon = 'carbon:checkmark-outline'

    newDOMItem.classList.add('list-item')
    taskList.appendChild(newDOMItem)
    newDOMItemLink.textContent = newTask.name
    newDOMItemLink.setAttribute('href', '#')
    newDOMItem.appendChild(newDOMItemLink)
    completeTaskIcon.appendChild(completeTask)
    newDOMItem.appendChild(completeTaskIcon)
    completeItem = completeTaskIcon
    newItem = newDOMItem
    resetInput()
    itemComplete()
    editOrDelete()
})

const resetInput = function () {
    projectInput.value = ''
    taskInput.value = ''
}

const itemComplete = function () {
    completeItem.addEventListener('click', function () {
        const thisItem = this.parentElement
        const itemParent = thisItem.parentElement
        itemParent.removeChild(thisItem)
    })
}

const editOrDelete = function () {
    newItem.addEventListener('click', function () {
        console.log(newTask)
    })
}
// function addToDOM(item) {
//     const taskList = document.querySelector('.tasks-list')
//     const itemEl = document.createElement('li')
//     const itemName = document.createElement('h3')
//     const iconContainer = document.createElement('div')
//     const editContainer = document.createElement('div')
//     const deleteContainer = document.createElement('div')
//     const editItem = document.createElement('span')
//     const deleteItem = document.createElement('span')

//     itemEl.classList.add('tasks-list__item')
//     itemName.textContent = item.name

//     editItem.dataset.icon = 'clarity:edit-line'
//     deleteItem.dataset.icon = 'fluent:delete-28-regular'

//     iconContainer.classList.add('icon-container')
//     editContainer.classList.add('edit-item')
//     deleteContainer.classList.add('delete-item')
//     editItem.classList.add('iconify')
//     deleteItem.classList.add('iconify')

//     taskList.appendChild(itemEl)
//     itemEl.appendChild(itemName)
//     itemEl.appendChild(iconContainer)
//     iconContainer.appendChild(editContainer)
//     iconContainer.appendChild(deleteContainer)
//     editContainer.appendChild(editItem)
//     deleteContainer.appendChild(deleteItem)

//     return item
// }

// const taskBtn = document.querySelector('.tasks-add-btn')
// const taskForm = document.querySelector('.task-form')
// const saveNewItem = document.querySelector('.save')
// let deleteItem = document.querySelectorAll('.delete-item')

// const toggleForm = function () {
//     taskForm.classList.toggle('hidden')
// }

// taskBtn.addEventListener('click', toggleForm)
// saveNewItem.addEventListener('click', toggleForm)
// taskForm.addEventListener('submit', function () {
//     this.reset()
// })

// saveNewItem.addEventListener('click', function () {
//     const name = document.querySelector('#name').value
//     const description = document.querySelector('#description').value
//     const newTask = new Task(name, description)
//     storeTask(newTask)
//     addToDOM(newTask)
//     refreshNewItem()
// })

// const refreshNewItem = function () {
//     deleteItem = document.querySelectorAll('.delete-item')
//     deleteEvent()
// }

// const deleteItemDOM = function () {
//     const thisParent = this.parentElement.parentElement
//     removeTask(this.parentElement.parentElement.textContent)
//     thisParent.parentElement.removeChild(thisParent)
// }

// const editItemDOM = function () {
//     const thisParent = this.parentElement.parentElement
//     editTask(this.parentElement.parentElement.textContent)
// }

// const deleteEvent = function () {
//     deleteItem.forEach(item => {
//         item.addEventListener('click', deleteItemDOM.bind(item))
//     })
// }

// const editEvent = function () {
//     editItem.forEach(item => {
//         item.addEventListener('click', editItemDOM.bind(item))
//     })
// }

