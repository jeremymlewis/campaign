"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_options_options_module_ts"],{

/***/ 2636:
/*!***************************************************!*\
  !*** ./src/app/options/options-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OptionsRoutingModule": () => (/* binding */ OptionsRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _options_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./options.component */ 7832);




const routes = [
    {
        path: '',
        component: _options_component__WEBPACK_IMPORTED_MODULE_0__.OptionsPage,
    }
];
let OptionsRoutingModule = class OptionsRoutingModule {
};
OptionsRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], OptionsRoutingModule);



/***/ }),

/***/ 7832:
/*!**********************************************!*\
  !*** ./src/app/options/options.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OptionsPage": () => (/* binding */ OptionsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _options_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./options.component.html?ngResource */ 7553);
/* harmony import */ var _options_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./options.component.css?ngResource */ 3330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _stores_votes_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stores/votes.store */ 2049);






let OptionsPage = class OptionsPage {
    constructor(route, votes) {
        this.route = route;
        this.votes = votes;
    }
    continue(isDem) {
        this.votes.setUserIsDem(isDem);
        this.route.navigateByUrl('/tabs');
    }
};
OptionsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _stores_votes_store__WEBPACK_IMPORTED_MODULE_2__.VotesStore }
];
OptionsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-options-page',
        template: _options_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_options_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], OptionsPage);



/***/ }),

/***/ 6305:
/*!*******************************************!*\
  !*** ./src/app/options/options.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OptionsModule": () => (/* binding */ OptionsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _options_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./options.component */ 7832);
/* harmony import */ var _options_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./options-routing.module */ 2636);








let OptionsModule = class OptionsModule {
};
OptionsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_0__.ExploreContainerComponentModule,
            _options_routing_module__WEBPACK_IMPORTED_MODULE_2__.OptionsRoutingModule
        ],
        declarations: [_options_component__WEBPACK_IMPORTED_MODULE_1__.OptionsPage]
    })
], OptionsModule);



/***/ }),

/***/ 3330:
/*!**********************************************************!*\
  !*** ./src/app/options/options.component.css?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = ".party-button {\r\n  height: 225px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9wdGlvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7QUFDZiIsImZpbGUiOiJvcHRpb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFydHktYnV0dG9uIHtcclxuICBoZWlnaHQ6IDIyNXB4O1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 7553:
/*!***********************************************************!*\
  !*** ./src/app/options/options.component.html?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "<ion-grid>\r\n<h1>Choose your party!</h1>\r\n<ion-button class=\"party-button\" (click)=\"continue(false)\"><img src=\"../../assets/images/republicanIcon.png\"><br>Republican</ion-button>\r\n<ion-button  class=\"party-button\" (click)=\"continue(true)\"><img src=\"../../assets/images/democratIcon.png\"><br>Democrat</ion-button>\r\n</ion-grid>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_options_options_module_ts.js.map