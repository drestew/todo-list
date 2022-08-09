import './style.scss'
import { Task } from "./task";

const projectInput = document.querySelector('#new-project-input')
const taskInput = document.querySelector('#new-task-input')
const addProjectIcon = document.querySelector('.add-project-icon')
const addTaskIcon = document.querySelector('.add-task-icon')
let newItem
let completeItem
let newTask

addTaskIcon.addEventListener('click', function () {
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

customElements.define("task-item",
    class Todo extends HTMLElement {

        static get observedAttributes() {
            return ['status', 'type'];
        }

        constructor(type) {
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
            taskInput.value = ''
            menu.bind(this)()
            sidebar.bind(this)()
        }

        attributeChangedCallback() {

        }
    }

)

const sidebar = function () {
    this.addEventListener('click', function () {
        console.log(this)
        const container = document.querySelector('.container')
        const sidebar = document.createElement('sidebar-menu')
        container.appendChild(sidebar)
        const taskNameEl = document.querySelector('sidebar-menu').shadowRoot.querySelector('h2')
        const taskNameContent = this.shadowRoot.querySelector('span').textContent
        taskNameEl.textContent = taskNameContent
    }
    )
}

const menu = function () {
    this.addEventListener('contextmenu', function (e) {
        e.preventDefault()
        this.style.position = 'relative'
        const taskItem = this.shadowRoot.querySelector('li')
        const menu = document.createElement('div')
        const delItem = document.createElement('button')
        delItem.textContent = 'Delete'
        delItem.classList.add('menu-del-item')

        menu.appendChild(delItem)
        menu.classList.add('modify-item')

        const rect = e.target.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        const menuStyle = document.createElement('style')
        menuStyle.textContent = `
            .modify-item {
                position: absolute;
                top: ${y}px;
                left: ${x}px;
                background-color: white;
                border-radius: 0.5rem;
                padding: 0.5rem;
                border: solid 1px black;
                display: hidden;
            }
            
            .menu-del-item {
                color: red;
                padding: 0.2rem;
                margin: 0.1rem;
                background-color: white;
                border: none;
            }`

        menu.appendChild(menuStyle)
        taskItem.parentNode.appendChild(menu)
        delTask()
    })
}

const delTask = function () {
    const taskListItems = document.querySelectorAll('.list-item')
    taskListItems.forEach(item => {
        const delBtn = item.shadowRoot.querySelector('.modify-item') || null
        if (delBtn !== null) {
            delBtn.addEventListener('click', function () {
                item.parentNode.removeChild(item)
            })
        }
    })
}


customElements.define("sidebar-menu",
    class Sidebar extends HTMLElement {
        constructor(name, project) {
            super()
            this.name = name
            this.project = project

            const container = document.querySelector('.container')
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


    })