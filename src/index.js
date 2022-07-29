import './style.css'
import { Project } from "./project";
import { storeProject } from './storage';

const projectBtn = document.querySelector('.projects-add')
const projectForm = document.querySelector('.project-form')
const saveNewItem = document.querySelector('.save')

const toggleForm = function () {
    projectForm.classList.toggle('hidden')
}
projectBtn.addEventListener('click', toggleForm)

saveNewItem.addEventListener('click', function () {
    const name = document.querySelector('#name').value
    const description = document.querySelector('#description').value
    const newProject = new Project(name, description)
    storeProject(newProject)
    toggleForm()
})