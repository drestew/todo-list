import { Task } from "./task";
import { taskContextMenu, taskSidebarMenu, closeSidebar } from "./taskMenu"

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
        const close = document.createElement('div')
        close.classList.add('close-sidebar')

        const styleLink = document.createElement('link')
        styleLink.setAttribute('rel', 'stylesheet')
        styleLink.setAttribute('href', '../dist/main.css')

        menu.appendChild(taskName)
        menu.appendChild(projectName)
        menu.appendChild(close)
        shadow.appendChild(styleLink)
        shadow.appendChild(menu)
    }

    connectedCallback() {
        this.classList.add('sidebar')
        closeSidebar()
    }
}

export { Todo, Sidebar }