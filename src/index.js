import './style.scss'
import { Project } from "./project";
import { getProjects, storeProject } from './storage';

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
    const iconContainer = document.createElement('div')
    const editItem = document.createElement('span')
    const deleteItem = document.createElement('span')

    itemEl.classList.add('projects-list__item')
    itemName.textContent = item.name


    editItem.dataset.icon = 'clarity:edit-line'
    deleteItem.dataset.icon = 'fluent:delete-28-regular'

    iconContainer.classList.add('icon-container')
    editItem.classList.add('iconify')
    deleteItem.classList.add('iconify')

    projectList.appendChild(itemEl)
    itemEl.appendChild(itemName)
    itemEl.appendChild(iconContainer)
    iconContainer.appendChild(editItem)
    iconContainer.appendChild(deleteItem)

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


