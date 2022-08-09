import { Sidebar } from "./elements"

const taskContextMenu = function () {
    this.addEventListener('contextmenu', function () {
        e.preventDefault()
        this.style.position = 'relative'
        const taskItem = this.shadowRoot.querySelector('li')
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
            }
            
            .menu-del-item {
                color: red;
                padding: 0.2rem;
                margin: 0.1rem;
                background-color: white;
                border: none;
            }`

        menu.appendChild(menuStyle)
        taskItem.parentNode.appendChild(menu)
        delTask()
    })
}

const taskSidebarMenu = function () {
    this.addEventListener('click', function () {
        console.log(this)
        const container = document.querySelector('.container')
        customElements.define('sidebar-menu', Sidebar)
        const sidebar = document.createElement('sidebar-menu')
        container.appendChild(sidebar)
        const taskNameEl = document.querySelector('sidebar-menu').shadowRoot.querySelector('h2')
        const taskNameContent = this.shadowRoot.querySelector('span').textContent
        taskNameEl.textContent = taskNameContent
    }
    )
}

export { taskContextMenu, taskSidebarMenu }