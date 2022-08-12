import { delTask } from "./index.js"

const taskContextMenu = function () {
    this.addEventListener('contextmenu', function (e) {
        e.preventDefault()
        this.style.position = 'relative'
        const taskItem = this.shadowRoot.querySelector('li')

        const delBtns = this.shadowRoot.querySelectorAll('.modify-item')
        if (delBtns.length > 0) {
            const shadow = this.shadowRoot.querySelector('.modify-item').parentNode
            for (let i = 0; i < delBtns.length; i++) {
                shadow.removeChild(shadow.querySelector('.modify-item'))
            }
        }

        const menu = document.createElement('div')
        const delItem = document.createElement('button')
        delItem.textContent = 'Delete'
        delItem.classList.add('menu-del-item')

        menu.appendChild(delItem)
        menu.classList.add('modify-item')

        const rect = e.target.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        const menuStyle = document.createElement('style')
        menuStyle.textContent = `
            .modify-item {
                position: absolute;
                top: ${y}px;
                left: ${x}px;
                background-color: white;
                border-radius: 0.5rem;
                padding: 0.5rem;
                border: solid 1px black;
                display: hidden;
            }`

        menu.appendChild(menuStyle)
        taskItem.parentNode.appendChild(menu)
        delTask()
    })
}

const taskSidebarMenu = function () {
    const sidebar = document.querySelector('.sidebar')

    this.addEventListener('click', function (e) {
        sidebar.classList.remove('hidden')
        const taskName = sidebar.querySelector('.sidebar-header')
        taskName.textContent = this.shadowRoot.querySelector('.task-item').textContent
        const close = document.querySelector('.close-sidebar')
        close.addEventListener('click', closeSidebar)
    })
}

const closeSidebar = function () {
    const sidebar = document.querySelector('.sidebar')
    sidebar.classList.add('hidden')
}

export { taskContextMenu, taskSidebarMenu, closeSidebar }