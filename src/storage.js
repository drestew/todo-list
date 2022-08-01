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

const removeProject = function (projectName) {
    const curProjects = JSON.parse(localStorage.getItem('projects'))

    curProjects.projectArr.forEach((item, i) => {
        if (item.name === projectName) {
            curProjects.projectArr.splice(curProjects.projectArr.indexOf(item), 1)
        }
    })
    console.log(curProjects)
    localStorage.setItem('projects', JSON.stringify(curProjects))
}

export { storeProject, getProjects, removeProject }