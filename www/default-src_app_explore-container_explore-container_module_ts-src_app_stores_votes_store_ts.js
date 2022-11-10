"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_explore-container_explore-container_module_ts-src_app_stores_votes_store_ts"],{

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

/***/ 1105:
/*!*********************************!*\
  !*** ./src/app/stores/State.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Event": () => (/* binding */ Event),
/* harmony export */   "State": () => (/* binding */ State)
/* harmony export */ });
class State {
    constructor(abbreviation, electoralVotes, demPercentage, repPercentage, decided) {
        this.abbreviation = abbreviation;
        this.college = electoralVotes;
        this.demPercent = demPercentage;
        this.repPercent = repPercentage;
        this.leansDem = demPercentage - repPercentage;
        this.leansRep = repPercentage - demPercentage;
        this.decided = decided || false;
    }
}
class Event {
}


/***/ }),

/***/ 2049:
/*!***************************************!*\
  !*** ./src/app/stores/votes.store.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VotesStore": () => (/* binding */ VotesStore)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _State__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./State */ 1105);

/* eslint-disable @typescript-eslint/naming-convention */


//import { Storage } from '@ionic/storage';
let VotesStore = class VotesStore {
    constructor() {
        this.isDemocrat = true;
        this.funds = 0;
        this.round = 1;
        this.turn = 0;
        this.Alabama = new _State__WEBPACK_IMPORTED_MODULE_0__.State('AL', 9, 32, 49, true);
        this.Alaska = new _State__WEBPACK_IMPORTED_MODULE_0__.State('AK', 3, 33, 48);
        this.Arizona = new _State__WEBPACK_IMPORTED_MODULE_0__.State('AZ', 11, 40, 41);
        this.Arkansas = new _State__WEBPACK_IMPORTED_MODULE_0__.State('AR', 6, 32, 49);
        this.California = new _State__WEBPACK_IMPORTED_MODULE_0__.State('CA', 55, 52, 30);
        this.Colorado = new _State__WEBPACK_IMPORTED_MODULE_0__.State('CO', 9, 42, 39);
        this.Connecticut = new _State__WEBPACK_IMPORTED_MODULE_0__.State('CT', 7, 46, 35, true);
        this.Delaware = new _State__WEBPACK_IMPORTED_MODULE_0__.State('DE', 3, 45, 35, true);
        this.DC = new _State__WEBPACK_IMPORTED_MODULE_0__.State('DC', 3, 75, 7, true);
        this.Florida = new _State__WEBPACK_IMPORTED_MODULE_0__.State('FL', 29, 39, 41);
        this.Georgia = new _State__WEBPACK_IMPORTED_MODULE_0__.State('GA', 16, 39, 42);
        this.Hawaii = new _State__WEBPACK_IMPORTED_MODULE_0__.State('HI', 4, 53, 28);
        this.Idaho = new _State__WEBPACK_IMPORTED_MODULE_0__.State('ID', 4, 30, 51, true);
        this.Illinois = new _State__WEBPACK_IMPORTED_MODULE_0__.State('IL', 20, 48, 34);
        this.Indiana = new _State__WEBPACK_IMPORTED_MODULE_0__.State('IN', 4, 30, 51, true);
        this.Iowa = new _State__WEBPACK_IMPORTED_MODULE_0__.State('IA', 6, 39, 43);
        this.Kansas = new _State__WEBPACK_IMPORTED_MODULE_0__.State('KS', 6, 32, 49, true);
        this.Kentucky = new _State__WEBPACK_IMPORTED_MODULE_0__.State('KY', 8, 30, 51, true);
        this.Louisiana = new _State__WEBPACK_IMPORTED_MODULE_0__.State('LA', 8, 32, 49);
        this.Maine = new _State__WEBPACK_IMPORTED_MODULE_0__.State('ME', 4, 43, 39);
        this.Maryland = new _State__WEBPACK_IMPORTED_MODULE_0__.State('MD', 10, 51, 31, true);
        this.Massachusetts = new _State__WEBPACK_IMPORTED_MODULE_0__.State('MA', 11, 52, 30, true);
        this.Michigan = new _State__WEBPACK_IMPORTED_MODULE_0__.State('MI', 16, 42, 39);
        this.Minnesota = new _State__WEBPACK_IMPORTED_MODULE_0__.State('MN', 10, 44, 39);
        this.Mississippi = new _State__WEBPACK_IMPORTED_MODULE_0__.State('MS', 6, 34, 48);
        this.Missouri = new _State__WEBPACK_IMPORTED_MODULE_0__.State('MO', 10, 34, 46);
        this.Montana = new _State__WEBPACK_IMPORTED_MODULE_0__.State('MT', 3, 34, 47);
        this.Nebraska = new _State__WEBPACK_IMPORTED_MODULE_0__.State('NE', 5, 32, 49, true);
        this.Nevada = new _State__WEBPACK_IMPORTED_MODULE_0__.State('NV', 6, 41, 40);
        this.NewHampshire = new _State__WEBPACK_IMPORTED_MODULE_0__.State('NH', 4, 42, 39);
        this.NewJersey = new _State__WEBPACK_IMPORTED_MODULE_0__.State('NJ', 14, 48, 34, true);
        this.NewMexico = new _State__WEBPACK_IMPORTED_MODULE_0__.State('NM', 5, 44, 37);
        this.NewYork = new _State__WEBPACK_IMPORTED_MODULE_0__.State('NY', 29, 52, 30, true);
        this.NorthCarolina = new _State__WEBPACK_IMPORTED_MODULE_0__.State('NC', 15, 40, 42);
        this.NorthDakota = new _State__WEBPACK_IMPORTED_MODULE_0__.State('ND', 3, 31, 51, true);
        this.Ohio = new _State__WEBPACK_IMPORTED_MODULE_0__.State('OH', 18, 38, 43);
        this.Oklahoma = new _State__WEBPACK_IMPORTED_MODULE_0__.State('OK', 7, 30, 51, true);
        this.Oregon = new _State__WEBPACK_IMPORTED_MODULE_0__.State('OR', 7, 45, 37);
        this.Pennsylvania = new _State__WEBPACK_IMPORTED_MODULE_0__.State('PA', 20, 42, 40);
        this.RhodeIsland = new _State__WEBPACK_IMPORTED_MODULE_0__.State('RI', 4, 50, 32, true);
        this.SouthCarolina = new _State__WEBPACK_IMPORTED_MODULE_0__.State('SC', 9, 35, 46);
        this.SouthDakota = new _State__WEBPACK_IMPORTED_MODULE_0__.State('SD', 3, 31, 51, true);
        this.Tennessee = new _State__WEBPACK_IMPORTED_MODULE_0__.State('TN', 11, 32, 49, true);
        this.Texas = new _State__WEBPACK_IMPORTED_MODULE_0__.State('TX', 38, 37, 44);
        this.Utah = new _State__WEBPACK_IMPORTED_MODULE_0__.State('UT', 6, 32, 49);
        this.Vermont = new _State__WEBPACK_IMPORTED_MODULE_0__.State('VT', 3, 52, 30, true);
        this.Virginia = new _State__WEBPACK_IMPORTED_MODULE_0__.State('VA', 13, 42, 39);
        this.Washington = new _State__WEBPACK_IMPORTED_MODULE_0__.State('WA', 12, 46, 35);
        this.WestVirginia = new _State__WEBPACK_IMPORTED_MODULE_0__.State('WV', 5, 30, 51, true);
        this.Wisconsin = new _State__WEBPACK_IMPORTED_MODULE_0__.State('WI', 10, 41, 39);
        this.Wyoming = new _State__WEBPACK_IMPORTED_MODULE_0__.State('WY', 3, 29, 53, true);
        this.states = [];
        this.NationalClimate = 0;
        this.states = [
            this.Alabama,
            this.Alaska,
            this.Arizona,
            this.Arkansas,
            this.California,
            this.Colorado,
            this.Connecticut,
            this.Delaware,
            this.DC,
            this.Florida,
            this.Georgia,
            this.Hawaii,
            this.Idaho,
            this.Illinois,
            this.Indiana,
            this.Iowa,
            this.Kansas,
            this.Kentucky,
            this.Louisiana,
            this.Maine,
            this.Maryland,
            this.Massachusetts,
            this.Michigan,
            this.Minnesota,
            this.Mississippi,
            this.Missouri,
            this.Montana,
            this.Nebraska,
            this.Nevada,
            this.NewHampshire,
            this.NewJersey,
            this.NewMexico,
            this.NewYork,
            this.NorthCarolina,
            this.NorthDakota,
            this.Ohio,
            this.Oklahoma,
            this.Oregon,
            this.Pennsylvania,
            this.RhodeIsland,
            this.SouthCarolina,
            this.SouthDakota,
            this.Tennessee,
            this.Texas,
            this.Utah,
            this.Vermont,
            this.Virginia,
            this.Washington,
            this.WestVirginia,
            this.Wisconsin,
            this.Wyoming
        ];
    }
    getUserIsDem() {
        return this.isDemocrat;
    }
    setUserIsDem(isDem) {
        this.isDemocrat = isDem;
    }
    getAllStates() {
        return this.states;
    }
    getDecidedStates() {
        const decidedStates = [];
        for (const state of this.states) {
            if (state.decided) {
                decidedStates.push(state);
            }
        }
        return decidedStates;
    }
    getLeftLeanStates() {
        const leftLeanStates = [];
        for (const state of this.states) {
            if (state.leansDem >= 5 && !state.decided) {
                leftLeanStates.push(state);
            }
        }
        return leftLeanStates;
    }
    getRightLeanStates() {
        const rightLeanStates = [];
        for (const state of this.states) {
            if (state.leansRep >= 5 && !state.decided) {
                rightLeanStates.push(state);
            }
        }
        return rightLeanStates;
    }
    getTossUpsLeft() {
        const undecidedStates = [];
        for (const state of this.states) {
            if (state.leansDem > 0 && state.leansDem < 5) {
                undecidedStates.push(state);
            }
        }
        return undecidedStates;
    }
    getTossUps() {
        const undecidedStates = [];
        for (const state of this.states) {
            if (state.leansDem === 0) {
                undecidedStates.push(state);
            }
        }
        return undecidedStates;
    }
    getTossUpsRight() {
        const undecidedStates = [];
        for (const state of this.states) {
            if (state.leansRep > 0 && state.leansRep < 5) {
                undecidedStates.push(state);
            }
        }
        return undecidedStates;
    }
    changeNationalClimate(changeLeft, changeRight) {
        this.NationalClimate += changeRight;
        this.NationalClimate -= changeLeft;
        for (const state of this.states) {
            state.demPercent += changeLeft;
            state.repPercent += changeRight;
            state.leansDem = state.demPercent - state.repPercent;
            state.leansRep = state.repPercent - state.demPercent;
        }
    }
    changeStateClimate(abbreviaion, changeLeft, changeRight) {
        for (const state of this.states) {
            if (state.abbreviation === abbreviaion) {
                state.demPercent += changeLeft;
                state.repPercent += changeRight;
                state.leansDem = state.demPercent - state.repPercent;
                state.leansRep = state.repPercent - state.demPercent;
            }
        }
    }
    getFinalRed() {
        let red = 0;
        for (const state of this.states) {
            if (state.repPercent > state.demPercent) {
                red += state.college;
            }
        }
        return red;
    }
    getFinalBlue() {
        let blue = 0;
        for (const state of this.states) {
            if (state.repPercent <= state.demPercent) {
                blue += state.college;
            }
        }
        return blue;
    }
};
VotesStore.ctorParameters = () => [];
VotesStore = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({ providedIn: 'root' })
], VotesStore);



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

/***/ })

}]);
//# sourceMappingURL=default-src_app_explore-container_explore-container_module_ts-src_app_stores_votes_store_ts.js.map