const getProjects = function (projectArr) {
    return JSON.parse(localStorage.getItem(projectArr))
}

const storeProject = function (project) {
    if (!localStorage.getItem('projects')) {
        return localStorage.setItem('projects', JSON.stringify({ projectArr: [] }))
    } else {
        const curProjects = JSON.parse(localStorage.getItem('projects'))
        curProjects.projectArr.push(project)
        return localStorage.setItem('projects', JSON.stringify(curProjects))
    }
}

export { storeProject, getProjects }