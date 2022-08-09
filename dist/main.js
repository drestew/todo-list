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
        const newTask = new _task__WEBPACK_IMPORTED_MODULE_0__.Task(taskName)
        newDOMItemLink.textContent = newTask.name
        newDOMItemLink.setAttribute('status', 'open')
        newDOMItem.appendChild(completeTask)
        newDOMItem.appendChild(newDOMItemLink)

        newDOMItem.classList.add('task-item')

        const styleLink = document.createElement('link')
        styleLink.setAttribute('rel', 'stylesheet')
        styleLink.setAttribute('href', '../dist/main.css')

        shadow.appendChild(styleLink)
        shadow.appendChild(newDOMItem)
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

        menu.appendChild(taskName)
        menu.appendChild(projectName)
        shadow.appendChild(menu)
    }

    connectedCallback() {
        this.classList.add('sidebar')
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
/* harmony export */   "taskContextMenu": () => (/* binding */ taskContextMenu),
/* harmony export */   "taskSidebarMenu": () => (/* binding */ taskSidebarMenu)
/* harmony export */ });
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ "./src/elements.js");


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
        customElements.define('sidebar-menu', _elements__WEBPACK_IMPORTED_MODULE_0__.Sidebar)
        const sidebar = document.createElement('sidebar-menu')
        container.appendChild(sidebar)
        const taskNameEl = document.querySelector('sidebar-menu').shadowRoot.querySelector('h2')
        const taskNameContent = this.shadowRoot.querySelector('span').textContent
        taskNameEl.textContent = taskNameContent
    }
    )
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBOEI7QUFDK0I7O0FBRTdEO0FBQ0E7QUFDQTs7QUFFQSwyQ0FBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDRCQUE0Qix1Q0FBSTtBQUNoQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwyREFBb0I7QUFDNUIsUUFBUSwyREFBb0I7QUFDNUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsMkNBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05vQzs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLEVBQUU7QUFDekIsd0JBQXdCLEVBQUU7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4Qyw4Q0FBTztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQzFEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOcUI7QUFDUztBQUNhOztBQUUzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1Q0FBdUMsMkNBQUk7QUFDM0M7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuc2Nzcz9iYzNiIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9lbGVtZW50cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFza01lbnUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi90YXNrXCI7XG5pbXBvcnQgeyB0YXNrQ29udGV4dE1lbnUsIHRhc2tTaWRlYmFyTWVudSB9IGZyb20gXCIuL3Rhc2tNZW51XCJcblxuY2xhc3MgVG9kbyBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICBjb25zdCBzaGFkb3cgPSB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6IFwib3BlblwiIH0pO1xuXG4gICAgICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy10YXNrLWlucHV0JykudmFsdWVcbiAgICAgICAgY29uc3QgbmV3RE9NSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgICAgY29uc3QgbmV3RE9NSXRlbUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgICAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1saXN0JylcblxuICAgICAgICBjb25zdCBjb21wbGV0ZVRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBjb21wbGV0ZVRhc2suY2xhc3NMaXN0LmFkZCgnY29tcGxldGUtaWNvbicpXG5cbiAgICAgICAgdGFza0xpc3QuYXBwZW5kQ2hpbGQobmV3RE9NSXRlbSlcbiAgICAgICAgY29uc3QgbmV3VGFzayA9IG5ldyBUYXNrKHRhc2tOYW1lKVxuICAgICAgICBuZXdET01JdGVtTGluay50ZXh0Q29udGVudCA9IG5ld1Rhc2submFtZVxuICAgICAgICBuZXdET01JdGVtTGluay5zZXRBdHRyaWJ1dGUoJ3N0YXR1cycsICdvcGVuJylcbiAgICAgICAgbmV3RE9NSXRlbS5hcHBlbmRDaGlsZChjb21wbGV0ZVRhc2spXG4gICAgICAgIG5ld0RPTUl0ZW0uYXBwZW5kQ2hpbGQobmV3RE9NSXRlbUxpbmspXG5cbiAgICAgICAgbmV3RE9NSXRlbS5jbGFzc0xpc3QuYWRkKCd0YXNrLWl0ZW0nKVxuXG4gICAgICAgIGNvbnN0IHN0eWxlTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuICAgICAgICBzdHlsZUxpbmsuc2V0QXR0cmlidXRlKCdyZWwnLCAnc3R5bGVzaGVldCcpXG4gICAgICAgIHN0eWxlTGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnLi4vZGlzdC9tYWluLmNzcycpXG5cbiAgICAgICAgc2hhZG93LmFwcGVuZENoaWxkKHN0eWxlTGluaylcbiAgICAgICAgc2hhZG93LmFwcGVuZENoaWxkKG5ld0RPTUl0ZW0pXG4gICAgfVxuXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnbGlzdC1pdGVtJylcbiAgICAgICAgY29uc3QgdGFza0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy10YXNrLWlucHV0JylcbiAgICAgICAgdGFza0lucHV0LnZhbHVlID0gJydcbiAgICAgICAgdGFza0NvbnRleHRNZW51LmJpbmQodGhpcykoKVxuICAgICAgICB0YXNrU2lkZWJhck1lbnUuYmluZCh0aGlzKSgpXG4gICAgfVxufVxuXG5jbGFzcyBTaWRlYmFyIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpXG5cbiAgICAgICAgY29uc3Qgc2hhZG93ID0gdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiBcIm9wZW5cIiB9KTtcblxuICAgICAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG5cbiAgICAgICAgbWVudS5hcHBlbmRDaGlsZCh0YXNrTmFtZSlcbiAgICAgICAgbWVudS5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSlcbiAgICAgICAgc2hhZG93LmFwcGVuZENoaWxkKG1lbnUpXG4gICAgfVxuXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnc2lkZWJhcicpXG4gICAgfVxufVxuXG5leHBvcnQgeyBUb2RvLCBTaWRlYmFyIH0iLCJjbGFzcyBUYXNrIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBkZXNjcmlwdGlvbiA9IFwiXCIsIHByb2plY3QgPSBcInRhc2tzXCIsIGR1ZURhdGUgPSBcIm5vIGRhdGVcIiwgbm90ZXMgPSBcIlwiLCBjb21wbGV0ZWQgPSBmYWxzZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxuICAgICAgICB0aGlzLm5vdGVzID0gbm90ZXNcbiAgICB9XG59XG5cblxuZXhwb3J0IHsgVGFzayB9IiwiaW1wb3J0IHsgU2lkZWJhciB9IGZyb20gXCIuL2VsZW1lbnRzXCJcblxuY29uc3QgdGFza0NvbnRleHRNZW51ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignY29udGV4dG1lbnUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICB0aGlzLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJ1xuICAgICAgICBjb25zdCB0YXNrSXRlbSA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCdsaScpXG4gICAgICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBjb25zdCBkZWxJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgZGVsSXRlbS50ZXh0Q29udGVudCA9ICdEZWxldGUnXG4gICAgICAgIGRlbEl0ZW0uY2xhc3NMaXN0LmFkZCgnbWVudS1kZWwtaXRlbScpXG5cbiAgICAgICAgbWVudS5hcHBlbmRDaGlsZChkZWxJdGVtKVxuICAgICAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ21vZGlmeS1pdGVtJylcblxuICAgICAgICBjb25zdCByZWN0ID0gZS50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgY29uc3QgeCA9IGUuY2xpZW50WCAtIHJlY3QubGVmdFxuICAgICAgICBjb25zdCB5ID0gZS5jbGllbnRZIC0gcmVjdC50b3BcblxuICAgICAgICBjb25zdCBtZW51U3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpXG4gICAgICAgIG1lbnVTdHlsZS50ZXh0Q29udGVudCA9IGBcbiAgICAgICAgICAgIC5tb2RpZnktaXRlbSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogJHt5fXB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6ICR7eH1weDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMC41cmVtO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGhpZGRlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLm1lbnUtZGVsLWl0ZW0ge1xuICAgICAgICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMC4ycmVtO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMC4xcmVtO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIH1gXG5cbiAgICAgICAgbWVudS5hcHBlbmRDaGlsZChtZW51U3R5bGUpXG4gICAgICAgIHRhc2tJdGVtLnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQobWVudSlcbiAgICAgICAgZGVsVGFzaygpXG4gICAgfSlcbn1cblxuY29uc3QgdGFza1NpZGViYXJNZW51ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMpXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKVxuICAgICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUoJ3NpZGViYXItbWVudScsIFNpZGViYXIpXG4gICAgICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzaWRlYmFyLW1lbnUnKVxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc2lkZWJhcilcbiAgICAgICAgY29uc3QgdGFza05hbWVFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NpZGViYXItbWVudScpLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignaDInKVxuICAgICAgICBjb25zdCB0YXNrTmFtZUNvbnRlbnQgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3Rvcignc3BhbicpLnRleHRDb250ZW50XG4gICAgICAgIHRhc2tOYW1lRWwudGV4dENvbnRlbnQgPSB0YXNrTmFtZUNvbnRlbnRcbiAgICB9XG4gICAgKVxufVxuXG5leHBvcnQgeyB0YXNrQ29udGV4dE1lbnUsIHRhc2tTaWRlYmFyTWVudSB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGUuc2NzcydcbmltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi90YXNrXCI7XG5pbXBvcnQgeyBUb2RvLCBTaWRlYmFyIH0gZnJvbSAnLi9lbGVtZW50cyc7XG5cbmNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctcHJvamVjdC1pbnB1dCcpXG5jb25zdCBhZGRQcm9qZWN0SWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdC1pY29uJylcbmNvbnN0IGFkZFRhc2tJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLWljb24nKVxubGV0IG5ld0l0ZW1cbmxldCBjb21wbGV0ZUl0ZW1cbmxldCBuZXdUYXNrXG5cbmFkZFRhc2tJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZShcInRhc2staXRlbVwiLCBUb2RvKVxuICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YXNrLWl0ZW0nKVxuICAgIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stbGlzdCcpXG4gICAgdGFza0xpc3QuYXBwZW5kQ2hpbGQodGFzaylcbn0pXG5cbmNvbnN0IGl0ZW1Db21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb21wbGV0ZUl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IHRoaXNJdGVtID0gdGhpcy5wYXJlbnRFbGVtZW50XG4gICAgICAgIGNvbnN0IGl0ZW1QYXJlbnQgPSB0aGlzSXRlbS5wYXJlbnRFbGVtZW50XG4gICAgICAgIGl0ZW1QYXJlbnQucmVtb3ZlQ2hpbGQodGhpc0l0ZW0pXG4gICAgfSlcbn1cblxuY29uc3QgZGVsVGFzayA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCB0YXNrTGlzdEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpc3QtaXRlbScpXG4gICAgdGFza0xpc3RJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBjb25zdCBkZWxCdG4gPSBpdGVtLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignLm1vZGlmeS1pdGVtJykgfHwgbnVsbFxuICAgICAgICBpZiAoZGVsQnRuICE9PSBudWxsKSB7XG4gICAgICAgICAgICBkZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGl0ZW0pXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfSlcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=