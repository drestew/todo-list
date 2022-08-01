const getTasks = function (taskArr) {
    return JSON.parse(localStorage.getItem(taskArr))
}

const storeTask = function (task) {
    if (!localStorage.getItem('tasks')) {
        return localStorage.setItem('tasks', JSON.stringify({ taskArr: [] }))
    } else {
        const curTasks = JSON.parse(localStorage.getItem('tasks'))
        curTasks.taskArr.push(task)
        return localStorage.setItem('tasks', JSON.stringify(curTasks))
    }
}

const removeTask = function (taskName) {
    const curTasks = JSON.parse(localStorage.getItem('tasks'))

    curTasks.taskArr.forEach((item, i) => {
        if (item.name === taskName) {
            curTasks.taskArr.splice(curTasks.taskArr.indexOf(item), 1)
        }
    })
    console.log(curTasks)
    localStorage.setItem('tasks', JSON.stringify(curTasks))
}

export { storetask, gettasks, removetask }