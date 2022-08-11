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
/* harmony export */   "Sidebar": () => (/* binding */ Sidebar),
/* harmony export */   "Todo": () => (/* binding */ Todo)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _taskMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskMenu */ "./src/taskMenu.js");



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

        const newTask = new _task__WEBPACK_IMPORTED_MODULE_0__.Task(taskName)
    }

    connectedCallback() {
        this.classList.add('list-item')
        const taskInput = document.querySelector('#new-task-input')
        taskInput.value = ''
        _taskMenu__WEBPACK_IMPORTED_MODULE_1__.taskContextMenu.bind(this)()
        _taskMenu__WEBPACK_IMPORTED_MODULE_1__.taskSidebarMenu.bind(this)()
    }
}

class Sidebar extends HTMLElement {
    constructor() {
        super()

        const shadow = this.attachShadow({ mode: "open" });

        const menu = document.createElement('div')
        const taskName = document.createElement('h2')
        const projectName = document.createElement('span')
        const close = document.createElement('div')
        close.classList.add('close-sidebar')

        const styleLink = document.createElement('link')
        styleLink.setAttribute('rel', 'stylesheet')
        styleLink.setAttribute('href', '../dist/main.css')

        menu.appendChild(taskName)
        menu.appendChild(projectName)
        menu.appendChild(close)
        shadow.appendChild(styleLink)
        shadow.appendChild(menu)
    }

    connectedCallback() {
        this.classList.add('sidebar')
        ;(0,_taskMenu__WEBPACK_IMPORTED_MODULE_1__.closeSidebar)()
    }
}



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
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ "./src/elements.js");


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
        // delTask()
    })
}

const taskSidebarMenu = function () {
    this.addEventListener('click', function () {
        const container = document.querySelector('.container')
        customElements.define('sidebar-menu', _elements__WEBPACK_IMPORTED_MODULE_0__.Sidebar)
        const sidebar = document.createElement('sidebar-menu')
        container.appendChild(sidebar)
        const taskNameEl = document.querySelector('sidebar-menu').shadowRoot.querySelector('h2')
        const taskNameContent = this.shadowRoot.querySelector('span').textContent
        taskNameEl.textContent = taskNameContent
    }
    )
}

const closeSidebar = function () {
    const container = document.querySelector('.container')
    const sidebar = document.querySelector('.sidebar')
    const close = sidebar.shadowRoot.querySelector('.close-sidebar')
    close.addEventListener('click', function () {
        const sidebar = document.querySelector('.sidebar')
        container.removeChild(sidebar)
    })
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements */ "./src/elements.js");




const projectInput = document.querySelector('#new-project-input')
const addProjectIcon = document.querySelector('.add-project-icon')
const addTaskIcon = document.querySelector('.add-task-icon')
let newItem
let completeItem
let newTask

addTaskIcon.addEventListener('click', function () {
    customElements.define("task-item", _elements__WEBPACK_IMPORTED_MODULE_2__.Todo)
    const task = document.createElement('task-item')
    const taskList = document.querySelector('.task-list')
    taskList.appendChild(task)
})

const itemComplete = function () {
    completeItem.addEventListener('click', function () {
        const thisItem = this.parentElement
        const itemParent = thisItem.parentElement
        itemParent.removeChild(thisItem)
    })
}

const delTask = function () {
    const taskListItems = document.querySelectorAll('.list-item')
    taskListItems.forEach(item => {
        const delBtn = item.shadowRoot.querySelector('.modify-item') || null
        if (delBtn !== null) {
            delBtn.addEventListener('click', function () {
                item.parentNode.removeChild(item)
            })
        }
    })
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBOEI7QUFDNkM7O0FBRTNFO0FBQ0E7QUFDQTs7QUFFQSwyQ0FBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDRCQUE0Qix1Q0FBSTtBQUNoQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMkRBQW9CO0FBQzVCLFFBQVEsMkRBQW9CO0FBQzVCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDJDQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVEsd0RBQVk7QUFDcEI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOb0M7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG9CQUFvQjtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsRUFBRTtBQUN6Qix3QkFBd0IsRUFBRTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsOENBQThDLDhDQUFPO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7O1VDcEVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05xQjtBQUNTO0FBQ2E7O0FBRTNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVDQUF1QywyQ0FBSTtBQUMzQztBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0wsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9lbGVtZW50cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFza01lbnUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi90YXNrXCI7XG5pbXBvcnQgeyB0YXNrQ29udGV4dE1lbnUsIHRhc2tTaWRlYmFyTWVudSwgY2xvc2VTaWRlYmFyIH0gZnJvbSBcIi4vdGFza01lbnVcIlxuXG5jbGFzcyBUb2RvIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIGNvbnN0IHNoYWRvdyA9IHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogXCJvcGVuXCIgfSk7XG5cbiAgICAgICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXRhc2staW5wdXQnKS52YWx1ZVxuICAgICAgICBjb25zdCBuZXdET01JdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgICAgICBjb25zdCBuZXdET01JdGVtTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWxpc3QnKVxuXG4gICAgICAgIGNvbnN0IGNvbXBsZXRlVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGNvbXBsZXRlVGFzay5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZS1pY29uJylcblxuICAgICAgICB0YXNrTGlzdC5hcHBlbmRDaGlsZChuZXdET01JdGVtKVxuICAgICAgICBuZXdET01JdGVtTGluay50ZXh0Q29udGVudCA9IHRhc2tOYW1lXG4gICAgICAgIG5ld0RPTUl0ZW1MaW5rLnNldEF0dHJpYnV0ZSgnc3RhdHVzJywgJ29wZW4nKVxuICAgICAgICBuZXdET01JdGVtLmFwcGVuZENoaWxkKGNvbXBsZXRlVGFzaylcbiAgICAgICAgbmV3RE9NSXRlbS5hcHBlbmRDaGlsZChuZXdET01JdGVtTGluaylcblxuICAgICAgICBuZXdET01JdGVtLmNsYXNzTGlzdC5hZGQoJ3Rhc2staXRlbScpXG5cbiAgICAgICAgY29uc3Qgc3R5bGVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpXG4gICAgICAgIHN0eWxlTGluay5zZXRBdHRyaWJ1dGUoJ3JlbCcsICdzdHlsZXNoZWV0JylcbiAgICAgICAgc3R5bGVMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsICcuLi9kaXN0L21haW4uY3NzJylcblxuICAgICAgICBzaGFkb3cuYXBwZW5kQ2hpbGQoc3R5bGVMaW5rKVxuICAgICAgICBzaGFkb3cuYXBwZW5kQ2hpbGQobmV3RE9NSXRlbSlcblxuICAgICAgICBjb25zdCBuZXdUYXNrID0gbmV3IFRhc2sodGFza05hbWUpXG4gICAgfVxuXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnbGlzdC1pdGVtJylcbiAgICAgICAgY29uc3QgdGFza0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy10YXNrLWlucHV0JylcbiAgICAgICAgdGFza0lucHV0LnZhbHVlID0gJydcbiAgICAgICAgdGFza0NvbnRleHRNZW51LmJpbmQodGhpcykoKVxuICAgICAgICB0YXNrU2lkZWJhck1lbnUuYmluZCh0aGlzKSgpXG4gICAgfVxufVxuXG5jbGFzcyBTaWRlYmFyIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpXG5cbiAgICAgICAgY29uc3Qgc2hhZG93ID0gdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiBcIm9wZW5cIiB9KTtcblxuICAgICAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICAgIGNvbnN0IGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgY2xvc2UuY2xhc3NMaXN0LmFkZCgnY2xvc2Utc2lkZWJhcicpXG5cbiAgICAgICAgY29uc3Qgc3R5bGVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpXG4gICAgICAgIHN0eWxlTGluay5zZXRBdHRyaWJ1dGUoJ3JlbCcsICdzdHlsZXNoZWV0JylcbiAgICAgICAgc3R5bGVMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsICcuLi9kaXN0L21haW4uY3NzJylcblxuICAgICAgICBtZW51LmFwcGVuZENoaWxkKHRhc2tOYW1lKVxuICAgICAgICBtZW51LmFwcGVuZENoaWxkKHByb2plY3ROYW1lKVxuICAgICAgICBtZW51LmFwcGVuZENoaWxkKGNsb3NlKVxuICAgICAgICBzaGFkb3cuYXBwZW5kQ2hpbGQoc3R5bGVMaW5rKVxuICAgICAgICBzaGFkb3cuYXBwZW5kQ2hpbGQobWVudSlcbiAgICB9XG5cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyJylcbiAgICAgICAgY2xvc2VTaWRlYmFyKClcbiAgICB9XG59XG5cbmV4cG9ydCB7IFRvZG8sIFNpZGViYXIgfSIsImNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGRlc2NyaXB0aW9uID0gXCJcIiwgcHJvamVjdCA9IFwidGFza3NcIiwgZHVlRGF0ZSA9IFwibm8gZGF0ZVwiLCBub3RlcyA9IFwiXCIsIGNvbXBsZXRlZCA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uXG4gICAgICAgIHRoaXMubm90ZXMgPSBub3Rlc1xuICAgIH1cbn1cblxuXG5leHBvcnQgeyBUYXNrIH0iLCJpbXBvcnQgeyBTaWRlYmFyIH0gZnJvbSBcIi4vZWxlbWVudHNcIlxuXG5jb25zdCB0YXNrQ29udGV4dE1lbnUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdjb250ZXh0bWVudScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICB0aGlzLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJ1xuICAgICAgICBjb25zdCB0YXNrSXRlbSA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCdsaScpXG5cbiAgICAgICAgY29uc3QgZGVsQnRucyA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kaWZ5LWl0ZW0nKVxuICAgICAgICBpZiAoZGVsQnRucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBzaGFkb3cgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignLm1vZGlmeS1pdGVtJykucGFyZW50Tm9kZVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZWxCdG5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgc2hhZG93LnJlbW92ZUNoaWxkKHNoYWRvdy5xdWVyeVNlbGVjdG9yKCcubW9kaWZ5LWl0ZW0nKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBjb25zdCBkZWxJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgZGVsSXRlbS50ZXh0Q29udGVudCA9ICdEZWxldGUnXG4gICAgICAgIGRlbEl0ZW0uY2xhc3NMaXN0LmFkZCgnbWVudS1kZWwtaXRlbScpXG5cbiAgICAgICAgbWVudS5hcHBlbmRDaGlsZChkZWxJdGVtKVxuICAgICAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ21vZGlmeS1pdGVtJylcblxuICAgICAgICBjb25zdCByZWN0ID0gZS50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgY29uc3QgeCA9IGUuY2xpZW50WCAtIHJlY3QubGVmdFxuICAgICAgICBjb25zdCB5ID0gZS5jbGllbnRZIC0gcmVjdC50b3BcblxuICAgICAgICBjb25zdCBtZW51U3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpXG4gICAgICAgIG1lbnVTdHlsZS50ZXh0Q29udGVudCA9IGBcbiAgICAgICAgICAgIC5tb2RpZnktaXRlbSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogJHt5fXB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6ICR7eH1weDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMC41cmVtO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGhpZGRlbjtcbiAgICAgICAgICAgIH1gXG5cbiAgICAgICAgbWVudS5hcHBlbmRDaGlsZChtZW51U3R5bGUpXG4gICAgICAgIHRhc2tJdGVtLnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQobWVudSlcbiAgICAgICAgLy8gZGVsVGFzaygpXG4gICAgfSlcbn1cblxuY29uc3QgdGFza1NpZGViYXJNZW51ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKVxuICAgICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUoJ3NpZGViYXItbWVudScsIFNpZGViYXIpXG4gICAgICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzaWRlYmFyLW1lbnUnKVxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc2lkZWJhcilcbiAgICAgICAgY29uc3QgdGFza05hbWVFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NpZGViYXItbWVudScpLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignaDInKVxuICAgICAgICBjb25zdCB0YXNrTmFtZUNvbnRlbnQgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3Rvcignc3BhbicpLnRleHRDb250ZW50XG4gICAgICAgIHRhc2tOYW1lRWwudGV4dENvbnRlbnQgPSB0YXNrTmFtZUNvbnRlbnRcbiAgICB9XG4gICAgKVxufVxuXG5jb25zdCBjbG9zZVNpZGViYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpXG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJylcbiAgICBjb25zdCBjbG9zZSA9IHNpZGViYXIuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcuY2xvc2Utc2lkZWJhcicpXG4gICAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpXG4gICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChzaWRlYmFyKVxuICAgIH0pXG59XG5cbmV4cG9ydCB7IHRhc2tDb250ZXh0TWVudSwgdGFza1NpZGViYXJNZW51LCBjbG9zZVNpZGViYXIgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLnNjc3MnXG5pbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vdGFza1wiO1xuaW1wb3J0IHsgVG9kbywgU2lkZWJhciB9IGZyb20gJy4vZWxlbWVudHMnO1xuXG5jb25zdCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXByb2plY3QtaW5wdXQnKVxuY29uc3QgYWRkUHJvamVjdEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QtaWNvbicpXG5jb25zdCBhZGRUYXNrSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1pY29uJylcbmxldCBuZXdJdGVtXG5sZXQgY29tcGxldGVJdGVtXG5sZXQgbmV3VGFza1xuXG5hZGRUYXNrSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUoXCJ0YXNrLWl0ZW1cIiwgVG9kbylcbiAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFzay1pdGVtJylcbiAgICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWxpc3QnKVxuICAgIHRhc2tMaXN0LmFwcGVuZENoaWxkKHRhc2spXG59KVxuXG5jb25zdCBpdGVtQ29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29tcGxldGVJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCB0aGlzSXRlbSA9IHRoaXMucGFyZW50RWxlbWVudFxuICAgICAgICBjb25zdCBpdGVtUGFyZW50ID0gdGhpc0l0ZW0ucGFyZW50RWxlbWVudFxuICAgICAgICBpdGVtUGFyZW50LnJlbW92ZUNoaWxkKHRoaXNJdGVtKVxuICAgIH0pXG59XG5cbmNvbnN0IGRlbFRhc2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgdGFza0xpc3RJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saXN0LWl0ZW0nKVxuICAgIHRhc2tMaXN0SXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgY29uc3QgZGVsQnRuID0gaXRlbS5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJy5tb2RpZnktaXRlbScpIHx8IG51bGxcbiAgICAgICAgaWYgKGRlbEJ0biAhPT0gbnVsbCkge1xuICAgICAgICAgICAgZGVsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGl0ZW0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChpdGVtKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH0pXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9