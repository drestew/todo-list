import './style.css'
import { Project } from "./project";
import { getProject, getProjects, storeProject } from './storage';

const projectBtn = document.querySelector('.projects-add')
const projectForm = document.querySelector('.project-form')
const saveNewItem = document.querySelector('.save')

const toggleForm = function () {
    projectForm.classList.toggle('hidden')
}
projectBtn.addEventListener('click', toggleForm)
projectForm.addEventListener('submit', function () {
    toggleForm()
    this.reset()
})

saveNewItem.addEventListener('click', function () {
    const name = document.querySelector('#name').value
    const description = document.querySelector('#description').value
    const newProject = new Project(name, description)
    storeProject(newProject)
    addToDOM(newProject)
})

const addToDOM = function (item) {
    const projectList = document.querySelector('.projects-list')
    const itemEl = document.createElement('li')
    const itemName = document.createElement('h3')

    itemName.textContent = item.name

    projectList.appendChild(itemEl)
    itemEl.appendChild(itemName)

    return item
}

const loadProject = function (projects) {
    projects.projectArr.forEach(project => {
        addToDOM(project)
    })
}

window.addEventListener('load', function () {
    const projects = getProjects('projects')
    loadProject(projects)
})


