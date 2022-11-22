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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _sleepiness_log_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sleepiness-log.page.html?ngResource */ 5901);
/* harmony import */ var _sleepiness_log_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sleepiness-log.page.scss?ngResource */ 4438);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_sleep_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/sleep.service */ 2517);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _data_stanford_sleepiness_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/stanford-sleepiness-data */ 743);







let SleepinessLogPage = class SleepinessLogPage {
    constructor(sleepService, toastController) {
        this.sleepService = sleepService;
        this.toastController = toastController;
        this.logTime = new Date().toISOString();
        this.rangeValues = new Map([
            [1, 'Feeling active, vital, alert, or wide awake'],
            [2, 'Functioning at high levels, but not at peak; able to concentrate'],
            [3, 'Awake, but relaxed; responsive but not fully alert'],
            [4, 'Somewhat foggy, let down'],
            [5, 'Foggy; losing interest in remaining awake; slowed down'],
            [6, 'Sleepy, woozy, fighting sleep; prefer to lie down'],
            [7, 'No longer fighting sleep, sleep onset soon; having dream-like thoughts'],
        ]);
        this.lastValue = 1;
        this.rangeValue = this.rangeValues.get(this.lastValue);
    }
    ngOnInit() {
    }
    presentToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            var toast = yield this.toastController.create({
                message: 'Your entry has been added!',
                duration: 2000,
                position: 'top'
            });
            toast.present();
        });
    }
    onIonChange(ev) {
        this.lastValue = Number(ev.detail.value);
        this.rangeValue = this.rangeValues.get(this.lastValue);
    }
    addDataEntry() {
        console.log('Value: ' + this.lastValue.valueOf());
        console.log('Date String: ' + this.logTime);
        let data = new _data_stanford_sleepiness_data__WEBPACK_IMPORTED_MODULE_3__.StanfordSleepinessData(this.lastValue.valueOf(), new Date(this.logTime.valueOf()));
        this.sleepService.logSleepinessData(data);
        this.presentToast();
    }
};
SleepinessLogPage.ctorParameters = () => [
    { type: _services_sleep_service__WEBPACK_IMPORTED_MODULE_2__.SleepService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController }
];
SleepinessLogPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
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

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Sleepiness Log</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<!-- Content Body -->\r\n<ion-content>\r\n  <ion-button href=\"\">Home</ion-button>\r\n\r\n  <!-- Input: Log Time -->\r\n  <ion-item>\r\n    <ion-label>Log Time</ion-label>\r\n    <ion-datetime display-format=\"MM/DD/YYYY HH:mm:ss\" [(ngModel)]=\"logTime\">\r\n    </ion-datetime>\r\n  </ion-item>\r\n\r\n  <ion-range (ionChange)=\"onIonChange($event)\" [ticks]=\"true\" [snaps]=\"true\" [min]=\"1\" [max]=\"7\"></ion-range>\r\n  <ion-label>Description: {{ rangeValue }}</ion-label>\r\n\r\n  <!-- Button: Submit Time -->\r\n  <ion-button expand=\"block\" (click)=\"addDataEntry()\">Submit Sleepiness</ion-button>\r\n\r\n</ion-content>\r\n\r\n\r\n<ion-footer>\r\n  <ion-toolbar>\r\n    <ion-title></ion-title>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_sleepiness-log_sleepiness-log_module_ts.js.map