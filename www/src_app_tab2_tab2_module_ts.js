"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab2_tab2_module_ts"],{

/***/ 3092:
/*!*********************************************!*\
  !*** ./src/app/tab2/tab2-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageRoutingModule": () => (/* binding */ Tab2PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 442);




const routes = [
    {
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page,
    }
];
let Tab2PageRoutingModule = class Tab2PageRoutingModule {
};
Tab2PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab2PageRoutingModule);



/***/ }),

/***/ 4608:
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageModule": () => (/* binding */ Tab2PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 442);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab2-routing.module */ 3092);








let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab2PageRoutingModule
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page]
    })
], Tab2PageModule);



/***/ }),

/***/ 442:
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2Page": () => (/* binding */ Tab2Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page.html?ngResource */ 1748);
/* harmony import */ var _tab2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab2.page.scss?ngResource */ 1597);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _stores_votes_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stores/votes.store */ 2049);





let Tab2Page = class Tab2Page {
    constructor(store) {
        this.store = store;
        this.isDemocrat = true;
        this.decidedStates = [];
        this.decidedStatesRight = [];
        this.decidedStatesLeft = [];
        this.rightLeanStates = [];
        this.leftLeanStates = [];
        this.tossUpStatesLeft = [];
        this.tossUpStatesRight = [];
        this.tossUpStates = [];
        this.decidedRed = 0;
        this.decidedBlue = 0;
        this.leanRed = 0;
        this.leanBlue = 0;
        this.tossUp = 0;
        this.national = 0;
        this.updateStateLists();
    }
    ngOnInit() {
        this.isDemocrat = this.store.getUserIsDem();
    }
    updateR() {
        this.store.changeNationalClimate(-5, 0);
        this.national = this.store.NationalClimate;
        this.updateStateLists();
    }
    updateL() {
        // this.store.changeNationalClimate(5, 0);
        // this.national = this.store.NationalClimate;
        this.national = this.store.NationalClimate;
        this.updateStateLists();
    }
    updateStateLists() {
        this.decidedStates = [];
        this.decidedStatesRight = [];
        this.decidedStatesLeft = [];
        this.rightLeanStates = [];
        this.leftLeanStates = [];
        this.tossUpStatesLeft = [];
        this.tossUpStatesRight = [];
        this.tossUpStates = [];
        this.decidedRed = 0;
        this.decidedBlue = 0;
        this.leanRed = 0;
        this.leanBlue = 0;
        this.tossUp = 0;
        this.decidedStates = this.store.getDecidedStates();
        for (const state of this.decidedStates) {
            if (state.leansDem > 0) {
                this.decidedStatesLeft.push(state);
                this.decidedBlue += state.college;
            }
            else {
                this.decidedStatesRight.push(state);
                this.decidedRed += state.college;
            }
        }
        this.leftLeanStates = this.store.getLeftLeanStates();
        for (const state of this.leftLeanStates) {
            this.leanBlue += state.college;
        }
        this.rightLeanStates = this.store.getRightLeanStates();
        for (const state of this.rightLeanStates) {
            this.leanRed += state.college;
        }
        this.tossUpStatesLeft = this.store.getTossUpsLeft();
        this.tossUpStates = this.store.getTossUps();
        this.tossUpStatesRight = this.store.getTossUpsRight();
        for (const state of this.tossUpStatesRight) {
            this.tossUp += state.college;
        }
        for (const state of this.tossUpStatesLeft) {
            this.tossUp += state.college;
        }
        for (const state of this.tossUpStates) {
            this.tossUp += state.college;
        }
    }
};
Tab2Page.ctorParameters = () => [
    { type: _stores_votes_store__WEBPACK_IMPORTED_MODULE_2__.VotesStore }
];
Tab2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-tab2',
        template: _tab2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tab2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab2Page);



/***/ }),

/***/ 1597:
/*!************************************************!*\
  !*** ./src/app/tab2/tab2.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = ".blue {\n  color: rgb(2, 2, 124);\n}\n\n.red {\n  color: rgb(122, 2, 2);\n}\n\n.lightred {\n  color: rgb(228, 15, 50);\n}\n\n.lightblue {\n  color: rgb(6, 99, 238);\n}\n\n.center {\n  text-align: center;\n}\n\n.scorebox {\n  border-radius: 2px;\n  border-color: white;\n  border-style: solid;\n  background-color: rgb(66, 66, 66);\n}\n\n.header-icon {\n  position: fixed;\n  right: 10px;\n  max-height: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBR0E7RUFDRSx1QkFBQTtBQUFGOztBQUdBO0VBQ0Usc0JBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0FBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUFGIiwiZmlsZSI6InRhYjIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsdWUge1xyXG4gIGNvbG9yOiByZ2IoMiwgMiwgMTI0KTtcclxufVxyXG5cclxuLnJlZCB7XHJcbiAgY29sb3I6IHJnYigxMjIsIDIsIDIpO1xyXG59XHJcblxyXG5cclxuLmxpZ2h0cmVkIHtcclxuICBjb2xvcjogcmdiKDIyOCwgMTUsIDUwKTtcclxufVxyXG5cclxuLmxpZ2h0Ymx1ZSB7XHJcbiAgY29sb3I6IHJnYig2LCA5OSwgMjM4KTtcclxufVxyXG5cclxuLmNlbnRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc2NvcmVib3gge1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBib3JkZXItY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY2LCA2NiwgNjYpO1xyXG59XHJcblxyXG4uaGVhZGVyLWljb24ge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICByaWdodDogMTBweDtcclxuICBtYXgtaGVpZ2h0OiAzMHB4O1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 1748:
/*!************************************************!*\
  !*** ./src/app/tab2/tab2.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Map/State Info\n      <img class='header-icon' *ngIf=\"!isDemocrat\" src=\"../../assets/images/republicanIcon.png\">\n      <img class='header-icon' *ngIf=\"isDemocrat\" src=\"../../assets/images/democratIcon.png\">\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Tab 2</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <div class=\"scorebox\">\n  <h1 class=\"center\"><span class=\"blue\">{{decidedBlue}}</span> | <span class=\"lightblue\">{{leanBlue}}</span> | {{tossUp}} | <span class=\"lightred\">{{leanRed}}</span> | <span class=\"red\">{{decidedRed}}</span></h1>\n  </div>\n  <h3>National Climate Leans {{national}}</h3>\n  <ion-button (click)=\"updateL()\">Update Standings</ion-button><br><p>Coming Soon: auto-updating standings</p>\n  <h1>Toss Up States: ({{tossUp}} votes)</h1>\n  <ul>\n    <li class='lightblue' *ngFor=\"let state of tossUpStatesLeft\">{{state.abbreviation}} ({{state.college}} votes): +{{state.leansDem}} to the left</li>\n    <li *ngFor=\"let state of tossUpStates\">{{state.abbreviation}} ({{state.college}} votes): +/-0</li>\n    <li class='lightred' *ngFor=\"let state of tossUpStatesRight\">{{state.abbreviation}} ({{state.college}} votes): +{{state.leansRep}} to the right</li>\n  </ul>\n  <h1>Lean Left States: ({{leanBlue}} votes)</h1>\n  <ul>\n    <li class='lightblue' *ngFor=\"let state of leftLeanStates\">{{state.abbreviation}} ({{state.college}} votes): +{{state.leansDem}} to the left</li>\n  </ul>\n  <h1>Lean Right States: ({{leanRed}} votes)</h1>\n  <ul>\n    <li class='lightred' *ngFor=\"let state of rightLeanStates\">{{state.abbreviation}} ({{state.college}} votes): +{{state.leansRep}} to the right</li>\n  </ul>\n  <h1>Decided States:</h1>\n  <h2>Rep: {{decidedRed}} votes   Dem: {{decidedBlue}} votes</h2>\n  <ul>\n    <li class='lightblue' *ngFor=\"let state of decidedStatesLeft\">{{state.abbreviation}} ({{state.college}} votes)</li>\n    <li class='lightred' *ngFor=\"let state of decidedStatesRight\">{{state.abbreviation}} ({{state.college}} votes)</li>\n  </ul>\n\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tab2_tab2_module_ts.js.map