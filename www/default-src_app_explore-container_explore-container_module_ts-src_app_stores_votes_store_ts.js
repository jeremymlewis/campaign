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

/***/ 6012:
/*!*********************************!*\
  !*** ./src/app/stores/state.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Event": () => (/* binding */ Event),
/* harmony export */   "State": () => (/* binding */ State)
/* harmony export */ });
class State {
    constructor(name, abbreviation, electoralVotes, demPercentage, repPercentage, decided) {
        this.name = name;
        this.thirdPercent = -1;
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
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ 6012);

/* eslint-disable @typescript-eslint/naming-convention */


//import { Storage } from '@ionic/storage';
let VotesStore = class VotesStore {
    constructor() {
        this.isDemocrat = true;
        this.isThird = false;
        this.thirdName = '';
        this.thirdPartyName = '';
        this.opponentFunds = 0;
        this.funds = 0;
        this.round = 1;
        this.turn = 0;
        this.Alabama = new _state__WEBPACK_IMPORTED_MODULE_0__.State('Alabama', 'AL', 9, 32, 49, true);
        this.Alaska = new _state__WEBPACK_IMPORTED_MODULE_0__.State('Alaska', 'AK', 3, 33, 48);
        this.Arizona = new _state__WEBPACK_IMPORTED_MODULE_0__.State('Arizona', 'AZ', 11, 40, 41);
        this.Arkansas = new _state__WEBPACK_IMPORTED_MODULE_0__.State('Arkansas', 'AR', 6, 32, 49);
        this.California = new _state__WEBPACK_IMPORTED_MODULE_0__.State('California', 'CA', 54, 52, 30);
        this.Colorado = new _state__WEBPACK_IMPORTED_MODULE_0__.State('Colorado', 'CO', 10, 42, 39);
        this.Connecticut = new _state__WEBPACK_IMPORTED_MODULE_0__.State('Connecticut', 'CT', 7, 46, 35, true);
        this.Delaware = new _state__WEBPACK_IMPORTED_MODULE_0__.State('Delaware', 'DE', 3, 45, 35, true);
        this.DC = new _state__WEBPACK_IMPORTED_MODULE_0__.State('D.C.', 'DC', 3, 75, 7, true);
        this.Florida = new _state__WEBPACK_IMPORTED_MODULE_0__.State('Florida', 'FL', 30, 39, 41);
        this.Georgia = new _state__WEBPACK_IMPORTED_MODULE_0__.State('Georgia', 'GA', 16, 39, 42);
        this.Hawaii = new _state__WEBPACK_IMPORTED_MODULE_0__.State('Hawaii', 'HI', 4, 53, 28);
        this.Idaho = new _state__WEBPACK_IMPORTED_MODULE_0__.State('Idaho', 'ID', 4, 30, 51, true);
        this.Illinois = new _state__WEBPACK_IMPORTED_MODULE_0__.State('Illinois', 'IL', 19, 48, 34);
        this.Indiana = new _state__WEBPACK_IMPORTED_MODULE_0__.State('Indiana', 'IN', 11, 30, 51, true);
        this.Iowa = new _state__WEBPACK_IMPORTED_MODULE_0__.State('Iowa', 'IA', 6, 39, 43);
        this.Kansas = new _state__WEBPACK_IMPORTED_MODULE_0__.State('Kansas', 'KS', 6, 32, 49, true);
        this.Kentucky = new _state__WEBPACK_IMPORTED_MODULE_0__.State('Kentucky', 'KY', 8, 30, 51, true);
        this.Louisiana = new _state__WEBPACK_IMPORTED_MODULE_0__.State('Louisiana', 'LA', 8, 32, 49);
        this.Maine = new _state__WEBPACK_IMPORTED_MODULE_0__.State('Maine', 'ME', 4, 43, 39);
        this.Maryland = new _state__WEBPACK_IMPORTED_MODULE_0__.State('Maryland', 'MD', 10, 51, 31, true);
        this.Massachusetts = new _state__WEBPACK_IMPORTED_MODULE_0__.State('Massachusetts', 'MA', 11, 52, 30, true);
        this.Michigan = new _state__WEBPACK_IMPORTED_MODULE_0__.State('Michigan', 'MI', 15, 42, 39);
        this.Minnesota = new _state__WEBPACK_IMPORTED_MODULE_0__.State('Minnesota', 'MN', 10, 44, 39);
        this.Mississippi = new _state__WEBPACK_IMPORTED_MODULE_0__.State('Mississippi', 'MS', 6, 34, 48);
        this.Missouri = new _state__WEBPACK_IMPORTED_MODULE_0__.State('Missouri', 'MO', 10, 34, 46);
        this.Montana = new _state__WEBPACK_IMPORTED_MODULE_0__.State('Montana', 'MT', 4, 34, 47);
        this.Nebraska = new _state__WEBPACK_IMPORTED_MODULE_0__.State('Nebraska', 'NE', 5, 32, 49, true);
        this.Nevada = new _state__WEBPACK_IMPORTED_MODULE_0__.State('Nevada', 'NV', 6, 41, 40);
        this.NewHampshire = new _state__WEBPACK_IMPORTED_MODULE_0__.State('New Hampshire', 'NH', 4, 42, 39);
        this.NewJersey = new _state__WEBPACK_IMPORTED_MODULE_0__.State('New Jersey', 'NJ', 14, 48, 34, true);
        this.NewMexico = new _state__WEBPACK_IMPORTED_MODULE_0__.State('New Mexico', 'NM', 5, 44, 37);
        this.NewYork = new _state__WEBPACK_IMPORTED_MODULE_0__.State('New York', 'NY', 28, 52, 30, true);
        this.NorthCarolina = new _state__WEBPACK_IMPORTED_MODULE_0__.State('North Carolina', 'NC', 16, 40, 42);
        this.NorthDakota = new _state__WEBPACK_IMPORTED_MODULE_0__.State('North Dakota', 'ND', 3, 31, 51, true);
        this.Ohio = new _state__WEBPACK_IMPORTED_MODULE_0__.State('Ohio', 'OH', 17, 38, 43);
        this.Oklahoma = new _state__WEBPACK_IMPORTED_MODULE_0__.State('Oklahoma', 'OK', 7, 30, 51, true);
        this.Oregon = new _state__WEBPACK_IMPORTED_MODULE_0__.State('Oregon', 'OR', 8, 45, 37);
        this.Pennsylvania = new _state__WEBPACK_IMPORTED_MODULE_0__.State('Pennsylvania', 'PA', 19, 42, 40);
        this.RhodeIsland = new _state__WEBPACK_IMPORTED_MODULE_0__.State('Rhode Island', 'RI', 4, 50, 32, true);
        this.SouthCarolina = new _state__WEBPACK_IMPORTED_MODULE_0__.State('South Carolina', 'SC', 9, 35, 46);
        this.SouthDakota = new _state__WEBPACK_IMPORTED_MODULE_0__.State('South Dakota', 'SD', 3, 31, 51, true);
        this.Tennessee = new _state__WEBPACK_IMPORTED_MODULE_0__.State('Tennessee', 'TN', 11, 32, 49, true);
        this.Texas = new _state__WEBPACK_IMPORTED_MODULE_0__.State('Texas', 'TX', 40, 37, 44);
        this.Utah = new _state__WEBPACK_IMPORTED_MODULE_0__.State('Utah', 'UT', 6, 32, 49);
        this.Vermont = new _state__WEBPACK_IMPORTED_MODULE_0__.State('Vermont', 'VT', 3, 52, 30, true);
        this.Virginia = new _state__WEBPACK_IMPORTED_MODULE_0__.State('Virginia', 'VA', 13, 42, 39);
        this.Washington = new _state__WEBPACK_IMPORTED_MODULE_0__.State('Washington', 'WA', 12, 46, 35);
        this.WestVirginia = new _state__WEBPACK_IMPORTED_MODULE_0__.State('West Virginia', 'WV', 4, 30, 51, true);
        this.Wisconsin = new _state__WEBPACK_IMPORTED_MODULE_0__.State('Wisconsin', 'WI', 10, 41, 39);
        this.Wyoming = new _state__WEBPACK_IMPORTED_MODULE_0__.State('Wyoming', 'WY', 3, 29, 53, true);
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
    getUserIsThird() {
        return this.isThird;
    }
    setUserIsThird(isThird) {
        this.isThird = isThird;
        for (const state of this.states) {
            state.thirdPercent = 2;
        }
    }
    setThirdPartyName(name) {
        this.thirdName = name;
    }
    getThirdPartyName() {
        return this.thirdName;
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
    getSortedStates(count = 51) {
        const closestStates = [];
        this.states.forEach(state => {
            closestStates.push(state);
        });
        // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
        closestStates.sort(function (a, b) { return Math.abs(a.demPercent - a.repPercent) - Math.abs(b.demPercent - b.repPercent); });
        return closestStates.slice(0, count);
    }
    getSortedGroups(pos = 0) {
        const states = this.getSortedStates();
        if (states[pos].abbreviation === 'HI' || states[pos].abbreviation === 'CA' ||
            states[pos].abbreviation === 'WA' || states[pos].abbreviation === 'OR') {
            return ['HI', 'CA', 'WA', 'OR'];
        }
        else if (states[pos].abbreviation === 'IL' || states[pos].abbreviation === 'MN') {
            return ['IL', 'MN'];
        }
        else if (states[pos].abbreviation === 'NM' || states[pos].abbreviation === 'CO' ||
            states[pos].abbreviation === 'NV' || states[pos].abbreviation === 'AZ') {
            return ['NM', 'CO', 'NV', 'AZ'];
        }
        else if (states[pos].abbreviation === 'ME' || states[pos].abbreviation === 'NH' ||
            states[pos].abbreviation === 'VA' || states[pos].abbreviation === 'PA') {
            return ['ME', 'NH', 'VA', 'PA'];
        }
        else if (states[pos].abbreviation === 'WI' || states[pos].abbreviation === 'IA' ||
            states[pos].abbreviation === 'MI' || states[pos].abbreviation === 'OH') {
            return ['WI', 'IA', 'MI', 'OH'];
        }
        else if (states[pos].abbreviation === 'FL' || states[pos].abbreviation === 'NC' ||
            states[pos].abbreviation === 'GA') {
            return ['FL', 'NC', 'GA'];
        }
        else if (states[pos].abbreviation === 'TX') {
            return ['TX'];
        }
        else if (states[pos].abbreviation === 'SC' || states[pos].abbreviation === 'MO' ||
            states[pos].abbreviation === 'IN' || states[pos].abbreviation === 'MT' ||
            states[pos].abbreviation === 'AK' || states[pos].abbreviation === 'MS' ||
            states[pos].abbreviation === 'LA') {
            return ['SC', 'MO', 'IN', 'MT', 'MS', 'AK', 'LA'];
        }
        else {
            pos += 1;
            if (pos > 49) {
                return [];
            }
            return this.getSortedGroups(pos);
        }
    }
    getCurrentScore() {
        if (this.isThird) {
            return 0; //TODO3
        }
        let demScore = 0;
        let repScore = 0;
        for (const state of this.states) {
            if (state.leansDem > 0) {
                demScore += state.college;
            }
            if (state.leansRep > 0) {
                repScore += state.college;
            }
        }
        if (this.isDemocrat) {
            return repScore - 270;
        }
        else {
            return demScore - 270;
        }
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
            if (state.leansDem > 0 && state.leansDem < 5 && !state.decided) {
                undecidedStates.push(state);
            }
        }
        return undecidedStates;
    }
    getTossUps() {
        const undecidedStates = [];
        for (const state of this.states) {
            if (state.leansDem === 0 && !state.decided) {
                undecidedStates.push(state);
            }
        }
        return undecidedStates;
    }
    getTossUpsRight() {
        const undecidedStates = [];
        for (const state of this.states) {
            if (state.leansRep > 0 && state.leansRep < 5 && !state.decided) {
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
                state.decided = true;
            }
            if (state.repPercent === state.demPercent && this.NationalClimate >= 0) {
                red += state.college;
                state.decided = true;
            }
        }
        return red;
    }
    getFinalBlue() {
        let blue = 0;
        for (const state of this.states) {
            if (state.repPercent < state.demPercent) {
                blue += state.college;
                state.decided = true;
            }
            if (state.repPercent === state.demPercent && this.NationalClimate < 0) {
                blue += state.college;
                state.decided = true;
            }
        }
        return blue;
    }
    getUserWon() {
        //TODO3
        if (this.getFinalBlue() > 269 && this.isDemocrat) {
            return true;
        }
        else if (this.getFinalBlue() > 269 && !this.isDemocrat) {
            return false;
        }
        if (this.getFinalRed() > 269 && !this.isDemocrat) {
            return true;
        }
        else {
            return false;
        }
    }
    reset() {
        this.isDemocrat = true;
        this.isThird = false;
        this.funds = 0;
        this.round = 1;
        this.turn = 0;
        this.NationalClimate = 0;
        this.Alabama = new _state__WEBPACK_IMPORTED_MODULE_0__.State('Alabama', 'AL', 9, 32, 49, true);
        this.Alaska = new _state__WEBPACK_IMPORTED_MODULE_0__.State('Alaska', 'AK', 3, 33, 48);
        this.Arizona = new _state__WEBPACK_IMPORTED_MODULE_0__.State('Arizona', 'AZ', 11, 40, 41);
        this.Arkansas = new _state__WEBPACK_IMPORTED_MODULE_0__.State('Arkansas', 'AR', 6, 32, 49);
        this.California = new _state__WEBPACK_IMPORTED_MODULE_0__.State('California', 'CA', 55, 52, 30);
        this.Colorado = new _state__WEBPACK_IMPORTED_MODULE_0__.State('Colorado', 'CO', 9, 42, 39);
        this.Connecticut = new _state__WEBPACK_IMPORTED_MODULE_0__.State('Connecticut', 'CT', 7, 46, 35, true);
        this.Delaware = new _state__WEBPACK_IMPORTED_MODULE_0__.State('Delaware', 'DE', 3, 45, 35, true);
        this.DC = new _state__WEBPACK_IMPORTED_MODULE_0__.State('D.C.', 'DC', 3, 75, 7, true);
        this.Florida = new _state__WEBPACK_IMPORTED_MODULE_0__.State('Florida', 'FL', 29, 39, 41);
        this.Georgia = new _state__WEBPACK_IMPORTED_MODULE_0__.State('Georgia', 'GA', 16, 39, 42);
        this.Hawaii = new _state__WEBPACK_IMPORTED_MODULE_0__.State('Hawaii', 'HI', 4, 53, 28);
        this.Idaho = new _state__WEBPACK_IMPORTED_MODULE_0__.State('Idaho', 'ID', 4, 30, 51, true);
        this.Illinois = new _state__WEBPACK_IMPORTED_MODULE_0__.State('Illinois', 'IL', 20, 48, 34);
        this.Indiana = new _state__WEBPACK_IMPORTED_MODULE_0__.State('Indiana', 'IN', 11, 30, 51, true);
        this.Iowa = new _state__WEBPACK_IMPORTED_MODULE_0__.State('Iowa', 'IA', 6, 39, 43);
        this.Kansas = new _state__WEBPACK_IMPORTED_MODULE_0__.State('Kansas', 'KS', 6, 32, 49, true);
        this.Kentucky = new _state__WEBPACK_IMPORTED_MODULE_0__.State('Kentucky', 'KY', 8, 30, 51, true);
        this.Louisiana = new _state__WEBPACK_IMPORTED_MODULE_0__.State('Louisiana', 'LA', 8, 32, 49);
        this.Maine = new _state__WEBPACK_IMPORTED_MODULE_0__.State('Maine', 'ME', 4, 43, 39);
        this.Maryland = new _state__WEBPACK_IMPORTED_MODULE_0__.State('Maryland', 'MD', 10, 51, 31, true);
        this.Massachusetts = new _state__WEBPACK_IMPORTED_MODULE_0__.State('Massachusetts', 'MA', 11, 52, 30, true);
        this.Michigan = new _state__WEBPACK_IMPORTED_MODULE_0__.State('Michigan', 'MI', 16, 42, 39);
        this.Minnesota = new _state__WEBPACK_IMPORTED_MODULE_0__.State('Minnesota', 'MN', 10, 44, 39);
        this.Mississippi = new _state__WEBPACK_IMPORTED_MODULE_0__.State('Mississippi', 'MS', 6, 34, 48);
        this.Missouri = new _state__WEBPACK_IMPORTED_MODULE_0__.State('Missouri', 'MO', 10, 34, 46);
        this.Montana = new _state__WEBPACK_IMPORTED_MODULE_0__.State('Montana', 'MT', 3, 34, 47);
        this.Nebraska = new _state__WEBPACK_IMPORTED_MODULE_0__.State('Nebraska', 'NE', 5, 32, 49, true);
        this.Nevada = new _state__WEBPACK_IMPORTED_MODULE_0__.State('Nevada', 'NV', 6, 41, 40);
        this.NewHampshire = new _state__WEBPACK_IMPORTED_MODULE_0__.State('New Hampshire', 'NH', 4, 42, 39);
        this.NewJersey = new _state__WEBPACK_IMPORTED_MODULE_0__.State('New Jersey', 'NJ', 14, 48, 34, true);
        this.NewMexico = new _state__WEBPACK_IMPORTED_MODULE_0__.State('New Mexico', 'NM', 5, 44, 37);
        this.NewYork = new _state__WEBPACK_IMPORTED_MODULE_0__.State('New York', 'NY', 29, 52, 30, true);
        this.NorthCarolina = new _state__WEBPACK_IMPORTED_MODULE_0__.State('North Carolina', 'NC', 15, 40, 42);
        this.NorthDakota = new _state__WEBPACK_IMPORTED_MODULE_0__.State('North Dakota', 'ND', 3, 31, 51, true);
        this.Ohio = new _state__WEBPACK_IMPORTED_MODULE_0__.State('Ohio', 'OH', 18, 38, 43);
        this.Oklahoma = new _state__WEBPACK_IMPORTED_MODULE_0__.State('Oklahoma', 'OK', 7, 30, 51, true);
        this.Oregon = new _state__WEBPACK_IMPORTED_MODULE_0__.State('Oregon', 'OR', 7, 45, 37);
        this.Pennsylvania = new _state__WEBPACK_IMPORTED_MODULE_0__.State('Pennsylvania', 'PA', 20, 42, 40);
        this.RhodeIsland = new _state__WEBPACK_IMPORTED_MODULE_0__.State('Rhode Island', 'RI', 4, 50, 32, true);
        this.SouthCarolina = new _state__WEBPACK_IMPORTED_MODULE_0__.State('South Carolina', 'SC', 9, 35, 46);
        this.SouthDakota = new _state__WEBPACK_IMPORTED_MODULE_0__.State('South Dakota', 'SD', 3, 31, 51, true);
        this.Tennessee = new _state__WEBPACK_IMPORTED_MODULE_0__.State('Tennessee', 'TN', 11, 32, 49, true);
        this.Texas = new _state__WEBPACK_IMPORTED_MODULE_0__.State('Texas', 'TX', 38, 37, 44);
        this.Utah = new _state__WEBPACK_IMPORTED_MODULE_0__.State('Utah', 'UT', 6, 32, 49);
        this.Vermont = new _state__WEBPACK_IMPORTED_MODULE_0__.State('Vermont', 'VT', 3, 52, 30, true);
        this.Virginia = new _state__WEBPACK_IMPORTED_MODULE_0__.State('Virginia', 'VA', 13, 42, 39);
        this.Washington = new _state__WEBPACK_IMPORTED_MODULE_0__.State('Washington', 'WA', 12, 46, 35);
        this.WestVirginia = new _state__WEBPACK_IMPORTED_MODULE_0__.State('West Virginia', 'WV', 5, 30, 51, true);
        this.Wisconsin = new _state__WEBPACK_IMPORTED_MODULE_0__.State('Wisconsin', 'WI', 10, 41, 39);
        this.Wyoming = new _state__WEBPACK_IMPORTED_MODULE_0__.State('Wyoming', 'WY', 3, 29, 53, true);
        this.states = [];
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