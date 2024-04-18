"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_options_options_module_ts"],{

/***/ 1753:
/*!******************************************************!*\
  !*** ./src/app/options/background-info.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BackgroundInfoPage": () => (/* binding */ BackgroundInfoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _background_info_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./background-info.component.html?ngResource */ 7361);
/* harmony import */ var _background_info_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./background-info.component.css?ngResource */ 9333);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _stores_votes_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stores/votes.store */ 2049);






let BackgroundInfoPage = class BackgroundInfoPage {
    constructor(route, votes) {
        this.route = route;
        this.votes = votes;
        this.partyName = '';
        this.field1 = '';
        this.field2 = '';
        this.field3 = '';
    }
    ngAfterViewInit() {
    }
    goBack() {
        this.route.navigateByUrl('/options');
    }
    submitBackground() {
        this.votes.setBackground('');
        //this.votes.setUserIsThird(true);
        //this.votes.setThirdPartyName(this.partyName);
        this.route.navigateByUrl('/tabs');
    }
};
BackgroundInfoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _stores_votes_store__WEBPACK_IMPORTED_MODULE_2__.VotesStore }
];
BackgroundInfoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-background-info-page',
        template: _background_info_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_background_info_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], BackgroundInfoPage);



/***/ }),

/***/ 8511:
/*!***********************************************!*\
  !*** ./src/app/options/gamemode.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameModePage": () => (/* binding */ GameModePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _gamemode_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gamemode.component.html?ngResource */ 4025);
/* harmony import */ var _gamemode_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gamemode.component.css?ngResource */ 4986);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _stores_votes_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stores/votes.store */ 2049);






let GameModePage = class GameModePage {
    constructor(route, votes) {
        this.route = route;
        this.votes = votes;
        this.locked = false; //JERMY TEMP VARIABLE FOR LOCKED PURCHASE
    }
    continue(gamemode) {
        this.votes.reset();
        if (gamemode === 'extra') {
            this.route.navigateByUrl('/options/purchase');
        }
        else if (gamemode === 'long') {
            this.votes.setLongGameLength();
            this.route.navigateByUrl('/options/party');
        }
        else if (gamemode === 'random') {
            this.votes.randomizeStates();
            this.route.navigateByUrl('/options/party');
        }
        else if (gamemode === 'e1916') {
            this.votes.setElectionOf1916();
            this.route.navigateByUrl('/options/historic');
        }
        else if (gamemode === 'e1976') {
            this.votes.setElectionOf1976();
            this.route.navigateByUrl('/options/historic');
        }
        else if (gamemode === 'e1876') {
            this.votes.setElectionOf1876();
            this.route.navigateByUrl('/options/historic');
        }
        else {
            this.route.navigateByUrl('/options/party');
        }
    }
    back() {
        this.route.navigateByUrl('/');
    }
};
GameModePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _stores_votes_store__WEBPACK_IMPORTED_MODULE_2__.VotesStore }
];
GameModePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-gamemode-page',
        template: _gamemode_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_gamemode_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], GameModePage);



/***/ }),

/***/ 8621:
/*!****************************************************!*\
  !*** ./src/app/options/historic-info.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistoricInfoPage": () => (/* binding */ HistoricInfoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _historic_info_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./historic-info.component.html?ngResource */ 7755);
/* harmony import */ var _historic_info_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./historic-info.component.css?ngResource */ 404);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _stores_votes_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stores/votes.store */ 2049);






let HistoricInfoPage = class HistoricInfoPage {
    constructor(router, votes) {
        this.router = router;
        this.votes = votes;
    }
    continue() {
        this.router.navigateByUrl('/options/party');
    }
};
HistoricInfoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _stores_votes_store__WEBPACK_IMPORTED_MODULE_2__.VotesStore }
];
HistoricInfoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-historic',
        template: _historic_info_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_historic_info_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HistoricInfoPage);



/***/ }),

/***/ 2636:
/*!***************************************************!*\
  !*** ./src/app/options/options-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OptionsRoutingModule": () => (/* binding */ OptionsRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _partyselect_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partyselect.component */ 4241);
/* harmony import */ var _third_intro_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./third-intro.component */ 3343);
/* harmony import */ var _background_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./background-info.component */ 1753);
/* harmony import */ var _gamemode_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gamemode.component */ 8511);
/* harmony import */ var _purchase_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./purchase.component */ 4789);
/* harmony import */ var _historic_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./historic-info.component */ 8621);









const routes = [
    {
        path: '',
        component: _gamemode_component__WEBPACK_IMPORTED_MODULE_3__.GameModePage,
    },
    {
        path: 'party',
        component: _partyselect_component__WEBPACK_IMPORTED_MODULE_0__.PartySelectPage,
    },
    {
        path: 'third',
        component: _third_intro_component__WEBPACK_IMPORTED_MODULE_1__.ThirdIntroPage
    },
    {
        path: 'background',
        component: _background_info_component__WEBPACK_IMPORTED_MODULE_2__.BackgroundInfoPage
    },
    {
        path: 'purchase',
        component: _purchase_component__WEBPACK_IMPORTED_MODULE_4__.PurchasePage
    },
    {
        path: 'historic',
        component: _historic_info_component__WEBPACK_IMPORTED_MODULE_5__.HistoricInfoPage
    }
];
let OptionsRoutingModule = class OptionsRoutingModule {
};
OptionsRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
    })
], OptionsRoutingModule);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _partyselect_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./partyselect.component */ 4241);
/* harmony import */ var _options_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./options-routing.module */ 2636);
/* harmony import */ var _third_intro_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./third-intro.component */ 3343);
/* harmony import */ var _background_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./background-info.component */ 1753);
/* harmony import */ var _gamemode_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gamemode.component */ 8511);
/* harmony import */ var _purchase_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./purchase.component */ 4789);
/* harmony import */ var _historic_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./historic-info.component */ 8621);













let OptionsModule = class OptionsModule {
};
OptionsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_0__.ExploreContainerComponentModule,
            _options_routing_module__WEBPACK_IMPORTED_MODULE_2__.OptionsRoutingModule
        ],
        declarations: [_gamemode_component__WEBPACK_IMPORTED_MODULE_5__.GameModePage, _partyselect_component__WEBPACK_IMPORTED_MODULE_1__.PartySelectPage, _third_intro_component__WEBPACK_IMPORTED_MODULE_3__.ThirdIntroPage, _background_info_component__WEBPACK_IMPORTED_MODULE_4__.BackgroundInfoPage, _purchase_component__WEBPACK_IMPORTED_MODULE_6__.PurchasePage, _historic_info_component__WEBPACK_IMPORTED_MODULE_7__.HistoricInfoPage]
    })
], OptionsModule);



/***/ }),

/***/ 4241:
/*!**************************************************!*\
  !*** ./src/app/options/partyselect.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PartySelectPage": () => (/* binding */ PartySelectPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _partyselect_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partyselect.component.html?ngResource */ 4009);
/* harmony import */ var _partyselect_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./partyselect.component.css?ngResource */ 6910);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _stores_votes_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stores/votes.store */ 2049);






let PartySelectPage = class PartySelectPage {
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
            // this.route.navigateByUrl('/options/background');TODO add options here
        }
    }
    back() {
        this.route.navigateByUrl('/options');
    }
};
PartySelectPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _stores_votes_store__WEBPACK_IMPORTED_MODULE_2__.VotesStore }
];
PartySelectPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-partyselect-page',
        template: _partyselect_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_partyselect_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PartySelectPage);



/***/ }),

/***/ 4789:
/*!***********************************************!*\
  !*** ./src/app/options/purchase.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchasePage": () => (/* binding */ PurchasePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _purchase_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./purchase.component.html?ngResource */ 490);
/* harmony import */ var _partyselect_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./partyselect.component.css?ngResource */ 6910);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _stores_votes_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stores/votes.store */ 2049);






let PurchasePage = class PurchasePage {
    constructor(route, votes) {
        this.route = route;
        this.votes = votes;
    }
    back() {
        this.route.navigateByUrl('/options');
    }
};
PurchasePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _stores_votes_store__WEBPACK_IMPORTED_MODULE_2__.VotesStore }
];
PurchasePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-purchase-page',
        template: _purchase_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_partyselect_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PurchasePage);



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

/***/ 9333:
/*!******************************************************************!*\
  !*** ./src/app/options/background-info.component.css?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = ".game-title {\r\n  padding-top: 40%;\r\n  text-align: center;\r\n  font-size: 38px;\r\n}\r\n\r\n.container {\r\n  height: 200px;\r\n  position: relative;\r\n}\r\n\r\n.center {\r\n  font-size: large;\r\n  text-align: center;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  left: 50%\r\n}\r\n\r\n/* .bg-image {\r\n    background: url(\"../../assets/images/background.png\")!important;\r\n    background-size: cover!important;\r\n    background-repeat: no-repeat;\r\n    height: 95%;\r\n} */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhY2tncm91bmQtaW5mby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFHQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkI7QUFDRjs7QUFFQTs7Ozs7R0FLRyIsImZpbGUiOiJiYWNrZ3JvdW5kLWluZm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nYW1lLXRpdGxlIHtcclxuICBwYWRkaW5nLXRvcDogNDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDM4cHg7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5cclxuLmNlbnRlciB7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGxlZnQ6IDUwJVxyXG59XHJcblxyXG4vKiAuYmctaW1hZ2Uge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kLnBuZ1wiKSFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBoZWlnaHQ6IDk1JTtcclxufSAqL1xyXG4iXX0= */";

/***/ }),

/***/ 4986:
/*!***********************************************************!*\
  !*** ./src/app/options/gamemode.component.css?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = ".party-button {\r\n  height: 25%;\r\n  width: 90%;\r\n  text-align: center;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  left: 50%\r\n}\r\n\r\n.center {\r\n  font-size: large;\r\n  text-align: center;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  left: 50%\r\n}\r\n\r\n.fix-center {\r\n  position: fixed;\r\n  bottom: 16px;\r\n  left: 16px;\r\n}\r\n\r\n.backbutton {\r\n  position: absolute;\r\n}\r\n\r\nh1 {\r\n  text-align: center;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  left: 50%\r\n}\r\n\r\n.tall {\r\n  height: 120px;\r\n  font-size: 40px;\r\n}\r\n\r\n.medium {\r\n  height: 60px;\r\n  font-size: 28px;\r\n}\r\n\r\n.short {\r\n  height: 40px;\r\n  font-size: 20px;\r\n}\r\n\r\n.extra {\r\n  box-shadow: 1px 1px 4px 4px #888888;\r\n  border: 2px black solid !important;\r\n  border-radius: 8px;\r\n  --background: none;\r\n  background-position: center center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  color: black;\r\n  margin-bottom: 4px;\r\n  margin-top: 4px;\r\n\r\n}\r\n\r\np {\r\n  text-shadow: 2px 2px 4px white, 0 0 1em white, 0 0 0.2em white;\r\n}\r\n\r\n.hr {\r\n  border-bottom: 1px solid #ccc;\r\n  margin: 10px 0;\r\n  width: 100%;\r\n}\r\n\r\n.hr h3 {\r\n  margin-left: 8px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWVtb2RlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQjtBQUNGOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQjtBQUNGOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkI7QUFDRjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQ0FBa0M7RUFDbEMsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7O0FBRWpCOztBQUVBO0VBQ0UsOERBQThEO0FBQ2hFOztBQUNBO0VBQ0UsNkJBQTZCO0VBQzdCLGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoiZ2FtZW1vZGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXJ0eS1idXR0b24ge1xyXG4gIGhlaWdodDogMjUlO1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBsZWZ0OiA1MCVcclxufVxyXG5cclxuLmNlbnRlciB7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGxlZnQ6IDUwJVxyXG59XHJcblxyXG4uZml4LWNlbnRlciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMTZweDtcclxuICBsZWZ0OiAxNnB4O1xyXG59XHJcblxyXG4uYmFja2J1dHRvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBsZWZ0OiA1MCVcclxufVxyXG5cclxuLnRhbGwge1xyXG4gIGhlaWdodDogMTIwcHg7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG59XHJcblxyXG4ubWVkaXVtIHtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG59XHJcblxyXG4uc2hvcnQge1xyXG4gIGhlaWdodDogNDBweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5leHRyYSB7XHJcbiAgYm94LXNoYWRvdzogMXB4IDFweCA0cHggNHB4ICM4ODg4ODg7XHJcbiAgYm9yZGVyOiAycHggYmxhY2sgc29saWQgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgbWFyZ2luLXRvcDogNHB4O1xyXG5cclxufVxyXG5cclxucCB7XHJcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4IHdoaXRlLCAwIDAgMWVtIHdoaXRlLCAwIDAgMC4yZW0gd2hpdGU7XHJcbn1cclxuLmhyIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcclxuICBtYXJnaW46IDEwcHggMDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmhyIGgzIHtcclxuICBtYXJnaW4tbGVmdDogOHB4O1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 404:
/*!****************************************************************!*\
  !*** ./src/app/options/historic-info.component.css?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = ".center {\r\n  font-size: large;\r\n  text-align: left;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  left: 50%;\r\n  margin-left: 5%;\r\n  margin-right: 5%;\r\n}\r\n\r\np {\r\n  margin-top: 6px;\r\n  margin-bottom: 6px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpc3RvcmljLWluZm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCIiwiZmlsZSI6Imhpc3RvcmljLWluZm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXIge1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbGVmdDogNTAlO1xyXG4gIG1hcmdpbi1sZWZ0OiA1JTtcclxuICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG59XHJcblxyXG5wIHtcclxuICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 6910:
/*!**************************************************************!*\
  !*** ./src/app/options/partyselect.component.css?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = ".party-button {\r\n  height: 25%;\r\n  width: 90%;\r\n  text-align: center;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  left: 50%\r\n}\r\n\r\n.center {\r\n  font-size: large;\r\n  text-align: center;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  left: 50%\r\n}\r\n\r\n.fix-center {\r\n  position: fixed;\r\n  bottom: 16px;\r\n  left: 16px;\r\n}\r\n\r\n.backbutton {\r\n  position: absolute;\r\n}\r\n\r\nh1 {\r\n  text-align: center;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  left: 50%\r\n}\r\n\r\n.extra {\r\n  box-shadow: 1px 1px 4px 4px #888888;\r\n  border: 2px black solid !important;\r\n  border-radius: 8px;\r\n  --background: none;\r\n  background-position: center center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  font-size: 3em;\r\n  height: 150px;\r\n  color: black;\r\n  margin-bottom: 4px;\r\n  margin-top: 4px;\r\n\r\n}\r\n\r\np {\r\n  text-shadow: 1px 1px 2px white, 0 0 1em white, 0 0 0.2em white;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnR5c2VsZWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQjtBQUNGOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQjtBQUNGOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkI7QUFDRjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQ0FBa0M7RUFDbEMsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2QsYUFBYTtFQUNiLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTs7QUFFakI7O0FBRUE7RUFDRSw4REFBOEQ7QUFDaEUiLCJmaWxlIjoicGFydHlzZWxlY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXJ0eS1idXR0b24ge1xyXG4gIGhlaWdodDogMjUlO1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBsZWZ0OiA1MCVcclxufVxyXG5cclxuLmNlbnRlciB7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGxlZnQ6IDUwJVxyXG59XHJcblxyXG4uZml4LWNlbnRlciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMTZweDtcclxuICBsZWZ0OiAxNnB4O1xyXG59XHJcblxyXG4uYmFja2J1dHRvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbmgxIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGxlZnQ6IDUwJVxyXG59XHJcblxyXG4uZXh0cmEge1xyXG4gIGJveC1zaGFkb3c6IDFweCAxcHggNHB4IDRweCAjODg4ODg4O1xyXG4gIGJvcmRlcjogMnB4IGJsYWNrIHNvbGlkICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIC0tYmFja2dyb3VuZDogbm9uZTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBmb250LXNpemU6IDNlbTtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgbWFyZ2luLXRvcDogNHB4O1xyXG5cclxufVxyXG5cclxucCB7XHJcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IHdoaXRlLCAwIDAgMWVtIHdoaXRlLCAwIDAgMC4yZW0gd2hpdGU7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 5630:
/*!**************************************************************!*\
  !*** ./src/app/options/third-intro.component.css?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = ".game-title {\r\n  padding-top: 40%;\r\n  text-align: center;\r\n  font-size: 38px;\r\n}\r\n\r\n.container {\r\n  height: 200px;\r\n  position: relative;\r\n}\r\n\r\n.center {\r\n  font-size: large;\r\n  text-align: center;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  left: 50%\r\n}\r\n\r\n/* .bg-image {\r\n    background: url(\"../../assets/images/background.png\")!important;\r\n    background-size: cover!important;\r\n    background-repeat: no-repeat;\r\n    height: 95%;\r\n} */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRoaXJkLWludHJvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUdBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQjtBQUNGOztBQUVBOzs7OztHQUtHIiwiZmlsZSI6InRoaXJkLWludHJvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2FtZS10aXRsZSB7XHJcbiAgcGFkZGluZy10b3A6IDQwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAzOHB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuXHJcbi5jZW50ZXIge1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBsZWZ0OiA1MCVcclxufVxyXG5cclxuLyogLmJnLWltYWdlIHtcclxuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC5wbmdcIikhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgaGVpZ2h0OiA5NSU7XHJcbn0gKi9cclxuIl19 */";

/***/ }),

/***/ 7361:
/*!*******************************************************************!*\
  !*** ./src/app/options/background-info.component.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "<!-- TODO NOT IN USE -->\r\n<!-- <ion-content [fullscreen]=\"true\">\r\n  <ion-grid class=\"ion-no-padding bg-image\">\r\n  <div class=\"background\">\r\n    <div class=\"center\">\r\n      <h1 id=\"title\">You have just won the Republican Nomination!</h1>\r\n    </div>\r\n    <div class=\"center\">\r\n      <p id=\"info1\">A general election will be held in 16 weeks to decide the next President of The United States</p>\r\n    </div>\r\n    <div class=\"center\">\r\n    <p id=\"info2\">To win the presidency you need 270 Electoral Votes (INSERT SOME BASIC INTRO TO ELECTORAL COLLEGE)</p>\r\n    </div>\r\n    <div class=\"center\">\r\n    <p id=\"info3\">Before you begin, you need to choose some campaign promises:</p>\r\n    </div>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\">\r\n          Financial Promise\r\n       </ion-label>\r\n        <ion-select label=\"Financial Promise\" placeholder=\"Make A Promise\">\r\n          <ion-select-option value=\"apple\">Help Small Businesses</ion-select-option>\r\n          <ion-select-option value=\"apple2\">Boost the Stock Market</ion-select-option>\r\n          <ion-select-option value=\"banana\">Give people jobs</ion-select-option>\r\n          <ion-select-option value=\"orange\">Help the Poor</ion-select-option>\r\n          <ion-select-option value=\"orange2\">Help the Rich</ion-select-option>\r\n\r\n        </ion-select>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\">\r\n          Personal Values\r\n        </ion-label>\r\n        <ion-select label=\"Campaign Slogan\" placeholder=\"Choose A Value\">\r\n          <ion-select-option value=\"banana\">I Am Honest</ion-select-option>\r\n          <ion-select-option value=\"banana3\">I Am Famous</ion-select-option>\r\n          <ion-select-option value=\"banana2\">I Am Handsome</ion-select-option>\r\n          <ion-select-option value=\"orange2\">I Am Qualified</ion-select-option>\r\n          <ion-select-option value=\"apple2\">I Am Not That Bad</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\">\r\n          Your Political Background\r\n        </ion-label>\r\n        <ion-select label=\"Campaign Slogan\" placeholder=\"Choose Political Background\">\r\n          <ion-select-option value=\"banana\">Former Senator</ion-select-option>\r\n          <ion-select-option value=\"orange\">Former Governor</ion-select-option>\r\n          <ion-select-option value=\"orange2\">Former Vice President</ion-select-option>\r\n          <ion-select-option value=\"orange3\">Former Military Leader</ion-select-option>\r\n          <ion-select-option value=\"apple\">No Prior Experience</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n\r\n      <br>\r\n      <div class=\"center\">\r\n        <ion-button class=\"button43\" [disabled]=\"false\" (click)=\"submitBackground()\">Start The Race</ion-button>\r\n      </div>\r\n\r\n  </div>\r\n  </ion-grid>\r\n</ion-content> -->\r\n";

/***/ }),

/***/ 4025:
/*!************************************************************!*\
  !*** ./src/app/options/gamemode.component.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"false\">\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      Game Mode\r\n    </ion-title>\r\n    <ion-button fill=\"clear\" id=\"click-triggerChoosemode\"><ion-icon name=\"help-circle-outline\"></ion-icon></ion-button>\r\n    <ion-popover trigger=\"click-triggerChoosemode\" triggerAction=\"click\">\r\n      <ng-template>\r\n        <ion-content class=\"ion-padding\">\r\n          <h3>Game Mode Selection</h3>\r\n          <p>Decide if you want to play the basic game, or a special game mode.</p>\r\n        </ion-content>\r\n      </ng-template>\r\n    </ion-popover>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <div class=\"fix-center\">\r\n    <ion-button class=\"button43\" (click)=\"back()\"><ion-icon name=\"arrow-back-circle-outline\"></ion-icon>Back To Main Menu</ion-button>\r\n  </div>\r\n <h1>Select a game mode</h1>\r\n\r\n\r\n  <div class=\"hr\"><h3>Classic</h3> </div>\r\n<div class=\"center\">\r\n<button color=\"clear\" class=\"party-button button43 extra tall\" (click)=\"continue('')\" style=\"background: url(../../assets/ClassicBackground.png) no-repeat center/cover fixed;\"><br><p>CLASSIC <br>(2024 election)</p></button>\r\n</div>\r\n<!-- LOCKED -->\r\n<div class=\"hr\"><h3>Special</h3> </div>\r\n<div class=\"center locked\" *ngIf=\"locked\">\r\n  <button color=\"clear\" class=\"party-button button43 extra short\" (click)=\"continue('extra')\" style=\"background: url(../../assets/PlainBackground.png) no-repeat center/cover fixed;\"><br><p>32 Round Mode</p><ion-icon name=\"lock-closed\"></ion-icon></button>\r\n</div>\r\n<div class=\"center locked\" *ngIf=\"locked\">\r\n  <button color=\"clear\" class=\"party-button button43 extra short\" (click)=\"continue('extra')\" style=\"background: url(../../assets/PlainBackground.png) no-repeat center/cover fixed;\"><br><p>Randomized States</p><ion-icon name=\"lock-closed\"></ion-icon></button>\r\n</div>\r\n<div class=\"center\" *ngIf=\"!locked\">\r\n  <button color=\"clear\" class=\"party-button button43 extra medium\" (click)=\"continue('long')\" style=\"background: url(../../assets/EmptyBackground.png) no-repeat center/cover fixed;\"><br><p>32 Round Mode</p></button>\r\n</div>\r\n<div class=\"center\" *ngIf=\"!locked\">\r\n  <button color=\"clear\" class=\"party-button button43 extra medium\" (click)=\"continue('random')\" style=\"background: url(../../assets/RandomBackground.png) no-repeat center/cover fixed;\"><br><p>Randomized States</p></button>\r\n</div>\r\n<div class=\"hr\"><h3>Historic Elections</h3> </div>\r\n\r\n<div class=\"center locked\" *ngIf=\"locked\">\r\n  <button color=\"clear\" class=\"party-button button43 extra short\" (click)=\"continue('extra')\" style=\"background: url(../../assets/PlainBackground.png) no-repeat center/cover fixed;\"><br><p>Election Of 1876</p><ion-icon name=\"lock-closed\"></ion-icon></button>\r\n  </div>\r\n  <div class=\"center locked\" *ngIf=\"locked\">\r\n    <button color=\"clear\" class=\"party-button button43 extra short\" (click)=\"continue('extra')\" style=\"background: url(../../assets/PlainBackground.png) no-repeat center/cover fixed;\"><br><p>Election Of 1916</p><ion-icon name=\"lock-closed\"></ion-icon></button>\r\n    </div>\r\n    <div class=\"center locked\" *ngIf=\"locked\">\r\n      <button color=\"clear\" class=\"party-button button43 extra short\" (click)=\"continue('extra')\" style=\"background: url(../../assets/PlainBackground.png) no-repeat center/cover fixed;\"><br><p>Election Of 1976</p><ion-icon name=\"lock-closed\"></ion-icon></button>\r\n      </div>\r\n\r\n<!-- JERMY fix the button backgrounds here -->\r\n<!-- UNLOCKED -->\r\n\r\n\r\n\r\n  <div class=\"center\" *ngIf=\"!locked\">\r\n    <button color=\"clear\" class=\"party-button button43 extra medium\" (click)=\"continue('e1876')\" style=\"background: url(../../assets/Background186.png) no-repeat center/cover fixed;\"><br><p>Election Of 1876</p></button>\r\n    </div>\r\n    <div class=\"center\" *ngIf=\"!locked\">\r\n      <button color=\"clear\" class=\"party-button button43 extra medium\" (click)=\"continue('e1916')\" style=\"background: url(../../assets/Background1916.png) no-repeat center/cover fixed;\"><br><p>Election Of 1916</p></button>\r\n      </div>\r\n      <div class=\"center\" *ngIf=\"!locked\">\r\n        <button color=\"clear\" class=\"party-button button43 extra medium\" (click)=\"continue('e1976')\" style=\"background: url(../../assets/Background1976.png) no-repeat center/cover fixed;\"><br><p>Election Of 1976</p></button>\r\n      </div>\r\n      <br>\r\n      <br>\r\n      <br>\r\n      <br>\r\n      <br>\r\n\r\n\r\n</ion-content>\r\n";

/***/ }),

/***/ 7755:
/*!*****************************************************************!*\
  !*** ./src/app/options/historic-info.component.html?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"false\">\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      Historic Election\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <div class=\"center\" style=\"text-align: center;\">\r\n    <p><strong>You are playing with a historic map!</strong></p>\r\n  </div>\r\n  <div *ngIf=\"this.votes.mapTitle === '1876 Election'\">\r\n    <div class=\"center\">\r\n      <h1>Election of 1876 background</h1>\r\n    </div>\r\n    <div class=\"center\"><img style=\"height: 72px;\" src=\"../../assets/images/presidents/19-hayes.jpg\"></div>\r\n    <div class=\"center\">\r\n      <p>The election of 1876 was a close race, in which Rutherford B Hayes won by only 1 electoral vote.</p>\r\n    </div>\r\n    <div class=\"center\">\r\n      <p>Electoral Vote distribution and state preferences were very different in 1876 than they are today. You will notice many states that were not yet added to the union.</p>\r\n    </div>\r\n    <div class=\"center\">\r\n      <p>This was the 2nd presidential election after the passing of 15th amendment in 1870 that gave black men the right to vote, but sadly many were still wrongly denied that right. Women were also not allowed to vote in this election.</p>\r\n    </div>\r\n    <div class=\"center\">\r\n      <p>Interestingly, Colorado had just become a state when this election happened, and lack of time to prepare led to no presidential election taking place there.  Colorado's electoral votes were instead assigned by their state leaders. While this game mode is inspired by the historic data, you will notice that Colorado follows a normal election format in this game.</p>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"this.votes.mapTitle === '1916 Election'\">\r\n    <div class=\"center\">\r\n      <h1>Election of 1916 background</h1>\r\n    </div>\r\n    <div class=\"center\"><img style=\"height: 72px;\" src=\"../../assets/images/presidents/28-wilson.jpg\"></div>\r\n    <div class=\"center\">\r\n      <p>The election of 1916 was a close race, in which Woodrow Wilson won reelection.</p>\r\n    </div>\r\n    <div class=\"center\">\r\n      <p>Central issues of the election included: Entering World War 1, Segregation in the South, and Women's Right to Vote.</p>\r\n    </div>\r\n    <div class=\"center\">\r\n      <p>Electoral Vote distribution and state preferences were very different in 1916 than they are today.</p>\r\n    </div>\r\n    <div class=\"center\">\r\n      <p>Alaska and Hawaii were not states yet in 1916! They became states in 1959.</p>\r\n    </div>\r\n    <div class=\"center\">\r\n      <p>Washington DC had no electoral votes in 1916, the 23rd amendment was passed in 1961 to give them the power to vote for president.</p>\r\n    </div>\r\n\r\n  </div>\r\n  <div *ngIf=\"this.votes.mapTitle === '1976 Election'\">\r\n    <div class=\"center\">\r\n      <h1>Election of 1976 background</h1>\r\n    </div>\r\n    <div class=\"center\"><img style=\"height: 72px;\" src=\"../../assets/images/presidents/39-carter.jpg\"></div>\r\n    <div class=\"center\">\r\n      <p>The election of 1976 was a close race, in which Jimmy Carter was elected president.</p>\r\n    </div>\r\n    <div class=\"center\">\r\n      <p>Gerald Ford lost the race, ending his presidency.</p>\r\n    </div>\r\n    <div class=\"center\">\r\n      <p>Central issues of the election included: The Watergate Scandal, International Affairs, and Economic Recession.</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"center\">\r\n    <ion-button class=\"button43\" (click)=\"continue()\">Continue</ion-button>\r\n  </div>\r\n  <br>\r\n  <br>\r\n</ion-content>\r\n";

/***/ }),

/***/ 4009:
/*!***************************************************************!*\
  !*** ./src/app/options/partyselect.component.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"false\">\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      Party Selection\r\n    </ion-title>\r\n    <ion-button fill=\"clear\" id=\"click-triggerChoose\"><ion-icon name=\"help-circle-outline\"></ion-icon></ion-button>\r\n    <ion-popover trigger=\"click-triggerChoose\" triggerAction=\"click\">\r\n      <ng-template>\r\n        <ion-content class=\"ion-padding\">\r\n          <h3>Choose a party!</h3>\r\n          <p>There are 2 major parties in the USA, the Republican Party and the Democratic Party.</p>\r\n          <p>Depending on which party you choose, different states will support you.</p>\r\n        </ion-content>\r\n      </ng-template>\r\n    </ion-popover>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <div class=\"fix-center\">\r\n    <ion-button class=\"button43\" (click)=\"back()\"><ion-icon name=\"arrow-back-circle-outline\"></ion-icon>Back To Game Mode</ion-button>\r\n  </div>\r\n<br>\r\n<h1>Choose your party!</h1>\r\n<br>\r\n<div class=\"center\">\r\n<button color=\"clear\" class=\"party-button button43 extra\" (click)=\"continue('rep')\" style=\"background: url(../../assets/RepBackground.png) no-repeat center/cover fixed;\"><br><p>REPUBLICAN</p></button>\r\n</div>\r\n<div class=\"center\">\r\n<button color=\"clear\" class=\"party-button button43 extra\" (click)=\"continue('dem')\" style=\"background: url(../../assets/DemBackground.png) no-repeat center/cover fixed;\"><br><p>DEMOCRAT</p></button>\r\n</div>\r\n\r\n</ion-content>\r\n";

/***/ }),

/***/ 490:
/*!************************************************************!*\
  !*** ./src/app/options/purchase.component.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"false\">\r\n  <ion-toolbar>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <div class=\"center\"><h1> Coming Soon</h1></div>\r\n  <div class=\"center\">\r\n<h3>'Extra Game Mode' Bundle</h3></div>\r\n<!-- <div class=\"center\">\r\n\r\n<h1>$1.99</h1></div> -->\r\n<div class=\"center\">\r\n\r\n  <h3>Includes:</h3></div>\r\n<div class=\"center\">\r\n<p style=\"margin-top: 0px;\">Randomized State Mode</p></div>\r\n<div class=\"center\">\r\n  <p style=\"margin-top: 0px;\">32 Round Game Mode</p></div>\r\n<div class=\"center\">\r\n<p style=\"margin-top: 0px;\">Historic Election Maps</p></div>\r\n\r\n<div class=\"center\">\r\n<ion-button class=\"button43\" disabled=\"true\">Try It Now</ion-button>\r\n</div>\r\n  <div class=\"center\">\r\n<h1> Coming soon... </h1></div>\r\n\r\n  <div class=\"fix-center\">\r\n  <ion-button class=\"button43\" (click)=\"back()\"><ion-icon name=\"arrow-back-circle-outline\"></ion-icon>Back To Game Mode</ion-button>\r\n</div>\r\n\r\n</ion-content>\r\n";

/***/ }),

/***/ 7242:
/*!***************************************************************!*\
  !*** ./src/app/options/third-intro.component.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-grid class=\"ion-no-padding bg-image\">\r\n  <div class=\"background\">\r\n    <div class=\"center\">\r\n      <h1 id=\"title\">You have chosen to run 3rd party</h1>\r\n    </div>\r\n    <div class=\"center\">\r\n      <h2 style=\"color: darkred\">THIS GAME MODE IS NOT FINISHED.</h2>\r\n    </div>\r\n    <div class=\"center\">\r\n      <p id=\"info1\">You will begin the game with only 2% popularity in each state.</p>\r\n    </div>\r\n    <div class=\"center\">\r\n    <p id=\"info2\">You can go back and select a major party now:</p>\r\n    </div>\r\n    <div class=\"center\">\r\n    <ion-button class=\"button43\" (click)=\"goBack()\">Go Back</ion-button>\r\n    </div>\r\n    <div class=\"center\">\r\n    <p id=\"info3\">Or chose a name for your new party and continue on to the race:</p>\r\n    </div>\r\n    <div class=\"center\">\r\n\r\n    <ion-item>\r\n      <ion-input maxlength=\"12\" [(ngModel)]=\"partyName\" placeholder=\"Party Name\" text-right label=\"Party Name\"></ion-input>\r\n    </ion-item>\r\n\r\n    </div>\r\n    <div class=\"center\">\r\n      <ion-button class=\"button43\" [disabled]=\"partyName === ''\" (click)=\"submitName()\">Start The Race</ion-button>\r\n\r\n    </div>\r\n  </div>\r\n  </ion-grid>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_options_options_module_ts.js.map