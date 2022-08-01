import './style.scss'
import { Project } from "./project";
import { getProjects, storeProject, removeProject } from './storage';

(function () {
    const projects = getProjects('projects')
    projects.projectArr.forEach(project => {
        addToDOM(project)
    })
})()

function addToDOM(item) {
    const projectList = document.querySelector('.projects-list')
    const itemEl = document.createElement('li')
    const itemName = document.createElement('h3')
    const iconContainer = document.createElement('div')
    const editContainer = document.createElement('div')
    const deleteContainer = document.createElement('div')
    const editItem = document.createElement('span')
    const deleteItem = document.createElement('span')

    itemEl.classList.add('projects-list__item')
    itemName.textContent = item.name

    editItem.dataset.icon = 'clarity:edit-line'
    deleteItem.dataset.icon = 'fluent:delete-28-regular'

    iconContainer.classList.add('icon-container')
    editContainer.classList.add('edit-item')
    deleteContainer.classList.add('delete-item')
    editItem.classList.add('iconify')
    deleteItem.classList.add('iconify')

    projectList.appendChild(itemEl)
    itemEl.appendChild(itemName)
    itemEl.appendChild(iconContainer)
    iconContainer.appendChild(editContainer)
    iconContainer.appendChild(deleteContainer)
    editContainer.appendChild(editItem)
    deleteContainer.appendChild(deleteItem)

    return item
}

const projectBtn = document.querySelector('.projects-add-btn')
const projectForm = document.querySelector('.project-form')
const saveNewItem = document.querySelector('.save')
let deleteItem = document.querySelectorAll('.delete-item')

const toggleForm = function () {
    projectForm.classList.toggle('hidden')
}

projectBtn.addEventListener('click', toggleForm)
saveNewItem.addEventListener('click', toggleForm)
projectForm.addEventListener('submit', function () {
    this.reset()
})

saveNewItem.addEventListener('click', function () {
    const name = document.querySelector('#name').value
    const description = document.querySelector('#description').value
    const newProject = new Project(name, description)
    storeProject(newProject)
    addToDOM(newProject)
    refreshNewItem()
})

const refreshNewItem = function () {
    deleteItem = document.querySelectorAll('.delete-item')
    deleteEvent()
}

const deleteItemDOM = function () {
    const thisParent = this.parentElement.parentElement
    removeProject(this.parentElement.parentElement.textContent)
    thisParent.parentElement.removeChild(thisParent)
}

const deleteEvent = function () {
    deleteItem.forEach(item => {
        item.addEventListener('click', deleteItemDOM.bind(item))
    })
}