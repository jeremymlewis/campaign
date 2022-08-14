"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_intro-page_intro_module_ts"],{

/***/ 4762:
/*!******************************************************************!*\
  !*** ./src/app/explore-container/explore-container.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExploreContainerComponent": () => (/* binding */ ExploreContainerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _explore_container_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./explore-container.component.html?ngResource */ 959);
/* harmony import */ var _explore_container_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./explore-container.component.scss?ngResource */ 1509);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




let ExploreContainerComponent = class ExploreContainerComponent {
    constructor() { }
    ngOnInit() { }
};
ExploreContainerComponent.ctorParameters = () => [];
ExploreContainerComponent.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
ExploreContainerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-explore-container',
        template: _explore_container_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_explore_container_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ExploreContainerComponent);



/***/ }),

/***/ 581:
/*!***************************************************************!*\
  !*** ./src/app/explore-container/explore-container.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExploreContainerComponentModule": () => (/* binding */ ExploreContainerComponentModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _explore_container_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./explore-container.component */ 4762);






let ExploreContainerComponentModule = class ExploreContainerComponentModule {
};
ExploreContainerComponentModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule],
        declarations: [_explore_container_component__WEBPACK_IMPORTED_MODULE_0__.ExploreContainerComponent],
        exports: [_explore_container_component__WEBPACK_IMPORTED_MODULE_0__.ExploreContainerComponent]
    })
], ExploreContainerComponentModule);



/***/ }),

/***/ 7709:
/*!****************************************************!*\
  !*** ./src/app/intro-page/intro-page.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntroPage": () => (/* binding */ IntroPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _intro_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./intro-page.component.html?ngResource */ 3469);
/* harmony import */ var _intro_page_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./intro-page.component.css?ngResource */ 4007);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);





let IntroPage = class IntroPage {
    constructor(route) {
        this.route = route;
        this.passwordRequired = false;
        this.passcode = '';
    }
    toTabs() {
        if (!this.passwordRequired || this.passcode === 'jonaslinde') {
            this.route.navigateByUrl('/options');
        }
    }
};
IntroPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
IntroPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-intro-page',
        template: _intro_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_intro_page_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], IntroPage);



/***/ }),

/***/ 1193:
/*!****************************************************!*\
  !*** ./src/app/intro-page/intro-routing.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntroRoutingModule": () => (/* binding */ IntroRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _intro_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./intro-page.component */ 7709);




const routes = [
    {
        path: '',
        component: _intro_page_component__WEBPACK_IMPORTED_MODULE_0__.IntroPage,
    }
];
let IntroRoutingModule = class IntroRoutingModule {
};
IntroRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], IntroRoutingModule);



/***/ }),

/***/ 4956:
/*!********************************************!*\
  !*** ./src/app/intro-page/intro.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntroModule": () => (/* binding */ IntroModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _intro_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./intro-page.component */ 7709);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _intro_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./intro-routing.module */ 1193);








let IntroModule = class IntroModule {
};
IntroModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _intro_routing_module__WEBPACK_IMPORTED_MODULE_2__.IntroRoutingModule
        ],
        declarations: [_intro_page_component__WEBPACK_IMPORTED_MODULE_0__.IntroPage]
    })
], IntroModule);



/***/ }),

/***/ 4007:
/*!****************************************************************!*\
  !*** ./src/app/intro-page/intro-page.component.css?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = ".game-title {\r\n  padding-top: 40%;\r\n  text-align: center;\r\n  font-size: 38px;\r\n};\r\n\r\n.container {\r\n  height: 200px;\r\n  position: relative;\r\n}\r\n\r\n.center {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n.bg-image {\r\n    background: url('background.png')!important;\r\n    background-size: cover!important;\r\n    background-repeat: no-repeat;\r\n    height: 95%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludHJvLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQixDQUFBOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFHQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUVULGdDQUFnQztBQUNsQzs7QUFFQTtJQUNJLDJDQUErRDtJQUMvRCxnQ0FBZ0M7SUFDaEMsNEJBQTRCO0lBQzVCLFdBQVc7QUFDZiIsImZpbGUiOiJpbnRyby1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2FtZS10aXRsZSB7XHJcbiAgcGFkZGluZy10b3A6IDQwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAzOHB4O1xyXG59O1xyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcblxyXG4uY2VudGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG5cclxuLmJnLWltYWdlIHtcclxuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC5wbmdcIikhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgaGVpZ2h0OiA5NSU7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 1509:
/*!*******************************************************************************!*\
  !*** ./src/app/explore-container/explore-container.component.scss?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGxvcmUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGIiwiZmlsZSI6ImV4cGxvcmUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */";

/***/ }),

/***/ 959:
/*!*******************************************************************************!*\
  !*** ./src/app/explore-container/explore-container.component.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "<div id=\"container\">\n  <strong>{{ name }}</strong>\n  <p>Explore <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://ionicframework.com/docs/components\">UI Components</a></p>\n</div>";

/***/ }),

/***/ 3469:
/*!*****************************************************************!*\
  !*** ./src/app/intro-page/intro-page.component.html?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-grid class=\"ion-no-padding bg-image\">\r\n  <div class=\"background\">\r\n    <div class=\"container\">\r\n      <div class=\"center\">\r\n        <form *ngIf=\"passwordRequired\">\r\n          <ion-item lines=\"full\">\r\n            <ion-label position=\"floating\">Password</ion-label>\r\n            <ion-input type=\"text\" name='passcode' [(ngModel)]=\"passcode\" required></ion-input>\r\n          </ion-item>\r\n        </form>\r\n        <ion-button (click)=\"toTabs()\">Start 1 player</ion-button>\r\n        <br>\r\n        <ion-button [disabled]=\"true\" (click)=\"toTabs()\">Start 2 player</ion-button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  </ion-grid>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_intro-page_intro_module_ts.js.map