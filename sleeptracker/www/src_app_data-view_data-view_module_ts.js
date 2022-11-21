"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_data-view_data-view_module_ts"],{

/***/ 2818:
/*!*******************************************************!*\
  !*** ./src/app/data-view/data-view-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataViewPageRoutingModule": () => (/* binding */ DataViewPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _data_view_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-view.page */ 9908);




const routes = [
    {
        path: '',
        component: _data_view_page__WEBPACK_IMPORTED_MODULE_0__.DataViewPage
    }
];
let DataViewPageRoutingModule = class DataViewPageRoutingModule {
};
DataViewPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DataViewPageRoutingModule);



/***/ }),

/***/ 9036:
/*!***********************************************!*\
  !*** ./src/app/data-view/data-view.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataViewPageModule": () => (/* binding */ DataViewPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _data_view_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-view-routing.module */ 2818);
/* harmony import */ var _data_view_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data-view.page */ 9908);







let DataViewPageModule = class DataViewPageModule {
};
DataViewPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _data_view_routing_module__WEBPACK_IMPORTED_MODULE_0__.DataViewPageRoutingModule
        ],
        declarations: [_data_view_page__WEBPACK_IMPORTED_MODULE_1__.DataViewPage]
    })
], DataViewPageModule);



/***/ }),

/***/ 9908:
/*!*********************************************!*\
  !*** ./src/app/data-view/data-view.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataViewPage": () => (/* binding */ DataViewPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _data_view_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-view.page.html?ngResource */ 176);
/* harmony import */ var _data_view_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data-view.page.scss?ngResource */ 2989);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let DataViewPage = class DataViewPage {
    constructor() { }
    ngOnInit() {
    }
};
DataViewPage.ctorParameters = () => [];
DataViewPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-data-view',
        template: _data_view_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_data_view_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DataViewPage);



/***/ }),

/***/ 2989:
/*!**********************************************************!*\
  !*** ./src/app/data-view/data-view.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXRhLXZpZXcucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 176:
/*!**********************************************************!*\
  !*** ./src/app/data-view/data-view.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>data-view</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_data-view_data-view_module_ts.js.map