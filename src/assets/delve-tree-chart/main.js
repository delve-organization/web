(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./projects/delve-tree-chart-api/src/lib/delve-tree-chart-api.constants.ts":
/*!*********************************************************************************!*\
  !*** ./projects/delve-tree-chart-api/src/lib/delve-tree-chart-api.constants.ts ***!
  \*********************************************************************************/
/*! exports provided: APP_LOADED_KEY, NODE_DATA_INPUT_KEY, USER_NODE_RELATION_DATA_INPUT_KEY, USER_NODE_RELATION_DATA_CHANGE_KEY, SELECTED_NODE_DATA_KEY, APP_MODE_KEY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_LOADED_KEY", function() { return APP_LOADED_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NODE_DATA_INPUT_KEY", function() { return NODE_DATA_INPUT_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_NODE_RELATION_DATA_INPUT_KEY", function() { return USER_NODE_RELATION_DATA_INPUT_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_NODE_RELATION_DATA_CHANGE_KEY", function() { return USER_NODE_RELATION_DATA_CHANGE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECTED_NODE_DATA_KEY", function() { return SELECTED_NODE_DATA_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_MODE_KEY", function() { return APP_MODE_KEY; });
var APP_LOADED_KEY = { key: 'APP_LOADED_KEY' };
var NODE_DATA_INPUT_KEY = { key: 'NODE_DATA_INPUT_KEY' };
var USER_NODE_RELATION_DATA_INPUT_KEY = { key: 'USER_NODE_RELATION_DATA_INPUT_KEY' };
var USER_NODE_RELATION_DATA_CHANGE_KEY = { key: 'USER_NODE_RELATION_DATA_CHANGE_KEY' };
var SELECTED_NODE_DATA_KEY = { key: 'SELECTED_NODE_DATA_KEY' };
var APP_MODE_KEY = { key: 'APP_MODE_KEY' };


/***/ }),

/***/ "./projects/delve-tree-chart-api/src/lib/delve-tree-chart-api.types.ts":
/*!*****************************************************************************!*\
  !*** ./projects/delve-tree-chart-api/src/lib/delve-tree-chart-api.types.ts ***!
  \*****************************************************************************/
/*! exports provided: AppMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppMode", function() { return AppMode; });
var AppMode = /** @class */ (function () {
    function AppMode() {
    }
    AppMode.NORMAL = 'NORMAL';
    AppMode.SELECTOR = 'SELECTOR';
    return AppMode;
}());



/***/ }),

/***/ "./projects/delve-tree-chart-api/src/public_api.ts":
/*!*********************************************************!*\
  !*** ./projects/delve-tree-chart-api/src/public_api.ts ***!
  \*********************************************************/
/*! exports provided: AppMode, APP_LOADED_KEY, NODE_DATA_INPUT_KEY, USER_NODE_RELATION_DATA_INPUT_KEY, USER_NODE_RELATION_DATA_CHANGE_KEY, SELECTED_NODE_DATA_KEY, APP_MODE_KEY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_delve_tree_chart_api_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/delve-tree-chart-api.types */ "./projects/delve-tree-chart-api/src/lib/delve-tree-chart-api.types.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppMode", function() { return _lib_delve_tree_chart_api_types__WEBPACK_IMPORTED_MODULE_0__["AppMode"]; });

/* harmony import */ var _lib_delve_tree_chart_api_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/delve-tree-chart-api.constants */ "./projects/delve-tree-chart-api/src/lib/delve-tree-chart-api.constants.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "APP_LOADED_KEY", function() { return _lib_delve_tree_chart_api_constants__WEBPACK_IMPORTED_MODULE_1__["APP_LOADED_KEY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NODE_DATA_INPUT_KEY", function() { return _lib_delve_tree_chart_api_constants__WEBPACK_IMPORTED_MODULE_1__["NODE_DATA_INPUT_KEY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "USER_NODE_RELATION_DATA_INPUT_KEY", function() { return _lib_delve_tree_chart_api_constants__WEBPACK_IMPORTED_MODULE_1__["USER_NODE_RELATION_DATA_INPUT_KEY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "USER_NODE_RELATION_DATA_CHANGE_KEY", function() { return _lib_delve_tree_chart_api_constants__WEBPACK_IMPORTED_MODULE_1__["USER_NODE_RELATION_DATA_CHANGE_KEY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SELECTED_NODE_DATA_KEY", function() { return _lib_delve_tree_chart_api_constants__WEBPACK_IMPORTED_MODULE_1__["SELECTED_NODE_DATA_KEY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "APP_MODE_KEY", function() { return _lib_delve_tree_chart_api_constants__WEBPACK_IMPORTED_MODULE_1__["APP_MODE_KEY"]; });

/*
 * Public API Surface of delve-tree-chart-api
 */




/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<pi-iframe #piIframe>\n    <div class=\"tree-container\">\n        <delve-tree *ngIf=\"node && relations && appMode\" class=\"tree-view\" [piIframe]=\"piIframe\" [nodeData]=\"node\" [relationsData]=\"relations\" [appMode]=\"appMode\"></delve-tree>\n    </div>\n</pi-iframe>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tree-container {\n  padding: 16px;\n  text-align: center;\n  min-height: -webkit-fit-content;\n  min-height: -moz-fit-content;\n  min-height: fit-content;\n  height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUzpcXGRldlxcYW5ndWxhclxcZGVsdmUtdHJlZS1jaGFydC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQiwrQkFBdUI7RUFBdkIsNEJBQXVCO0VBQXZCLHVCQUF1QjtFQUN2QixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHJlZS1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1pbi1oZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ping_pi_iframe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ping/pi-iframe */ "./node_modules/@ping/pi-iframe/fesm5/ping-pi-iframe.js");
/* harmony import */ var projects_delve_tree_chart_api_src_public_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! projects/delve-tree-chart-api/src/public_api */ "./projects/delve-tree-chart-api/src/public_api.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.piIframe.post(projects_delve_tree_chart_api_src_public_api__WEBPACK_IMPORTED_MODULE_3__["APP_LOADED_KEY"], {});
        this.piIframe.listen(projects_delve_tree_chart_api_src_public_api__WEBPACK_IMPORTED_MODULE_3__["NODE_DATA_INPUT_KEY"], function (node) {
            _this.node = node;
        });
        this.piIframe.listen(projects_delve_tree_chart_api_src_public_api__WEBPACK_IMPORTED_MODULE_3__["USER_NODE_RELATION_DATA_INPUT_KEY"], function (relations) {
            _this.relations = relations;
        });
        this.piIframe.listen(projects_delve_tree_chart_api_src_public_api__WEBPACK_IMPORTED_MODULE_3__["APP_MODE_KEY"], function (mode) {
            _this.appMode = mode;
        });
        //const appTester: AppTester = new AppTester(this.piIframe);
        //appTester.postInitialData();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('piIframe', { read: _ping_pi_iframe__WEBPACK_IMPORTED_MODULE_2__["PiIframeComponent"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ping_pi_iframe__WEBPACK_IMPORTED_MODULE_2__["PiIframeComponent"])
    ], AppComponent.prototype, "piIframe", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _tree_tree_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tree/tree.component */ "./src/app/tree/tree.component.ts");
/* harmony import */ var _tree_node_tree_node_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tree-node/tree-node.component */ "./src/app/tree-node/tree-node.component.ts");
/* harmony import */ var _ping_pi_leader_line__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ping/pi-leader-line */ "./node_modules/@ping/pi-leader-line/fesm5/ping-pi-leader-line.js");
/* harmony import */ var _ping_pi_tree_chart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ping/pi-tree-chart */ "./node_modules/@ping/pi-tree-chart/fesm5/ping-pi-tree-chart.js");
/* harmony import */ var _ping_pi_iframe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ping/pi-iframe */ "./node_modules/@ping/pi-iframe/fesm5/ping-pi-iframe.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _tree_tree_component__WEBPACK_IMPORTED_MODULE_4__["TreeComponent"],
                _tree_node_tree_node_component__WEBPACK_IMPORTED_MODULE_5__["TreeNodeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"],
                _ping_pi_leader_line__WEBPACK_IMPORTED_MODULE_6__["PiLeaderLineModule"],
                _ping_pi_tree_chart__WEBPACK_IMPORTED_MODULE_7__["PiTreeChartModule"],
                _ping_pi_iframe__WEBPACK_IMPORTED_MODULE_8__["PiIframeModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/node.ts":
/*!*************************!*\
  !*** ./src/app/node.ts ***!
  \*************************/
/*! exports provided: Node */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Node", function() { return Node; });
var Node = /** @class */ (function () {
    function Node(id, title, description, imageFile, parent, children) {
        this._id = id;
        this._title = title;
        this._description = description;
        this._imageUrl = imageFile;
        this._parent = parent;
        this._children = children;
        this._visited = false;
    }
    Object.defineProperty(Node.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "title", {
        get: function () {
            return this._title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "description", {
        get: function () {
            return this._description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "imageUrl", {
        get: function () {
            return this._imageUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "parent", {
        get: function () {
            return this._parent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "children", {
        get: function () {
            return this._children;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "visited", {
        get: function () {
            return this._visited;
        },
        enumerable: true,
        configurable: true
    });
    Node.prototype.setChildren = function (children) {
        this._children = children;
    };
    Node.prototype.setVisited = function (visited) {
        this._visited = visited;
        if (this.parent) {
            this.parent.updateVisitedStatus();
        }
    };
    Node.prototype.setNodeComponent = function (nodeComponent) {
        this._nodeComponent = nodeComponent;
    };
    Node.prototype.updateComponent = function (recursive) {
        if (this.visited) {
            this._nodeComponent.setParentConnector({ color: 'gray', dash: true });
        }
        else {
            this._nodeComponent.setParentConnector({ color: 'green', dash: false });
        }
        if (recursive && this.parent) {
            this.parent.updateComponent(recursive);
        }
    };
    Node.prototype.updateVisitedStatus = function () {
        var isAllChildrenVisited = this.children && this.children.length ?
            this.children.every(function (child) { return child.visited; }) : false;
        this.setVisited(isAllChildrenVisited);
    };
    return Node;
}());



/***/ }),

/***/ "./src/app/tree-node/tree-node.component.html":
/*!****************************************************!*\
  !*** ./src/app/tree-node/tree-node.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"node\" [class.visited]=\"node.visited\">\n  <div class=\"mat-body-strong\">id: {{node.id}}</div>\n  <div class=\"mat-body-strong\">{{node.title}}</div>\n  <div class=\"mat-caption\">{{node.description}}</div>\n\n  <div *ngIf=\"node.imageUrl\">\n    <img [src]=\"node.imageUrl\" (load)=\"imageLoaded()\" class=\"node-image\">\n  </div>\n\n  <div *ngIf=\"node.children && node.children.length > 0\" class=\"bottom-button\">\n    <button mat-icon-button (click)=\"toggleChildren()\">\n      <mat-icon>{{showChildren ? 'remove' : 'add'}}</mat-icon>\n    </button>\n  </div>\n  <div [ngSwitch]=\"appMode\" class=\"bottom-button\">\n    <div *ngSwitchCase=\"'NORMAL'\">\n      <button *ngIf=\"!node.children || node.children.length === 0\" mat-icon-button (click)=\"toggleVisitedStatus()\">\n        <mat-icon>{{node.visited ? 'visibility_off' : 'visibility'}}</mat-icon>\n      </button>\n    </div>\n    <div *ngSwitchCase=\"'SELECTOR'\">\n      <button mat-icon-button (click)=\"selectNode()\">\n        <mat-icon>touch_app</mat-icon>\n      </button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/tree-node/tree-node.component.scss":
/*!****************************************************!*\
  !*** ./src/app/tree-node/tree-node.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".node {\n  border: 4px solid green;\n  border-radius: 15px;\n  background: repeating-linear-gradient(45deg, rgba(0, 128, 0, 0.1), rgba(0, 128, 0, 0.1) 10px, rgba(0, 128, 0, 0.3) 10px, rgba(0, 128, 0, 0.3) 20px);\n  margin: 0 3px; }\n  .node.visited {\n    border: 4px dashed gray;\n    background: repeating-linear-gradient(45deg, rgba(128, 128, 128, 0.1), rgba(128, 128, 128, 0.1) 10px, rgba(128, 128, 128, 0.3) 10px, rgba(128, 128, 128, 0.3) 20px); }\n  .node-image {\n  max-width: 100%; }\n  .bottom-button {\n  display: inline-block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJlZS1ub2RlL1M6XFxkZXZcXGFuZ3VsYXJcXGRlbHZlLXRyZWUtY2hhcnQvc3JjXFxhcHBcXHRyZWUtbm9kZVxcdHJlZS1ub2RlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixtSkFOQztFQU9ELGFBQWEsRUFBQTtFQUpmO0lBT0ksdUJBQXVCO0lBQ3ZCLG1LQVhELEVBQUE7RUFlSDtFQUNFLGVBQWUsRUFBQTtFQUdqQjtFQUNFLHFCQUFxQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdHJlZS1ub2RlL3RyZWUtbm9kZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmdW5jdGlvbiBzZXQtYmFja2dyb3VuZCgkY29sb3IpIHtcclxuICBAcmV0dXJuIHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoXHJcbiAgICAgIDQ1ZGVnLFxyXG4gICAgICByZ2JhKCRjb2xvciwgMC4xKSxcclxuICAgICAgcmdiYSgkY29sb3IsIDAuMSkgMTBweCxcclxuICAgICAgcmdiYSgkY29sb3IsIDAuMykgMTBweCxcclxuICAgICAgcmdiYSgkY29sb3IsIDAuMykgMjBweFxyXG4gICk7XHJcbn1cclxuXHJcbi5ub2RlIHtcclxuICBib3JkZXI6IDRweCBzb2xpZCBncmVlbjtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGJhY2tncm91bmQ6IHNldC1iYWNrZ3JvdW5kKGdyZWVuKTtcclxuICBtYXJnaW46IDAgM3B4O1xyXG5cclxuICAmLnZpc2l0ZWQge1xyXG4gICAgYm9yZGVyOiA0cHggZGFzaGVkIGdyYXk7XHJcbiAgICBiYWNrZ3JvdW5kOiBzZXQtYmFja2dyb3VuZChncmF5KTtcclxuICB9XHJcbn1cclxuXHJcbi5ub2RlLWltYWdlIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5ib3R0b20tYnV0dG9uIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/tree-node/tree-node.component.ts":
/*!**************************************************!*\
  !*** ./src/app/tree-node/tree-node.component.ts ***!
  \**************************************************/
/*! exports provided: TreeNodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeNodeComponent", function() { return TreeNodeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node */ "./src/app/node.ts");
/* harmony import */ var _ping_pi_tree_chart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ping/pi-tree-chart */ "./node_modules/@ping/pi-tree-chart/fesm5/ping-pi-tree-chart.js");
/* harmony import */ var projects_delve_tree_chart_api_src_public_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! projects/delve-tree-chart-api/src/public_api */ "./projects/delve-tree-chart-api/src/public_api.ts");
/* harmony import */ var _ping_pi_iframe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ping/pi-iframe */ "./node_modules/@ping/pi-iframe/fesm5/ping-pi-iframe.js");






var TreeNodeComponent = /** @class */ (function () {
    function TreeNodeComponent() {
    }
    TreeNodeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showChildren = this.node.parent === undefined;
        this.piIframe.listen(projects_delve_tree_chart_api_src_public_api__WEBPACK_IMPORTED_MODULE_4__["USER_NODE_RELATION_DATA_CHANGE_KEY"], function (relation) {
            if (_this.node.id === relation.nodeId) {
                _this.node.setVisited(relation.visited);
                _this.node.updateComponent(true);
            }
        });
    };
    TreeNodeComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.node.setNodeComponent(_this.component);
            _this.node.updateComponent();
        });
    };
    TreeNodeComponent.prototype.toggleVisitedStatus = function () {
        this.piIframe.post(projects_delve_tree_chart_api_src_public_api__WEBPACK_IMPORTED_MODULE_4__["USER_NODE_RELATION_DATA_CHANGE_KEY"], {
            nodeId: this.node.id,
            visited: !this.node.visited
        });
    };
    TreeNodeComponent.prototype.selectNode = function () {
        this.piIframe.post(projects_delve_tree_chart_api_src_public_api__WEBPACK_IMPORTED_MODULE_4__["SELECTED_NODE_DATA_KEY"], {
            nodeId: this.node.id,
            title: this.node.title
        });
    };
    TreeNodeComponent.prototype.toggleChildren = function () {
        this.showChildren = !this.showChildren;
        if (this.showChildren === true) {
            this.component.showChildren();
        }
        else {
            this.component.hideChildren();
        }
    };
    TreeNodeComponent.prototype.imageLoaded = function () {
        this.component.rePositionChildConnectors(true);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ping_pi_iframe__WEBPACK_IMPORTED_MODULE_5__["PiIframeComponent"])
    ], TreeNodeComponent.prototype, "piIframe", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _node__WEBPACK_IMPORTED_MODULE_2__["Node"])
    ], TreeNodeComponent.prototype, "node", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ping_pi_tree_chart__WEBPACK_IMPORTED_MODULE_3__["PiTreeChartNodeComponent"])
    ], TreeNodeComponent.prototype, "component", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", projects_delve_tree_chart_api_src_public_api__WEBPACK_IMPORTED_MODULE_4__["AppMode"])
    ], TreeNodeComponent.prototype, "appMode", void 0);
    TreeNodeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'delve-tree-node',
            template: __webpack_require__(/*! ./tree-node.component.html */ "./src/app/tree-node/tree-node.component.html"),
            styles: [__webpack_require__(/*! ./tree-node.component.scss */ "./src/app/tree-node/tree-node.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TreeNodeComponent);
    return TreeNodeComponent;
}());



/***/ }),

/***/ "./src/app/tree/tree.component.html":
/*!******************************************!*\
  !*** ./src/app/tree/tree.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<pi-tree-chart #tree\n               [datasource]=\"datasource\"\n               [nodeTemplateOutlet]=\"nodeTemplate\"\n               [lineOptions]=\"lineOptions\"\n               [verticalSpace]=\"75\"\n               [levelLimit]=\"1\"\n>\n  <ng-template #nodeTemplate let-context=\"context\" let-component=\"node\">\n      <delve-tree-node [piIframe]=\"piIframe\" [node]=\"context\" [component]=\"component\" [appMode]=\"appMode\"></delve-tree-node>\n  </ng-template>\n</pi-tree-chart>\n"

/***/ }),

/***/ "./src/app/tree/tree.component.scss":
/*!******************************************!*\
  !*** ./src/app/tree/tree.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyZWUvdHJlZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/tree/tree.component.ts":
/*!****************************************!*\
  !*** ./src/app/tree/tree.component.ts ***!
  \****************************************/
/*! exports provided: TreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeComponent", function() { return TreeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node */ "./src/app/node.ts");
/* harmony import */ var _ping_pi_leader_line__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ping/pi-leader-line */ "./node_modules/@ping/pi-leader-line/fesm5/ping-pi-leader-line.js");
/* harmony import */ var _ping_pi_tree_chart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ping/pi-tree-chart */ "./node_modules/@ping/pi-tree-chart/fesm5/ping-pi-tree-chart.js");
/* harmony import */ var projects_delve_tree_chart_api_src_public_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! projects/delve-tree-chart-api/src/public_api */ "./projects/delve-tree-chart-api/src/public_api.ts");
/* harmony import */ var _ping_pi_iframe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ping/pi-iframe */ "./node_modules/@ping/pi-iframe/fesm5/ping-pi-iframe.js");







var TreeComponent = /** @class */ (function () {
    function TreeComponent() {
        this.relationsByNodeId = {};
        this.lineOptions = {
            startSocket: _ping_pi_leader_line__WEBPACK_IMPORTED_MODULE_3__["PiLeaderLineSocket"].BOTTOM,
            endSocket: _ping_pi_leader_line__WEBPACK_IMPORTED_MODULE_3__["PiLeaderLineSocket"].TOP,
            endSocketGravity: [0, -50],
            path: _ping_pi_leader_line__WEBPACK_IMPORTED_MODULE_3__["PiLeaderLinePath"].FLUID,
            color: 'green',
            dropShadow: {
                opacity: 0.2
            }
        };
    }
    TreeComponent.prototype.ngOnInit = function () {
        this.relationsData = this.relationsData ? this.relationsData : [];
        this.datasource = this.createOrgChartDataFrom(this.nodeData);
        this.mapRelationsByNodeId();
        this.initializeRelations(this.datasource);
    };
    TreeComponent.prototype.createOrgChartDataFrom = function (nodeDto, parentNode) {
        var _this = this;
        var node = new _node__WEBPACK_IMPORTED_MODULE_2__["Node"](nodeDto.id, nodeDto.title, nodeDto.description, nodeDto.imageUrl, parentNode, null);
        var children = nodeDto.children.map(function (childNode) { return _this.createOrgChartDataFrom(childNode, node); });
        node.setChildren(children);
        return node;
    };
    TreeComponent.prototype.mapRelationsByNodeId = function () {
        var _this = this;
        this.relationsData.forEach(function (relation) {
            _this.relationsByNodeId[relation.nodeId] = relation;
        });
    };
    TreeComponent.prototype.initializeRelations = function (node) {
        var _this = this;
        node.children.forEach(function (child) { return _this.initializeRelations(child); });
        if (this.relationsByNodeId[node.id]) {
            node.setVisited(this.relationsByNodeId[node.id].visited);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ping_pi_iframe__WEBPACK_IMPORTED_MODULE_6__["PiIframeComponent"])
    ], TreeComponent.prototype, "piIframe", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TreeComponent.prototype, "nodeData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], TreeComponent.prototype, "relationsData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", projects_delve_tree_chart_api_src_public_api__WEBPACK_IMPORTED_MODULE_5__["AppMode"])
    ], TreeComponent.prototype, "appMode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tree', { read: _ping_pi_tree_chart__WEBPACK_IMPORTED_MODULE_4__["PiTreeChartComponent"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ping_pi_tree_chart__WEBPACK_IMPORTED_MODULE_4__["PiTreeChartComponent"])
    ], TreeComponent.prototype, "tree", void 0);
    TreeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'delve-tree',
            template: __webpack_require__(/*! ./tree.component.html */ "./src/app/tree/tree.component.html"),
            styles: [__webpack_require__(/*! ./tree.component.scss */ "./src/app/tree/tree.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TreeComponent);
    return TreeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! S:\dev\angular\delve-tree-chart\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map