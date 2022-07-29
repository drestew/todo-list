const getProject = function (projectName) {
    return localStorage.getItem(projectName)
}

const storeProject = function (project) {
    return localStorage.setItem(project.name, JSON.stringify(project))
}

export { storeProject, getProject }