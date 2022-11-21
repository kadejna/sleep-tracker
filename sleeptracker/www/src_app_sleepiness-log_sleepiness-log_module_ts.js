"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_sleepiness-log_sleepiness-log_module_ts"],{

/***/ 1527:
/*!*****************************************************************!*\
  !*** ./src/app/sleepiness-log/sleepiness-log-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SleepinessLogPageRoutingModule": () => (/* binding */ SleepinessLogPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _sleepiness_log_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sleepiness-log.page */ 5040);




const routes = [
    {
        path: '',
        component: _sleepiness_log_page__WEBPACK_IMPORTED_MODULE_0__.SleepinessLogPage
    }
];
let SleepinessLogPageRoutingModule = class SleepinessLogPageRoutingModule {
};
SleepinessLogPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SleepinessLogPageRoutingModule);



/***/ }),

/***/ 3708:
/*!*********************************************************!*\
  !*** ./src/app/sleepiness-log/sleepiness-log.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SleepinessLogPageModule": () => (/* binding */ SleepinessLogPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _sleepiness_log_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sleepiness-log-routing.module */ 1527);
/* harmony import */ var _sleepiness_log_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sleepiness-log.page */ 5040);







let SleepinessLogPageModule = class SleepinessLogPageModule {
};
SleepinessLogPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _sleepiness_log_routing_module__WEBPACK_IMPORTED_MODULE_0__.SleepinessLogPageRoutingModule
        ],
        declarations: [_sleepiness_log_page__WEBPACK_IMPORTED_MODULE_1__.SleepinessLogPage]
    })
], SleepinessLogPageModule);



/***/ }),

/***/ 5040:
/*!*******************************************************!*\
  !*** ./src/app/sleepiness-log/sleepiness-log.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SleepinessLogPage": () => (/* binding */ SleepinessLogPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _sleepiness_log_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sleepiness-log.page.html?ngResource */ 5901);
/* harmony import */ var _sleepiness_log_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sleepiness-log.page.scss?ngResource */ 4438);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let SleepinessLogPage = class SleepinessLogPage {
    constructor() { }
    ngOnInit() {
    }
};
SleepinessLogPage.ctorParameters = () => [];
SleepinessLogPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-sleepiness-log',
        template: _sleepiness_log_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_sleepiness_log_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SleepinessLogPage);



/***/ }),

/***/ 4438:
/*!********************************************************************!*\
  !*** ./src/app/sleepiness-log/sleepiness-log.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzbGVlcGluZXNzLWxvZy5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 5901:
/*!********************************************************************!*\
  !*** ./src/app/sleepiness-log/sleepiness-log.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>sleepiness-log</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_sleepiness-log_sleepiness-log_module_ts.js.map