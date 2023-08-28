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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _options_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./options.component */ 7832);
/* harmony import */ var _third_intro_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./third-intro.component */ 3343);





const routes = [
    {
        path: '',
        component: _options_component__WEBPACK_IMPORTED_MODULE_0__.OptionsPage,
    },
    {
        path: 'third',
        component: _third_intro_component__WEBPACK_IMPORTED_MODULE_1__.ThirdIntroPage
    },
];
let OptionsRoutingModule = class OptionsRoutingModule {
};
OptionsRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
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
    continue(party) {
        let isDemocrat = false;
        if (party === 'dem') {
            isDemocrat = true;
        }
        this.votes.setUserIsDem(isDemocrat);
        if (party === 'three') {
            this.votes.setUserIsThird(true);
            this.route.navigateByUrl('/options/third');
        }
        else {
            this.route.navigateByUrl('/tabs');
        }
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _options_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./options.component */ 7832);
/* harmony import */ var _options_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./options-routing.module */ 2636);
/* harmony import */ var _third_intro_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./third-intro.component */ 3343);









let OptionsModule = class OptionsModule {
};
OptionsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_0__.ExploreContainerComponentModule,
            _options_routing_module__WEBPACK_IMPORTED_MODULE_2__.OptionsRoutingModule
        ],
        declarations: [_options_component__WEBPACK_IMPORTED_MODULE_1__.OptionsPage, _third_intro_component__WEBPACK_IMPORTED_MODULE_3__.ThirdIntroPage]
    })
], OptionsModule);



/***/ }),

/***/ 3343:
/*!**************************************************!*\
  !*** ./src/app/options/third-intro.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThirdIntroPage": () => (/* binding */ ThirdIntroPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _third_intro_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./third-intro.component.html?ngResource */ 7242);
/* harmony import */ var _third_intro_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./third-intro.component.css?ngResource */ 5630);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _stores_votes_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stores/votes.store */ 2049);






let ThirdIntroPage = class ThirdIntroPage {
    constructor(route, votes) {
        this.route = route;
        this.votes = votes;
        this.partyName = '';
    }
    ngAfterViewInit() {
    }
    goBack() {
        this.route.navigateByUrl('/options');
    }
    submitName() {
        this.votes.setUserIsThird(true);
        this.votes.setThirdPartyName(this.partyName);
        this.route.navigateByUrl('/tabs');
    }
};
ThirdIntroPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _stores_votes_store__WEBPACK_IMPORTED_MODULE_2__.VotesStore }
];
ThirdIntroPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-third-intro-page',
        template: _third_intro_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_third_intro_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ThirdIntroPage);



/***/ }),

/***/ 3330:
/*!**********************************************************!*\
  !*** ./src/app/options/options.component.css?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = ".party-button {\r\n  height: 25%;\r\n  width: 90%;\r\n  text-align: center;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  left: 50%\r\n}\r\n\r\n.center {\r\n  position: relative;\r\n  margin: auto;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\nh1 {\r\n  text-align: center;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  left: 50%\r\n}\r\n\r\nion-button {\r\n  border: 2px black solid;\r\n  border-radius: 8px;\r\n  --background: none;\r\n  background-position: center center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  font-size: 3em;\r\n  color: black;\r\n}\r\n\r\np {\r\n  text-shadow: 1px 1px 2px white, 0 0 1em white, 0 0 0.2em white;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9wdGlvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQjtBQUNGOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0NBQWtDO0VBQ2xDLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsY0FBYztFQUNkLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDhEQUE4RDtBQUNoRSIsImZpbGUiOiJvcHRpb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFydHktYnV0dG9uIHtcclxuICBoZWlnaHQ6IDI1JTtcclxuICB3aWR0aDogOTAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbGVmdDogNTAlXHJcbn1cclxuXHJcbi5jZW50ZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbmgxIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGxlZnQ6IDUwJVxyXG59XHJcblxyXG5pb24tYnV0dG9uIHtcclxuICBib3JkZXI6IDJweCBibGFjayBzb2xpZDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGZvbnQtc2l6ZTogM2VtO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxucCB7XHJcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IHdoaXRlLCAwIDAgMWVtIHdoaXRlLCAwIDAgMC4yZW0gd2hpdGU7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 5630:
/*!**************************************************************!*\
  !*** ./src/app/options/third-intro.component.css?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = ".game-title {\r\n  padding-top: 40%;\r\n  text-align: center;\r\n  font-size: 38px;\r\n}\r\n\r\n.container {\r\n  height: 200px;\r\n  position: relative;\r\n}\r\n\r\n.center {\r\n  font-size: large;\r\n  text-align: center;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  left: 50%\r\n}\r\n\r\n/* .bg-image {\r\n    background: url(\"../../assets/images/background.png\")!important;\r\n    background-size: cover!important;\r\n    background-repeat: no-repeat;\r\n    height: 95%;\r\n} */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRoaXJkLWludHJvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUdBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQjtBQUNGOztBQUVBOzs7OztHQUtHIiwiZmlsZSI6InRoaXJkLWludHJvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2FtZS10aXRsZSB7XHJcbiAgcGFkZGluZy10b3A6IDQwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAzOHB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuXHJcbi5jZW50ZXIge1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBsZWZ0OiA1MCVcclxufVxyXG5cclxuLyogLmJnLWltYWdlIHtcclxuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC5wbmdcIikhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgaGVpZ2h0OiA5NSU7XHJcbn0gKi9cclxuIl19 */";

/***/ }),

/***/ 7553:
/*!***********************************************************!*\
  !*** ./src/app/options/options.component.html?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "<ion-content [fullscreen]=\"true\">\r\n\r\n<ion-grid>\r\n<h1>Choose your party!</h1>\r\n<div class=\"center\">\r\n<ion-button color=\"clear\" class=\"party-button\" (click)=\"continue('rep')\" style=\"background: url(../../assets/images/republicanWide.png) no-repeat center/cover fixed;\"><br><p>REPUBLICAN</p></ion-button>\r\n</div>\r\n<div class=\"center\">\r\n<ion-button  color=\"clear\" class=\"party-button\" (click)=\"continue('dem')\" style=\"background: url(../../assets/images/democratWide.png) no-repeat center/cover fixed;\"><br><p>DEMOCRAT</p></ion-button>\r\n</div>\r\n<div class=\"center\">\r\n  <ion-button  color=\"clear\" class=\"party-button\" (click)=\"continue('three')\" style=\"background: url(../../assets/images/thirdWide.png) no-repeat center/cover fixed;\">\r\n    <div>\r\n      <p style=\"margin-bottom: 1px;\">THIRD PARTY</p>\r\n      <p style=\"font-size: medium; margin-top: 0px;\">(HARD DIFFICULTY)</p>\r\n    </div>\r\n  </ion-button>\r\n  </div>\r\n</ion-grid>\r\n\r\n</ion-content>\r\n";

/***/ }),

/***/ 7242:
/*!***************************************************************!*\
  !*** ./src/app/options/third-intro.component.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-grid class=\"ion-no-padding bg-image\">\r\n  <div class=\"background\">\r\n    <div class=\"center\">\r\n      <h1 id=\"title\">You have chosen to run 3rd party</h1>\r\n    </div>\r\n    <div class=\"center\">\r\n      <h2 style=\"color: darkred\">THIS GAME MODE IS NOT FINISHED.</h2>\r\n    </div>\r\n    <div class=\"center\">\r\n      <p id=\"info1\">You will begin the game with only 2% popuarity in each state.</p>\r\n    </div>\r\n    <div class=\"center\">\r\n    <p id=\"info2\">You can go back and select a major party now:</p>\r\n    </div>\r\n    <div class=\"center\">\r\n    <ion-button (click)=\"goBack()\">Go Back</ion-button>\r\n    </div>\r\n    <div class=\"center\">\r\n    <p id=\"info3\">Or chose a name for your new party and continue on to the race:</p>\r\n    </div>\r\n    <div class=\"center\">\r\n\r\n    <ion-item>\r\n      <ion-input maxlength=\"12\" [(ngModel)]=\"partyName\" placeholder=\"Party Name\" text-right label=\"Party Name\"></ion-input>\r\n    </ion-item>\r\n\r\n    </div>\r\n    <div class=\"center\">\r\n      <ion-button [disabled]=\"partyName === ''\" (click)=\"submitName()\">Start The Race</ion-button>\r\n\r\n    </div>\r\n  </div>\r\n  </ion-grid>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_options_options_module_ts.js.map