import { itemComplete, addProject } from "./index";
import { Task } from "./task";
import { taskContextMenu, taskSidebarMenu } from "./taskMenu"

class Todo extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });

        const taskName = document.querySelector('#new-task-input').value
        const newDOMItem = document.createElement('li')
        const newDOMItemLink = document.createElement('span')
        const taskList = document.querySelector('.task-list')

        const completeTask = document.createElement('div')
        completeTask.classList.add('complete-icon')

        taskList.appendChild(newDOMItem)
        newDOMItemLink.textContent = taskName
        newDOMItemLink.setAttribute('status', 'open')
        newDOMItem.appendChild(completeTask)
        newDOMItem.appendChild(newDOMItemLink)

        newDOMItem.classList.add('task-item')

        const styleLink = document.createElement('link')
        styleLink.setAttribute('rel', 'stylesheet')
        styleLink.setAttribute('href', '../dist/main.css')

        shadow.appendChild(styleLink)
        shadow.appendChild(newDOMItem)

        const newTask = new Task(taskName)
    }

    connectedCallback() {
        this.classList.add('list-item')
        const taskInput = document.querySelector('#new-task-input')
        taskInput.value = ''
        taskContextMenu(this)
        taskSidebarMenu(this)
        itemComplete(this)
    }
}

class Project extends Todo {
    constructor() {
        super()

        const thisItem = this.shadowRoot
        const projectName = document.querySelector('#new-project-input').value
        const newDOMItemLink = thisItem.querySelector('span')
        newDOMItemLink.textContent = projectName
        const completeIcon = thisItem.querySelector('.complete-icon')
        completeIcon.parentNode.removeChild(completeIcon)

    }

    connectedCallback() {
        this.classList.add('list-item')
        const projectInput = document.querySelector('#new-project-input')
        projectInput.value = ''

        addProject(this)
    }
}

export { Todo, Project }