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
        const newTask = new Task(taskName)
        newDOMItemLink.textContent = newTask.name
        newDOMItemLink.setAttribute('status', 'open')
        newDOMItem.appendChild(completeTask)
        newDOMItem.appendChild(newDOMItemLink)

        newDOMItem.classList.add('task-item')

        const styleLink = document.createElement('link')
        styleLink.setAttribute('rel', 'stylesheet')
        styleLink.setAttribute('href', '../dist/main.css')

        shadow.appendChild(styleLink)
        shadow.appendChild(newDOMItem)
    }

    connectedCallback() {
        this.classList.add('list-item')
        const taskInput = document.querySelector('#new-task-input')
        taskInput.value = ''
        taskContextMenu.bind(this)()
        taskSidebarMenu.bind(this)()
    }
}

class Sidebar extends HTMLElement {
    constructor() {
        super()

        const shadow = this.attachShadow({ mode: "open" });

        const menu = document.createElement('div')
        const taskName = document.createElement('h2')
        const projectName = document.createElement('span')

        menu.appendChild(taskName)
        menu.appendChild(projectName)
        shadow.appendChild(menu)
    }

    connectedCallback() {
        this.classList.add('sidebar')
    }
}

export { Todo, Sidebar }