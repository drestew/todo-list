class Task {
    constructor(name, description, project, dueDate = "no date", notes) {
        this.name = name
        this.description = description
        this.project = project
        this.notes = notes
    }
}


export { Task }