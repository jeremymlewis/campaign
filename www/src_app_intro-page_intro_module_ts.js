"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_intro-page_intro_module_ts"],{

/***/ 7709:
/*!****************************************************!*\
  !*** ./src/app/intro-page/intro-page.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntroPage": () => (/* binding */ IntroPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _intro_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./intro-page.component.html?ngResource */ 3469);
/* harmony import */ var _intro_page_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./intro-page.component.css?ngResource */ 4007);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_audio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/audio.service */ 6425);






let IntroPage = class IntroPage {
    constructor(route, audio) {
        this.route = route;
        this.audio = audio;
        this.passwordRequired = false;
        this.passcode = '';
    }
    ngAfterViewInit() {
        this.audio.preload('chief', 'assets/audio/chief.mp3');
    }
    toTabs() {
        this.audio.play('chief');
        if (!this.passwordRequired || this.passcode === 'jonaslinde') {
            this.route.navigateByUrl('/welcome');
        }
    }
};
IntroPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _services_audio_service__WEBPACK_IMPORTED_MODULE_2__.AudioService }
];
IntroPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _intro_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./intro-page.component */ 7709);
/* harmony import */ var _welcome_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome.component */ 6193);





const routes = [
    {
        path: '',
        component: _intro_page_component__WEBPACK_IMPORTED_MODULE_0__.IntroPage,
    },
    {
        path: 'welcome',
        component: _welcome_component__WEBPACK_IMPORTED_MODULE_1__.WelcomePage
    }
];
let IntroRoutingModule = class IntroRoutingModule {
};
IntroRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _intro_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./intro-page.component */ 7709);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _intro_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./intro-routing.module */ 1193);
/* harmony import */ var _welcome_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./welcome.component */ 6193);









let IntroModule = class IntroModule {
};
IntroModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _intro_routing_module__WEBPACK_IMPORTED_MODULE_2__.IntroRoutingModule
        ],
        declarations: [_intro_page_component__WEBPACK_IMPORTED_MODULE_0__.IntroPage, _welcome_component__WEBPACK_IMPORTED_MODULE_3__.WelcomePage]
    })
], IntroModule);



/***/ }),

/***/ 6193:
/*!*************************************************!*\
  !*** ./src/app/intro-page/welcome.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomePage": () => (/* binding */ WelcomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _welcome_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome.component.html?ngResource */ 804);
/* harmony import */ var _welcome_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome.component.css?ngResource */ 9644);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _stores_votes_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stores/votes.store */ 2049);






let WelcomePage = class WelcomePage {
    constructor(route, votes) {
        this.route = route;
        this.votes = votes;
    }
    continue() {
        this.route.navigateByUrl('/options');
    }
};
WelcomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _stores_votes_store__WEBPACK_IMPORTED_MODULE_2__.VotesStore }
];
WelcomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-options-page',
        template: _welcome_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_welcome_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], WelcomePage);



/***/ }),

/***/ 4007:
/*!****************************************************************!*\
  !*** ./src/app/intro-page/intro-page.component.css?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = ".game-title {\r\n  padding-top: 40%;\r\n  text-align: center;\r\n  font-size: 38px;\r\n};\r\n\r\n.container {\r\n  height: 200px;\r\n  position: relative;\r\n}\r\n\r\n.center {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n.bg-image {\r\n    background: url('background.png')!important;\r\n    background-size: cover!important;\r\n    background-repeat: no-repeat;\r\n    height: 95%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludHJvLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQixDQUFBOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFHQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUVULGdDQUFnQztBQUNsQzs7QUFFQTtJQUNJLDJDQUErRDtJQUMvRCxnQ0FBZ0M7SUFDaEMsNEJBQTRCO0lBQzVCLFdBQVc7QUFDZiIsImZpbGUiOiJpbnRyby1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2FtZS10aXRsZSB7XHJcbiAgcGFkZGluZy10b3A6IDQwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAzOHB4O1xyXG59O1xyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcblxyXG4uY2VudGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG5cclxuLmJnLWltYWdlIHtcclxuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC5wbmdcIikhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgaGVpZ2h0OiA5NSU7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 9644:
/*!*************************************************************!*\
  !*** ./src/app/intro-page/welcome.component.css?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = ".center {\r\n  font-size: large;\r\n  text-align: center;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  left: 50%;\r\n}\r\n\r\np {\r\n  margin-top: 10px;\r\n}\r\n\r\n#aid {\r\n  animation: flyaid 15s linear;\r\n  top: 100vw;\r\n  left: 0;\r\n}\r\n\r\n#title {\r\n  animation: flytitle 15s linear;\r\n  top: 100vw;\r\n  left: 0;\r\n}\r\n\r\n#info1 {\r\n  animation: flyinfo1 15s linear;\r\n  top: 100vw;\r\n  left: 0;\r\n}\r\n\r\n#info2 {\r\n  animation: flyinfo2 15s linear;\r\n  top: 100vw;\r\n  left: 0;\r\n}\r\n\r\n#info3 {\r\n  animation: flyinfo3 15s linear;\r\n  top: 100vw;\r\n  left: 0;\r\n}\r\n\r\n#info4 {\r\n  animation: flyinfo4 15s linear;\r\n  top: 100vw;\r\n  left: 0;\r\n}\r\n\r\n#info5 {\r\n  animation: flyinfo5 15s linear;\r\n  top: 100vw;\r\n  left: 0;\r\n}\r\n\r\n#info6 {\r\n  animation: flyinfo6 15s linear;\r\n  top: 100vw;\r\n  left: 0;\r\n}\r\n\r\n#ready {\r\n  animation: flyready 15s linear;\r\n  top: 100vw;\r\n  left: 0;\r\n}\r\n\r\n@keyframes flyaid {\r\n  0%{\r\n    transform: translate(110vw,-90vw);opacity: .75;\r\n  }\r\n  8%{\r\n    transform: translate(0,-90vw);opacity: .75;\r\n  }\r\n\r\n  15%{\r\n      transform: translate(0,-90vw);opacity: .75;\r\n  }\r\n  17%{\r\n    transform: translate(0,-75vw);opacity: .75;\r\n  }\r\n\r\n  25%{\r\n    transform: translate(0,-75vw);opacity: .75;\r\n  }\r\n  27%{\r\n    transform: translate(0,-60vw);opacity: .75;\r\n  }\r\n\r\n\r\n  40%{\r\n    transform: translate(0,-60vw);opacity: .75;\r\n  }\r\n  42%{\r\n    transform: translate(0,-42vw);opacity: .75;\r\n  }\r\n\r\n\r\n  50%{\r\n    transform: translate(0,-42vw);opacity: .75;\r\n  }\r\n  52%{\r\n    transform: translate(0,-24vw);opacity: .75;\r\n  }\r\n\r\n  70%{\r\n    transform: translate(0,-24vw);opacity: .75;\r\n  }\r\n  72%{\r\n    transform: translate(0,0);opacity: .75;\r\n  }\r\n}\r\n\r\n@keyframes flytitle {\r\n  0%{\r\n    transform: translate(110vw,0);opacity: .75;\r\n  }\r\n  10%{\r\n    transform: translate(110vw,0);opacity: .75;\r\n  }\r\n  12%{\r\n    transform: translate(0,0);opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes flyinfo1 {\r\n  0%{\r\n    transform: translate(110vw,0);opacity: .75;\r\n  }\r\n  15%{\r\n    transform: translate(110vw,0);opacity: .75;\r\n  }\r\n  17%{\r\n      transform: translate(0,0);opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes flyinfo2 {\r\n  0%{\r\n    transform: translate(110vw,0);opacity: .75;\r\n  }\r\n  25%{\r\n    transform: translate(110vw,0);opacity: .75;\r\n  }\r\n  27%{\r\n      transform: translate(0,0);opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes flyinfo3 {\r\n  0%{\r\n    transform: translate(110vw,0);opacity: .75;\r\n  }\r\n  40%{\r\n    transform: translate(110vw,0);opacity: .75;\r\n  }\r\n  42%{\r\n      transform: translate(0,0);opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes flyinfo4 {\r\n  0%{\r\n    transform: translate(110vw,0);opacity: .75;\r\n  }\r\n  50%{\r\n    transform: translate(110vw,0);opacity: .75;\r\n  }\r\n  52%{\r\n      transform: translate(0,0);opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes flyinfo5 {\r\n  0%{\r\n    transform: translate(110vw,0);opacity: .75;\r\n  }\r\n  70%{\r\n    transform: translate(110vw,0);opacity: .75;\r\n  }\r\n  72%{\r\n      transform: translate(0,0);opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes flyinfo6 {\r\n  0%{\r\n    transform: translate(110vw,0);opacity: .75;\r\n  }\r\n  85%{\r\n    transform: translate(110vw,0);opacity: .75;\r\n  }\r\n  87%{\r\n      transform: translate(0,0);opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes flyready {\r\n  0%{\r\n    transform: translate(110vw,0);opacity: .75;\r\n  }\r\n  95%{\r\n    transform: translate(110vw,0);opacity: .75;\r\n  }\r\n  100%{\r\n      transform: translate(0,0);opacity: 1;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,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QTtJQUNFLDZCQUE2QixDQUFDLFlBQVk7RUFDNUM7RUFDQTtNQUNJLHlCQUF5QixDQUFDLFVBQVU7RUFDeEM7QUFDRiIsImZpbGUiOiJ3ZWxjb21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyIHtcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbGVmdDogNTAlO1xyXG59XHJcblxyXG5wIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4jYWlkIHtcclxuICBhbmltYXRpb246IGZseWFpZCAxNXMgbGluZWFyO1xyXG4gIHRvcDogMTAwdnc7XHJcbiAgbGVmdDogMDtcclxufVxyXG5cclxuI3RpdGxlIHtcclxuICBhbmltYXRpb246IGZseXRpdGxlIDE1cyBsaW5lYXI7XHJcbiAgdG9wOiAxMDB2dztcclxuICBsZWZ0OiAwO1xyXG59XHJcblxyXG4jaW5mbzEge1xyXG4gIGFuaW1hdGlvbjogZmx5aW5mbzEgMTVzIGxpbmVhcjtcclxuICB0b3A6IDEwMHZ3O1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuXHJcbiNpbmZvMiB7XHJcbiAgYW5pbWF0aW9uOiBmbHlpbmZvMiAxNXMgbGluZWFyO1xyXG4gIHRvcDogMTAwdnc7XHJcbiAgbGVmdDogMDtcclxufVxyXG5cclxuI2luZm8zIHtcclxuICBhbmltYXRpb246IGZseWluZm8zIDE1cyBsaW5lYXI7XHJcbiAgdG9wOiAxMDB2dztcclxuICBsZWZ0OiAwO1xyXG59XHJcblxyXG4jaW5mbzQge1xyXG4gIGFuaW1hdGlvbjogZmx5aW5mbzQgMTVzIGxpbmVhcjtcclxuICB0b3A6IDEwMHZ3O1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuXHJcbiNpbmZvNSB7XHJcbiAgYW5pbWF0aW9uOiBmbHlpbmZvNSAxNXMgbGluZWFyO1xyXG4gIHRvcDogMTAwdnc7XHJcbiAgbGVmdDogMDtcclxufVxyXG5cclxuI2luZm82IHtcclxuICBhbmltYXRpb246IGZseWluZm82IDE1cyBsaW5lYXI7XHJcbiAgdG9wOiAxMDB2dztcclxuICBsZWZ0OiAwO1xyXG59XHJcblxyXG4jcmVhZHkge1xyXG4gIGFuaW1hdGlvbjogZmx5cmVhZHkgMTVzIGxpbmVhcjtcclxuICB0b3A6IDEwMHZ3O1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmx5YWlkIHtcclxuICAwJXtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDExMHZ3LC05MHZ3KTtvcGFjaXR5OiAuNzU7XHJcbiAgfVxyXG4gIDgle1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwtOTB2dyk7b3BhY2l0eTogLjc1O1xyXG4gIH1cclxuXHJcbiAgMTUle1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLC05MHZ3KTtvcGFjaXR5OiAuNzU7XHJcbiAgfVxyXG4gIDE3JXtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsLTc1dncpO29wYWNpdHk6IC43NTtcclxuICB9XHJcblxyXG4gIDI1JXtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsLTc1dncpO29wYWNpdHk6IC43NTtcclxuICB9XHJcbiAgMjcle1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwtNjB2dyk7b3BhY2l0eTogLjc1O1xyXG4gIH1cclxuXHJcblxyXG4gIDQwJXtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsLTYwdncpO29wYWNpdHk6IC43NTtcclxuICB9XHJcbiAgNDIle1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwtNDJ2dyk7b3BhY2l0eTogLjc1O1xyXG4gIH1cclxuXHJcblxyXG4gIDUwJXtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsLTQydncpO29wYWNpdHk6IC43NTtcclxuICB9XHJcbiAgNTIle1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwtMjR2dyk7b3BhY2l0eTogLjc1O1xyXG4gIH1cclxuXHJcbiAgNzAle1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwtMjR2dyk7b3BhY2l0eTogLjc1O1xyXG4gIH1cclxuICA3MiV7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLDApO29wYWNpdHk6IC43NTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5Aa2V5ZnJhbWVzIGZseXRpdGxlIHtcclxuICAwJXtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDExMHZ3LDApO29wYWNpdHk6IC43NTtcclxuICB9XHJcbiAgMTAle1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTEwdncsMCk7b3BhY2l0eTogLjc1O1xyXG4gIH1cclxuICAxMiV7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLDApO29wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZseWluZm8xIHtcclxuICAwJXtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDExMHZ3LDApO29wYWNpdHk6IC43NTtcclxuICB9XHJcbiAgMTUle1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTEwdncsMCk7b3BhY2l0eTogLjc1O1xyXG4gIH1cclxuICAxNyV7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsMCk7b3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmx5aW5mbzIge1xyXG4gIDAle1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTEwdncsMCk7b3BhY2l0eTogLjc1O1xyXG4gIH1cclxuICAyNSV7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMTB2dywwKTtvcGFjaXR5OiAuNzU7XHJcbiAgfVxyXG4gIDI3JXtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwwKTtvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmbHlpbmZvMyB7XHJcbiAgMCV7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMTB2dywwKTtvcGFjaXR5OiAuNzU7XHJcbiAgfVxyXG4gIDQwJXtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDExMHZ3LDApO29wYWNpdHk6IC43NTtcclxuICB9XHJcbiAgNDIle1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLDApO29wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZseWluZm80IHtcclxuICAwJXtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDExMHZ3LDApO29wYWNpdHk6IC43NTtcclxuICB9XHJcbiAgNTAle1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTEwdncsMCk7b3BhY2l0eTogLjc1O1xyXG4gIH1cclxuICA1MiV7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsMCk7b3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmx5aW5mbzUge1xyXG4gIDAle1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTEwdncsMCk7b3BhY2l0eTogLjc1O1xyXG4gIH1cclxuICA3MCV7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMTB2dywwKTtvcGFjaXR5OiAuNzU7XHJcbiAgfVxyXG4gIDcyJXtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwwKTtvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmbHlpbmZvNiB7XHJcbiAgMCV7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMTB2dywwKTtvcGFjaXR5OiAuNzU7XHJcbiAgfVxyXG4gIDg1JXtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDExMHZ3LDApO29wYWNpdHk6IC43NTtcclxuICB9XHJcbiAgODcle1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLDApO29wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZseXJlYWR5IHtcclxuICAwJXtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDExMHZ3LDApO29wYWNpdHk6IC43NTtcclxuICB9XHJcbiAgOTUle1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTEwdncsMCk7b3BhY2l0eTogLjc1O1xyXG4gIH1cclxuICAxMDAle1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLDApO29wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 3469:
/*!*****************************************************************!*\
  !*** ./src/app/intro-page/intro-page.component.html?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-grid class=\"ion-no-padding bg-image\">\r\n  <div class=\"background\">\r\n    <div class=\"container\">\r\n      <div class=\"center\">\r\n        <form *ngIf=\"passwordRequired\">\r\n          <ion-item lines=\"full\">\r\n            <ion-label position=\"floating\">Password</ion-label>\r\n            <ion-input type=\"text\" name='passcode' [(ngModel)]=\"passcode\" required></ion-input>\r\n          </ion-item>\r\n        </form>\r\n        <ion-button (click)=\"toTabs()\">Start 1 player</ion-button>\r\n        <br>\r\n        <ion-button [disabled]=\"true\" (click)=\"toTabs()\">Start 2 player</ion-button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  </ion-grid>\r\n</ion-content>\r\n";

/***/ }),

/***/ 804:
/*!**************************************************************!*\
  !*** ./src/app/intro-page/welcome.component.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-grid class=\"ion-no-padding bg-image\">\r\n  <div class=\"background\">\r\n    <div class=\"container\">\r\n      <div class=\"center\">\r\n      <h1 id=\"title\">Hello There Senator!</h1>\r\n    </div>\r\n    <div class=\"center\">\r\n      <p id=\"info1\">My name is Paige and I am your campaign manager!</p>\r\n    </div>\r\n    <div class=\"center\">\r\n\r\n      <p id=\"info2\">It is my job to make sure you have everything you need to win the presidency!</p></div>\r\n      <div class=\"center\">\r\n        <p id=\"info3\">We are on our way to campaign headquarters now...</p></div>\r\n        <div class=\"center\">\r\n          <p id=\"info4\">That's where you can campaign, and see a map of the current state of the race</p></div>\r\n          <div class=\"center\">\r\n            <p id=\"info5\">You can reach me in the HELP tab if you need anything</p></div>\r\n      <img id=\"aid\" src=\"../../../assets/images/aid.png\">\r\n      <div id=\"ready\" class=\"center\">\r\n        <p id=\"info6\">If you are ready to go, let's campaign!</p>\r\n\r\n        <ion-button (click)=\"continue()\">Ready</ion-button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  </ion-grid>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_intro-page_intro_module_ts.js.map