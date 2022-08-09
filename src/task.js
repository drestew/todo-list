class Task {
    constructor(name, description = "", project = "tasks", dueDate = "no date", notes = "", completed = false) {
        this.name = name
        this.description = description
        this.notes = notes
    }
}


export { Task }