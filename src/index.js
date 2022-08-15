import './style.scss'
import { Project, Todo } from './elements';

const projectInput = document.querySelector('#new-project-input')
const addProjectIcon = document.querySelector('.add-project-icon')
const addTaskIcon = document.querySelector('.add-task-icon')
const projectDefault = document.querySelector('#project-default')

addProjectIcon.addEventListener('click', function () {
    customElements.define("project-item", Project)
    const project = document.createElement('project-item')
    const parent = document.querySelector('.projects')
    const projectList = parent.querySelector('.task-list')
    projectList.appendChild(project)
})

addTaskIcon.addEventListener('click', function () {
    customElements.get('task-item') || customElements.define("task-item", Todo)
    const task = document.createElement('task-item')
    const parent = document.querySelector('.tasks')
    const taskList = parent.querySelector('.task-list')
    taskList.appendChild(task)
})

const itemComplete = function (item) {
    const completeIcon = item.shadowRoot.querySelector('.complete-icon')
    if (completeIcon !== null) {
        completeIcon.addEventListener('click', function (e) {
            e.stopPropagation()
            item.classList.toggle('completed')
            this.classList.toggle('checkmark-icon')
        })
    }
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

const addProject = function (project) {
    project.addEventListener('click', function () {
        const thisItem = this.shadowRoot
        if (thisItem !== null) {
            const projectName = thisItem.querySelector('span')
            const tasksHeader = document.querySelector('.tasks-header')
            tasksHeader.textContent = projectName.textContent
        } else {
            const tasksHeader = document.querySelector('.tasks-header')
            tasksHeader.textContent = project.textContent
        }
    })
}

addProject(projectDefault)


export { itemComplete, delTask, addProject }