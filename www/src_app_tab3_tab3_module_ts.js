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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab3_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page.html?ngResource */ 9769);
/* harmony import */ var _tab3_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab3.page.scss?ngResource */ 7087);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _stores_votes_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stores/votes.store */ 2049);





let Tab3Page = class Tab3Page {
    constructor(votes) {
        this.votes = votes;
    }
    ngOnInit() {
        this.isDemocrat = this.votes.getUserIsDem();
    }
};
Tab3Page.ctorParameters = () => [
    { type: _stores_votes_store__WEBPACK_IMPORTED_MODULE_2__.VotesStore }
];
Tab3Page = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
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

module.exports = "p {\n  text-align: center;\n}\n\nh1 {\n  text-align: center;\n}\n\nh3 {\n  text-align: center;\n}\n\n.header-icon {\n  position: fixed;\n  right: 10px;\n  max-height: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUNGIiwiZmlsZSI6InRhYjMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59O1xyXG5cclxuaDEge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufTtcclxuXHJcbmgzIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn07XHJcblxyXG4uaGVhZGVyLWljb24ge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICByaWdodDogMTBweDtcclxuICBtYXgtaGVpZ2h0OiAzMHB4O1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 9769:
/*!************************************************!*\
  !*** ./src/app/tab3/tab3.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Instructions\n      <img class='header-icon' *ngIf=\"!isDemocrat\" src=\"../../assets/images/republicanIcon.png\">\n      <img class='header-icon' *ngIf=\"isDemocrat\" src=\"../../assets/images/democratIcon.png\">\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Instructions</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <h1>HOW TO PLAY</h1>\n  <h2 style=\"color: red;\">IN PROGESS.  Not the complete instructions, I just pasted in some of them to test the page.  Also, they won't always be this ugly, formatting needs work</h2>\n  <p>The game has 10 rounds. In each round, a player gets to make two moves. Your moves can be one of three activities: campaigning, fundraising, and running ads.<br></p>\n  <h3>Campaigning:</h3>\n  <p>A player must first select a state to visit and then roll the die. After rolling the die, the player will subtract from his* roll the difference between their political rating and the political rating of the state they visited.<br><br>\n  Ex: The Republican nominee has a “4” political rating and decides to campaign in Florida, a swing state (“3” political rating). If they rolled a 3, they will subtract 1 (the difference between 4 and 3) from their roll and add that to their polling in Florida. This means they gained 2 points in Florida.<br><br>\n  *Yes, HIS. One of 90+ major party nominees has been a woman. Gender inequality is real and using “their” in our instructions won’t make it go away.<br><br>\n  Ex: GA 16   38-44<br><br>\n  The state’s abbreviation, followed by its total electoral votes, followed by the initial vote totals in that state.<br></p>\n<h3>Fundraising: </h3>\n<p>You can’t win without violating your core principles for money. To run ads, you’ll need some money. If you roll a 1-4, you’ll receive one fundraising point. If you roll a 5 or 6, you’ll receive two fundraising points (way to grovel). Two fundraising points are worth 10,000 Stanley nickels.<br></p>\n  <h3>National Climate:</h3>\n    <br>\n  <h3>Running ads:</h3> <p> pick one region to run ads in at a time. You can run up to 5 ads per turn.<br>\nPositive- You’ve been fighting for years to solve all these problems that haven’t been solved and if the voters promote you, then you’re really gonna fight hard and solve them?<br>\n\nNegative- Did your opponent murder a lady? No? Maybe bought a company that subsequently laid off workers that lost health insurance and one of those workers wives’ tragically contracted cancer? Same thing. At least that’s what we’ll tell the voters. Negative ads work. If your followers don’t like you, they should at least loathe your opponent and his supporters.  These ads can backfire, however.<br>\n\n\nMedia Tour: Looking to show your lighter, more human side? Take a seat on a late night TV couch, it’s usually a safe bet. Jimmy will go easy. No, the other Jimmy.<br>\n\n</p>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tab3_tab3_module_ts.js.map