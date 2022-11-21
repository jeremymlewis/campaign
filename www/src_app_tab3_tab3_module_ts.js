"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab3_tab3_module_ts"],{

/***/ 9818:
/*!*********************************************!*\
  !*** ./src/app/tab3/tab3-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageRoutingModule": () => (/* binding */ Tab3PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 8592);




const routes = [
    {
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page,
    }
];
let Tab3PageRoutingModule = class Tab3PageRoutingModule {
};
Tab3PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab3PageRoutingModule);



/***/ }),

/***/ 3746:
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageModule": () => (/* binding */ Tab3PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 8592);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab3-routing.module */ 9818);









let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page }]),
            _tab3_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab3PageRoutingModule,
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page]
    })
], Tab3PageModule);



/***/ }),

/***/ 8592:
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3Page": () => (/* binding */ Tab3Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab3_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page.html?ngResource */ 9769);
/* harmony import */ var _tab3_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab3.page.scss?ngResource */ 7087);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _stores_votes_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stores/votes.store */ 2049);






let Tab3Page = class Tab3Page {
    constructor(votes, router) {
        this.votes = votes;
        this.router = router;
    }
    ngOnInit() {
        this.isDemocrat = this.votes.getUserIsDem();
    }
    reset() {
        if (window.confirm('Do you want to drop out of the race? All progress will be lost')) {
            this.votes.reset();
            this.router.navigateByUrl('/');
        }
    }
};
Tab3Page.ctorParameters = () => [
    { type: _stores_votes_store__WEBPACK_IMPORTED_MODULE_2__.VotesStore },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
Tab3Page = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-tab3',
        template: _tab3_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tab3_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab3Page);



/***/ }),

/***/ 7087:
/*!************************************************!*\
  !*** ./src/app/tab3/tab3.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "p {\n  text-align: center;\n}\n\nh1 {\n  text-align: center;\n}\n\nh3 {\n  text-align: center;\n}\n\n.header-icon {\n  position: fixed;\n  right: 10px;\n  max-height: 30px;\n}\n\n.center {\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  left: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFFQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFBRiIsImZpbGUiOiJ0YWIzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufTtcclxuXHJcbmgxIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn07XHJcblxyXG5oMyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59O1xyXG5cclxuLmhlYWRlci1pY29uIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbiAgbWF4LWhlaWdodDogMzBweDtcclxufVxyXG5cclxuLmNlbnRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbGVmdDogNTAlXHJcbn1cclxuIl19 */";

/***/ }),

/***/ 9769:
/*!************************************************!*\
  !*** ./src/app/tab3/tab3.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Instructions\n      <img class='header-icon' *ngIf=\"!isDemocrat\" src=\"../../assets/images/republicanIcon.png\">\n      <img class='header-icon' *ngIf=\"isDemocrat\" src=\"../../assets/images/democratIcon.png\">\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Instructions</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <div class=\"center\">\n  <p>Hello Senator! How can I help you?</p>\n  </div>\n  <img id=\"aid\" src=\"../../../assets/images/aid.png\">\n  <ion-button style=\"padding-left: 20px;\">What to do on my turn?</ion-button>\n  <ion-button style=\"padding-left: 20px;\">Info on Advertizing?</ion-button>\n  <ion-button style=\"padding-left: 20px;\">Info on Campaigning?</ion-button>\n  <ion-button style=\"padding-left: 20px;\">Info on Fundraising?</ion-button>\n  <ion-button style=\"padding-left: 20px;\">Info on Debates?</ion-button>\n  <ion-button style=\"padding-left: 20px;\">Info on Special Events?</ion-button>\n  <ion-button (click)=\"reset()\"style=\"padding-left: 20px;\">Forfeit the race</ion-button>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tab3_tab3_module_ts.js.map