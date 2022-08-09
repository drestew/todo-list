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
        completeTask.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img"' +
            'width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><circle cx="12"' +
            'cy="12" r="10" fill="none" stroke="currentColor" stroke-width="1"/></svg>'

        taskList.appendChild(newDOMItem)
        const newTask = new Task(taskName)
        newDOMItemLink.textContent = newTask.name
        newDOMItemLink.setAttribute('status', 'open')
        newDOMItem.appendChild(completeTask)
        newDOMItem.appendChild(newDOMItemLink)


        newDOMItem.classList.add('task-item')
        const taskStyle = document.createElement('style')
        taskStyle.textContent = `
                .task-item {
                    display: flex;
                    grid-gap: 1rem;
                    align-items: center;
                    font-size: 1.2rem;
                    cursor: default;
                }

                .complete-icon {
                    display: flex;
                }
            `
        newDOMItem.appendChild(taskStyle)
        shadow.appendChild(newDOMItem)
        console.log(newDOMItem)
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
        const sidebarStyle = document.createElement('style')

        sidebarStyle.textContent = `
                .sidebar {
                    height: 100vh;
                    width: 20vw;
                    position: fixed;
                    top: 0;
                    overflow: hidden;
                    background-color: white;
                    right: 0;   
                }
            `

        menu.classList.add('sidebar')
        menu.appendChild(taskName)
        menu.appendChild(projectName)
        menu.appendChild(sidebarStyle)
        shadow.appendChild(menu)

    }
}

export { Todo, Sidebar }