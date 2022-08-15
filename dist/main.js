/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/elements.js":
/*!*************************!*\
  !*** ./src/elements.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project),
/* harmony export */   "Todo": () => (/* binding */ Todo)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _taskMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskMenu */ "./src/taskMenu.js");




class Todo extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });

        const taskName = document.querySelector('#new-task-input').value
        const newDOMItem = document.createElement('li')
        const newDOMItemLink = document.createElement('span')
        const taskList = document.querySelector('.task-list')

        const completeTask = document.createElement('div')
        completeTask.classList.add('complete-icon')

        taskList.appendChild(newDOMItem)
        newDOMItemLink.textContent = taskName
        newDOMItemLink.setAttribute('status', 'open')
        newDOMItem.appendChild(completeTask)
        newDOMItem.appendChild(newDOMItemLink)

        newDOMItem.classList.add('task-item')

        const styleLink = document.createElement('link')
        styleLink.setAttribute('rel', 'stylesheet')
        styleLink.setAttribute('href', '../dist/main.css')

        shadow.appendChild(styleLink)
        shadow.appendChild(newDOMItem)

        const newTask = new _task__WEBPACK_IMPORTED_MODULE_1__.Task(taskName)
    }

    connectedCallback() {
        this.classList.add('list-item')
        const taskInput = document.querySelector('#new-task-input')
        taskInput.value = ''
        ;(0,_taskMenu__WEBPACK_IMPORTED_MODULE_2__.taskContextMenu)(this)
        ;(0,_taskMenu__WEBPACK_IMPORTED_MODULE_2__.taskSidebarMenu)(this)
        ;(0,_index__WEBPACK_IMPORTED_MODULE_0__.itemComplete)(this)
    }
}

class Project extends Todo {
    constructor() {
        super()

        const thisItem = this.shadowRoot
        const projectName = document.querySelector('#new-project-input').value
        const newDOMItemLink = thisItem.querySelector('span')
        newDOMItemLink.textContent = projectName
        const completeIcon = thisItem.querySelector('.complete-icon')
        completeIcon.parentNode.removeChild(completeIcon)

    }

    connectedCallback() {
        this.classList.add('list-item')
        const projectInput = document.querySelector('#new-project-input')
        projectInput.value = ''

        ;(0,_index__WEBPACK_IMPORTED_MODULE_0__.addProject)(this)
    }
}



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProject": () => (/* binding */ addProject),
/* harmony export */   "delTask": () => (/* binding */ delTask),
/* harmony export */   "itemComplete": () => (/* binding */ itemComplete)
/* harmony export */ });
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements */ "./src/elements.js");



const projectInput = document.querySelector('#new-project-input')
const addProjectIcon = document.querySelector('.add-project-icon')
const addTaskIcon = document.querySelector('.add-task-icon')
const projectDefault = document.querySelector('#project-default')

addProjectIcon.addEventListener('click', function () {
    customElements.define("project-item", _elements__WEBPACK_IMPORTED_MODULE_1__.Project)
    const project = document.createElement('project-item')
    const parent = document.querySelector('.projects')
    const projectList = parent.querySelector('.task-list')
    projectList.appendChild(project)
})

addTaskIcon.addEventListener('click', function () {
    customElements.get('task-item') || customElements.define("task-item", _elements__WEBPACK_IMPORTED_MODULE_1__.Todo)
    const task = document.createElement('task-item')
    const parent = document.querySelector('.tasks')
    const taskList = parent.querySelector('.task-list')
    taskList.appendChild(task)
})

const itemComplete = function (item) {
    const completeIcon = item.shadowRoot.querySelector('.complete-icon')
    if (completeIcon !== null) {
        completeIcon.addEventListener('click', function (e) {
            e.stopPropagation()
            item.classList.toggle('completed')
            this.classList.toggle('checkmark-icon')
        })
    }
}

const delTask = function () {
    const taskListItems = document.querySelectorAll('.list-item')
    taskListItems.forEach(item => {
        const delBtn = item.shadowRoot.querySelector('.modify-item') || null
        if (delBtn !== null) {
            delBtn.addEventListener('click', function () {
                item.parentNode.removeChild(item)
                const sidebar = document.querySelector('.sidebar')
                sidebar.classList.add('hidden')
            })
        }
    })
}

const addProject = function (project) {
    project.addEventListener('click', function () {
        const thisItem = this.shadowRoot
        if (thisItem !== null) {
            const projectName = thisItem.querySelector('span')
            const tasksHeader = document.querySelector('.tasks-header')
            tasksHeader.textContent = projectName.textContent
        } else {
            const tasksHeader = document.querySelector('.tasks-header')
            tasksHeader.textContent = project.textContent
        }
    })
}

addProject(projectDefault)




/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": () => (/* binding */ Task)
/* harmony export */ });
class Task {
    constructor(name, description = "", project = "tasks", dueDate = "no date", notes = "", completed = false) {
        this.name = name
        this.description = description
        this.notes = notes
    }
}




/***/ }),

/***/ "./src/taskMenu.js":
/*!*************************!*\
  !*** ./src/taskMenu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeSidebar": () => (/* binding */ closeSidebar),
/* harmony export */   "taskContextMenu": () => (/* binding */ taskContextMenu),
/* harmony export */   "taskSidebarMenu": () => (/* binding */ taskSidebarMenu)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");


const taskContextMenu = function (item) {
    item.addEventListener('contextmenu', function (e) {
        e.preventDefault()
        item.style.position = 'relative'
        const taskItem = item.shadowRoot.querySelector('li')

        const delBtns = item.shadowRoot.querySelectorAll('.modify-item')
        if (delBtns.length > 0) {
            const shadow = item.shadowRoot.querySelector('.modify-item').parentNode
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
        ;(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.delTask)()
    })
}

const taskSidebarMenu = function (item) {
    const sidebar = document.querySelector('.sidebar')

    item.addEventListener('click', function (e) {
        sidebar.classList.remove('hidden')
        const taskName = sidebar.querySelector('.sidebar-header')
        taskName.textContent = item.shadowRoot.querySelector('.task-item').textContent
        const close = document.querySelector('.close-sidebar')
        close.addEventListener('click', closeSidebar)
    })
}

const closeSidebar = function () {
    const sidebar = document.querySelector('.sidebar')
    sidebar.classList.add('hidden')
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQW1EO0FBQ3JCO0FBQytCOztBQUU3RDtBQUNBO0FBQ0E7O0FBRUEsMkNBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw0QkFBNEIsdUNBQUk7QUFDaEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDJEQUFlO0FBQ3ZCLFFBQVEsMkRBQWU7QUFDdkIsUUFBUSxxREFBWTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSxtREFBVTtBQUNsQjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xFcUI7QUFDc0I7O0FBRTNDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMENBQTBDLDhDQUFPO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLDBFQUEwRSwyQ0FBSTtBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQy9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOb0M7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG9CQUFvQjtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsRUFBRTtBQUN6Qix3QkFBd0IsRUFBRTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0EsUUFBUSxtREFBTztBQUNmLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7VUM5REE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrTWVudS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IHsgaXRlbUNvbXBsZXRlLCBhZGRQcm9qZWN0IH0gZnJvbSBcIi4vaW5kZXhcIjtcbmltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi90YXNrXCI7XG5pbXBvcnQgeyB0YXNrQ29udGV4dE1lbnUsIHRhc2tTaWRlYmFyTWVudSB9IGZyb20gXCIuL3Rhc2tNZW51XCJcblxuY2xhc3MgVG9kbyBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICBjb25zdCBzaGFkb3cgPSB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6IFwib3BlblwiIH0pO1xuXG4gICAgICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy10YXNrLWlucHV0JykudmFsdWVcbiAgICAgICAgY29uc3QgbmV3RE9NSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgICAgY29uc3QgbmV3RE9NSXRlbUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgICAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1saXN0JylcblxuICAgICAgICBjb25zdCBjb21wbGV0ZVRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBjb21wbGV0ZVRhc2suY2xhc3NMaXN0LmFkZCgnY29tcGxldGUtaWNvbicpXG5cbiAgICAgICAgdGFza0xpc3QuYXBwZW5kQ2hpbGQobmV3RE9NSXRlbSlcbiAgICAgICAgbmV3RE9NSXRlbUxpbmsudGV4dENvbnRlbnQgPSB0YXNrTmFtZVxuICAgICAgICBuZXdET01JdGVtTGluay5zZXRBdHRyaWJ1dGUoJ3N0YXR1cycsICdvcGVuJylcbiAgICAgICAgbmV3RE9NSXRlbS5hcHBlbmRDaGlsZChjb21wbGV0ZVRhc2spXG4gICAgICAgIG5ld0RPTUl0ZW0uYXBwZW5kQ2hpbGQobmV3RE9NSXRlbUxpbmspXG5cbiAgICAgICAgbmV3RE9NSXRlbS5jbGFzc0xpc3QuYWRkKCd0YXNrLWl0ZW0nKVxuXG4gICAgICAgIGNvbnN0IHN0eWxlTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuICAgICAgICBzdHlsZUxpbmsuc2V0QXR0cmlidXRlKCdyZWwnLCAnc3R5bGVzaGVldCcpXG4gICAgICAgIHN0eWxlTGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnLi4vZGlzdC9tYWluLmNzcycpXG5cbiAgICAgICAgc2hhZG93LmFwcGVuZENoaWxkKHN0eWxlTGluaylcbiAgICAgICAgc2hhZG93LmFwcGVuZENoaWxkKG5ld0RPTUl0ZW0pXG5cbiAgICAgICAgY29uc3QgbmV3VGFzayA9IG5ldyBUYXNrKHRhc2tOYW1lKVxuICAgIH1cblxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2xpc3QtaXRlbScpXG4gICAgICAgIGNvbnN0IHRhc2tJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctdGFzay1pbnB1dCcpXG4gICAgICAgIHRhc2tJbnB1dC52YWx1ZSA9ICcnXG4gICAgICAgIHRhc2tDb250ZXh0TWVudSh0aGlzKVxuICAgICAgICB0YXNrU2lkZWJhck1lbnUodGhpcylcbiAgICAgICAgaXRlbUNvbXBsZXRlKHRoaXMpXG4gICAgfVxufVxuXG5jbGFzcyBQcm9qZWN0IGV4dGVuZHMgVG9kbyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKClcblxuICAgICAgICBjb25zdCB0aGlzSXRlbSA9IHRoaXMuc2hhZG93Um9vdFxuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctcHJvamVjdC1pbnB1dCcpLnZhbHVlXG4gICAgICAgIGNvbnN0IG5ld0RPTUl0ZW1MaW5rID0gdGhpc0l0ZW0ucXVlcnlTZWxlY3Rvcignc3BhbicpXG4gICAgICAgIG5ld0RPTUl0ZW1MaW5rLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWVcbiAgICAgICAgY29uc3QgY29tcGxldGVJY29uID0gdGhpc0l0ZW0ucXVlcnlTZWxlY3RvcignLmNvbXBsZXRlLWljb24nKVxuICAgICAgICBjb21wbGV0ZUljb24ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjb21wbGV0ZUljb24pXG5cbiAgICB9XG5cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdsaXN0LWl0ZW0nKVxuICAgICAgICBjb25zdCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXByb2plY3QtaW5wdXQnKVxuICAgICAgICBwcm9qZWN0SW5wdXQudmFsdWUgPSAnJ1xuXG4gICAgICAgIGFkZFByb2plY3QodGhpcylcbiAgICB9XG59XG5cbmV4cG9ydCB7IFRvZG8sIFByb2plY3QgfSIsImltcG9ydCAnLi9zdHlsZS5zY3NzJ1xuaW1wb3J0IHsgUHJvamVjdCwgVG9kbyB9IGZyb20gJy4vZWxlbWVudHMnO1xuXG5jb25zdCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXByb2plY3QtaW5wdXQnKVxuY29uc3QgYWRkUHJvamVjdEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QtaWNvbicpXG5jb25zdCBhZGRUYXNrSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1pY29uJylcbmNvbnN0IHByb2plY3REZWZhdWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtZGVmYXVsdCcpXG5cbmFkZFByb2plY3RJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZShcInByb2plY3QtaXRlbVwiLCBQcm9qZWN0KVxuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwcm9qZWN0LWl0ZW0nKVxuICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpXG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBwYXJlbnQucXVlcnlTZWxlY3RvcignLnRhc2stbGlzdCcpXG4gICAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQocHJvamVjdClcbn0pXG5cbmFkZFRhc2tJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGN1c3RvbUVsZW1lbnRzLmdldCgndGFzay1pdGVtJykgfHwgY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwidGFzay1pdGVtXCIsIFRvZG8pXG4gICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rhc2staXRlbScpXG4gICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJylcbiAgICBjb25zdCB0YXNrTGlzdCA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1saXN0JylcbiAgICB0YXNrTGlzdC5hcHBlbmRDaGlsZCh0YXNrKVxufSlcblxuY29uc3QgaXRlbUNvbXBsZXRlID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICBjb25zdCBjb21wbGV0ZUljb24gPSBpdGVtLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignLmNvbXBsZXRlLWljb24nKVxuICAgIGlmIChjb21wbGV0ZUljb24gIT09IG51bGwpIHtcbiAgICAgICAgY29tcGxldGVJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnRvZ2dsZSgnY29tcGxldGVkJylcbiAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZSgnY2hlY2ttYXJrLWljb24nKVxuICAgICAgICB9KVxuICAgIH1cbn1cblxuY29uc3QgZGVsVGFzayA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCB0YXNrTGlzdEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpc3QtaXRlbScpXG4gICAgdGFza0xpc3RJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBjb25zdCBkZWxCdG4gPSBpdGVtLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignLm1vZGlmeS1pdGVtJykgfHwgbnVsbFxuICAgICAgICBpZiAoZGVsQnRuICE9PSBudWxsKSB7XG4gICAgICAgICAgICBkZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGl0ZW0pXG4gICAgICAgICAgICAgICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJylcbiAgICAgICAgICAgICAgICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfSlcbn1cblxuY29uc3QgYWRkUHJvamVjdCA9IGZ1bmN0aW9uIChwcm9qZWN0KSB7XG4gICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgdGhpc0l0ZW0gPSB0aGlzLnNoYWRvd1Jvb3RcbiAgICAgICAgaWYgKHRoaXNJdGVtICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IHRoaXNJdGVtLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKVxuICAgICAgICAgICAgY29uc3QgdGFza3NIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MtaGVhZGVyJylcbiAgICAgICAgICAgIHRhc2tzSGVhZGVyLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWUudGV4dENvbnRlbnRcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tzSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzLWhlYWRlcicpXG4gICAgICAgICAgICB0YXNrc0hlYWRlci50ZXh0Q29udGVudCA9IHByb2plY3QudGV4dENvbnRlbnRcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmFkZFByb2plY3QocHJvamVjdERlZmF1bHQpXG5cblxuZXhwb3J0IHsgaXRlbUNvbXBsZXRlLCBkZWxUYXNrLCBhZGRQcm9qZWN0IH0iLCJjbGFzcyBUYXNrIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBkZXNjcmlwdGlvbiA9IFwiXCIsIHByb2plY3QgPSBcInRhc2tzXCIsIGR1ZURhdGUgPSBcIm5vIGRhdGVcIiwgbm90ZXMgPSBcIlwiLCBjb21wbGV0ZWQgPSBmYWxzZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxuICAgICAgICB0aGlzLm5vdGVzID0gbm90ZXNcbiAgICB9XG59XG5cblxuZXhwb3J0IHsgVGFzayB9IiwiaW1wb3J0IHsgZGVsVGFzayB9IGZyb20gXCIuL2luZGV4LmpzXCJcblxuY29uc3QgdGFza0NvbnRleHRNZW51ID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRleHRtZW51JywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGl0ZW0uc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnXG4gICAgICAgIGNvbnN0IHRhc2tJdGVtID0gaXRlbS5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJ2xpJylcblxuICAgICAgICBjb25zdCBkZWxCdG5zID0gaXRlbS5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RpZnktaXRlbScpXG4gICAgICAgIGlmIChkZWxCdG5zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHNoYWRvdyA9IGl0ZW0uc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcubW9kaWZ5LWl0ZW0nKS5wYXJlbnROb2RlXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRlbEJ0bnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBzaGFkb3cucmVtb3ZlQ2hpbGQoc2hhZG93LnF1ZXJ5U2VsZWN0b3IoJy5tb2RpZnktaXRlbScpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGNvbnN0IGRlbEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICBkZWxJdGVtLnRleHRDb250ZW50ID0gJ0RlbGV0ZSdcbiAgICAgICAgZGVsSXRlbS5jbGFzc0xpc3QuYWRkKCdtZW51LWRlbC1pdGVtJylcblxuICAgICAgICBtZW51LmFwcGVuZENoaWxkKGRlbEl0ZW0pXG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnbW9kaWZ5LWl0ZW0nKVxuXG4gICAgICAgIGNvbnN0IHJlY3QgPSBlLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICBjb25zdCB4ID0gZS5jbGllbnRYIC0gcmVjdC5sZWZ0XG4gICAgICAgIGNvbnN0IHkgPSBlLmNsaWVudFkgLSByZWN0LnRvcFxuXG4gICAgICAgIGNvbnN0IG1lbnVTdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJylcbiAgICAgICAgbWVudVN0eWxlLnRleHRDb250ZW50ID0gYFxuICAgICAgICAgICAgLm1vZGlmeS1pdGVtIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiAke3l9cHg7XG4gICAgICAgICAgICAgICAgbGVmdDogJHt4fXB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaGlkZGVuO1xuICAgICAgICAgICAgfWBcblxuICAgICAgICBtZW51LmFwcGVuZENoaWxkKG1lbnVTdHlsZSlcbiAgICAgICAgdGFza0l0ZW0ucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChtZW51KVxuICAgICAgICBkZWxUYXNrKClcbiAgICB9KVxufVxuXG5jb25zdCB0YXNrU2lkZWJhck1lbnUgPSBmdW5jdGlvbiAoaXRlbSkge1xuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpXG5cbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgc2lkZWJhci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICAgICAgICBjb25zdCB0YXNrTmFtZSA9IHNpZGViYXIucXVlcnlTZWxlY3RvcignLnNpZGViYXItaGVhZGVyJylcbiAgICAgICAgdGFza05hbWUudGV4dENvbnRlbnQgPSBpdGVtLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignLnRhc2staXRlbScpLnRleHRDb250ZW50XG4gICAgICAgIGNvbnN0IGNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLXNpZGViYXInKVxuICAgICAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlU2lkZWJhcilcbiAgICB9KVxufVxuXG5jb25zdCBjbG9zZVNpZGViYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJylcbiAgICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG59XG5cbmV4cG9ydCB7IHRhc2tDb250ZXh0TWVudSwgdGFza1NpZGViYXJNZW51LCBjbG9zZVNpZGViYXIgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=