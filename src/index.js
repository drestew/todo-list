import './style.css'
import { Project } from "./project";

const projectBtn = document.querySelector('.projects-add')
projectBtn.addEventListener('click', function () {
    const newProject = new Project('personal', 'my personal stuff')
    console.log(newProject)
})




