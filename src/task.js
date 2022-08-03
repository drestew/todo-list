class Task {
    constructor(name, description = "", project = "tasks", dueDate = "no date", notes = "") {
        this.name = name
        this.description = description
        this.notes = notes
    }
}


export { Task }