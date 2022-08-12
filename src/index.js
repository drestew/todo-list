import './style.scss'
import { Task } from "./task";
import { Todo } from './elements';
import { closeSidebar } from './taskMenu';

const projectInput = document.querySelector('#new-project-input')
const addProjectIcon = document.querySelector('.add-project-icon')
const addTaskIcon = document.querySelector('.add-task-icon')
let newItem
let completeItem
let newTask

addTaskIcon.addEventListener('click', function () {
    customElements.get('task-item') || customElements.define("task-item", Todo)
    const task = document.createElement('task-item')
    const taskList = document.querySelector('.task-list')
    taskList.appendChild(task)
})

const itemComplete = function () {
    completeItem.addEventListener('click', function () {
        const thisItem = this.parentElement
        const itemParent = thisItem.parentElement
        itemParent.removeChild(thisItem)
    })
}

const delTask = function () {
    const taskListItems = document.querySelectorAll('.list-item')
    taskListItems.forEach(item => {
        const delBtn = item.shadowRoot.querySelector('.modify-item') || null
        if (delBtn !== null) {
            delBtn.addEventListener('click', function () {
                item.parentNode.removeChild(item)
                const sidebar = document.querySelector('.sidebar')
                sidebar.classList.add('hidden')
            })
        }
    })
}


export { delTask }