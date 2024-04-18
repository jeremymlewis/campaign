"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab1_tab1_module_ts"],{

/***/ 1034:
/*!****************************************!*\
  !*** ./src/app/dice/dice.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiceComponent": () => (/* binding */ DiceComponent)
/* harmony export */ });
/* harmony import */ var C_Users_Jeremy_SideProjects_campaign_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _dice_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dice.component.html?ngResource */ 6350);
/* harmony import */ var _dice_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dice.component.css?ngResource */ 8780);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_calculations_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/calculations.service */ 5291);
/* harmony import */ var _stores_votes_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../stores/votes.store */ 2049);







let DiceComponent = class DiceComponent {
  constructor(calculationService, votes) {
    this.calculationService = calculationService;
    this.votes = votes;
    this.diceRolled = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.rollStarted = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.canClick = true;
    this.slot0 = [];
    this.slot1 = [];
    this.slot2 = [];
    this.slot3 = [];
    this.slot4 = [];
    this.slot5 = [];
    this.val0 = '0';
    this.val1 = '1';
    this.val2 = '2';
    this.val3 = '3';
    this.val4 = '4';
    this.val5 = '5';
    this.value = 1;
    this.imageValue = 'dice' + (this.votes.isDemocrat ? 'Dem' : 'Rep') + '1';
    this.image1 = 'dice1';
    this.image2 = 'dice2';
    this.image3 = 'dice3';
    this.image4 = 'dice4';
    this.image5 = 'dice5';
    this.image6 = 'dice6';
  }
  setImage(num) {
    if (num < 2) {
      this.imageValue = 'dice' + (this.votes.isDemocrat ? 'Dem' : 'Rep') + 1;
    } else if (num === 2) {
      this.imageValue = 'dice' + (this.votes.isDemocrat ? 'Dem' : 'Rep') + 2;
    } else if (num === 3) {
      this.imageValue = 'dice' + (this.votes.isDemocrat ? 'Dem' : 'Rep') + 3;
    } else if (num === 4) {
      this.imageValue = 'dice' + (this.votes.isDemocrat ? 'Dem' : 'Rep') + 4;
    } else if (num === 5) {
      this.imageValue = 'dice' + (this.votes.isDemocrat ? 'Dem' : 'Rep') + 5;
    } else {
      this.imageValue = 'dice' + (this.votes.isDemocrat ? 'Dem' : 'Rep') + 6;
    }
  }
  rollDice() {
    this.value = Math.floor(Math.random() * 6) + 1;
    this.setImage(this.value);
  }
  animatedDiceRoll() {
    var _this = this;
    return (0,C_Users_Jeremy_SideProjects_campaign_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.votes.actionPending = true;
      _this.rollStarted.emit(true);
      document.getElementById('dice').style.animation = 'rotation 1.6s';
      _this.canClick = false;
      _this.rollDice();
      yield new Promise(f => setTimeout(f, 80));
      _this.rollDice();
      yield new Promise(f => setTimeout(f, 80));
      _this.rollDice();
      yield new Promise(f => setTimeout(f, 80));
      _this.rollDice();
      yield new Promise(f => setTimeout(f, 80));
      _this.rollDice();
      yield new Promise(f => setTimeout(f, 80));
      _this.rollDice();
      yield new Promise(f => setTimeout(f, 80));
      _this.rollDice();
      yield new Promise(f => setTimeout(f, 80));
      _this.rollDice();
      yield new Promise(f => setTimeout(f, 80));
      _this.rollDice();
      yield new Promise(f => setTimeout(f, 80));
      _this.rollDice();
      yield new Promise(f => setTimeout(f, 80));
      _this.rollDice();
      yield new Promise(f => setTimeout(f, 500));
      //document.getElementById('dice').style.animation = '';
      _this.diceRolled.emit(_this.value);
      yield new Promise(f => setTimeout(f, 1000));
      _this.votes.actionPending = false;
      yield new Promise(f => setTimeout(f, 500));
      _this.canClick = true;
    })();
  }
};
DiceComponent.ctorParameters = () => [{
  type: _services_calculations_service__WEBPACK_IMPORTED_MODULE_3__.CalculationService
}, {
  type: _stores_votes_store__WEBPACK_IMPORTED_MODULE_4__.VotesStore
}];
DiceComponent.propDecorators = {
  diceRolled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output
  }],
  rollStarted: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output
  }],
  canClick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }],
  slot0: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }],
  slot1: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }],
  slot2: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }],
  slot3: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }],
  slot4: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }],
  slot5: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }],
  val0: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }],
  val1: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }],
  val2: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }],
  val3: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }],
  val4: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }],
  val5: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }]
};
DiceComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-dice',
  template: _dice_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_dice_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__]
}), (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
  providedIn: 'root'
})], DiceComponent);


/***/ }),

/***/ 7537:
/*!******************************************************!*\
  !*** ./src/app/modal-toast/modal-toast.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalToastComponent": () => (/* binding */ ModalToastComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _modal_toast_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-toast.component.html?ngResource */ 8412);
/* harmony import */ var _modal_toast_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-toast.component.css?ngResource */ 2804);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);





let ModalToastComponent = class ModalToastComponent {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.title = 'Title';
        this.message = 'Message';
    }
    cancel() {
        return this.modalCtrl.dismiss(null, 'cancel');
    }
    confirm() {
        return this.modalCtrl.dismiss(null, 'confirm');
    }
};
ModalToastComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
ModalToastComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-modal',
        template: _modal_toast_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_modal_toast_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ModalToastComponent);



/***/ }),

/***/ 1361:
/*!***************************************************!*\
  !*** ./src/app/roll-table/rolltable.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RollTableComponent": () => (/* binding */ RollTableComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _rolltable_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rolltable.component.html?ngResource */ 2587);
/* harmony import */ var _rolltable_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rolltable.component.css?ngResource */ 8677);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _stores_votes_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stores/votes.store */ 2049);





let RollTableComponent = class RollTableComponent {
    constructor(votes) {
        this.votes = votes;
        this.slot0 = [];
        this.slot1 = [];
        this.slot2 = [];
        this.slot3 = [];
        this.slot4 = [];
        this.slot5 = [];
        this.val0 = '0';
        this.val1 = '1';
        this.val2 = '2';
        this.val3 = '3';
        this.val4 = '4';
        this.val5 = '5';
    }
};
RollTableComponent.ctorParameters = () => [
    { type: _stores_votes_store__WEBPACK_IMPORTED_MODULE_2__.VotesStore }
];
RollTableComponent.propDecorators = {
    slot0: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    slot1: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    slot2: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    slot3: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    slot4: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    slot5: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    val0: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    val1: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    val2: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    val3: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    val4: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    val5: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
RollTableComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-rolltable',
        template: _rolltable_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_rolltable_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], RollTableComponent);



/***/ }),

/***/ 5681:
/*!***************************************!*\
  !*** ./src/app/score-display.pipe.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScoreDisplayPipe": () => (/* binding */ ScoreDisplayPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


let ScoreDisplayPipe = class ScoreDisplayPipe {
    transform(state) {
        if (state.thirdPercent > -1) {
            return state.thirdPercent + '%';
        }
        else {
            const val = state.demPercent - state.repPercent;
            if (val > 0) {
                return '+' + val + ' D';
            }
            else if (val === 0) {
                return 'Even';
            }
            else if (val < 0) {
                return '+' + (-val) + ' R';
            }
        }
    }
};
ScoreDisplayPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'scoreDisplay'
    })
], ScoreDisplayPipe);



/***/ }),

/***/ 5291:
/*!**************************************************!*\
  !*** ./src/app/services/calculations.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalculationService": () => (/* binding */ CalculationService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);

/* eslint-disable max-len */

let CalculationService = class CalculationService {
    constructor() {
        this.diceValue = 0;
        this.isOver = false;
    }
    setDiceValue(value) {
        this.diceValue = value;
    }
    setDiceRollOver() {
        this.isOver = true;
    }
    getDiceValue() {
        this.isOver = false;
        return this.diceValue;
    }
};
CalculationService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({ providedIn: 'root' })
], CalculationService);



/***/ }),

/***/ 9508:
/*!************************************************!*\
  !*** ./src/app/services/events/boon.events.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoonEvents": () => (/* binding */ BoonEvents)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);

/* eslint-disable max-len */

let BoonEvents = class BoonEvents {
    //3 event cards
    getBoonEvents() {
        const results = [
            {
                title: 'Lucky Break',
                description: 'Your opponent is rocked by a scandal',
                points: 1,
                imageSrc: '/assets/images/presidents/campaign.png',
                history: 'Sometimes a bad opponent is more important than a good candidate...',
                politicanInvolved: '',
                yearInvolved: '',
                normalFactDisplay: false,
                statesInvolved: [],
                choiceEvent: false
            },
            {
                title: 'Lucky Break',
                description: 'You handle a current issue very well in the public eye',
                points: 1,
                imageSrc: '/assets/images/presidents/campaign.png',
                history: 'People often vote for a president who handles things well',
                politicanInvolved: '',
                yearInvolved: '',
                normalFactDisplay: false,
                statesInvolved: [],
                choiceEvent: false
            },
            {
                title: 'Lucky Break',
                description: 'A big swing in the economy occurs',
                points: 1,
                imageSrc: '/assets/images/presidents/campaign.png',
                history: 'The Economy is often one of the biggest things voters look at during an election',
                politicanInvolved: '',
                yearInvolved: '',
                normalFactDisplay: false,
                statesInvolved: [],
                choiceEvent: false
            },
        ];
        return results;
    }
};
BoonEvents = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({ providedIn: 'root' })
], BoonEvents);



/***/ }),

/***/ 458:
/*!*******************************************************!*\
  !*** ./src/app/services/events/endorsement.events.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EndorsementEvents": () => (/* binding */ EndorsementEvents)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);

/* eslint-disable max-len */

let EndorsementEvents = class EndorsementEvents {
    //25 event cards
    getEndorsementEvents() {
        const results = [
            {
                title: 'Endorsement',
                description: 'Oprah, queen bee of TV, endorses your presidential nomination',
                points: 1,
                imageSrc: '/assets/images/presidents/44-obama.jpg',
                history: 'Oprah endorsed President Obama even before he told everyone he was running!',
                politicanInvolved: 'Barack Obama',
                yearInvolved: '2008',
                normalFactDisplay: true,
                statesInvolved: [],
                choiceEvent: false
            },
            {
                normalFactDisplay: true,
                title: 'Endorsement',
                description: 'You receive a grudgingly given endorsement from your former opponent',
                points: 2,
                imageSrc: '/assets/images/presidents/44-obama.jpg',
                history: 'After dropping out of the Democratic Primary, Hillary Clinton gave her endorsement to her former opponent.',
                politicanInvolved: 'Barack Obama',
                yearInvolved: '2008',
                statesInvolved: ['NY', 'IN'],
                choiceEvent: false
            },
            {
                normalFactDisplay: true,
                title: 'Endorsement',
                description: 'Your opponent has been endorsed by famous actor, George Clooney',
                points: -3,
                imageSrc: '/assets/images/presidents/44-obama.jpg',
                history: 'During an interview with "Good Morning America", Clooney praised the president-to-be and offered an endorsement.',
                politicanInvolved: 'Barack Obama',
                yearInvolved: '2008',
                statesInvolved: ['CA', 'FL'],
                choiceEvent: false
            },
            {
                normalFactDisplay: true,
                title: 'Endorsement',
                description: 'You have been endorsed by the Planned Parenthood Action Fund',
                points: 1,
                imageSrc: '/assets/images/presidents/46-joe-biden.png',
                history: 'This was a big endorsement coming after referendums in Kansas and Ohio on reproductive rights',
                politicanInvolved: 'Joe Biden',
                yearInvolved: '2024',
                statesInvolved: ['KS', 'OH'],
                choiceEvent: false
            },
            {
                title: 'Endorsement',
                description: 'You have been endorsed by the NRA',
                points: 1,
                imageSrc: '/assets/images/presidents/45-donald-trump.png',
                history: 'This organization spent around $2.6 Million that year lobbying on firearm legislation',
                politicanInvolved: 'Donald Trump',
                yearInvolved: '2016',
                normalFactDisplay: true,
                statesInvolved: ['TX', 'MI', 'GA', 'ID', 'MT'],
                choiceEvent: false
            },
            {
                title: 'Endorsement',
                description: 'You have been endorsed by Emily\'s List',
                points: 1,
                imageSrc: '/assets/images/presidents/46-joe-biden.png',
                history: 'Reproductive rights are a central issue in the 2024 election',
                politicanInvolved: 'Joe Biden',
                yearInvolved: '2024',
                normalFactDisplay: true,
                statesInvolved: ['DE', 'CT', 'NM', 'KS'],
                choiceEvent: false
            },
            {
                title: 'Endorsement',
                description: 'Your opponet has been endorsed by Planned Parenthood Action Fund',
                points: -1,
                imageSrc: '/assets/images/presidents/hillary_clinton.jpg',
                history: 'Reproductive rights were a central issue in the 2016 election',
                politicanInvolved: 'Hillary Clinton',
                yearInvolved: '2016',
                normalFactDisplay: true,
                statesInvolved: ['VA', 'MD', 'IA'],
                choiceEvent: false
            },
            {
                title: 'Endorsement',
                description: 'You are endorsed by a former president!',
                points: 1,
                imageSrc: '/assets/images/presidents/43-bush.jpg',
                history: 'He was endorsed by his father, George H W Bush, who had held office 8 years earlier',
                politicanInvolved: 'George W Bush',
                yearInvolved: '2000',
                normalFactDisplay: true,
                statesInvolved: [],
                choiceEvent: false
            },
            {
                title: 'Endorsement',
                description: 'Your opponent is endorsed by a former president!',
                points: -1,
                imageSrc: '/assets/images/presidents/43-bush.jpg',
                history: 'He was endorsed by his father, George H W Bush, who had held office 8 years earlier',
                politicanInvolved: 'George W Bush',
                yearInvolved: '2000',
                normalFactDisplay: true,
                statesInvolved: [],
                choiceEvent: false
            },
            {
                title: 'Endorsement',
                description: 'You have been endorsed by the Speaker of the House',
                points: 1,
                imageSrc: '/assets/images/presidents/39-carter.jpg',
                history: 'Speaker of the house Carl Albert publicly endorsed Carter\'s candidacy',
                politicanInvolved: 'Jimmy Carter',
                yearInvolved: '1976',
                normalFactDisplay: true,
                statesInvolved: ['ME', 'MT', 'NE', 'SC', 'UT', 'CO', 'CT', 'MS', 'LA'],
                choiceEvent: false
            },
            {
                title: 'Endorsement',
                description: 'You have been endorsed by a large Newspaper in Ohio',
                points: 1,
                imageSrc: '/assets/images/presidents/40-reagan.jpg',
                history: 'Reagan was endorsed by "The Plain Dealer" of Clevand, Ohio',
                politicanInvolved: 'Ronald Reagan',
                yearInvolved: '1980',
                normalFactDisplay: true,
                statesInvolved: ['OH'],
                choiceEvent: false
            },
            {
                title: 'Endorsement',
                description: 'Your opponent has been endorsed by the governor of Michigan',
                points: -2,
                imageSrc: '/assets/images/presidents/32-roosevelt.jpg',
                history: 'Bush was endorsed by the Governor of Michigan, John Engler',
                politicanInvolved: 'George W Bush',
                yearInvolved: '2000',
                normalFactDisplay: true,
                statesInvolved: ['MI'],
                choiceEvent: false
            },
            {
                title: 'Endorsement',
                description: 'Your opponent has been endorsed by the governor of Pennsylvania',
                points: -2,
                imageSrc: '/assets/images/presidents/43-bush.jpg',
                history: 'Bush was endorsed by the Governor of Pennsylvania, Tom Ridge',
                politicanInvolved: 'George W Bush',
                yearInvolved: '2000',
                normalFactDisplay: true,
                statesInvolved: ['PA'],
                choiceEvent: false
            },
            {
                title: 'Endorsement',
                description: 'You have been endorsed by the governor of California',
                points: 3,
                imageSrc: '/assets/images/presidents/32-roosevelt.jpg',
                history: 'FDR was endorsed early on by the Governor of California, Hiran Johnson',
                politicanInvolved: 'Franklin D Roosevelt',
                yearInvolved: '1932',
                normalFactDisplay: true,
                statesInvolved: ['CA'],
                choiceEvent: false
            },
            {
                title: 'Endorsement',
                description: 'You have been endorsed by the governor of North Carolina',
                points: 2,
                imageSrc: '/assets/images/presidents/32-roosevelt.jpg',
                history: 'Trump was endorsed early on by the Governor of North Carolina, Pat McCrory',
                politicanInvolved: 'Donald Trump',
                yearInvolved: '2016',
                normalFactDisplay: true,
                statesInvolved: ['NC'],
                choiceEvent: false
            },
            {
                title: 'Endorsement',
                description: 'Your opponent has been endorsed by the governor of North Carolina',
                points: -2,
                imageSrc: '/assets/images/presidents/32-roosevelt.jpg',
                history: 'Trump was endorsed early on by the Governor of North Carolina, Pat McCrory',
                politicanInvolved: 'Donald Trump',
                yearInvolved: '2016',
                normalFactDisplay: true,
                statesInvolved: ['NC'],
                choiceEvent: false
            },
            {
                title: 'Endorsement',
                description: 'Your opponent has been endorsed by the governor of Colorado',
                points: -2,
                imageSrc: '/assets/images/presidents/42-clinton.jpg',
                history: 'Colorado Governor Roy Rudolf Romer was a national co-chairman of Clinton\'s campaign',
                politicanInvolved: 'Bill Clinton',
                yearInvolved: '1996',
                normalFactDisplay: true,
                statesInvolved: ['CO'],
                choiceEvent: false
            },
            {
                title: 'Endorsement',
                description: 'You have been endorsed by the governor of Arizona',
                points: 1,
                imageSrc: '/assets/images/presidents/44-obama.jpg',
                history: 'Janet Napolitano, Governor of Arizona, endorsed Barack Obama 10 months before the election took place',
                politicanInvolved: 'Barack Obama',
                yearInvolved: '2008',
                normalFactDisplay: true,
                statesInvolved: ['AZ'],
                choiceEvent: false
            },
            {
                title: 'Endorsement',
                description: 'You have been endorsed by a former vice president',
                points: 1,
                imageSrc: '/assets/images/presidents/43-bush.jpg',
                history: 'Former Vice President Dan Quayle gave his endorsement to this member of his party',
                politicanInvolved: 'George W Bush',
                yearInvolved: '2000',
                normalFactDisplay: true,
                statesInvolved: ['CA', 'OR', 'WA', 'PA', 'NC', 'TN', 'WI', 'FL'],
                choiceEvent: false
            },
            {
                title: 'Endorsement',
                description: 'You have been endorsed by the Mayor of Austin, TX',
                points: 2,
                imageSrc: '/assets/images/presidents/46-joe-biden.png',
                history: 'Joe Biden was endorsed by Steve Adler, the Mayor of Austin',
                politicanInvolved: 'Joe Biden',
                yearInvolved: '2020',
                normalFactDisplay: true,
                statesInvolved: ['TX'],
                choiceEvent: false
            },
            {
                title: 'Endorsement',
                description: 'You have been endorsed by the Mayor of Atlanta, GA',
                points: 2,
                imageSrc: '/assets/images/presidents/46-joe-biden.png',
                history: 'Joe Biden was endorsed by Keisha Lance Bottoms, the Mayor of Atlanta, GA',
                politicanInvolved: 'Joe Biden',
                yearInvolved: '2020',
                normalFactDisplay: true,
                statesInvolved: ['GA'],
                choiceEvent: false
            },
            {
                title: 'Endorsement',
                description: 'You have been endorsed by the Mayor of Cincinnati, OH',
                points: 2,
                imageSrc: '/assets/images/presidents/46-joe-biden.png',
                history: 'Joe Biden was endorsed by John Cranley, the Mayor of Cincinnati, Ohio',
                politicanInvolved: 'Joe Biden',
                yearInvolved: '2020',
                normalFactDisplay: true,
                statesInvolved: ['OH'],
                choiceEvent: false
            },
            {
                title: 'Endorsement',
                description: 'Your opponent has been endorsed by the Mayor of Salt Lake City',
                points: -3,
                imageSrc: '/assets/images/presidents/46-joe-biden.png',
                history: 'Joe Biden was endorsed by Erin Mendenhall, the Mayor of Salt Lake City',
                politicanInvolved: 'Joe Biden',
                yearInvolved: '2020',
                normalFactDisplay: true,
                statesInvolved: ['UT'],
                choiceEvent: false
            },
            {
                title: 'Endorsement',
                description: 'Your opponent has been endorsed by the Mayor of Milwaukee, WI',
                points: -2,
                imageSrc: '/assets/images/presidents/46-joe-biden.png',
                history: 'Joe Biden was endorsed by Tom Barrett, the Mayor of Milwaukee, WI',
                politicanInvolved: 'Joe Biden',
                yearInvolved: '2020',
                normalFactDisplay: true,
                statesInvolved: ['WI'],
                choiceEvent: false
            },
            {
                title: 'Endorsement',
                description: 'Your opponent has been endorsed by the Governor of Indiana',
                points: -2,
                imageSrc: '/assets/images/presidents/45-donald-trump.png',
                history: 'Donald Trump was endorsed by Mike Pence, the Governor of IN, an Pence eventually became his Vice President!',
                politicanInvolved: 'Donald Trump',
                yearInvolved: '2016',
                normalFactDisplay: true,
                statesInvolved: ['IN'],
                choiceEvent: false
            },
            {
                title: 'Endorsement',
                description: 'You have been endorsed by The American Federation of Teachers',
                points: 1,
                imageSrc: '/assets/images/presidents/42-clinton.jpg',
                history: 'Education is often a top issue that voters care about.',
                politicanInvolved: 'Bill Clinton',
                yearInvolved: '1996',
                normalFactDisplay: true,
                statesInvolved: [],
                choiceEvent: false
            },
            {
                title: 'Endorsement',
                description: 'Your opponent has been endorsed by The American Federation of Teachers',
                points: -1,
                imageSrc: '/assets/images/presidents/42-clinton.jpg',
                history: 'Education is often a top issue that voters care about.',
                politicanInvolved: 'Bill Clinton',
                yearInvolved: '1996',
                normalFactDisplay: true,
                statesInvolved: [],
                choiceEvent: false
            },
            {
                title: 'Endorsement',
                description: 'Your opponent has been endorsed by a Grassroots Organization',
                points: -1,
                imageSrc: '/assets/images/presidents/34-eisenhower.jpg',
                history: 'A group called Citizens for Eisenhower helped raise money for his campaign.',
                politicanInvolved: 'Dwight Eisenhower',
                yearInvolved: '1952',
                normalFactDisplay: true,
                statesInvolved: [],
                choiceEvent: false
            },
            {
                title: 'Endorsement',
                description: 'You have been endorsed by a Grassroots Organization',
                points: 1,
                imageSrc: '/assets/images/presidents/34-eisenhower.jpg',
                history: 'A group called Citizens for Eisenhower helped raise money for his campaign.',
                politicanInvolved: 'Dwight Eisenhower',
                yearInvolved: '1952',
                normalFactDisplay: true,
                statesInvolved: [],
                choiceEvent: false
            },
        ];
        return results;
    }
};
EndorsementEvents = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({ providedIn: 'root' })
], EndorsementEvents);



/***/ }),

/***/ 4627:
/*!*************************************************!*\
  !*** ./src/app/services/events/gaffe.events.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GaffeEvents": () => (/* binding */ GaffeEvents)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);

/* eslint-disable max-len */

let GaffeEvents = class GaffeEvents {
    getGaffeEvents() {
        //5 event cards
        const results = [
            {
                title: 'Gaffe',
                description: 'One of your thoughts doesn\'t translate well into words during an interview',
                points: -1,
                imageSrc: '/assets/images/presidents/43-bush.jpg',
                history: 'During an event in Michigan, Bush said “The human and the fish can coexist peacefully” during a discussion on energy',
                politicanInvolved: 'George W Bush',
                yearInvolved: '2000',
                normalFactDisplay: true,
                statesInvolved: ['MI', 'PA', 'WI', 'OH', 'IL'],
                choiceEvent: false
            },
            {
                title: 'Gaffe',
                description: 'One of your opponent\'s thoughts doesn\'t translate well into words during an interview',
                points: 1,
                imageSrc: '/assets/images/presidents/43-bush.jpg',
                history: 'During an event in Michigan, Bush said “The human and the fish can coexist peacefully” during a discussion on energy',
                politicanInvolved: 'George W Bush',
                yearInvolved: '2000',
                normalFactDisplay: true,
                statesInvolved: ['MI', 'PA', 'WI', 'OH', 'IL'],
                choiceEvent: false
            },
            {
                title: 'Gaffe',
                description: 'You say the wrong number during a speech',
                points: -1,
                normalFactDisplay: true,
                imageSrc: '/assets/images/presidents/44-obama.jpg',
                history: 'During a campaign speech in Oregon, Obama accidently said: "I\'ve now been to 57 states"',
                politicanInvolved: 'Barack Obama',
                yearInvolved: '2008',
                statesInvolved: ['OR', 'ID', 'MT', 'WA', 'UT', 'NV', 'OK'],
                choiceEvent: false
            },
            {
                title: 'Gaffe',
                description: 'You slip up while making a comparison during a speech',
                points: -2,
                imageSrc: '/assets/images/presidents/46-joe-biden.png',
                history: 'During a speech in Iowa, Biden mispoke saying: "Poor kids are just as bright and just as talented as white kids" before immediately correcting himself',
                politicanInvolved: 'Joe Biden',
                yearInvolved: '2020',
                normalFactDisplay: true,
                statesInvolved: ['TX', 'CA', 'FL', 'PA', 'NC', 'NY', 'IL'],
                choiceEvent: false
            },
            {
                title: 'Gaffe',
                description: 'You misremember a common saying',
                points: -4,
                imageSrc: '/assets/images/presidents/43-bush.jpg',
                history: 'During a speech in Nashville, Bush said: "There\'s an old saying in Tennessee - I know it\'s in Texas, probably in Tennessee - that says, fool me once, shame on - shame on you. Fool me - you can\'t get fooled again."',
                politicanInvolved: 'George W Bush',
                yearInvolved: '2004',
                normalFactDisplay: true,
                statesInvolved: ['TN', 'TX'],
                choiceEvent: false
            },
            //MIDDLE
            {
                title: 'Gaffe',
                description: 'One of your thoughts doesn\'t translate well into words during an interview',
                points: -2,
                imageSrc: '/assets/images/presidents/43-bush.jpg',
                history: 'During an event in South Carolina, Bush said “Rarely is the question asked, is our children learning?” during a discussion on education',
                politicanInvolved: 'George W Bush',
                yearInvolved: '2000',
                normalFactDisplay: true,
                statesInvolved: ['SC', 'NC', 'GA'],
                choiceEvent: false
            },
            {
                title: 'Gaffe',
                description: 'Your opponent misspeaks during a speach',
                points: 2,
                imageSrc: '/assets/images/presidents/43-bush.jpg',
                history: 'During an event in Bentonville, Arkansas, Bush said "They misunderestimate me."',
                politicanInvolved: 'George W Bush',
                yearInvolved: '2000',
                normalFactDisplay: true,
                statesInvolved: ['AR', 'MO', 'TX'],
                choiceEvent: false
            },
            {
                title: 'Gaffe',
                description: 'Your opponent says something silly',
                points: 1,
                normalFactDisplay: true,
                imageSrc: '/assets/images/presidents/40-reagan.jpg',
                history: 'Reagan\'s opponent, Walter Mondale, said "Mr. Reagan will raise you taxes and so will I!"',
                politicanInvolved: 'Ronald Reagan',
                yearInvolved: '1980',
                statesInvolved: ['VA', 'NC', 'PA', 'ME', 'WI'],
                choiceEvent: false
            },
            {
                title: 'Gaffe',
                description: 'Your opponent says something insensitive',
                points: 1,
                imageSrc: '/assets/images/presidents/44-obama.jpg',
                history: 'His opponent, Mitt Romney, said: "I\'m not concerned about the very poor."',
                politicanInvolved: 'Barack Obama',
                yearInvolved: '2012',
                normalFactDisplay: true,
                statesInvolved: ['IA', 'WV', 'FL', 'AZ'],
                choiceEvent: false
            },
        ];
        return results;
    }
};
GaffeEvents = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({ providedIn: 'root' })
], GaffeEvents);



/***/ }),

/***/ 1567:
/*!*****************************************************!*\
  !*** ./src/app/services/events/hotbutton.events.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HotButtonEvents": () => (/* binding */ HotButtonEvents)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);

/* eslint-disable max-len */

let HotButtonEvents = class HotButtonEvents {
    getHotButtonEvents() {
        //7 event cards (GOAL 20)
        const results = [
            {
                title: 'Hot Button Issue',
                description: 'Border Security',
                points: 1,
                imageSrc: '/assets/images/presidents/43-bush.jpg',
                history: 'South westerners say they want you to increase Border Security. What promise do you make?',
                politicanInvolved: '',
                yearInvolved: '2004',
                normalFactDisplay: false,
                statesInvolved: ['CA', 'AZ', 'NM', 'TX'],
                statesInvolved2: ['NV', 'CO', 'FL', 'TX'],
                choiceEvent: true,
                choiceText1: 'More Border Patrol',
                choiceText2: 'Less Border Patrol',
                choicePoints1: 2,
                choicePoints2: -2,
            },
            {
                title: 'Hot Button Issue',
                description: 'National Healthcare',
                points: 1,
                imageSrc: '/assets/images/presidents/43-bush.jpg',
                history: 'People want to know your position on expanding Medicare',
                politicanInvolved: '',
                yearInvolved: '2004',
                normalFactDisplay: false,
                statesInvolved: ['ID', 'AZ', 'IA', 'OH'],
                statesInvolved2: ['NM', 'IL', 'OR', 'WA'],
                choiceEvent: true,
                choiceText1: 'Expand Medicare',
                choiceText2: 'Reduce Medicare',
                choicePoints1: -2,
                choicePoints2: -2,
            },
            {
                title: 'Hot Button Issue',
                description: 'Car Company Bailout',
                points: 1,
                imageSrc: '/assets/images/presidents/43-bush.jpg',
                history: 'Car Companies in the midwest are seeking government funds in a "Bail Out" to avoid layoffs',
                politicanInvolved: '',
                yearInvolved: '2004',
                normalFactDisplay: false,
                statesInvolved: ['MI', 'WI', 'PA'],
                statesInvolved2: ['MI', 'WI', 'PA'],
                choiceEvent: true,
                choiceText1: 'Bail out car company',
                choiceText2: 'Don\'t Support Bail Out',
                choicePoints1: 2,
                choicePoints2: -1,
            },
            {
                title: 'Hot Button Issue',
                description: 'Coal Mining',
                points: 2,
                imageSrc: '/assets/images/presidents/43-bush.jpg',
                history: 'Appalacian Coal Miners want your support of coal mining, while New Englanders are asking you to support Green Energy. Which promise will you make?',
                politicanInvolved: '',
                yearInvolved: '2004',
                normalFactDisplay: false,
                statesInvolved: ['WV', 'KY', 'PA'],
                statesInvolved2: ['NH', 'CT', 'ME'],
                choiceEvent: true,
                choiceText1: 'Support Mining',
                choiceText2: 'Suport Green Energy',
                choicePoints1: 2,
                choicePoints2: 2,
            },
            {
                title: 'Hot Button Issue',
                description: 'Water Conservation',
                points: 1,
                imageSrc: '/assets/images/presidents/43-bush.jpg',
                history: 'A South Western governor asks you to promise to spend more on Dams and Water Conservation',
                politicanInvolved: '',
                yearInvolved: '2004',
                normalFactDisplay: false,
                statesInvolved: ['NV', 'UT', 'AZ', 'WY'],
                statesInvolved2: ['NV', 'UT', 'AZ', 'WY'],
                choiceEvent: true,
                choiceText1: 'Spend More',
                choiceText2: 'Keep Spending the Same',
                choicePoints1: 2,
                choicePoints2: -1,
            },
            {
                title: 'Hot Button Issue',
                description: 'The Mississipi River Has Flooded!',
                points: 2,
                imageSrc: '/assets/images/presidents/43-bush.jpg',
                history: 'A reporter asks whether you support taking money from the defense budget to give aid to effected states.',
                politicanInvolved: '',
                yearInvolved: '2004',
                normalFactDisplay: false,
                statesInvolved: ['MS', 'MO', 'LA', 'AR', 'TN'],
                statesInvolved2: ['MS', 'MO', 'LA', 'AR', 'TN'],
                choiceEvent: true,
                choiceText1: 'Promise aid money to flooded states',
                choiceText2: 'Keep money in defense budget',
                choicePoints1: 2,
                choicePoints2: -4,
            },
            {
                title: 'Hot Button Issue',
                description: 'A Huricane has Stuck the East Coast!',
                points: 2,
                imageSrc: '/assets/images/presidents/43-bush.jpg',
                history: 'A reporter asks whether you support taking money from the National Parks budget to give aid to effected states.',
                politicanInvolved: '',
                yearInvolved: '2004',
                normalFactDisplay: false,
                statesInvolved: ['NC', 'SC', 'VA', 'MD'],
                statesInvolved2: ['NC', 'SC', 'VA', 'MD'],
                choiceEvent: true,
                choiceText1: 'Promise aid money to East Coast states',
                choiceText2: 'Keep money in defense budget',
                choicePoints1: 2,
                choicePoints2: -2,
            },
            {
                title: 'Hot Button Issue',
                description: 'New Military Base',
                points: 2,
                imageSrc: '/assets/images/presidents/43-bush.jpg',
                history: 'A new Miltary Base is being planned and will either be built in Florida or Georgia. A reporter asks which state you think should get the new Base.',
                politicanInvolved: '',
                yearInvolved: '2004',
                normalFactDisplay: false,
                statesInvolved: ['FL'],
                statesInvolved2: ['GA'],
                choiceEvent: true,
                choiceText1: 'Florida',
                choiceText2: 'Georgia',
                choicePoints1: 2,
                choicePoints2: 2,
            },
            {
                title: 'Hot Button Issue',
                description: 'Supreme Court Vacancy',
                points: 2,
                imageSrc: '/assets/images/presidents/43-bush.jpg',
                history: 'A Vacancy has just opened on the Supreme Court! What kind of judge will you promise to nominate?',
                politicanInvolved: '',
                yearInvolved: '2004',
                normalFactDisplay: false,
                statesInvolved: ['WI', 'MI'],
                statesInvolved2: ['MA', 'LA'],
                choiceEvent: true,
                choiceText1: 'A judge who can compromise when needed',
                choiceText2: 'A judge who will never compromise their values',
                choicePoints1: 2,
                choicePoints2: 2,
            },
        ];
        return results;
    }
};
HotButtonEvents = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({ providedIn: 'root' })
], HotButtonEvents);



/***/ }),

/***/ 766:
/*!*************************************************!*\
  !*** ./src/app/services/events/media.events.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MediaTourEvents": () => (/* binding */ MediaTourEvents)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);

/* eslint-disable max-len */

let MediaTourEvents = class MediaTourEvents {
    getMediaTourEvents() {
        //3 event cards (3 GOAL)
        const results = [
            {
                title: 'Media Tour',
                description: 'A National TV show invites you on for an interview',
                points: 1,
                imageSrc: '/assets/images/presidents/32-roosevelt.jpg',
                history: 'Franklin D Roosevelt was the first president to appear on TV during the 1939 World\'s Fair',
                politicanInvolved: 'Franklin D Roosevelt',
                yearInvolved: '1940',
                normalFactDisplay: false,
                statesInvolved: [],
                diceEvent: true,
                choiceEvent: false
            },
            {
                title: 'Media Tour',
                description: 'A national Radio Show/Podcast Network invites you on for an interview',
                points: 1,
                imageSrc: '/assets/images/presidents/29-harding.jpg',
                history: 'Warren G Harding was the first president to talk over the radio, giving a speech at the dedication of the Lincoln monument',
                politicanInvolved: 'Warren G Harding',
                yearInvolved: '1920',
                normalFactDisplay: false,
                statesInvolved: [],
                diceEvent: true,
                choiceEvent: false
            },
            {
                title: 'Media Tour',
                description: 'A popular website runs a big story on you',
                points: 1,
                imageSrc: '/assets/images/presidents/42-clinton.jpg',
                history: 'Bill Clinton was the president when the White House built their first website',
                politicanInvolved: 'Bill Clinton',
                yearInvolved: '1996',
                normalFactDisplay: false,
                statesInvolved: [],
                diceEvent: true,
                choiceEvent: false
            }
        ];
        return results;
    }
};
MediaTourEvents = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({ providedIn: 'root' })
], MediaTourEvents);



/***/ }),

/***/ 2480:
/*!***********************************************!*\
  !*** ./src/app/services/events/pac.events.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PacEvents": () => (/* binding */ PacEvents)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);

/* eslint-disable max-len */

let PacEvents = class PacEvents {
    getSuperPacEvents() {
        //15 event cards (25 goal)
        const results = [
            {
                title: 'Super Pac',
                description: 'A Politcal Action Group ran ads for you in Michigan and Illinois',
                points: 3,
                imageSrc: '/assets/images/presidents/campaign.png',
                normalFactDisplay: false,
                history: 'Super Pacs affect elections with money',
                politicanInvolved: '',
                yearInvolved: '',
                statesInvolved: ['MI', 'IL'],
                choiceEvent: false
            },
            {
                title: 'Super Pac',
                description: 'A Politcal Action Group ran ads for your opponent in Georgia and Mississippi',
                points: -3,
                imageSrc: '/assets/images/presidents/campaign.png',
                normalFactDisplay: false,
                history: 'Super Pacs affect elections with money',
                politicanInvolved: '',
                yearInvolved: '',
                statesInvolved: ['MS', 'GA'],
                choiceEvent: false
            },
            {
                title: 'Super Pac',
                description: 'A Politcal Action Group ran ads for your opponent in the South West',
                points: -2,
                imageSrc: '/assets/images/presidents/campaign.png',
                normalFactDisplay: false,
                history: 'Super Pacs affect elections with money',
                politicanInvolved: '',
                yearInvolved: '',
                statesInvolved: ['NM', 'AZ', 'TX', 'NV'],
                choiceEvent: false
            },
            {
                title: 'Super Pac',
                description: 'A Politcal Action Group ran ads for you in the South West',
                points: 2,
                imageSrc: '/assets/images/presidents/campaign.png',
                normalFactDisplay: false,
                history: 'Super Pacs affect elections with money',
                politicanInvolved: '',
                yearInvolved: '',
                statesInvolved: ['NM', 'AZ', 'TX', 'NV'],
                choiceEvent: false
            },
            {
                title: 'Super Pac',
                description: 'A Politcal Action Group ran ads for you in Maine and New Hampshire',
                points: 3,
                imageSrc: '/assets/images/presidents/campaign.png',
                normalFactDisplay: false,
                history: 'Super Pacs affect elections with money',
                politicanInvolved: '',
                yearInvolved: '',
                statesInvolved: ['ME', 'NH'],
                choiceEvent: false
            },
            {
                title: 'Super Pac',
                description: 'A Politcal Action Group ran ads for your opponent in Maine and New Hampshire',
                points: -2,
                imageSrc: '/assets/images/presidents/campaign.png',
                normalFactDisplay: false,
                history: 'Super Pacs affect elections with money',
                politicanInvolved: '',
                yearInvolved: '',
                statesInvolved: ['ME', 'NH'],
                choiceEvent: false
            },
            {
                title: 'Super Pac',
                description: 'A Politcal Action Group ran ads for your opponent in Virginia and West Virginia',
                points: -2,
                imageSrc: '/assets/images/presidents/campaign.png',
                normalFactDisplay: false,
                history: 'Super Pacs affect elections with money',
                politicanInvolved: '',
                yearInvolved: '',
                statesInvolved: ['VA', 'WV'],
                choiceEvent: false
            },
            {
                title: 'Super Pac',
                description: 'A Politcal Action Group ran ads for your opponent in Oregon and Washington',
                points: -4,
                imageSrc: '/assets/images/presidents/campaign.png',
                normalFactDisplay: false,
                history: 'Super Pacs affect elections with money',
                politicanInvolved: '',
                yearInvolved: '',
                statesInvolved: ['OR', 'WA'],
                choiceEvent: false
            },
            {
                title: 'Super Pac',
                description: 'A Politcal Action Group ran ads for you in the Carolinas',
                points: 2,
                imageSrc: '/assets/images/presidents/campaign.png',
                normalFactDisplay: false,
                history: 'Super Pacs affect elections with money',
                politicanInvolved: '',
                yearInvolved: '',
                statesInvolved: ['SC', 'NC'],
                choiceEvent: false
            },
            {
                title: 'Super Pac',
                description: 'A Politcal Action Group ran ads for your opponent in Florida',
                points: -3,
                imageSrc: '/assets/images/presidents/campaign.png',
                normalFactDisplay: false,
                history: 'Super Pacs affect elections with money',
                politicanInvolved: '',
                yearInvolved: '',
                statesInvolved: ['FL'],
                choiceEvent: false
            },
            {
                title: 'Super Pac',
                description: 'A Politcal Action Group ran ads for your opponent in Texas',
                points: -2,
                imageSrc: '/assets/images/presidents/campaign.png',
                normalFactDisplay: false,
                history: 'Super Pacs affect elections with money',
                politicanInvolved: '',
                yearInvolved: '',
                statesInvolved: ['TX'],
                choiceEvent: false
            },
            {
                title: 'Super Pac',
                description: 'A Politcal Action Group ran ads for you in Wisconsin and Minnesota',
                points: 2,
                imageSrc: '/assets/images/presidents/campaign.png',
                normalFactDisplay: false,
                history: 'Super Pacs affect elections with money',
                politicanInvolved: '',
                yearInvolved: '',
                statesInvolved: ['WI', 'MN'],
                choiceEvent: false
            },
            {
                title: 'Super Pac',
                description: 'A Politcal Action Group ran ads for your opponent in Wisconsin and Minnesota',
                points: -3,
                imageSrc: '/assets/images/presidents/campaign.png',
                normalFactDisplay: false,
                history: 'Super Pacs affect elections with money',
                politicanInvolved: '',
                yearInvolved: '',
                statesInvolved: ['WI', 'MN'],
                choiceEvent: false
            },
            {
                title: 'Super Pac',
                description: 'A Politcal Action Group ran ads for your opponent in Colorado and Nevada',
                points: -3,
                imageSrc: '/assets/images/presidents/campaign.png',
                normalFactDisplay: false,
                history: 'Super Pacs affect elections with money',
                politicanInvolved: '',
                yearInvolved: '',
                statesInvolved: ['CO', 'NV'],
                choiceEvent: false
            },
            {
                title: 'Super Pac',
                description: 'A Politcal Action Group ran ads for you in Missouri, Arkansas and Louisianna',
                points: 2,
                imageSrc: '/assets/images/presidents/campaign.png',
                normalFactDisplay: false,
                history: 'Super Pacs affect elections with money',
                politicanInvolved: '',
                yearInvolved: '',
                statesInvolved: ['MO', 'AR', 'LA'],
                choiceEvent: false
            },
        ];
        return results;
    }
};
PacEvents = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({ providedIn: 'root' })
], PacEvents);



/***/ }),

/***/ 464:
/*!***************************************************!*\
  !*** ./src/app/services/events/scandal.events.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScandalEvents": () => (/* binding */ ScandalEvents)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);

/* eslint-disable max-len */

let ScandalEvents = class ScandalEvents {
    getScandalEvents() {
        //7 event cards (10 goal)
        const results = [
            {
                title: 'Scandal',
                description: 'Your opponent spreads a bizarre rumour about you. Voters find this distasteful.',
                points: -2,
                imageSrc: '/assets/images/presidents/09-harrison.jpg',
                history: 'Known as "The Dead Cow Campaign", Harrison\'s opponent falsely claimed that he was courtmartialed for killing a cow while in the military',
                politicanInvolved: 'William Henry Harrison',
                yearInvolved: '1840',
                normalFactDisplay: true,
                statesInvolved: [],
                choiceEvent: false
            },
            {
                title: 'Scandal',
                description: 'Your running mate accepted bribes.',
                points: -2,
                imageSrc: '/assets/images/presidents/18-grant.jpg',
                history: 'Known as "The Credit Mobilier Scandal", A railroad company gave Senators money in exchange for passing laws. These included Grant\'s Vice President',
                politicanInvolved: 'Ulysses S. Grant',
                yearInvolved: '1872',
                normalFactDisplay: true,
                statesInvolved: [],
                choiceEvent: false
            },
            {
                title: 'Scandal',
                description: 'Your opponent is revealed to have an illegitimate child',
                points: 2,
                imageSrc: 'assets/images/presidents/22-24-cleveland.jpg',
                history: 'After discovering Cleveland had fathered a son out of wedlock, his opponent taunted him with the chant: "Ma, Ma, where\'s my Pa? In the White House Ha Ha Ha!" ',
                politicanInvolved: 'Grover Cleveland',
                yearInvolved: '1884',
                normalFactDisplay: true,
                statesInvolved: [],
                choiceEvent: false
            },
            {
                title: 'Scandal',
                description: 'A leak from private fundraising event reveals some bad comments you made',
                points: -2,
                imageSrc: 'assets/images/presidents/44-obama.jpg',
                history: 'A leak from a fundraiser showed President Obama said: "People in rural areas are bitter about their lives and cling to their guns and religion."',
                politicanInvolved: 'Barack Obama',
                yearInvolved: '2012',
                normalFactDisplay: true,
                statesInvolved: [],
                choiceEvent: false
            },
            {
                title: 'Scandal',
                description: 'A leak from private fundraising event reveals some bad comments your opponent made',
                points: 2,
                imageSrc: 'assets/images/presidents/44-obama.jpg',
                history: 'A leak from a fundraiser showed President Obama said: "People in rural areas are bitter about their lives and cling to their guns and religion."',
                politicanInvolved: 'Barack Obama',
                yearInvolved: '2012',
                normalFactDisplay: true,
                statesInvolved: [],
                choiceEvent: false
            },
            {
                title: 'Scandal',
                description: 'Your Cabinet Member\'s family life interferes with the election',
                points: -2,
                imageSrc: 'assets/images/presidents/07-jackson.jpg',
                history: 'Called "The Petticoat Affair", Jackson\'s Secretary of War married an unpopular woman. Several Cabinet Members resigned after Jackson got angry with them for their reception of her.',
                politicanInvolved: 'Andrew Jackson',
                yearInvolved: '1832',
                normalFactDisplay: true,
                statesInvolved: [],
                choiceEvent: false
            },
            {
                title: 'Scandal',
                description: 'Media discovers that you were unfaithful to your spouse',
                points: -2,
                imageSrc: 'assets/images/presidents/42-clinton.jpg',
                history: 'President Clinton had inappropriate relations with a White House intern, and lied under oath about it.',
                politicanInvolved: 'Bill Clinton',
                yearInvolved: '1996',
                normalFactDisplay: true,
                statesInvolved: [],
                choiceEvent: false
            },
            {
                title: 'Scandal',
                description: 'Media discovers that your opponent was unfaithful to their spouse',
                points: 2,
                imageSrc: 'assets/images/presidents/42-clinton.jpg',
                history: 'President Clinton had inappropriate relations with a White House intern, and lied under oath about it.',
                politicanInvolved: 'Bill Clinton',
                yearInvolved: '1996',
                normalFactDisplay: true,
                statesInvolved: [],
                choiceEvent: false
            },
            {
                title: 'Scandal',
                description: 'Your opponent\'s company has engaged in some shady practices.',
                points: 2,
                imageSrc: 'assets/images/presidents/romney.jpg',
                history: 'A company Mitt Romney invested in was accused of causing a woman\'s death by firing her.',
                politicanInvolved: 'Mitt Romney',
                yearInvolved: '2012',
                normalFactDisplay: true,
                statesInvolved: [],
                choiceEvent: false
            },
            {
                title: 'Scandal',
                description: 'You were caught spying on your opponet\'s campaign headquarters.',
                points: -2,
                imageSrc: 'assets/images/presidents/romney.jpg',
                history: 'Known as the "Watergate Scandal", Nixon\'s team broke into the Watergate Hotel to steal information, and he eventually resigned as a consequence.',
                politicanInvolved: 'Richard Nixon',
                yearInvolved: '1972',
                normalFactDisplay: true,
                statesInvolved: [],
                choiceEvent: false
            },
            {
                title: 'Scandal',
                description: 'An old recording shows your opponent saying something extremely distasteful.',
                points: 2,
                imageSrc: '/assets/images/presidents/45-donald-trump.png',
                history: 'An Access Hollywood tape showed Trump boasting about criminal sexual violence',
                politicanInvolved: 'Donald Trump',
                yearInvolved: '2016',
                normalFactDisplay: true,
                statesInvolved: [],
                choiceEvent: false
            },
        ];
        return results;
    }
};
ScandalEvents = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({ providedIn: 'root' })
], ScandalEvents);



/***/ }),

/***/ 764:
/*!*******************************************!*\
  !*** ./src/app/services/text.services.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextService": () => (/* binding */ TextService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _events_boon_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events/boon.events */ 9508);
/* harmony import */ var _events_endorsement_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events/endorsement.events */ 458);
/* harmony import */ var _events_gaffe_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events/gaffe.events */ 4627);
/* harmony import */ var _events_hotbutton_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events/hotbutton.events */ 1567);
/* harmony import */ var _events_media_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./events/media.events */ 766);
/* harmony import */ var _events_pac_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./events/pac.events */ 2480);
/* harmony import */ var _events_scandal_events__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./events/scandal.events */ 464);

/* eslint-disable max-len */








let TextService = class TextService {
    constructor(boon, endorsement, gaffe, hotButton, mediaTour, pac, scandal) {
        this.boon = boon;
        this.endorsement = endorsement;
        this.gaffe = gaffe;
        this.hotButton = hotButton;
        this.mediaTour = mediaTour;
        this.pac = pac;
        this.scandal = scandal;
    }
    //TODO jermy add events from Julies spreadsheet
    //https://docs.google.com/spreadsheets/d/1yP6gM0ZuIBHZIh7I--olHJp9dRAVWD300xbBQVGuFeQ/edit#gid=1533506833
    getScandalEvents() {
        return this.scandal.getScandalEvents();
    }
    getGaffeEvents() {
        return this.gaffe.getGaffeEvents();
    }
    getBoonEvents() {
        return this.boon.getBoonEvents();
    }
    getEndorsementEvents() {
        return this.endorsement.getEndorsementEvents();
    }
    getSuperPacEvents() {
        return this.pac.getSuperPacEvents();
    }
    getMediaTourEvents() {
        return this.mediaTour.getMediaTourEvents();
    }
    getHotButtonEvents() {
        return this.hotButton.getHotButtonEvents();
    }
    getTurns(longGame = false) {
        let turns = [
            'It is your first turn! Each turn you get to choose 1 action. Click on one of the options below! Your opponent will go next.',
            'Good job in Round 1! Tap the Map/Polls icon at the bottom of the page to see how you are doing in the Polls.',
            'Welcome to Round 3! Have you tried fundraising yet?',
            'It is Round 4.',
            'It is Round 5. Are you paying attention to your opponent\'s moves? They might affect your strategy.',
            'It is Round 6.',
            'It is Round 7. ',
            'It is Round 8. You are half way to the Election!',
            'It is Round 9. Sometimes it pays off to go after a state that seems out of reach...',
            'It is Round 10. I hope you get a good Event Card this time...',
            'It is Round 11. ',
            'It is Round 12. You are doing great. I would vote for you.',
            'It is Round 13. ',
            'It is Round 14. We are three rounds away! Check the Map for which last states to target.',
            'It is Round 15. ',
            'It is Round 16. This is your last move before election day! Make it count!'
        ];
        if (longGame) {
            turns = [
                'It is your first turn! Each turn you get to choose 1 action. Click on one of the options below! Your opponent will go next.',
                'Good job in Round 1! Tap the Map/Polls icon at the bottom of the page to see how you are doing in the Polls.',
                'Welcome to Round 3! Have you tried fundraising yet?',
                'It is Round 4.',
                'It is Round 5. Are you paying attention to your opponent\'s moves? They might affect your strategy.',
                'It is Round 6.',
                'It is Round 7. ',
                'It is Round 8. ',
                'It is Round 9. Sometimes it pays off to go after a state that seems out of reach...',
                'It is Round 10. I hope you get a good Event Card this time...',
                'It is Round 11. ',
                'It is Round 12. ',
                'It is Round 13. Remember to check the MAP often!',
                'It is Round 14. ',
                'It is Round 15. ',
                'It is Round 16. ',
                'It is Round 17. You are half way to the Election!',
                'It is Round 18. ',
                'It is Round 19. ',
                'It is Round 20. ',
                'It is Round 21. You are doing great!',
                'It is Round 22. ',
                'It is Round 23. ',
                'It is Round 24. Keep it up!',
                'It is Round 25. ',
                'It is Round 26. ',
                'It is Round 27. ',
                'It is Round 28. ',
                'It is Round 29. We are three rounds away! Check the Map for which last states to target.',
                'It is Round 30. ',
                'It is Round 31. ',
                'It is Round 32. This is your last move before election day! Make it count!'
            ];
        }
        return turns;
    }
    getFundraisingFacts() {
        const facts = [
            {
                presidentIcon: '/assets/images/presidents/44-obama.jpg',
                eventHistory: 'Barack Obama spent $730 Million during the 2008 election'
            },
            {
                presidentIcon: '/assets/images/presidents/37-nixon.jpg',
                eventHistory: 'Richard Nixon spent $25.4 Million during the 1968 election'
            },
            {
                presidentIcon: '/assets/images/presidents/39-carter.jpg',
                eventHistory: 'Jimmy Carter spent $33.4 Million during the 1976 election'
            },
            {
                presidentIcon: '/assets/images/presidents/40-reagan.jpg',
                eventHistory: 'Ronald Reagan spent $57.7 Million during the 1980 election'
            },
            {
                presidentIcon: '/assets/images/presidents/41-bush.jpg',
                eventHistory: 'George H W Bush spent $80 Million during the 1988 election'
            },
            {
                presidentIcon: '/assets/images/presidents/42-clinton.jpg',
                eventHistory: 'Bill Clinton spent $107 Million during the 1992 election'
            },
            {
                presidentIcon: '/assets/images/presidents/43-bush.jpg',
                eventHistory: 'George W Bush spent $186 Millon during the 2000 election'
            },
        ];
        return facts;
    }
};
TextService.ctorParameters = () => [
    { type: _events_boon_events__WEBPACK_IMPORTED_MODULE_0__.BoonEvents },
    { type: _events_endorsement_events__WEBPACK_IMPORTED_MODULE_1__.EndorsementEvents },
    { type: _events_gaffe_events__WEBPACK_IMPORTED_MODULE_2__.GaffeEvents },
    { type: _events_hotbutton_events__WEBPACK_IMPORTED_MODULE_3__.HotButtonEvents },
    { type: _events_media_events__WEBPACK_IMPORTED_MODULE_4__.MediaTourEvents },
    { type: _events_pac_events__WEBPACK_IMPORTED_MODULE_5__.PacEvents },
    { type: _events_scandal_events__WEBPACK_IMPORTED_MODULE_6__.ScandalEvents }
];
TextService = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({ providedIn: 'root' })
], TextService);



/***/ }),

/***/ 4763:
/*!*******************************************************!*\
  !*** ./src/app/tab1/advertise/advertise.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdvertisePage": () => (/* binding */ AdvertisePage)
/* harmony export */ });
/* harmony import */ var C_Users_Jeremy_SideProjects_campaign_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _advertise_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./advertise.component.html?ngResource */ 5969);
/* harmony import */ var _advertise_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./advertise.component.css?ngResource */ 5442);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _stores_votes_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../stores/votes.store */ 2049);
/* harmony import */ var src_app_modal_toast_modal_toast_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modal-toast/modal-toast.component */ 7537);










let AdvertisePage = class AdvertisePage {
  constructor(router, modalCtrl, votes) {
    this.router = router;
    this.modalCtrl = modalCtrl;
    this.votes = votes;
    this.attackAd = false;
    this.diceEnabled = false;
    this.canBack = true;
    this.myGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
      buttonGroup: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl()
    });
  }
  ngOnInit() {
    this.isDemocrat = this.votes.getUserIsDem();
    this.isThird = this.votes.getUserIsThird();
  }
  enableDice() {
    this.diceEnabled = true;
  }
  getGroup() {
    //JERMY CHECK THIS FOR DIFFERING HISTORIC GROUPS && randomize it for random maybe?
    if (this.myGroup.value.buttonGroup === 'one') {
      if (!this.votes.Washington) {
        this.selectedStates = ['CA', 'NV', 'OR'];
      } else if (this.votes.Hawaii) {
        this.selectedStates = ['HI', 'CA', 'WA', 'OR'];
      } else {
        this.selectedStates = ['CA', 'WA', 'OR'];
      }
    } else if (this.myGroup.value.buttonGroup === 'two') {
      this.selectedStates = ['IL', 'MN'];
    } else if (this.myGroup.value.buttonGroup === 'three') {
      if (this.votes.NewMexico) {
        this.selectedStates = ['NM', 'CO', 'NV', 'AZ'];
      } else {
        this.selectedStates = ['NY', 'NJ', 'CT'];
      }
    } else if (this.myGroup.value.buttonGroup === 'four') {
      this.selectedStates = ['ME', 'NH', 'VA', 'PA'];
    } else if (this.myGroup.value.buttonGroup === 'five') {
      this.selectedStates = ['WI', 'IA', 'MI', 'OH'];
    } else if (this.myGroup.value.buttonGroup === 'six') {
      this.selectedStates = ['FL', 'NC', 'GA'];
    } else if (this.myGroup.value.buttonGroup === 'seven') {
      if (this.votes.Alaska) {
        this.selectedStates = ['TX', 'AK'];
      } else {
        this.selectedStates = ['TX'];
      }
    } else if (this.myGroup.value.buttonGroup === 'eight') {
      this.selectedStates = ['SC', 'MO', 'IN', 'MS', 'LA'];
    } else {
      //error
    }
  }
  rollStarted() {
    this.canBack = false;
  }
  handleAttackRoll(roll) {
    var _this = this;
    return (0,C_Users_Jeremy_SideProjects_campaign_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.canBack = false;
      _this.getGroup();
      if (roll === 1) {
        _this.openModal('You rolled a ' + roll + ', Your advertising backfired, losing you 1% support!');
        for (const state in _this.selectedStates) {
          if (_this.isDemocrat) {
            _this.votes.changeStateClimate(_this.selectedStates[state], -1, 0);
          } else {
            _this.votes.changeStateClimate(_this.selectedStates[state], 0, -1);
          }
        }
      } else if (roll < 4) {
        _this.openModal('You rolled a ' + roll + ', Your advertising made no difference.');
      } else if (roll < 6) {
        _this.openModal('You rolled a ' + roll + ', Your advertising made a difference of 2% in your selected states!');
        for (const state in _this.selectedStates) {
          if (_this.isDemocrat) {
            _this.votes.changeStateClimate(_this.selectedStates[state], 2, 0);
          } else {
            _this.votes.changeStateClimate(_this.selectedStates[state], 0, 2);
          }
        }
      } else {
        _this.openModal('You rolled a ' + roll + ', Your advertising made a difference of 3% in your selected states!');
        for (const state in _this.selectedStates) {
          if (_this.isDemocrat) {
            _this.votes.changeStateClimate(_this.selectedStates[state], 3, 0);
          } else {
            _this.votes.changeStateClimate(_this.selectedStates[state], 0, 3);
          }
        }
        // await new Promise(f => setTimeout(f, 3200));
        // this.toNextTurn();
      }
    })();
  }

  handleRoll(roll) {
    var _this2 = this;
    return (0,C_Users_Jeremy_SideProjects_campaign_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.canBack = false;
      _this2.getGroup();
      if (_this2.isThird) {
        //TODO3
        return;
      }
      if (roll === 1) {
        _this2.openModal('You rolled a ' + roll + ', Your advertising made no difference!');
        // await new Promise(f => setTimeout(f, 3200));
        // this.toNextTurn();
      } else if (roll < 6) {
        _this2.openModal('You rolled a ' + roll + ', Your advertising made a difference of 1% in your selected states!');
        for (const state in _this2.selectedStates) {
          if (_this2.isDemocrat) {
            _this2.votes.changeStateClimate(_this2.selectedStates[state], 1, 0);
          } else {
            _this2.votes.changeStateClimate(_this2.selectedStates[state], 0, 1);
          }
        }
        // await new Promise(f => setTimeout(f, 3200));
        // this.toNextTurn();
      } else {
        _this2.openModal('You rolled a ' + roll + ', Your advertising made a difference of 2% in your selected states!');
        for (const state in _this2.selectedStates) {
          if (_this2.isDemocrat) {
            _this2.votes.changeStateClimate(_this2.selectedStates[state], 2, 0);
          } else {
            _this2.votes.changeStateClimate(_this2.selectedStates[state], 0, 2);
          }
        }
        // await new Promise(f => setTimeout(f, 3200));
        // this.toNextTurn();
      }
    })();
  }

  toNextTurn() {
    this.router.navigateByUrl('/tabs/tab1/opponent', {
      replaceUrl: true
    });
  }
  back() {
    this.votes.funds++;
    this.router.navigateByUrl('/tabs/tab1', {
      replaceUrl: true
    });
  }
  // async presentToast(message, duration, color = 'primary') {
  //   const toast = await this.toastController.create({
  //     message,
  //     duration,
  //     color,
  //     position: 'middle',
  //     mode: 'md'
  //   });
  //   toast.present();
  // }
  openModal(message, title = 'Results') {
    var _this3 = this;
    return (0,C_Users_Jeremy_SideProjects_campaign_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this3.modalCtrl.create({
        component: src_app_modal_toast_modal_toast_component__WEBPACK_IMPORTED_MODULE_4__.ModalToastComponent,
        componentProps: {
          message,
          title
        }
      });
      modal.onDidDismiss().then(() => {
        _this3.toNextTurn();
      });
      modal.present();
      const {
        data,
        role
      } = yield modal.onWillDismiss();
    })();
  }
};
AdvertisePage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController
}, {
  type: _stores_votes_store__WEBPACK_IMPORTED_MODULE_3__.VotesStore
}];
AdvertisePage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-advertise',
  template: _advertise_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_advertise_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AdvertisePage);


/***/ }),

/***/ 8082:
/*!*****************************************************!*\
  !*** ./src/app/tab1/campaign/campaign.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CampaignPage": () => (/* binding */ CampaignPage)
/* harmony export */ });
/* harmony import */ var C_Users_Jeremy_SideProjects_campaign_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _campaign_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./campaign.component.html?ngResource */ 1027);
/* harmony import */ var _campaign_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./campaign.component.css?ngResource */ 3579);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _stores_votes_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../stores/votes.store */ 2049);
/* harmony import */ var src_app_modal_toast_modal_toast_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modal-toast/modal-toast.component */ 7537);









let CampaignPage = class CampaignPage {
  constructor(router, modalCtrl, toastController, votes) {
    this.router = router;
    this.modalCtrl = modalCtrl;
    this.toastController = toastController;
    this.votes = votes;
    this.chosenState = null;
    this.effective = true;
    this.canBack = true;
  }
  ngOnInit() {
    this.isDemocrat = this.votes.getUserIsDem();
    this.isThird = this.votes.getUserIsThird();
    this.states = this.votes.getSortedStates();
  }
  inputChange() {
    console.log("On Changes");
    if (this.chosenState?.protected) {
      this.effective = false;
    } else {
      this.effective = true;
    }
  }
  rollStarted() {
    this.canBack = false;
  }
  checkRecordCompletion() {
    //set false to if they made it thorugh a whole game without visiting a state.
  }
  handleRoll(roll) {
    var _this = this;
    return (0,C_Users_Jeremy_SideProjects_campaign_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      //this.canBack = false;
      //TODO3
      let modifier = 0;
      const stateId = _this.chosenState.abbreviation;
      if (_this.chosenState.protected) {
        modifier = -1;
      }
      const originalRoll = roll;
      roll = Math.floor(roll / 2) + modifier;
      _this.votes.stateVisited(_this.chosenState);
      if (_this.chosenState) {
        if (_this.isDemocrat) {
          _this.votes.changeStateClimate(stateId, roll, 0);
        } else {
          _this.votes.changeStateClimate(stateId, 0, roll);
        }
        //TODO3 this number need
        _this.openModal('You rolled a ' + originalRoll + ', your polling numbers go up by ' + roll + '% in ' + _this.chosenState.name);
      }
    })();
  }
  toNextTurn() {
    this.router.navigateByUrl('/tabs/tab1/opponent', {
      replaceUrl: true
    });
  }
  back() {
    this.router.navigateByUrl('/tabs/tab1', {
      replaceUrl: true
    });
  }
  openModal(message, title = 'Results') {
    var _this2 = this;
    return (0,C_Users_Jeremy_SideProjects_campaign_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this2.modalCtrl.create({
        component: src_app_modal_toast_modal_toast_component__WEBPACK_IMPORTED_MODULE_4__.ModalToastComponent,
        componentProps: {
          message,
          title
        }
      });
      modal.onDidDismiss().then(() => {
        _this2.toNextTurn();
      });
      modal.present();
      const {
        data,
        role
      } = yield modal.onWillDismiss();
    })();
  }
};
CampaignPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController
}, {
  type: _stores_votes_store__WEBPACK_IMPORTED_MODULE_3__.VotesStore
}];
CampaignPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-campaign',
  template: _campaign_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_campaign_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], CampaignPage);


/***/ }),

/***/ 3121:
/*!***********************************************!*\
  !*** ./src/app/tab1/event/event.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventPage": () => (/* binding */ EventPage)
/* harmony export */ });
/* harmony import */ var C_Users_Jeremy_SideProjects_campaign_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _event_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event.component.html?ngResource */ 835);
/* harmony import */ var _event_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event.component.css?ngResource */ 7683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_text_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/text.services */ 764);
/* harmony import */ var src_app_stores_votes_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/stores/votes.store */ 2049);
/* harmony import */ var src_app_modal_toast_modal_toast_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modal-toast/modal-toast.component */ 7537);




/* eslint-disable max-len */






let EventPage = class EventPage {
  constructor(modalCtrl, router, votes, toastController, textService) {
    this.modalCtrl = modalCtrl;
    this.router = router;
    this.votes = votes;
    this.toastController = toastController;
    this.textService = textService;
    this.currentIndex = 0;
  }
  //TODO3 all this page
  ngOnInit() {
    this.currentIndex = this.votes.round - 2;
    this.isDemocrat = this.votes.isDemocrat;
    this.scandalEvents = this.textService.getScandalEvents();
    this.gaffeEvents = this.textService.getGaffeEvents();
    //this.neutralizeEvents = this.textService.getNeutralizationEvents();
    this.boonEvents = this.textService.getBoonEvents();
    this.endorsementEvents = this.textService.getEndorsementEvents();
    this.hotButtonEvents = this.textService.getHotButtonEvents();
    this.mediaTourEvents = this.textService.getMediaTourEvents();
    this.superPacEvents = this.textService.getSuperPacEvents();
    this.currentEvent = this.getCurrentEvent();
    this.eventTitle = this.currentEvent.title;
    this.eventDescription = this.currentEvent.description;
    this.eventHistory = this.currentEvent.history;
    this.eventIcon = this.currentEvent.imageSrc;
    this.eventYear = this.currentEvent.yearInvolved;
    this.eventPersonInvolved = this.currentEvent.politicanInvolved;
    this.eventPoints = this.currentEvent.points;
    this.normalFactDisplay = this.currentEvent.normalFactDisplay;
    this.statesInvolved = this.currentEvent.statesInvolved;
    this.statesInvolvedString = '';
    if (this.statesInvolved.length === 1) {
      this.statesInvolvedString = ' ' + this.statesInvolved[0];
    } else {
      for (const state of this.statesInvolved) {
        this.statesInvolvedString += ' ';
        this.statesInvolvedString += state;
        this.statesInvolvedString += ',';
      }
      this.statesInvolvedString = this.statesInvolvedString.substring(0, this.statesInvolvedString.length - 1);
      this.statesInvolvedString = this.statesInvolvedString.slice(0, this.statesInvolvedString.length - 3) + ' and' + this.statesInvolvedString.slice(this.statesInvolvedString.length - 3);
    }
    //console.log(this.currentIndex);
  }

  getCurrentEvent() {
    // return this.endorsementEvents[Math.floor(Math.random() * this.endorsementEvents.length)];
    const currentEventType = this.getCurrentEventType();
    if (currentEventType === 'superPac') {
      return this.superPacEvents[Math.floor(Math.random() * this.superPacEvents.length)];
    } else if (currentEventType === 'endorsement') {
      return this.endorsementEvents[Math.floor(Math.random() * this.endorsementEvents.length)];
    } else if (currentEventType === 'boon') {
      return this.boonEvents[Math.floor(Math.random() * this.boonEvents.length)];
    } else if (currentEventType === 'mediaTour') {
      return this.mediaTourEvents[Math.floor(Math.random() * this.mediaTourEvents.length)];
    } else if (currentEventType === 'hotButton') {
      return this.hotButtonEvents[Math.floor(Math.random() * this.hotButtonEvents.length)];
    } else if (currentEventType === 'gaffe') {
      return this.gaffeEvents[Math.floor(Math.random() * this.gaffeEvents.length)];
    } else if (currentEventType === 'scandal') {
      return this.scandalEvents[Math.floor(Math.random() * this.scandalEvents.length)];
    } else {
      return this.allEvents[0];
    }
  }
  getCurrentEventType() {
    const draw = Math.floor(Math.random() * 93);
    if (draw > 95) {
      return 'boon'; // 5%
    } else if (draw > 80) {
      return 'mediaTour'; // 15%
    } else if (draw > 60) {
      return 'endorsement'; // 20%
    } else if (draw > 45) {
      return 'superPac'; // 10%
    } else if (draw > 20) {
      return 'hotButton'; // 25%
    } else if (draw > 6) {
      return 'gaffe'; // 14%
    } else {
      this.votes.scandalDrawn();
      return 'scandal'; // 6%
    }
  }

  handleDiceRoll(roll) {
    var _this = this;
    return (0,C_Users_Jeremy_SideProjects_campaign_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (roll <= 2) {
        _this.handleRollToast(-1, []);
      } else {
        _this.handleRollToast(1, []);
      }
    })();
  }
  handleRollToast(roll, states) {
    var _this2 = this;
    return (0,C_Users_Jeremy_SideProjects_campaign_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let statesInvolved = '';
      let toastString = '';
      let toastTitle = '';
      if (states.length === 0) {
        if (roll < 0) {
          toastTitle = 'Bad news...';
          toastString = 'You fall ' + roll + '% in the polls in every state';
        } else {
          toastTitle = 'Good News!';
          toastString = 'You gain ' + roll + '% in the polls in every state';
        }
      } else {
        if (states.length === 1) {
          statesInvolved = ' ' + states[0];
        } else {
          for (const state of states) {
            statesInvolved += ' ';
            statesInvolved += state;
            statesInvolved += ',';
          }
          statesInvolved = statesInvolved.substring(0, statesInvolved.length - 1);
          statesInvolved = statesInvolved.slice(0, statesInvolved.length - 3) + ' and' + statesInvolved.slice(statesInvolved.length - 3);
        }
        if (roll < 0) {
          toastString = 'This moves the Climate ' + -roll + ' points toward your opponent in ' + statesInvolved;
          toastTitle = 'Tough luck...';
        } else {
          toastTitle = 'Smart Choice!';
          toastString = 'This moves the Climate ' + roll + ' points in your favor in ' + statesInvolved;
        }
      }
      _this2.handleRoll(roll, states, toastString, toastTitle);
    })();
  }
  handleRoll(roll, states, message, title) {
    var _this3 = this;
    return (0,C_Users_Jeremy_SideProjects_campaign_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (states.length === 0) {
        if (_this3.isDemocrat) {
          _this3.votes.changeNationalClimate(roll / 2, -roll / 2);
        } else {
          _this3.votes.changeNationalClimate(-roll / 2, roll / 2);
        }
      } else {
        for (const state of states) {
          if (_this3.isDemocrat) {
            _this3.votes.changeStateClimate(state, roll / 2, -roll / 2);
          } else {
            _this3.votes.changeStateClimate(state, -roll / 2, roll / 2);
          }
        }
      }
      if (message) {
        _this3.openModal(message, title);
      } else {
        _this3.endEvent();
      }
    })();
  }
  openModal(message, title = 'Results') {
    var _this4 = this;
    return (0,C_Users_Jeremy_SideProjects_campaign_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this4.modalCtrl.create({
        component: src_app_modal_toast_modal_toast_component__WEBPACK_IMPORTED_MODULE_5__.ModalToastComponent,
        componentProps: {
          message,
          title
        }
      });
      modal.onDidDismiss().then(() => {
        _this4.endEvent();
      });
      modal.present();
      const {
        data,
        role
      } = yield modal.onWillDismiss();
    })();
  }
  checkRecordCompletion() {
    //check for 2 scandals in 1 game i.e. this.votes.scandalCount maybe?
  }
  endEvent() {
    // this.currentIndex++;
    // if (this.currentIndex < 10) {
    //   this.currentEvent = this.allEvents[this.currentIndex];
    // } else {
    //   this.currentIndex = 0;
    //   this.currentEvent = this.allEvents[this.currentIndex];
    // }
    // const isDebate = (this.currentIndex === 3 || this.currentIndex === 6 || this.currentIndex === 8);
    // if (this.votes.NationalClimate > 3 && !isDebate) {
    //   if (this.isDemocrat) {
    //     this.currentEvent = this.allEvents[9];
    //   } else {
    //     this.currentEvent = this.allEvents[10];
    //   }
    // } else if (this.votes.NationalClimate < -3 && !isDebate) {
    //   if (this.isDemocrat) {
    //     this.currentEvent = this.allEvents[10];
    //   } else {
    //     this.currentEvent = this.allEvents[9];
    //   }
    // }
    // this.eventTitle = this.currentEvent.title;
    // this.eventDescription = this.currentEvent.description;
    // this.eventRollsL = this.currentEvent.rollMapDescription1;
    //this.eventRollsR = this.currentEvent.rollMapDescription2;
    this.router.navigateByUrl('/tabs/tab1', {
      replaceUrl: true
    });
  }
};
EventPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
}, {
  type: src_app_stores_votes_store__WEBPACK_IMPORTED_MODULE_4__.VotesStore
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController
}, {
  type: src_app_services_text_services__WEBPACK_IMPORTED_MODULE_3__.TextService
}];
EventPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-event',
  template: _event_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_event_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], EventPage);


/***/ }),

/***/ 3849:
/*!*********************************************!*\
  !*** ./src/app/tab1/event/event.welcome.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventWelcomePage": () => (/* binding */ EventWelcomePage)
/* harmony export */ });
/* harmony import */ var C_Users_Jeremy_SideProjects_campaign_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _event_welcome_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event.welcome.html?ngResource */ 5596);
/* harmony import */ var _event_welcome_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event.welcome.css?ngResource */ 4191);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _stores_votes_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../stores/votes.store */ 2049);







let EventWelcomePage = class EventWelcomePage {
  constructor(route, votes) {
    this.route = route;
    this.votes = votes;
    this.imgSrc = 'Deck1';
    this.imgSrcs = ['Deck1', 'Deck2', 'Deck3', 'Deck4', 'Deck5', 'Deck6', 'Deck7', 'Deck8', 'Deck9', 'Deck10', 'Deck11', 'Deck12', 'Deck13', 'Deck14', 'Deck15', 'Deck16', 'Deck17'];
  }
  ngOnInit() {
    this.cycleCards();
  }
  cycleCards() {
    var _this = this;
    return (0,C_Users_Jeremy_SideProjects_campaign_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      for (const im of _this.imgSrcs) {
        _this.imgSrc = im;
        yield new Promise(f => setTimeout(f, 130));
      }
      for (const im of _this.imgSrcs) {
        _this.imgSrc = im;
        yield new Promise(f => setTimeout(f, 130));
      }
      for (const im of _this.imgSrcs) {
        _this.imgSrc = im;
        yield new Promise(f => setTimeout(f, 130));
      }
      for (const im of _this.imgSrcs) {
        _this.imgSrc = im;
        yield new Promise(f => setTimeout(f, 130));
      }
      for (const im of _this.imgSrcs) {
        _this.imgSrc = im;
        yield new Promise(f => setTimeout(f, 130));
      }
      for (const im of _this.imgSrcs) {
        _this.imgSrc = im;
        yield new Promise(f => setTimeout(f, 130));
      }
    })();
  }
  continue() {
    this.route.navigateByUrl('/tabs/tab1/event');
  }
};
EventWelcomePage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
}, {
  type: _stores_votes_store__WEBPACK_IMPORTED_MODULE_3__.VotesStore
}];
EventWelcomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-event-welcome-page',
  template: _event_welcome_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_event_welcome_css_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], EventWelcomePage);


/***/ }),

/***/ 3067:
/*!*******************************************************!*\
  !*** ./src/app/tab1/fundraise/fundraise.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FundraisePage": () => (/* binding */ FundraisePage)
/* harmony export */ });
/* harmony import */ var C_Users_Jeremy_SideProjects_campaign_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _fundraise_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fundraise.component.html?ngResource */ 1304);
/* harmony import */ var _fundraise_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fundraise.component.css?ngResource */ 3899);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_modal_toast_modal_toast_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modal-toast/modal-toast.component */ 7537);
/* harmony import */ var src_app_stores_votes_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/stores/votes.store */ 2049);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_text_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/text.services */ 764);










let FundraisePage = class FundraisePage {
  constructor(router, modalCtrl, votes, textService) {
    this.router = router;
    this.modalCtrl = modalCtrl;
    this.votes = votes;
    this.textService = textService;
    this.canBack = true;
    this.presidentIcon = '';
    this.eventHistory = '';
  }
  ngOnInit() {
    this.isDemocrat = this.votes.isDemocrat;
  }
  ionViewWillEnter() {
    this.getFunFact();
  }
  getFunFact() {
    const facts = this.textService.getFundraisingFacts();
    const currentFact = facts[Math.floor(Math.random() * facts.length)];
    this.presidentIcon = currentFact.presidentIcon;
    this.eventHistory = currentFact.eventHistory;
  }
  rollStarted() {
    //jermy emit something here to disable the footer
    this.canBack = false;
  }
  handleRoll(rollValue) {
    var _this = this;
    return (0,C_Users_Jeremy_SideProjects_campaign_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.canBack = false;
      if (rollValue <= 3) {
        _this.votes.funds++;
        _this.openModal('You rolled a ' + rollValue + ', raising enough to run 1 ad campaign');
      } else if (rollValue <= 5) {
        _this.votes.funds += 2;
        _this.openModal('You rolled a ' + rollValue + ', raising enough to run 2 ad campaigns');
      } else {
        _this.votes.funds += 3;
        _this.openModal('You rolled a ' + rollValue + ', raising enough to run 3 ad campaigns');
      }
    })();
  }
  toNextTurn() {
    this.canBack = true;
    this.router.navigateByUrl('/tabs/tab1/opponent', {
      replaceUrl: true
    });
  }
  back() {
    this.router.navigateByUrl('/tabs/tab1', {
      replaceUrl: true
    });
  }
  // async presentToast(message, duration, color = 'primary') {
  //   const toast = await this.toastController.create({
  //     message,
  //     duration,
  //     color,
  //     position: 'middle',
  //     mode: 'md'
  //   });
  //   toast.present();
  // }
  openModal(message, title = 'Results') {
    var _this2 = this;
    return (0,C_Users_Jeremy_SideProjects_campaign_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this2.modalCtrl.create({
        component: src_app_modal_toast_modal_toast_component__WEBPACK_IMPORTED_MODULE_3__.ModalToastComponent,
        componentProps: {
          message,
          title
        }
      });
      modal.onDidDismiss().then(() => {
        _this2.toNextTurn();
      });
      modal.present();
      const {
        data,
        role
      } = yield modal.onWillDismiss();
    })();
  }
};
FundraisePage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController
}, {
  type: src_app_stores_votes_store__WEBPACK_IMPORTED_MODULE_4__.VotesStore
}, {
  type: src_app_services_text_services__WEBPACK_IMPORTED_MODULE_5__.TextService
}];
FundraisePage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-fundraise',
  template: _fundraise_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_fundraise_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], FundraisePage);


/***/ }),

/***/ 1353:
/*!*****************************************************!*\
  !*** ./src/app/tab1/opponent/opponent.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OpponentPage": () => (/* binding */ OpponentPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _opponent_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./opponent.component.html?ngResource */ 3409);
/* harmony import */ var _opponent_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./opponent.component.css?ngResource */ 3142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_text_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/text.services */ 764);
/* harmony import */ var src_app_stores_votes_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/stores/votes.store */ 2049);



/* eslint-disable max-len */





let OpponentPage = class OpponentPage {
    constructor(router, toastController, votes, textService) {
        this.router = router;
        this.toastController = toastController;
        this.votes = votes;
        this.textService = textService;
        this.actionText = '';
        this.actionId = 0;
        this.actionIcons = [];
    }
    ngOnInit() {
        this.actionText = this.getNextOpponentAction();
    }
    getAllActions() {
        //this.allActions = this.textService.getOpponentActions();
    }
    getNextOpponentAction() {
        //roll 1-5 (weak to strong)
        //1 - affect a dumb state
        //2/3 fundraise
        //4 - campaign wisely (draw the top 10 closest states and pick one)
        //5 - advertise wisely (draw the top 10 closest states and pick one's group)
        const value = Math.floor(Math.random() * 6) + 1;
        if (value <= 2 && (this.votes.round < this.votes.gameLength - 2)) {
            if (this.votes.opponentFunds < 3) {
                this.votes.opponentFunds += 1;
                return 'Your opponent ran fundraising and earned $10 million';
            }
            else {
                this.votes.opponentFunds -= 1;
                const statePos = Math.floor(Math.random() * 12);
                const group = this.votes.getSortedGroups(statePos);
                let statesString = '';
                if (group.length === 1) {
                    statesString = ' ' + group[0];
                }
                else {
                    for (const state of group) {
                        statesString += ' ';
                        statesString += state;
                        statesString += ',';
                    }
                    statesString = statesString.substring(0, statesString.length - 1);
                    statesString = statesString.slice(0, statesString.length - 3) + ' and' + statesString.slice(statesString.length - 3);
                }
                const isSuccess = Math.floor(Math.random() * 10);
                if (isSuccess > 2) {
                    this.handleGroupScoreUpdate(group, 1);
                    return 'Your opponent ran advertising in' + statesString + ' where they made a difference of 1 point';
                }
                else {
                    this.handleGroupScoreUpdate(group, 0);
                    return 'Your opponent ran advertising in' + statesString + ' where they made no difference';
                }
            }
            //fundraise
        }
        else if (value <= 4) {
            //advertise (or fundraise if needed)
            if (this.votes.opponentFunds === 0 && (this.votes.round < this.votes.gameLength - 2)) {
                this.votes.opponentFunds += 2;
                return 'Your opponent ran fundraising and earned $20 million';
            }
            else {
                this.votes.opponentFunds -= 1;
                const statePos = Math.floor(Math.random() * 10);
                const group = this.votes.getSortedGroups(statePos);
                let statesString = '';
                if (group.length === 1) {
                    statesString = ' ' + group[0];
                }
                else {
                    for (const state of group) {
                        statesString += ' ';
                        statesString += state;
                        statesString += ',';
                    }
                    statesString = statesString.substring(0, statesString.length - 1);
                    statesString = statesString.slice(0, statesString.length - 3) + ' and' + statesString.slice(statesString.length - 3);
                }
                this.handleGroupScoreUpdate(group, 1);
                return 'Your opponent ran advertising in' + statesString + ' where they made a difference of 1 point';
            }
        }
        else {
            const isSuccess = Math.floor(Math.random() * 10);
            //campaign (draw the top 10 closest states and pick one)
            if (Math.floor(Math.random() * 4) === 1) {
                //GIVE A SMALL CHANCE THAT THE AI WILL TARGET THE MOST VALUABLE STATE
                const stateGroup = this.votes.getSortedStates(6);
                let maxVotes = 0;
                let currentPos = 0;
                let maxPos = 0;
                for (const state of stateGroup) {
                    if (state.college > maxVotes) {
                        maxVotes = state.college;
                        maxPos = currentPos;
                    }
                    currentPos++;
                }
                if (isSuccess > 4) {
                    this.handleGroupScoreUpdate([stateGroup[maxPos].abbreviation], 2);
                    return 'Your opponent campaigned in ' + stateGroup[maxPos].name + ' where they made a difference of 2 point';
                }
                else {
                    this.handleGroupScoreUpdate([stateGroup[maxPos].abbreviation], 1);
                    return 'Your opponent campaigned in ' + stateGroup[maxPos].name + ' where they made a difference of 1 point';
                }
            }
            const statePos = Math.floor(Math.random() * 10);
            const states = this.votes.getSortedStates(10);
            if (isSuccess > 2) {
                this.handleGroupScoreUpdate([states[statePos].abbreviation], 2);
                return 'Your opponent campaigned in ' + states[statePos].name + ' where they made a difference of 2 points';
            }
            else {
                this.handleGroupScoreUpdate([states[statePos].abbreviation], 1);
                return 'Your opponent campaigned in ' + states[statePos].name + ' where they made a difference of 1 point';
            }
        }
    }
    // addActionIconByName(state: string, change: number, isTowardBlue: boolean) {
    //   const iconPath = this.votes.getStateIconByName(state);
    //   this.actionIcons.push({
    //     path: iconPath,
    //     change,
    //     isTowardBlue
    //   });
    // }
    addActionIconByAbrev(abbreviation, change, isTowardBlue) {
        const iconPath = this.votes.getStateIconByAbrev(abbreviation);
        this.actionIcons.push({
            path: 'assets/images/states/' + iconPath,
            change,
            isTowardBlue
        });
    }
    goToResults() {
        this.router.navigateByUrl('/results');
    }
    goToTab1() {
        this.router.navigateByUrl('tabs/tab1');
    }
    goToEvent() {
        this.router.navigateByUrl('/tabs/tab1/firstevent');
    }
    goToFirstEvent() {
        this.router.navigateByUrl('/tabs/tab1/firstevent');
    }
    nextEvent() {
        this.moveProgressBar();
        if (this.votes.round % 2 === 0) {
            this.votes.round++;
            if (this.votes.round > this.votes.gameLength) {
                this.goToResults();
            }
            else {
                this.goToEvent();
            }
        }
        else {
            this.votes.round++;
            if (this.votes.round > this.votes.gameLength) {
                this.goToResults();
            }
            else {
                this.goToTab1();
            }
        }
        //JERMY THEHREUSHIAUEFIUAEFUIAEHFUIEAHIF
    }
    moveProgressBar() {
        document.getElementById('greenbar').style.backgroundImage = 'linear-gradient(to left, rgb(255, 255, 255), #38ff80)';
        if (this.votes.progress > this.votes.gameLength - 1) {
            document.getElementById('finish-icon').style.left = '100%';
            document.getElementById('greenbar').style.backgroundColor = '#30ff30';
            document.getElementById('greenbar').style.backgroundImage = 'none';
            this.votes.progressMessage = 'ELECTION DAY!';
        }
        else {
            this.votes.progress++;
        }
        document.getElementById('greenbar').style.width = ((this.votes.progress) / this.votes.gameLength) * 100 + '%';
        document.getElementById('whitebar').style.width = ((this.votes.gameLength - this.votes.progress) / this.votes.gameLength) * 100 + '%';
        document.getElementById('progress-icon').style.left = ((this.votes.progress) / this.votes.gameLength) * 100 - 4 + '%';
        if (this.votes.progress > (this.votes.gameLength - 3)) {
            document.getElementById('greenbar').style.backgroundImage = 'linear-gradient(to left, rgb(255, 255, 255), rgb(255, 40, 40))';
            this.votes.progressMessage = 'ELECTION DAY SOON';
        }
        if (this.votes.progress > (this.votes.gameLength - 2)) {
            document.getElementById('finish-icon').style.left = '100%';
        }
    }
    handleGroupScoreUpdate(group, sway) {
        this.actionIcons = [];
        if (this.votes.getUserIsDem()) {
            for (const state of group) {
                this.addActionIconByAbrev(state, sway, false);
                this.votes.changeStateClimate(state, -sway / 2, sway / 2);
            }
        }
        else {
            for (const state of group) {
                this.addActionIconByAbrev(state, sway, true);
                this.votes.changeStateClimate(state, sway / 2, -sway / 2);
            }
        }
    }
};
OpponentPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: src_app_stores_votes_store__WEBPACK_IMPORTED_MODULE_3__.VotesStore },
    { type: src_app_services_text_services__WEBPACK_IMPORTED_MODULE_2__.TextService }
];
OpponentPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-opponent',
        template: _opponent_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_opponent_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], OpponentPage);



/***/ }),

/***/ 5686:
/*!***************************************************!*\
  !*** ./src/app/tab1/results/results.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResultsPage": () => (/* binding */ ResultsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _results_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./results.component.html?ngResource */ 9186);
/* harmony import */ var _results_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./results.component.css?ngResource */ 6176);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_text_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/text.services */ 764);
/* harmony import */ var src_app_stores_votes_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/stores/votes.store */ 2049);



/* eslint-disable max-len */





let ResultsPage = class ResultsPage {
    constructor(router, toastController, votes, textService) {
        this.router = router;
        this.toastController = toastController;
        this.votes = votes;
        this.textService = textService;
    }
    ngOnInit() {
        // if (this.votes.isDemocrat) {
        //   this.votes.addGameStats(this.votes.getUserWon(),true,this.votes.getFinalBlue());
        // } else {
        //   this.votes.addGameStats(this.votes.getUserWon(),false,this.votes.getFinalRed());
        // }
    }
};
ResultsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: src_app_stores_votes_store__WEBPACK_IMPORTED_MODULE_3__.VotesStore },
    { type: src_app_services_text_services__WEBPACK_IMPORTED_MODULE_2__.TextService }
];
ResultsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-results',
        template: _results_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_results_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ResultsPage);



/***/ }),

/***/ 8271:
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageRoutingModule": () => (/* binding */ Tab1PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _advertise_advertise_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./advertise/advertise.component */ 4763);
/* harmony import */ var _campaign_campaign_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./campaign/campaign.component */ 8082);
/* harmony import */ var _event_event_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event/event.component */ 3121);
/* harmony import */ var _event_event_welcome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event/event.welcome */ 3849);
/* harmony import */ var _fundraise_fundraise_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fundraise/fundraise.component */ 3067);
/* harmony import */ var _opponent_opponent_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./opponent/opponent.component */ 1353);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ 6923);










const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__.Tab1Page,
    },
    {
        path: 'campaign',
        component: _campaign_campaign_component__WEBPACK_IMPORTED_MODULE_1__.CampaignPage,
    },
    {
        path: 'opponent',
        component: _opponent_opponent_component__WEBPACK_IMPORTED_MODULE_5__.OpponentPage,
    },
    {
        path: 'firstevent',
        component: _event_event_welcome__WEBPACK_IMPORTED_MODULE_3__.EventWelcomePage,
    },
    {
        path: 'fundraise',
        component: _fundraise_fundraise_component__WEBPACK_IMPORTED_MODULE_4__.FundraisePage,
    },
    {
        path: 'advertise',
        component: _advertise_advertise_component__WEBPACK_IMPORTED_MODULE_0__.AdvertisePage,
    },
    {
        path: 'event',
        component: _event_event_component__WEBPACK_IMPORTED_MODULE_2__.EventPage,
    },
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ 2168:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageModule": () => (/* binding */ Tab1PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 6923);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1-routing.module */ 8271);
/* harmony import */ var _fundraise_fundraise_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fundraise/fundraise.component */ 3067);
/* harmony import */ var _event_event_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./event/event.component */ 3121);
/* harmony import */ var _event_event_welcome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./event/event.welcome */ 3849);
/* harmony import */ var _campaign_campaign_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./campaign/campaign.component */ 8082);
/* harmony import */ var _advertise_advertise_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./advertise/advertise.component */ 4763);
/* harmony import */ var _dice_dice_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dice/dice.component */ 1034);
/* harmony import */ var _roll_table_rolltable_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../roll-table/rolltable.component */ 1361);
/* harmony import */ var _opponent_opponent_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./opponent/opponent.component */ 1353);
/* harmony import */ var _results_results_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./results/results.component */ 5686);
/* harmony import */ var _score_display_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../score-display.pipe */ 5681);
/* harmony import */ var _modal_toast_modal_toast_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../modal-toast/modal-toast.component */ 7537);



















let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_17__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab1PageRoutingModule
        ],
        declarations: [
            _tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page,
            _fundraise_fundraise_component__WEBPACK_IMPORTED_MODULE_3__.FundraisePage,
            _event_event_component__WEBPACK_IMPORTED_MODULE_4__.EventPage,
            _event_event_welcome__WEBPACK_IMPORTED_MODULE_5__.EventWelcomePage,
            _campaign_campaign_component__WEBPACK_IMPORTED_MODULE_6__.CampaignPage,
            _advertise_advertise_component__WEBPACK_IMPORTED_MODULE_7__.AdvertisePage,
            _dice_dice_component__WEBPACK_IMPORTED_MODULE_8__.DiceComponent,
            _roll_table_rolltable_component__WEBPACK_IMPORTED_MODULE_9__.RollTableComponent,
            _opponent_opponent_component__WEBPACK_IMPORTED_MODULE_10__.OpponentPage,
            _results_results_component__WEBPACK_IMPORTED_MODULE_11__.ResultsPage,
            _score_display_pipe__WEBPACK_IMPORTED_MODULE_12__.ScoreDisplayPipe,
            _modal_toast_modal_toast_component__WEBPACK_IMPORTED_MODULE_13__.ModalToastComponent,
        ],
        providers: [
            _score_display_pipe__WEBPACK_IMPORTED_MODULE_12__.ScoreDisplayPipe
        ]
    })
], Tab1PageModule);



/***/ }),

/***/ 6923:
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1Page": () => (/* binding */ Tab1Page)
/* harmony export */ });
/* harmony import */ var C_Users_Jeremy_SideProjects_campaign_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab1.page.html?ngResource */ 3852);
/* harmony import */ var _tab1_page_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1.page.css?ngResource */ 4223);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_text_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/text.services */ 764);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _stores_votes_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../stores/votes.store */ 2049);
/* harmony import */ var _services_audio_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/audio.service */ 6425);










let Tab1Page = class Tab1Page {
  constructor(audio, route, textService, toastController, votes) {
    this.audio = audio;
    this.route = route;
    this.textService = textService;
    this.toastController = toastController;
    this.votes = votes;
    this.text = '';
    this.funds = 0;
    this.partyName = '';
  }
  ngOnInit() {
    this.partyName = this.votes.getThirdPartyName();
    this.turns = this.textService.getTurns(this.votes.gameLength > 20);
    this.currentTurn = this.turns[0]; //NEEDS TO BE UPDATED
    this.isThird = this.votes.getUserIsThird();
    this.isDemocrat = this.votes.getUserIsDem();
  }
  ionViewWillEnter() {
    this.isDemocrat = this.votes.isDemocrat;
    this.currentTurn = this.turns[this.votes.round - 1];
    if (this.votes.progress === 0) {
      document.getElementById('greenbar').style.backgroundImage = 'linear-gradient(to left, rgb(255, 255, 255), #38ff80)';
      document.getElementById('greenbar').style.width = 1 / this.votes.gameLength * 100 + '%';
      document.getElementById('whitebar').style.width = (this.votes.gameLength - 1) / this.votes.gameLength * 100 + '%';
      document.getElementById('progress-icon').style.left = 1 / this.votes.gameLength * 100 - 4 + '%';
    }
  }
  ngAfterViewInit() {
    // this.audio.preload('a3', 'assets/audio/vote.mp3');
    // this.audio.preload('a5', 'assets/audio/thats-america.mp3');
    // this.audio.preload('a6', 'assets/audio/dont-boo-vote.mp3');
    // this.audio.preload('a8', 'assets/audio/america.mp3');
    // this.audio.preload('a2', 'assets/audio/i-said-no.mp3');
    // this.audio.preload('a0', 'assets/audio/thank-you-and-good-evening.mp3');
    // this.audio.preload('a1', 'assets/audio/bad-news.mp3');
    // this.audio.preload('a4', 'assets/audio/come-on-man.mp3');
    // this.audio.preload('a7', 'assets/audio/congratulations.mp3');
  }
  fundraise() {
    this.audio.play('a8');
    this.takeTurn();
    this.route.navigateByUrl('tabs/tab1/fundraise');
  }
  campaign() {
    this.audio.play('a3');
    this.takeTurn();
    this.route.navigateByUrl('tabs/tab1/campaign');
  }
  advertising() {
    this.audio.play('a5');
    if (this.votes.funds > 0) {
      this.votes.funds--;
      this.takeTurn();
      this.route.navigateByUrl('tabs/tab1/advertise');
    } else {
      this.presentToast('You need to fundraise before you can spend on advertising!', 3000, 'danger');
    }
  }
  takeTurn() {
    // const i = Math.floor(Math.random() * 9);
    // this.audio.play('a'+i);
  }
  presentToast(message, duration, color = 'primary') {
    var _this = this;
    return (0,C_Users_Jeremy_SideProjects_campaign_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this.toastController.create({
        message,
        duration,
        color,
        position: 'middle',
        mode: 'md'
      });
      toast.present();
    })();
  }
};
Tab1Page.ctorParameters = () => [{
  type: _services_audio_service__WEBPACK_IMPORTED_MODULE_5__.AudioService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
}, {
  type: _services_text_services__WEBPACK_IMPORTED_MODULE_3__.TextService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController
}, {
  type: _stores_votes_store__WEBPACK_IMPORTED_MODULE_4__.VotesStore
}];
Tab1Page = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-tab1',
  template: _tab1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_tab1_page_css_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], Tab1Page);


/***/ }),

/***/ 8780:
/*!****************************************************!*\
  !*** ./src/app/dice/dice.component.css?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "#dice {\r\n  max-width: 40px;\r\n}\r\n\r\n.center {\r\n  font-size: large;\r\n  text-align: center;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  left: 50%\r\n}\r\n\r\n@keyframes rotation {\r\n  from {\r\n    transform: rotate(0deg);\r\n  }\r\n  to {\r\n    transform: rotate(359deg);\r\n  }\r\n}\r\n\r\n.rotate {\r\n  animation: rotation 1s;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEIiLCJmaWxlIjoiZGljZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2RpY2Uge1xyXG4gIG1heC13aWR0aDogNDBweDtcclxufVxyXG5cclxuLmNlbnRlciB7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGxlZnQ6IDUwJVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHJvdGF0aW9uIHtcclxuICBmcm9tIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuLnJvdGF0ZSB7XHJcbiAgYW5pbWF0aW9uOiByb3RhdGlvbiAxcztcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 2804:
/*!******************************************************************!*\
  !*** ./src/app/modal-toast/modal-toast.component.css?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "\r\n.center {\r\n  font-size: large;\r\n  text-align: center;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  left: 50%\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsLXRvYXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQjtBQUNGIiwiZmlsZSI6Im1vZGFsLXRvYXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmNlbnRlciB7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGxlZnQ6IDUwJVxyXG59XHJcblxyXG4iXX0= */";

/***/ }),

/***/ 8677:
/*!***************************************************************!*\
  !*** ./src/app/roll-table/rolltable.component.css?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = ".dice {\r\n  margin-top: 2px;\r\n  max-width: 20px;\r\n  margin-left: 4px;\r\n}\r\n\r\n.center {\r\n  width: 100%;\r\n}\r\n\r\n.left {\r\n  border-right: black 2px solid;\r\n\r\n}\r\n\r\n.right {\r\n  border-left: black 2px solid;\r\n}\r\n\r\n.col {\r\n  flex: 50%;\r\n  justify-content: center;\r\n  text-align: center;\r\n}\r\n\r\n.row {\r\n  width: 100%;\r\n  border-left: black 3px solid;\r\n  border-right:  black 3px solid;\r\n  border-bottom: black 3px solid;;\r\n  display: flex;\r\n  position: sticky;\r\n  left: 20%;\r\n}\r\n\r\n.top {\r\n  width: 100%;\r\n  display: flex;\r\n\r\n  border: black 3px solid;\r\n  border-radius: 6px 6px 0px 0px;\r\n  position: sticky;\r\n  left: 20%;}\r\n\r\n.bottom {\r\n  width: 100%;\r\n  display: flex;\r\n\r\n  border: black 3px solid;\r\n  border-top: 0;\r\n  border-radius: 0px 0px 6px 6px;\r\n  position: sticky;\r\n  left: 20%;}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvbGx0YWJsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSw2QkFBNkI7O0FBRS9COztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUdBO0VBQ0UsU0FBUztFQUNULHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsNEJBQTRCO0VBQzVCLDhCQUE4QjtFQUM5Qiw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTs7RUFFYix1QkFBdUI7RUFDdkIsOEJBQThCO0VBQzlCLGdCQUFnQjtFQUNoQixTQUFTLENBQUM7O0FBRVo7RUFDRSxXQUFXO0VBQ1gsYUFBYTs7RUFFYix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixnQkFBZ0I7RUFDaEIsU0FBUyxDQUFDIiwiZmlsZSI6InJvbGx0YWJsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpY2Uge1xyXG4gIG1hcmdpbi10b3A6IDJweDtcclxuICBtYXgtd2lkdGg6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDRweDtcclxufVxyXG5cclxuLmNlbnRlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5sZWZ0IHtcclxuICBib3JkZXItcmlnaHQ6IGJsYWNrIDJweCBzb2xpZDtcclxuXHJcbn1cclxuXHJcbi5yaWdodCB7XHJcbiAgYm9yZGVyLWxlZnQ6IGJsYWNrIDJweCBzb2xpZDtcclxufVxyXG5cclxuXHJcbi5jb2wge1xyXG4gIGZsZXg6IDUwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1sZWZ0OiBibGFjayAzcHggc29saWQ7XHJcbiAgYm9yZGVyLXJpZ2h0OiAgYmxhY2sgM3B4IHNvbGlkO1xyXG4gIGJvcmRlci1ib3R0b206IGJsYWNrIDNweCBzb2xpZDs7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIGxlZnQ6IDIwJTtcclxufVxyXG5cclxuLnRvcCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgYm9yZGVyOiBibGFjayAzcHggc29saWQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4IDZweCAwcHggMHB4O1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgbGVmdDogMjAlO31cclxuXHJcbi5ib3R0b20ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gIGJvcmRlcjogYmxhY2sgM3B4IHNvbGlkO1xyXG4gIGJvcmRlci10b3A6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA2cHggNnB4O1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgbGVmdDogMjAlO31cclxuIl19 */";

/***/ }),

/***/ 5442:
/*!*******************************************************************!*\
  !*** ./src/app/tab1/advertise/advertise.component.css?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "input[type='radio'][name='buttonGroup'] { display:none; }\r\nlabel {\r\n  padding:3px;\r\n  border:1px solid #000000;\r\n  border-radius:3px;\r\n  background-color:rgb(245, 245, 245);\r\n  width:10em;\r\n  text-align:center;\r\n}\r\ninput[type='radio'][name='buttonGroup']:checked + label { background-color:#bbbbbb; }\r\n.column {\r\n  float: left;\r\n  padding: 10px;\r\n}\r\n.left {\r\n  width: 50%;\r\n  justify-content: end;\r\n  display: grid;\r\n}\r\n.right {\r\n  width: 50%;\r\n  display: grid;\r\n}\r\n/* Clear floats after the columns */\r\n.row:after {\r\n  content: \"\";\r\n  display: table;\r\n  clear: both;\r\n}\r\n.state-icon {\r\n  max-height: 20px;\r\n}\r\n/* ion-content{\r\n  /* --background: #fff url(\"../../assets/images/boardroom.png\") no-repeat center center / cover;\r\n  --background: #aff;\r\n} */\r\n.backbutton {\r\n  position: absolute;\r\n}\r\n.center {\r\n  margin-left: 3px;\r\n  margin-right: 3px;\r\n  font-size: large;\r\n  text-align: center;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  left: 50%\r\n}\r\n.header-icon {\r\n  position: fixed;\r\n  right: 10px;\r\n  max-height: 30px;\r\n  z-index: 199999;\r\n}\r\n.ml-10{\r\n  margin-left: 5px;\r\n}\r\n.mr-10{\r\n  margin-left: 5px;\r\n}\r\n.d-flex{\r\n  display: flex;\r\n}\r\n.align-items-center{\r\n  align-items: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkdmVydGlzZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBDQUEwQyxZQUFZLEVBQUU7QUFDeEQ7RUFDRSxXQUFXO0VBQ1gsd0JBQXdCO0VBQ3hCLGlCQUFpQjtFQUNqQixtQ0FBbUM7RUFDbkMsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjtBQUNBLDBEQUEwRCx3QkFBd0IsRUFBRTtBQUVwRjtFQUNFLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7QUFFQTtFQUNFLFVBQVU7RUFDVixvQkFBb0I7RUFDcEIsYUFBYTtBQUNmO0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtBQUNmO0FBRUEsbUNBQW1DO0FBQ25DO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0FBQ2I7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBOzs7R0FHRztBQUVIO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkI7QUFDRjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6ImFkdmVydGlzZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXRbdHlwZT0ncmFkaW8nXVtuYW1lPSdidXR0b25Hcm91cCddIHsgZGlzcGxheTpub25lOyB9XHJcbmxhYmVsIHtcclxuICBwYWRkaW5nOjNweDtcclxuICBib3JkZXI6MXB4IHNvbGlkICMwMDAwMDA7XHJcbiAgYm9yZGVyLXJhZGl1czozcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjQ1LCAyNDUsIDI0NSk7XHJcbiAgd2lkdGg6MTBlbTtcclxuICB0ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG5pbnB1dFt0eXBlPSdyYWRpbyddW25hbWU9J2J1dHRvbkdyb3VwJ106Y2hlY2tlZCArIGxhYmVsIHsgYmFja2dyb3VuZC1jb2xvcjojYmJiYmJiOyB9XHJcblxyXG4uY29sdW1uIHtcclxuICBmbG9hdDogbGVmdDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4ubGVmdCB7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG59XHJcblxyXG4ucmlnaHQge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxufVxyXG5cclxuLyogQ2xlYXIgZmxvYXRzIGFmdGVyIHRoZSBjb2x1bW5zICovXHJcbi5yb3c6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbi5zdGF0ZS1pY29uIHtcclxuICBtYXgtaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4vKiBpb24tY29udGVudHtcclxuICAvKiAtLWJhY2tncm91bmQ6ICNmZmYgdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9ib2FyZHJvb20ucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjYWZmO1xyXG59ICovXHJcblxyXG4uYmFja2J1dHRvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4uY2VudGVyIHtcclxuICBtYXJnaW4tbGVmdDogM3B4O1xyXG4gIG1hcmdpbi1yaWdodDogM3B4O1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBsZWZ0OiA1MCVcclxufVxyXG4uaGVhZGVyLWljb24ge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICByaWdodDogMTBweDtcclxuICBtYXgtaGVpZ2h0OiAzMHB4O1xyXG4gIHotaW5kZXg6IDE5OTk5OTtcclxufVxyXG4ubWwtMTB7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG4ubXItMTB7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuLmQtZmxleHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uYWxpZ24taXRlbXMtY2VudGVye1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 3579:
/*!*****************************************************************!*\
  !*** ./src/app/tab1/campaign/campaign.component.css?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "/* ion-content{\r\n  /* --background: #fff url(\"../../assets/images/boardroom.png\") no-repeat center center / cover;\r\n  --background: #aff;\r\n} */\r\n\r\n/*\r\np {\r\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n  color: #000;\r\n} */\r\n\r\n/* h1 {\r\n  color: #000;\r\n  text-shadow: 1px 0 0 #fff, 0 -1px 0 #fff, 0 1px 0 #fff, -1px 0 0 #fff;\r\n}\r\n\r\nh3 {\r\n  color: #000;\r\n  text-shadow: 1px 0 0 #fff, 0 -1px 0 #fff, 0 1px 0 #fff, -1px 0 0 #fff;\r\n} */\r\n\r\np {\r\n  margin-top: 2px;\r\n  margin-bottom: 2px;\r\n}\r\n\r\n.backbutton {\r\n  position: absolute;\r\n}\r\n\r\n.center {\r\n  margin-left: 3px;\r\n  margin-right: 3px;\r\n  font-size: large;\r\n  text-align: center;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  left: 50%\r\n}\r\n\r\n.header-icon {\r\n  position: fixed;\r\n  right: 10px;\r\n  max-height: 30px;\r\n  z-index: 199999;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbXBhaWduLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztHQUdHOztBQUVIOzs7O0dBSUc7O0FBRUg7Ozs7Ozs7O0dBUUc7O0FBRUg7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CO0FBQ0Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCIiwiZmlsZSI6ImNhbXBhaWduLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBpb24tY29udGVudHtcclxuICAvKiAtLWJhY2tncm91bmQ6ICNmZmYgdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9ib2FyZHJvb20ucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjYWZmO1xyXG59ICovXHJcblxyXG4vKlxyXG5wIHtcclxuICBmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6ICMwMDA7XHJcbn0gKi9cclxuXHJcbi8qIGgxIHtcclxuICBjb2xvcjogIzAwMDtcclxuICB0ZXh0LXNoYWRvdzogMXB4IDAgMCAjZmZmLCAwIC0xcHggMCAjZmZmLCAwIDFweCAwICNmZmYsIC0xcHggMCAwICNmZmY7XHJcbn1cclxuXHJcbmgzIHtcclxuICBjb2xvcjogIzAwMDtcclxuICB0ZXh0LXNoYWRvdzogMXB4IDAgMCAjZmZmLCAwIC0xcHggMCAjZmZmLCAwIDFweCAwICNmZmYsIC0xcHggMCAwICNmZmY7XHJcbn0gKi9cclxuXHJcbnAge1xyXG4gIG1hcmdpbi10b3A6IDJweDtcclxuICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbn1cclxuXHJcbi5iYWNrYnV0dG9uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuLmNlbnRlciB7XHJcbiAgbWFyZ2luLWxlZnQ6IDNweDtcclxuICBtYXJnaW4tcmlnaHQ6IDNweDtcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbGVmdDogNTAlXHJcbn1cclxuXHJcbi5oZWFkZXItaWNvbiB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG4gIG1heC1oZWlnaHQ6IDMwcHg7XHJcbiAgei1pbmRleDogMTk5OTk5O1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 7683:
/*!***********************************************************!*\
  !*** ./src/app/tab1/event/event.component.css?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "/* ion-content{\r\n  /* --background: #fff url(\"../../assets/images/boardroom.png\") no-repeat center center / cover;\r\n  --background: #aff;\r\n} */\r\n\r\n.card {\r\n  border: #7f7ffe 4px solid;\r\n  border-radius: 8px;\r\n  background-color: #c0c0ff;\r\n  width: 90%;\r\n  margin-left: 5%;\r\n  margin-right: 5%;\r\n}\r\n\r\n.dice {\r\n  margin-top: 4px;\r\n}\r\n\r\n.center {\r\n  margin-left: 3px;\r\n  margin-right: 3px;\r\n  font-size: large;\r\n  text-align: center;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  left: 50%\r\n}\r\n\r\n#navcontainer {\r\n  margin-left: 5%;\r\n  margin-right:5%;\r\n  display: block;\r\n  width:90%;\r\n}\r\n\r\n#navlist {\r\n  padding: 3px 0;\r\n  margin-right: 2px;\r\n}\r\n\r\n#navlist li {\r\n  padding-left: 2px;\r\n  padding-right: 2px;\r\n  border-radius:2px 2px 2px 2px;\r\n  border-bottom: 2px solid #999999;\r\n  background: #999999;\r\n  list-style: none;\r\n  margin-left: 3px;\r\n  border-top: 2px solid #999999;\r\n  border-left: 2px solid #999999;\r\n  border-right: 2px solid #999999;\r\n  left: 5%;\r\n  color: black;\r\n  display: inline;\r\n  position:relative;\r\n  top:1px;\r\n}\r\n\r\n.header-icon {\r\n  position: fixed;\r\n  right: 10px;\r\n  max-height: 30px;\r\n  z-index: 199999;\r\n}\r\n\r\n.funfact {\r\n  border-radius: 4px;\r\n  border: 2px solid #505050;\r\n  font-size: large;\r\n  text-align: center;\r\n  display: block;\r\n  justify-content: center;\r\n  align-items: center;\r\n  left: 50%;\r\n}\r\n\r\np {\r\n  margin-top: 10px;\r\n}\r\n\r\n#aid {\r\n  animation: flyaid 15s linear;\r\n  top: 100vw;\r\n  left: 0;\r\n}\r\n\r\n#title {\r\n  animation: flytitle 15s linear;\r\n  top: 100vw;\r\n  left: 0;\r\n}\r\n\r\n#info1 {\r\n  animation: flyinfo1 15s linear;\r\n  top: 100vw;\r\n  left: 0;\r\n}\r\n\r\n#info2 {\r\n  animation: flyinfo2 15s linear;\r\n  top: 100vw;\r\n  left: 0;\r\n}\r\n\r\n#info3 {\r\n  animation: flyinfo3 15s linear;\r\n  top: 100vw;\r\n  left: 0;\r\n}\r\n\r\n#info4 {\r\n  animation: flyinfo4 15s linear;\r\n  top: 100vw;\r\n  left: 0;\r\n}\r\n\r\n#info5 {\r\n  animation: flyinfo5 15s linear;\r\n  top: 100vw;\r\n  left: 0;\r\n}\r\n\r\n#info6 {\r\n  animation: flyinfo6 15s linear;\r\n  top: 100vw;\r\n  left: 0;\r\n}\r\n\r\n#ready {\r\n  animation: flyready 15s linear;\r\n  top: 100vw;\r\n  left: 0;\r\n}\r\n\r\n@keyframes flyaid {\r\n  0%{\r\n    transform: translate(110vw,-90vw);opacity: .75;\r\n  }\r\n  8%{\r\n    transform: translate(0,-90vw);opacity: .75;\r\n  }\r\n\r\n  15%{\r\n      transform: translate(0,-90vw);opacity: .75;\r\n  }\r\n  17%{\r\n    transform: translate(0,-75vw);opacity: .75;\r\n  }\r\n\r\n  25%{\r\n    transform: translate(0,-75vw);opacity: .75;\r\n  }\r\n  27%{\r\n    transform: translate(0,-60vw);opacity: .75;\r\n  }\r\n\r\n\r\n  40%{\r\n    transform: translate(0,-60vw);opacity: .75;\r\n  }\r\n  42%{\r\n    transform: translate(0,-42vw);opacity: .75;\r\n  }\r\n\r\n\r\n  50%{\r\n    transform: translate(0,-42vw);opacity: .75;\r\n  }\r\n  52%{\r\n    transform: translate(0,-24vw);opacity: .75;\r\n  }\r\n\r\n  70%{\r\n    transform: translate(0,-24vw);opacity: .75;\r\n  }\r\n  72%{\r\n    transform: translate(0,0);opacity: .75;\r\n  }\r\n}\r\n\r\n@keyframes flytitle {\r\n  0%{\r\n    transform: translate(110vw,0);opacity: .75;\r\n  }\r\n  10%{\r\n    transform: translate(110vw,0);opacity: .75;\r\n  }\r\n  12%{\r\n    transform: translate(0,0);opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes flyinfo1 {\r\n  0%{\r\n    transform: translate(110vw,0);opacity: .75;\r\n  }\r\n  15%{\r\n    transform: translate(110vw,0);opacity: .75;\r\n  }\r\n  17%{\r\n      transform: translate(0,0);opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes flyinfo2 {\r\n  0%{\r\n    transform: translate(110vw,0);opacity: .75;\r\n  }\r\n  25%{\r\n    transform: translate(110vw,0);opacity: .75;\r\n  }\r\n  27%{\r\n      transform: translate(0,0);opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes flyinfo3 {\r\n  0%{\r\n    transform: translate(110vw,0);opacity: .75;\r\n  }\r\n  40%{\r\n    transform: translate(110vw,0);opacity: .75;\r\n  }\r\n  42%{\r\n      transform: translate(0,0);opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes flyinfo4 {\r\n  0%{\r\n    transform: translate(110vw,0);opacity: .75;\r\n  }\r\n  50%{\r\n    transform: translate(110vw,0);opacity: .75;\r\n  }\r\n  52%{\r\n      transform: translate(0,0);opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes flyinfo5 {\r\n  0%{\r\n    transform: translate(110vw,0);opacity: .75;\r\n  }\r\n  70%{\r\n    transform: translate(110vw,0);opacity: .75;\r\n  }\r\n  72%{\r\n      transform: translate(0,0);opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes flyinfo6 {\r\n  0%{\r\n    transform: translate(110vw,0);opacity: .75;\r\n  }\r\n  85%{\r\n    transform: translate(110vw,0);opacity: .75;\r\n  }\r\n  87%{\r\n      transform: translate(0,0);opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes flyready {\r\n  0%{\r\n    transform: translate(110vw,0);opacity: .75;\r\n  }\r\n  95%{\r\n    transform: translate(110vw,0);opacity: .75;\r\n  }\r\n  100%{\r\n      transform: translate(0,0);opacity: 1;\r\n  }\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztHQUdHOztBQUVIO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsVUFBVTtFQUNWLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CO0FBQ0Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLGNBQWM7RUFDZCxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0IsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLDZCQUE2QjtFQUM3Qiw4QkFBOEI7RUFDOUIsK0JBQStCO0VBQy9CLFFBQVE7RUFDUixZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixPQUFPO0FBQ1Q7O0FBQ0E7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixVQUFVO0VBQ1YsT0FBTztBQUNUOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLFVBQVU7RUFDVixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsVUFBVTtFQUNWLE9BQU87QUFDVDs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixVQUFVO0VBQ1YsT0FBTztBQUNUOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLFVBQVU7RUFDVixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsVUFBVTtFQUNWLE9BQU87QUFDVDs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixVQUFVO0VBQ1YsT0FBTztBQUNUOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLFVBQVU7RUFDVixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsVUFBVTtFQUNWLE9BQU87QUFDVDs7QUFFQTtFQUNFO0lBQ0UsaUNBQWlDLENBQUMsWUFBWTtFQUNoRDtFQUNBO0lBQ0UsNkJBQTZCLENBQUMsWUFBWTtFQUM1Qzs7RUFFQTtNQUNJLDZCQUE2QixDQUFDLFlBQVk7RUFDOUM7RUFDQTtJQUNFLDZCQUE2QixDQUFDLFlBQVk7RUFDNUM7O0VBRUE7SUFDRSw2QkFBNkIsQ0FBQyxZQUFZO0VBQzVDO0VBQ0E7SUFDRSw2QkFBNkIsQ0FBQyxZQUFZO0VBQzVDOzs7RUFHQTtJQUNFLDZCQUE2QixDQUFDLFlBQVk7RUFDNUM7RUFDQTtJQUNFLDZCQUE2QixDQUFDLFlBQVk7RUFDNUM7OztFQUdBO0lBQ0UsNkJBQTZCLENBQUMsWUFBWTtFQUM1QztFQUNBO0lBQ0UsNkJBQTZCLENBQUMsWUFBWTtFQUM1Qzs7RUFFQTtJQUNFLDZCQUE2QixDQUFDLFlBQVk7RUFDNUM7RUFDQTtJQUNFLHlCQUF5QixDQUFDLFlBQVk7RUFDeEM7QUFDRjs7QUFHQTtFQUNFO0lBQ0UsNkJBQTZCLENBQUMsWUFBWTtFQUM1QztFQUNBO0lBQ0UsNkJBQTZCLENBQUMsWUFBWTtFQUM1QztFQUNBO0lBQ0UseUJBQXlCLENBQUMsVUFBVTtFQUN0QztBQUNGOztBQUVBO0VBQ0U7SUFDRSw2QkFBNkIsQ0FBQyxZQUFZO0VBQzVDO0VBQ0E7SUFDRSw2QkFBNkIsQ0FBQyxZQUFZO0VBQzVDO0VBQ0E7TUFDSSx5QkFBeUIsQ0FBQyxVQUFVO0VBQ3hDO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLDZCQUE2QixDQUFDLFlBQVk7RUFDNUM7RUFDQTtJQUNFLDZCQUE2QixDQUFDLFlBQVk7RUFDNUM7RUFDQTtNQUNJLHlCQUF5QixDQUFDLFVBQVU7RUFDeEM7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsNkJBQTZCLENBQUMsWUFBWTtFQUM1QztFQUNBO0lBQ0UsNkJBQTZCLENBQUMsWUFBWTtFQUM1QztFQUNBO01BQ0kseUJBQXlCLENBQUMsVUFBVTtFQUN4QztBQUNGOztBQUVBO0VBQ0U7SUFDRSw2QkFBNkIsQ0FBQyxZQUFZO0VBQzVDO0VBQ0E7SUFDRSw2QkFBNkIsQ0FBQyxZQUFZO0VBQzVDO0VBQ0E7TUFDSSx5QkFBeUIsQ0FBQyxVQUFVO0VBQ3hDO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLDZCQUE2QixDQUFDLFlBQVk7RUFDNUM7RUFDQTtJQUNFLDZCQUE2QixDQUFDLFlBQVk7RUFDNUM7RUFDQTtNQUNJLHlCQUF5QixDQUFDLFVBQVU7RUFDeEM7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsNkJBQTZCLENBQUMsWUFBWTtFQUM1QztFQUNBO0lBQ0UsNkJBQTZCLENBQUMsWUFBWTtFQUM1QztFQUNBO01BQ0kseUJBQXlCLENBQUMsVUFBVTtFQUN4QztBQUNGOztBQUVBO0VBQ0U7SUFDRSw2QkFBNkIsQ0FBQyxZQUFZO0VBQzVDO0VBQ0E7SUFDRSw2QkFBNkIsQ0FBQyxZQUFZO0VBQzVDO0VBQ0E7TUFDSSx5QkFBeUIsQ0FBQyxVQUFVO0VBQ3hDO0FBQ0YiLCJmaWxlIjoiZXZlbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGlvbi1jb250ZW50e1xyXG4gIC8qIC0tYmFja2dyb3VuZDogI2ZmZiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2JvYXJkcm9vbS5wbmdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3ZlcjtcclxuICAtLWJhY2tncm91bmQ6ICNhZmY7XHJcbn0gKi9cclxuXHJcbi5jYXJkIHtcclxuICBib3JkZXI6ICM3ZjdmZmUgNHB4IHNvbGlkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzBjMGZmO1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gIG1hcmdpbi1yaWdodDogNSU7XHJcbn1cclxuXHJcbi5kaWNlIHtcclxuICBtYXJnaW4tdG9wOiA0cHg7XHJcbn1cclxuXHJcbi5jZW50ZXIge1xyXG4gIG1hcmdpbi1sZWZ0OiAzcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGxlZnQ6IDUwJVxyXG59XHJcblxyXG4jbmF2Y29udGFpbmVyIHtcclxuICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgbWFyZ2luLXJpZ2h0OjUlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOjkwJTtcclxufVxyXG5cclxuI25hdmxpc3Qge1xyXG4gIHBhZGRpbmc6IDNweCAwO1xyXG4gIG1hcmdpbi1yaWdodDogMnB4O1xyXG59XHJcblxyXG4jbmF2bGlzdCBsaSB7XHJcbiAgcGFkZGluZy1sZWZ0OiAycHg7XHJcbiAgcGFkZGluZy1yaWdodDogMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6MnB4IDJweCAycHggMnB4O1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjOTk5OTk5O1xyXG4gIGJhY2tncm91bmQ6ICM5OTk5OTk7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBtYXJnaW4tbGVmdDogM3B4O1xyXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjOTk5OTk5O1xyXG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzk5OTk5OTtcclxuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjOTk5OTk5O1xyXG4gIGxlZnQ6IDUlO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgdG9wOjFweDtcclxufVxyXG4uaGVhZGVyLWljb24ge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICByaWdodDogMTBweDtcclxuICBtYXgtaGVpZ2h0OiAzMHB4O1xyXG4gIHotaW5kZXg6IDE5OTk5OTtcclxufVxyXG4uZnVuZmFjdCB7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICM1MDUwNTA7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBsZWZ0OiA1MCU7XHJcbn1cclxuXHJcbnAge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbiNhaWQge1xyXG4gIGFuaW1hdGlvbjogZmx5YWlkIDE1cyBsaW5lYXI7XHJcbiAgdG9wOiAxMDB2dztcclxuICBsZWZ0OiAwO1xyXG59XHJcblxyXG4jdGl0bGUge1xyXG4gIGFuaW1hdGlvbjogZmx5dGl0bGUgMTVzIGxpbmVhcjtcclxuICB0b3A6IDEwMHZ3O1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuXHJcbiNpbmZvMSB7XHJcbiAgYW5pbWF0aW9uOiBmbHlpbmZvMSAxNXMgbGluZWFyO1xyXG4gIHRvcDogMTAwdnc7XHJcbiAgbGVmdDogMDtcclxufVxyXG5cclxuI2luZm8yIHtcclxuICBhbmltYXRpb246IGZseWluZm8yIDE1cyBsaW5lYXI7XHJcbiAgdG9wOiAxMDB2dztcclxuICBsZWZ0OiAwO1xyXG59XHJcblxyXG4jaW5mbzMge1xyXG4gIGFuaW1hdGlvbjogZmx5aW5mbzMgMTVzIGxpbmVhcjtcclxuICB0b3A6IDEwMHZ3O1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuXHJcbiNpbmZvNCB7XHJcbiAgYW5pbWF0aW9uOiBmbHlpbmZvNCAxNXMgbGluZWFyO1xyXG4gIHRvcDogMTAwdnc7XHJcbiAgbGVmdDogMDtcclxufVxyXG5cclxuI2luZm81IHtcclxuICBhbmltYXRpb246IGZseWluZm81IDE1cyBsaW5lYXI7XHJcbiAgdG9wOiAxMDB2dztcclxuICBsZWZ0OiAwO1xyXG59XHJcblxyXG4jaW5mbzYge1xyXG4gIGFuaW1hdGlvbjogZmx5aW5mbzYgMTVzIGxpbmVhcjtcclxuICB0b3A6IDEwMHZ3O1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuXHJcbiNyZWFkeSB7XHJcbiAgYW5pbWF0aW9uOiBmbHlyZWFkeSAxNXMgbGluZWFyO1xyXG4gIHRvcDogMTAwdnc7XHJcbiAgbGVmdDogMDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBmbHlhaWQge1xyXG4gIDAle1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTEwdncsLTkwdncpO29wYWNpdHk6IC43NTtcclxuICB9XHJcbiAgOCV7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLC05MHZ3KTtvcGFjaXR5OiAuNzU7XHJcbiAgfVxyXG5cclxuICAxNSV7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsLTkwdncpO29wYWNpdHk6IC43NTtcclxuICB9XHJcbiAgMTcle1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwtNzV2dyk7b3BhY2l0eTogLjc1O1xyXG4gIH1cclxuXHJcbiAgMjUle1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwtNzV2dyk7b3BhY2l0eTogLjc1O1xyXG4gIH1cclxuICAyNyV7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLC02MHZ3KTtvcGFjaXR5OiAuNzU7XHJcbiAgfVxyXG5cclxuXHJcbiAgNDAle1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwtNjB2dyk7b3BhY2l0eTogLjc1O1xyXG4gIH1cclxuICA0MiV7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLC00MnZ3KTtvcGFjaXR5OiAuNzU7XHJcbiAgfVxyXG5cclxuXHJcbiAgNTAle1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwtNDJ2dyk7b3BhY2l0eTogLjc1O1xyXG4gIH1cclxuICA1MiV7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLC0yNHZ3KTtvcGFjaXR5OiAuNzU7XHJcbiAgfVxyXG5cclxuICA3MCV7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLC0yNHZ3KTtvcGFjaXR5OiAuNzU7XHJcbiAgfVxyXG4gIDcyJXtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsMCk7b3BhY2l0eTogLjc1O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbkBrZXlmcmFtZXMgZmx5dGl0bGUge1xyXG4gIDAle1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTEwdncsMCk7b3BhY2l0eTogLjc1O1xyXG4gIH1cclxuICAxMCV7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMTB2dywwKTtvcGFjaXR5OiAuNzU7XHJcbiAgfVxyXG4gIDEyJXtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsMCk7b3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmx5aW5mbzEge1xyXG4gIDAle1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTEwdncsMCk7b3BhY2l0eTogLjc1O1xyXG4gIH1cclxuICAxNSV7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMTB2dywwKTtvcGFjaXR5OiAuNzU7XHJcbiAgfVxyXG4gIDE3JXtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwwKTtvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmbHlpbmZvMiB7XHJcbiAgMCV7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMTB2dywwKTtvcGFjaXR5OiAuNzU7XHJcbiAgfVxyXG4gIDI1JXtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDExMHZ3LDApO29wYWNpdHk6IC43NTtcclxuICB9XHJcbiAgMjcle1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLDApO29wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZseWluZm8zIHtcclxuICAwJXtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDExMHZ3LDApO29wYWNpdHk6IC43NTtcclxuICB9XHJcbiAgNDAle1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTEwdncsMCk7b3BhY2l0eTogLjc1O1xyXG4gIH1cclxuICA0MiV7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsMCk7b3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmx5aW5mbzQge1xyXG4gIDAle1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTEwdncsMCk7b3BhY2l0eTogLjc1O1xyXG4gIH1cclxuICA1MCV7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMTB2dywwKTtvcGFjaXR5OiAuNzU7XHJcbiAgfVxyXG4gIDUyJXtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwwKTtvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmbHlpbmZvNSB7XHJcbiAgMCV7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMTB2dywwKTtvcGFjaXR5OiAuNzU7XHJcbiAgfVxyXG4gIDcwJXtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDExMHZ3LDApO29wYWNpdHk6IC43NTtcclxuICB9XHJcbiAgNzIle1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLDApO29wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZseWluZm82IHtcclxuICAwJXtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDExMHZ3LDApO29wYWNpdHk6IC43NTtcclxuICB9XHJcbiAgODUle1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTEwdncsMCk7b3BhY2l0eTogLjc1O1xyXG4gIH1cclxuICA4NyV7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsMCk7b3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmx5cmVhZHkge1xyXG4gIDAle1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTEwdncsMCk7b3BhY2l0eTogLjc1O1xyXG4gIH1cclxuICA5NSV7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMTB2dywwKTtvcGFjaXR5OiAuNzU7XHJcbiAgfVxyXG4gIDEwMCV7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsMCk7b3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4iXX0= */";

/***/ }),

/***/ 4191:
/*!*********************************************************!*\
  !*** ./src/app/tab1/event/event.welcome.css?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = ".center {\r\n  margin-left: 3px;\r\n  margin-right: 3px;\r\n  font-size: large;\r\n  text-align: center;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  left: 50%;\r\n}\r\n.header-icon {\r\n  position: fixed;\r\n  right: 10px;\r\n  max-height: 30px;\r\n  z-index: 199999;\r\n}\r\np {\r\n  margin-top: 10px;\r\n}\r\n#aid {\r\n  /* animation: flyaid 12s linear; */\r\n  top: 100vw;\r\n  left: 0;\r\n}\r\n#title {\r\n  /* animation: flytitle 12s linear; */\r\n  top: 100vw;\r\n  left: 0;\r\n}\r\n#info1 {\r\n  /* animation: flyinfo1 12s linear; */\r\n  top: 100vw;\r\n  left: 0;\r\n}\r\n#info2 {\r\n  /* animation: flyinfo2 12s linear; */\r\n  top: 100vw;\r\n  left: 0;\r\n}\r\n#info3 {\r\n  /* animation: flyinfo3 12s linear; */\r\n  top: 100vw;\r\n  left: 0;\r\n}\r\n#info4 {\r\n  /* animation: flyinfo4 12s linear; */\r\n  top: 100vw;\r\n  left: 0;\r\n}\r\n#info5 {\r\n  /* animation: flyinfo5 12s linear; */\r\n  top: 100vw;\r\n  left: 0;\r\n}\r\n#info6 {\r\n  /* animation: flyinfo6 12s linear; */\r\n  top: 100vw;\r\n  left: 0;\r\n}\r\n#ready {\r\n  /* animation: flyready 12s linear; */\r\n  top: 100vw;\r\n  left: 0;\r\n}\r\n/*\r\n@keyframes flyaid {\r\n  0%{\r\n    transform: translate(110vw,-90vw);opacity: .75;\r\n  }\r\n  8%{\r\n    transform: translate(0,-90vw);opacity: .75;\r\n  }\r\n\r\n  15%{\r\n      transform: translate(0,-90vw);opacity: .75;\r\n  }\r\n  17%{\r\n    transform: translate(0,-75vw);opacity: .75;\r\n  }\r\n\r\n  25%{\r\n    transform: translate(0,-75vw);opacity: .75;\r\n  }\r\n  27%{\r\n    transform: translate(0,-60vw);opacity: .75;\r\n  }\r\n\r\n\r\n  40%{\r\n    transform: translate(0,-60vw);opacity: .75;\r\n  }\r\n  42%{\r\n    transform: translate(0,-42vw);opacity: .75;\r\n  }\r\n\r\n\r\n  50%{\r\n    transform: translate(0,-42vw);opacity: .75;\r\n  }\r\n  52%{\r\n    transform: translate(0,-24vw);opacity: .75;\r\n  }\r\n\r\n  70%{\r\n    transform: translate(0,-24vw);opacity: .75;\r\n  }\r\n  72%{\r\n    transform: translate(0,0);opacity: .75;\r\n  }\r\n}\r\n\r\n\r\n@keyframes flytitle {\r\n  0%{\r\n    transform: translate(110vw,0);opacity: .75;\r\n  }\r\n  10%{\r\n    transform: translate(110vw,0);opacity: .75;\r\n  }\r\n  12%{\r\n    transform: translate(0,0);opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes flyinfo1 {\r\n  0%{\r\n    transform: translate(110vw,0);opacity: .75;\r\n  }\r\n  15%{\r\n    transform: translate(110vw,0);opacity: .75;\r\n  }\r\n  17%{\r\n      transform: translate(0,0);opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes flyinfo2 {\r\n  0%{\r\n    transform: translate(110vw,0);opacity: .75;\r\n  }\r\n  25%{\r\n    transform: translate(110vw,0);opacity: .75;\r\n  }\r\n  27%{\r\n      transform: translate(0,0);opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes flyinfo3 {\r\n  0%{\r\n    transform: translate(110vw,0);opacity: .75;\r\n  }\r\n  40%{\r\n    transform: translate(110vw,0);opacity: .75;\r\n  }\r\n  42%{\r\n      transform: translate(0,0);opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes flyinfo4 {\r\n  0%{\r\n    transform: translate(110vw,0);opacity: .75;\r\n  }\r\n  50%{\r\n    transform: translate(110vw,0);opacity: .75;\r\n  }\r\n  52%{\r\n      transform: translate(0,0);opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes flyinfo5 {\r\n  0%{\r\n    transform: translate(110vw,0);opacity: .75;\r\n  }\r\n  70%{\r\n    transform: translate(110vw,0);opacity: .75;\r\n  }\r\n  72%{\r\n      transform: translate(0,0);opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes flyinfo6 {\r\n  0%{\r\n    transform: translate(110vw,0);opacity: .75;\r\n  }\r\n  85%{\r\n    transform: translate(110vw,0);opacity: .75;\r\n  }\r\n  87%{\r\n      transform: translate(0,0);opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes flyready {\r\n  0%{\r\n    transform: translate(110vw,0);opacity: .75;\r\n  }\r\n  95%{\r\n    transform: translate(110vw,0);opacity: .75;\r\n  }\r\n  100%{\r\n      transform: translate(0,0);opacity: 1;\r\n  }\r\n} */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50LndlbGNvbWUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDtBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsVUFBVTtFQUNWLE9BQU87QUFDVDtBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLFVBQVU7RUFDVixPQUFPO0FBQ1Q7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxVQUFVO0VBQ1YsT0FBTztBQUNUO0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsVUFBVTtFQUNWLE9BQU87QUFDVDtBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLFVBQVU7RUFDVixPQUFPO0FBQ1Q7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxVQUFVO0VBQ1YsT0FBTztBQUNUO0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsVUFBVTtFQUNWLE9BQU87QUFDVDtBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLFVBQVU7RUFDVixPQUFPO0FBQ1Q7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxVQUFVO0VBQ1YsT0FBTztBQUNUO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E4SUciLCJmaWxlIjoiZXZlbnQud2VsY29tZS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyIHtcclxuICBtYXJnaW4tbGVmdDogM3B4O1xyXG4gIG1hcmdpbi1yaWdodDogM3B4O1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBsZWZ0OiA1MCU7XHJcbn1cclxuLmhlYWRlci1pY29uIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbiAgbWF4LWhlaWdodDogMzBweDtcclxuICB6LWluZGV4OiAxOTk5OTk7XHJcbn1cclxucCB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuI2FpZCB7XHJcbiAgLyogYW5pbWF0aW9uOiBmbHlhaWQgMTJzIGxpbmVhcjsgKi9cclxuICB0b3A6IDEwMHZ3O1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuXHJcbiN0aXRsZSB7XHJcbiAgLyogYW5pbWF0aW9uOiBmbHl0aXRsZSAxMnMgbGluZWFyOyAqL1xyXG4gIHRvcDogMTAwdnc7XHJcbiAgbGVmdDogMDtcclxufVxyXG5cclxuI2luZm8xIHtcclxuICAvKiBhbmltYXRpb246IGZseWluZm8xIDEycyBsaW5lYXI7ICovXHJcbiAgdG9wOiAxMDB2dztcclxuICBsZWZ0OiAwO1xyXG59XHJcblxyXG4jaW5mbzIge1xyXG4gIC8qIGFuaW1hdGlvbjogZmx5aW5mbzIgMTJzIGxpbmVhcjsgKi9cclxuICB0b3A6IDEwMHZ3O1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuXHJcbiNpbmZvMyB7XHJcbiAgLyogYW5pbWF0aW9uOiBmbHlpbmZvMyAxMnMgbGluZWFyOyAqL1xyXG4gIHRvcDogMTAwdnc7XHJcbiAgbGVmdDogMDtcclxufVxyXG5cclxuI2luZm80IHtcclxuICAvKiBhbmltYXRpb246IGZseWluZm80IDEycyBsaW5lYXI7ICovXHJcbiAgdG9wOiAxMDB2dztcclxuICBsZWZ0OiAwO1xyXG59XHJcblxyXG4jaW5mbzUge1xyXG4gIC8qIGFuaW1hdGlvbjogZmx5aW5mbzUgMTJzIGxpbmVhcjsgKi9cclxuICB0b3A6IDEwMHZ3O1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuXHJcbiNpbmZvNiB7XHJcbiAgLyogYW5pbWF0aW9uOiBmbHlpbmZvNiAxMnMgbGluZWFyOyAqL1xyXG4gIHRvcDogMTAwdnc7XHJcbiAgbGVmdDogMDtcclxufVxyXG5cclxuI3JlYWR5IHtcclxuICAvKiBhbmltYXRpb246IGZseXJlYWR5IDEycyBsaW5lYXI7ICovXHJcbiAgdG9wOiAxMDB2dztcclxuICBsZWZ0OiAwO1xyXG59XHJcbi8qXHJcbkBrZXlmcmFtZXMgZmx5YWlkIHtcclxuICAwJXtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDExMHZ3LC05MHZ3KTtvcGFjaXR5OiAuNzU7XHJcbiAgfVxyXG4gIDgle1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwtOTB2dyk7b3BhY2l0eTogLjc1O1xyXG4gIH1cclxuXHJcbiAgMTUle1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLC05MHZ3KTtvcGFjaXR5OiAuNzU7XHJcbiAgfVxyXG4gIDE3JXtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsLTc1dncpO29wYWNpdHk6IC43NTtcclxuICB9XHJcblxyXG4gIDI1JXtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsLTc1dncpO29wYWNpdHk6IC43NTtcclxuICB9XHJcbiAgMjcle1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwtNjB2dyk7b3BhY2l0eTogLjc1O1xyXG4gIH1cclxuXHJcblxyXG4gIDQwJXtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsLTYwdncpO29wYWNpdHk6IC43NTtcclxuICB9XHJcbiAgNDIle1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwtNDJ2dyk7b3BhY2l0eTogLjc1O1xyXG4gIH1cclxuXHJcblxyXG4gIDUwJXtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsLTQydncpO29wYWNpdHk6IC43NTtcclxuICB9XHJcbiAgNTIle1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwtMjR2dyk7b3BhY2l0eTogLjc1O1xyXG4gIH1cclxuXHJcbiAgNzAle1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwtMjR2dyk7b3BhY2l0eTogLjc1O1xyXG4gIH1cclxuICA3MiV7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLDApO29wYWNpdHk6IC43NTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5Aa2V5ZnJhbWVzIGZseXRpdGxlIHtcclxuICAwJXtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDExMHZ3LDApO29wYWNpdHk6IC43NTtcclxuICB9XHJcbiAgMTAle1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTEwdncsMCk7b3BhY2l0eTogLjc1O1xyXG4gIH1cclxuICAxMiV7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLDApO29wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZseWluZm8xIHtcclxuICAwJXtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDExMHZ3LDApO29wYWNpdHk6IC43NTtcclxuICB9XHJcbiAgMTUle1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTEwdncsMCk7b3BhY2l0eTogLjc1O1xyXG4gIH1cclxuICAxNyV7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsMCk7b3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmx5aW5mbzIge1xyXG4gIDAle1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTEwdncsMCk7b3BhY2l0eTogLjc1O1xyXG4gIH1cclxuICAyNSV7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMTB2dywwKTtvcGFjaXR5OiAuNzU7XHJcbiAgfVxyXG4gIDI3JXtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwwKTtvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmbHlpbmZvMyB7XHJcbiAgMCV7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMTB2dywwKTtvcGFjaXR5OiAuNzU7XHJcbiAgfVxyXG4gIDQwJXtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDExMHZ3LDApO29wYWNpdHk6IC43NTtcclxuICB9XHJcbiAgNDIle1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLDApO29wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZseWluZm80IHtcclxuICAwJXtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDExMHZ3LDApO29wYWNpdHk6IC43NTtcclxuICB9XHJcbiAgNTAle1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTEwdncsMCk7b3BhY2l0eTogLjc1O1xyXG4gIH1cclxuICA1MiV7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsMCk7b3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmx5aW5mbzUge1xyXG4gIDAle1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTEwdncsMCk7b3BhY2l0eTogLjc1O1xyXG4gIH1cclxuICA3MCV7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMTB2dywwKTtvcGFjaXR5OiAuNzU7XHJcbiAgfVxyXG4gIDcyJXtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwwKTtvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmbHlpbmZvNiB7XHJcbiAgMCV7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMTB2dywwKTtvcGFjaXR5OiAuNzU7XHJcbiAgfVxyXG4gIDg1JXtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDExMHZ3LDApO29wYWNpdHk6IC43NTtcclxuICB9XHJcbiAgODcle1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLDApO29wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZseXJlYWR5IHtcclxuICAwJXtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDExMHZ3LDApO29wYWNpdHk6IC43NTtcclxuICB9XHJcbiAgOTUle1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTEwdncsMCk7b3BhY2l0eTogLjc1O1xyXG4gIH1cclxuICAxMDAle1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLDApO29wYWNpdHk6IDE7XHJcbiAgfVxyXG59ICovXHJcbiJdfQ== */";

/***/ }),

/***/ 3899:
/*!*******************************************************************!*\
  !*** ./src/app/tab1/fundraise/fundraise.component.css?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "/* ion-content{\r\n  /* --background: #fff url(\"../../assets/images/boardroom.png\") no-repeat center center / cover;\r\n  --background: #aff;\r\n} */\r\n\r\n.backbutton {\r\n  position: absolute;\r\n}\r\n\r\n.center {\r\n  margin-left: 3px;\r\n  margin-right: 3px;\r\n  font-size: large;\r\n  text-align: center;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  left: 50%\r\n}\r\n\r\n.header-icon {\r\n  position: fixed;\r\n  right: 10px;\r\n  max-height: 30px;\r\n  z-index: 199999;\r\n}\r\n\r\n.funfact {\r\n  box-shadow: 1px 1px 4px 4px #888888;\r\n  border-radius: 4px;\r\n  border: 2px solid #505050;\r\n  font-size: large;\r\n  text-align: center;\r\n  display: block;\r\n  justify-content: center;\r\n  align-items: center;\r\n  left: 50%;\r\n}\r\n\r\n.photo {\r\n  margin-top: 18px;\r\n  border-radius: 50%;\r\n  border: 2px solid black;\r\n  width:50px;\r\n  height:50px;\r\n  padding-top: 0;\r\n  margin-bottom: 0;\r\n}\r\n\r\n#navcontainer {\r\n  margin-left: 5%;\r\n  margin-right:5%;\r\n  display: block;\r\n  width:90%;\r\n}\r\n\r\n#navlist {\r\n  padding: 3px 0;\r\n  margin-right: 2px;\r\n}\r\n\r\n#navlist li {\r\n  padding-left: 2px;\r\n  padding-right: 2px;\r\n  border-radius:2px 2px 2px 2px;\r\n  border-bottom: 2px solid #999999;\r\n  background: #999999;\r\n  list-style: none;\r\n  margin-left: 3px;\r\n  border-top: 2px solid #999999;\r\n  border-left: 2px solid #999999;\r\n  border-right: 2px solid #999999;\r\n  left: 5%;\r\n  color: black;\r\n  display: inline;\r\n  position:relative;\r\n  top:1px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZ1bmRyYWlzZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7R0FHRzs7QUFFSDtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQjtBQUNGOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLFdBQVc7RUFDWCxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixjQUFjO0VBQ2QsU0FBUztBQUNYOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLGdDQUFnQztFQUNoQyxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQiw2QkFBNkI7RUFDN0IsOEJBQThCO0VBQzlCLCtCQUErQjtFQUMvQixRQUFRO0VBQ1IsWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsT0FBTztBQUNUIiwiZmlsZSI6ImZ1bmRyYWlzZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogaW9uLWNvbnRlbnR7XHJcbiAgLyogLS1iYWNrZ3JvdW5kOiAjZmZmIHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvYm9hcmRyb29tLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xyXG4gIC0tYmFja2dyb3VuZDogI2FmZjtcclxufSAqL1xyXG5cclxuLmJhY2tidXR0b24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLmNlbnRlciB7XHJcbiAgbWFyZ2luLWxlZnQ6IDNweDtcclxuICBtYXJnaW4tcmlnaHQ6IDNweDtcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbGVmdDogNTAlXHJcbn1cclxuXHJcbi5oZWFkZXItaWNvbiB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG4gIG1heC1oZWlnaHQ6IDMwcHg7XHJcbiAgei1pbmRleDogMTk5OTk5O1xyXG59XHJcblxyXG4uZnVuZmFjdCB7XHJcbiAgYm94LXNoYWRvdzogMXB4IDFweCA0cHggNHB4ICM4ODg4ODg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICM1MDUwNTA7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBsZWZ0OiA1MCU7XHJcbn1cclxuXHJcbi5waG90byB7XHJcbiAgbWFyZ2luLXRvcDogMThweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgd2lkdGg6NTBweDtcclxuICBoZWlnaHQ6NTBweDtcclxuICBwYWRkaW5nLXRvcDogMDtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4jbmF2Y29udGFpbmVyIHtcclxuICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgbWFyZ2luLXJpZ2h0OjUlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOjkwJTtcclxufVxyXG5cclxuI25hdmxpc3Qge1xyXG4gIHBhZGRpbmc6IDNweCAwO1xyXG4gIG1hcmdpbi1yaWdodDogMnB4O1xyXG59XHJcblxyXG4jbmF2bGlzdCBsaSB7XHJcbiAgcGFkZGluZy1sZWZ0OiAycHg7XHJcbiAgcGFkZGluZy1yaWdodDogMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6MnB4IDJweCAycHggMnB4O1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjOTk5OTk5O1xyXG4gIGJhY2tncm91bmQ6ICM5OTk5OTk7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBtYXJnaW4tbGVmdDogM3B4O1xyXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjOTk5OTk5O1xyXG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzk5OTk5OTtcclxuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjOTk5OTk5O1xyXG4gIGxlZnQ6IDUlO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgdG9wOjFweDtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 3142:
/*!*****************************************************************!*\
  !*** ./src/app/tab1/opponent/opponent.component.css?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "/* ion-content{\r\n  /* --background: #fff url(\"../../assets/images/boardroom.png\") no-repeat center center / cover;\r\n  --background: #aff;\r\n} */\r\n\r\n\r\n\r\n.center {\r\n  margin-left: 3px;\r\n  margin-right: 3px;\r\n  font-size: large;\r\n  text-align: center;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  left: 50%\r\n}\r\n\r\n\r\n\r\n.header-icon {\r\n  position: fixed;\r\n  right: 10px;\r\n  max-height: 30px;\r\n  z-index: 199999;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9wcG9uZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztHQUdHOzs7O0FBSUg7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkI7QUFDRjs7OztBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQiIsImZpbGUiOiJvcHBvbmVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogaW9uLWNvbnRlbnR7XHJcbiAgLyogLS1iYWNrZ3JvdW5kOiAjZmZmIHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvYm9hcmRyb29tLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xyXG4gIC0tYmFja2dyb3VuZDogI2FmZjtcclxufSAqL1xyXG5cclxuXHJcblxyXG4uY2VudGVyIHtcclxuICBtYXJnaW4tbGVmdDogM3B4O1xyXG4gIG1hcmdpbi1yaWdodDogM3B4O1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBsZWZ0OiA1MCVcclxufVxyXG4uaGVhZGVyLWljb24ge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICByaWdodDogMTBweDtcclxuICBtYXgtaGVpZ2h0OiAzMHB4O1xyXG4gIHotaW5kZXg6IDE5OTk5OTtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 6176:
/*!***************************************************************!*\
  !*** ./src/app/tab1/results/results.component.css?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "/* ion-content{\r\n  /* --background: #fff url(\"../../assets/images/boardroom.png\") no-repeat center center / cover;\r\n  --background: #aff;\r\n} */\r\n\r\n\r\n.center {\r\n  margin-left: 3px;\r\n  margin-right: 3px;\r\n  font-size: large;\r\n  text-align: center;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  left: 50%\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3VsdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0dBR0c7OztBQUdIO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CO0FBQ0YiLCJmaWxlIjoicmVzdWx0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogaW9uLWNvbnRlbnR7XHJcbiAgLyogLS1iYWNrZ3JvdW5kOiAjZmZmIHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvYm9hcmRyb29tLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xyXG4gIC0tYmFja2dyb3VuZDogI2FmZjtcclxufSAqL1xyXG5cclxuXHJcbi5jZW50ZXIge1xyXG4gIG1hcmdpbi1sZWZ0OiAzcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGxlZnQ6IDUwJVxyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 4223:
/*!***********************************************!*\
  !*** ./src/app/tab1/tab1.page.css?ngResource ***!
  \***********************************************/
/***/ ((module) => {

module.exports = ".option {\r\n  height: 100px;\r\n  position: relative;\r\n  font-size: x-large;\r\n  left: 10%;\r\n  width: 80%;\r\n  right: 10%;\r\n  white-space: normal;\r\n  flex-flow: column;\r\n}\r\n\r\n\r\n/* ion-content{\r\n  /* --background: #fff url(\"../../assets/images/boardroom.png\") no-repeat center center / cover;\r\n  --background: #aff;\r\n} */\r\n\r\n\r\n.header-icon {\r\n  position: fixed;\r\n  right: 10px;\r\n  max-height: 30px;\r\n  z-index: 199999;\r\n}\r\n\r\n\r\n.subtitle {\r\n  position: absolute;\r\n  top: 5px;\r\n  right: 1px;\r\n  font-size: 80%;\r\n}\r\n\r\n\r\n.center {\r\n  margin-left: 3px;\r\n  margin-right: 3px;\r\n  font-size: large;\r\n  text-align: center;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  left: 50%\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjEucGFnZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COzs7QUFHQTs7O0dBR0c7OztBQUVIO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7RUFDVixjQUFjO0FBQ2hCOzs7QUFHQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQjtBQUNGIiwiZmlsZSI6InRhYjEucGFnZS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3B0aW9uIHtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgbGVmdDogMTAlO1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgcmlnaHQ6IDEwJTtcclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gIGZsZXgtZmxvdzogY29sdW1uO1xyXG59XHJcblxyXG5cclxuLyogaW9uLWNvbnRlbnR7XHJcbiAgLyogLS1iYWNrZ3JvdW5kOiAjZmZmIHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvYm9hcmRyb29tLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xyXG4gIC0tYmFja2dyb3VuZDogI2FmZjtcclxufSAqL1xyXG5cclxuLmhlYWRlci1pY29uIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbiAgbWF4LWhlaWdodDogMzBweDtcclxuICB6LWluZGV4OiAxOTk5OTk7XHJcbn1cclxuXHJcbi5zdWJ0aXRsZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNXB4O1xyXG4gIHJpZ2h0OiAxcHg7XHJcbiAgZm9udC1zaXplOiA4MCU7XHJcbn1cclxuXHJcblxyXG4uY2VudGVyIHtcclxuICBtYXJnaW4tbGVmdDogM3B4O1xyXG4gIG1hcmdpbi1yaWdodDogM3B4O1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBsZWZ0OiA1MCVcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 6350:
/*!*****************************************************!*\
  !*** ./src/app/dice/dice.component.html?ngResource ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "<div style=\"width: 75%;\r\n     margin-right: 12.5%;\r\n     margin-left: 12.5%;\">\r\n  <app-rolltable [slot0]=\"slot0\"\r\n                 [slot1]=\"slot1\"\r\n                 [slot2]=\"slot2\"\r\n                 [slot3]=\"slot3\"\r\n                 [slot4]=\"slot4\"\r\n                 [slot5]=\"slot5\"\r\n                 [val0]=\"val0\"\r\n                 [val1]=\"val1\"\r\n                 [val2]=\"val2\"\r\n                 [val3]=\"val3\"\r\n                 [val4]=\"val4\"\r\n                 [val5]=\"val5\">\r\n  </app-rolltable>\r\n  <div class=\"center\">\r\n    <img id=\"dice\" src='assets/{{imageValue}}.png'>\r\n    <ion-button class=\"button43\" [disabled]=\"!canClick\" (click)=\"animatedDiceRoll()\"><em>Roll</em></ion-button>\r\n  </div>\r\n<div>\r\n";

/***/ }),

/***/ 8412:
/*!*******************************************************************!*\
  !*** ./src/app/modal-toast/modal-toast.component.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "\r\n\r\n<div>\r\n    <div class=\"center\">\r\n      <h1 style=\"color:black;\"> {{title}}</h1>\r\n    </div>\r\n    <div class=\"center\">\r\n      <p style=\"color:black;\">{{message}}</p>\r\n      </div>\r\n      <div class=\"center\">\r\n      <ion-button class=\"button43\" (click)=\"confirm()\">Continue</ion-button>\r\n      </div>\r\n</div>\r\n\r\n";

/***/ }),

/***/ 2587:
/*!****************************************************************!*\
  !*** ./src/app/roll-table/rolltable.component.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"center\" *ngIf=\"!votes.isDemocrat\">\r\n  <div *ngIf=\"slot0.length > 0\" class=\"top\">\r\n    <div class=\"col left\"><img *ngFor=\"let item of slot0\" class=\"dice\" src='assets/diceRep{{item}}.png'></div>\r\n    <div class=\"col right\"> {{val0}} </div>\r\n  </div>\r\n  <div *ngIf=\"slot0.length === 0 && slot1.length > 0\" class=\"top\">\r\n    <div class=\"col left\"><img *ngFor=\"let item of slot0\" class=\"dice\" src='assets/diceRep{{item}}.png'></div>\r\n    <div class=\"col right\"> {{val1}} </div>\r\n  </div>\r\n  <div *ngIf=\"slot0.length === 0 && slot1.length === 0 && slot2.length > 0\" class=\"top\">\r\n    <div class=\"col left\"><img *ngFor=\"let item of slot1\" class=\"dice\" src='assets/diceRep{{item}}.png'></div>\r\n    <div class=\"col right\"> {{val2}} </div>\r\n  </div>\r\n  <div *ngIf=\"slot0.length === 0 && slot1.length === 0 && slot2.length === 0 && slot3.length > 0\" class=\"top\">\r\n    <div class=\"col left\"><img *ngFor=\"let item of slot2\" class=\"dice\" src='assets/diceRep{{item}}.png'></div>\r\n    <div class=\"col right\"> {{val3}} </div>\r\n  </div>\r\n  <div *ngIf=\"slot0.length === 0 && slot1.length === 0 && slot2.length === 0 && slot3.length === 0 && slot4.length > 0\" class=\"top\">\r\n    <div class=\"col left\"><img *ngFor=\"let item of slot3\" class=\"dice\" src='assets/diceRep{{item}}.png'></div>\r\n    <div class=\"col right\"> {{val4}} </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"slot1.length > 0 && ((slot0.length > 0) && (slot3.length > 0 || slot2.length > 0 || slot4.length > 0 || slot5.length > 0))\" class=\"row\">\r\n    <div class=\"col left\"><img *ngFor=\"let item of slot1\" class=\"dice\" src='assets/diceRep{{item}}.png'></div>\r\n    <div class=\"col right\"> {{val1}} </div>\r\n   </div>\r\n  <div *ngIf=\"slot2.length > 0 && ((slot5.length > 0 || slot4.length > 0 || slot3.length > 0) && (slot1.length > 0 || slot0.length > 0))\" class=\"row\">\r\n    <div class=\"col left\"><img *ngFor=\"let item of slot2\" class=\"dice\" src='assets/diceRep{{item}}.png'></div>\r\n    <div class=\"col right\"> {{val2}} </div>\r\n  </div>\r\n  <div *ngIf=\"slot3.length > 0 && ((slot5.length > 0 || slot4.length > 0) && (slot2.length > 0 || slot1.length > 0 || slot0.length > 0))\" class=\"row\">\r\n    <div class=\"col left\"><img *ngFor=\"let item of slot3\" class=\"dice\" src='assets/diceRep{{item}}.png'></div>\r\n    <div class=\"col right\"> {{val3}} </div>\r\n  </div>\r\n  <div *ngIf=\"slot4.length > 0 && ((slot5.length > 0) && (slot3.length > 0 || slot2.length > 0 || slot1.length > 0 || slot0.length > 0))\" class=\"row\">\r\n    <div class=\"col left\"><img *ngFor=\"let item of slot4\" class=\"dice\" src='assets/diceRep{{item}}.png'></div>\r\n    <div class=\"col right\"> {{val4}} </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"slot5.length === 0 && slot4.length === 0 && slot3.length === 0 && slot2.length === 0 && slot1.length > 0\" class=\"bottom\">\r\n    <div class=\"col left\"><img *ngFor=\"let item of slot1\" class=\"dice\" src='assets/diceRep{{item}}.png'></div>\r\n    <div class=\"col right\"> {{val1}} </div>\r\n  </div>\r\n  <div *ngIf=\"slot5.length === 0 && slot4.length === 0 && slot3.length === 0 && slot2.length > 0\" class=\"bottom\">\r\n    <div class=\"col left\"><img *ngFor=\"let item of slot2\" class=\"dice\" src='assets/diceRep{{item}}.png'></div>\r\n    <div class=\"col right\"> {{val2}} </div>\r\n  </div>\r\n  <div *ngIf=\"slot5.length === 0 && slot4.length === 0 && slot3.length > 0\" class=\"bottom\">\r\n    <div class=\"col left\"><img *ngFor=\"let item of slot3\" class=\"dice\" src='assets/diceRep{{item}}.png'></div>\r\n    <div class=\"col right\"> {{val3}} </div>\r\n  </div>\r\n  <div *ngIf=\"slot5.length === 0 && slot4.length > 0\" class=\"bottom\">\r\n    <div class=\"col left\"><img *ngFor=\"let item of slot4\" class=\"dice\" src='assets/diceRep{{item}}.png'></div>\r\n    <div class=\"col right\"> {{val4}} </div>\r\n  </div>\r\n  <div *ngIf=\"slot5.length > 0\" class=\"bottom\">\r\n    <div class=\"col left\"><img *ngFor=\"let item of slot5\" class=\"dice\" src='assets/diceRep{{item}}.png'></div>\r\n    <div class=\"col right\"> {{val5}} </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"center\" *ngIf=\"votes.isDemocrat\">\r\n  <div *ngIf=\"slot0.length > 0\" class=\"top\">\r\n    <div class=\"col left\"><img *ngFor=\"let item of slot0\" class=\"dice\" src='assets/diceDem{{item}}.png'></div>\r\n    <div class=\"col right\"> {{val0}} </div>\r\n  </div>\r\n  <div *ngIf=\"slot0.length === 0 && slot1.length > 0\" class=\"top\">\r\n    <div class=\"col left\"><img *ngFor=\"let item of slot0\" class=\"dice\" src='assets/diceDem{{item}}.png'></div>\r\n    <div class=\"col right\"> {{val1}} </div>\r\n  </div>\r\n  <div *ngIf=\"slot0.length === 0 && slot1.length === 0 && slot2.length > 0\" class=\"top\">\r\n    <div class=\"col left\"><img *ngFor=\"let item of slot1\" class=\"dice\" src='assets/diceDem{{item}}.png'></div>\r\n    <div class=\"col right\"> {{val2}} </div>\r\n  </div>\r\n  <div *ngIf=\"slot0.length === 0 && slot1.length === 0 && slot2.length === 0 && slot3.length > 0\" class=\"top\">\r\n    <div class=\"col left\"><img *ngFor=\"let item of slot2\" class=\"dice\" src='assets/diceDem{{item}}.png'></div>\r\n    <div class=\"col right\"> {{val3}} </div>\r\n  </div>\r\n  <div *ngIf=\"slot0.length === 0 && slot1.length === 0 && slot2.length === 0 && slot3.length === 0 && slot4.length > 0\" class=\"top\">\r\n    <div class=\"col left\"><img *ngFor=\"let item of slot3\" class=\"dice\" src='assets/diceDem{{item}}.png'></div>\r\n    <div class=\"col right\"> {{val4}} </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"slot1.length > 0 && ((slot0.length > 0) && (slot3.length > 0 || slot2.length > 0 || slot4.length > 0 || slot5.length > 0))\" class=\"row\">\r\n    <div class=\"col left\"><img *ngFor=\"let item of slot1\" class=\"dice\" src='assets/diceDem{{item}}.png'></div>\r\n    <div class=\"col right\"> {{val1}} </div>\r\n   </div>\r\n  <div *ngIf=\"slot2.length > 0 && ((slot5.length > 0 || slot4.length > 0 || slot3.length > 0) && (slot1.length > 0 || slot0.length > 0))\" class=\"row\">\r\n    <div class=\"col left\"><img *ngFor=\"let item of slot2\" class=\"dice\" src='assets/diceDem{{item}}.png'></div>\r\n    <div class=\"col right\"> {{val2}} </div>\r\n  </div>\r\n  <div *ngIf=\"slot3.length > 0 && ((slot5.length > 0 || slot4.length > 0) && (slot2.length > 0 || slot1.length > 0 || slot0.length > 0))\" class=\"row\">\r\n    <div class=\"col left\"><img *ngFor=\"let item of slot3\" class=\"dice\" src='assets/diceDem{{item}}.png'></div>\r\n    <div class=\"col right\"> {{val3}} </div>\r\n  </div>\r\n  <div *ngIf=\"slot4.length > 0 && ((slot5.length > 0) && (slot3.length > 0 || slot2.length > 0 || slot1.length > 0 || slot0.length > 0))\" class=\"row\">\r\n    <div class=\"col left\"><img *ngFor=\"let item of slot4\" class=\"dice\" src='assets/diceDem{{item}}.png'></div>\r\n    <div class=\"col right\"> {{val4}} </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"slot5.length === 0 && slot4.length === 0 && slot3.length === 0 && slot2.length === 0 && slot1.length > 0\" class=\"bottom\">\r\n    <div class=\"col left\"><img *ngFor=\"let item of slot1\" class=\"dice\" src='assets/diceDem{{item}}.png'></div>\r\n    <div class=\"col right\"> {{val1}} </div>\r\n  </div>\r\n  <div *ngIf=\"slot5.length === 0 && slot4.length === 0 && slot3.length === 0 && slot2.length > 0\" class=\"bottom\">\r\n    <div class=\"col left\"><img *ngFor=\"let item of slot2\" class=\"dice\" src='assets/diceDem{{item}}.png'></div>\r\n    <div class=\"col right\"> {{val2}} </div>\r\n  </div>\r\n  <div *ngIf=\"slot5.length === 0 && slot4.length === 0 && slot3.length > 0\" class=\"bottom\">\r\n    <div class=\"col left\"><img *ngFor=\"let item of slot3\" class=\"dice\" src='assets/diceDem{{item}}.png'></div>\r\n    <div class=\"col right\"> {{val3}} </div>\r\n  </div>\r\n  <div *ngIf=\"slot5.length === 0 && slot4.length > 0\" class=\"bottom\">\r\n    <div class=\"col left\"><img *ngFor=\"let item of slot4\" class=\"dice\" src='assets/diceDem{{item}}.png'></div>\r\n    <div class=\"col right\"> {{val4}} </div>\r\n  </div>\r\n  <div *ngIf=\"slot5.length > 0\" class=\"bottom\">\r\n    <div class=\"col left\"><img *ngFor=\"let item of slot5\" class=\"dice\" src='assets/diceDem{{item}}.png'></div>\r\n    <div class=\"col right\"> {{val5}} </div>\r\n  </div>\r\n</div>\r\n";

/***/ }),

/***/ 5969:
/*!********************************************************************!*\
  !*** ./src/app/tab1/advertise/advertise.component.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"false\">\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      Advertise\r\n      <img class='header-icon' *ngIf=\"!isDemocrat\" src=\"../../../assets/images/republicanIcon.png\">\r\n      <img class='header-icon' *ngIf=\"isDemocrat\" src=\"../../../assets/images/democratIcon.png\">\r\n    </ion-title>\r\n    <ion-button fill=\"clear\" id=\"click-triggerAd\"><ion-icon name=\"help-circle-outline\"></ion-icon></ion-button>\r\n    <ion-popover trigger=\"click-triggerAd\" triggerAction=\"click\">\r\n      <ng-template>\r\n        <ion-content class=\"ion-padding\">\r\n          <h3>Running Advertisements!</h3>\r\n          <p>Ads here are run on regional TV channels, so you can pick any of the 8 available regions.</p>\r\n          <p>Ads are great for influencing multiple states in 1 turn.</p>\r\n          <p>Sometimes, the ads will have no effect on the people in these regions. Your roll will determine how effective they are!</p>\r\n          <p>Select whether to run Attack ads or Positive ads.</p>\r\n          <p>Attack ads are risky. They can backfire, as some people will view you unfavorably for attacking your opponent, but sometimes are very effective.</p>\r\n        </ion-content>\r\n      </ng-template>\r\n    </ion-popover>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <div style=\"margin-left: 2px; margin-top: 2px;\">\r\n    <ion-button class=\"backbutton\" size=\"small\" [disabled]=\"!canBack\" (click)=\"back()\"><ion-icon name=\"arrow-back-circle-outline\"></ion-icon><em>Back</em></ion-button>\r\n  </div>\r\n<div class=\"center\">\r\n<h5 style=\"margin-top: 14px; max-width: 65%;\">Choose where to run advertisements:</h5>\r\n</div>\r\n\r\n<!-- Have an icon for each of the state blocks -->\r\n<div class=\"row\">\r\n  <div [formGroup]=\"myGroup\">\r\n    <div class=\"column left align-items-center\">\r\n    <input class=\"align-items-center\" (click)=\"enableDice()\" type=\"radio\" name=\"buttonGroup\" formControlName=\"buttonGroup\" value=\"one\" id=\"one\">\r\n    <label *ngIf=\"this.votes.Hawaii\" for=\"one\">\r\n      <img class=\"state-icon\" src=\"../../../assets/images/states/HI-Hawaii.png\">\r\n      <img class=\"state-icon\" src=\"../../../assets/images/states/CA-California.png\">\r\n      <img class=\"state-icon\" src=\"../../../assets/images/states/WA-Washington.png\">\r\n      <img class=\"state-icon\" src=\"../../../assets/images/states/OR-Oregon.png\">\r\n      <br>\r\n      HI, CA, WA, OR</label>\r\n      <label *ngIf=\"!this.votes.Hawaii && this.votes.Washington\" for=\"one\">\r\n        <img class=\"state-icon\" src=\"../../../assets/images/states/CA-California.png\">\r\n        <img class=\"state-icon\" src=\"../../../assets/images/states/WA-Washington.png\">\r\n        <img class=\"state-icon\" src=\"../../../assets/images/states/OR-Oregon.png\">\r\n        <br>\r\n        CA, WA, OR</label>\r\n        <label *ngIf=\"!this.votes.Hawaii && !this.votes.Washington\" for=\"one\">\r\n          <img class=\"state-icon\" src=\"../../../assets/images/states/CA-California.png\">\r\n          <img class=\"state-icon\" src=\"../../../assets/images/states/OR-Oregon.png\">\r\n          <img class=\"state-icon\" src=\"../../../assets/images/states/NV-Nevada.png\">\r\n          <br>\r\n          CA, OR, NV</label>\r\n        <!-- JERMY -->\r\n    <input (click)=\"enableDice()\" type=\"radio\" name=\"buttonGroup\" formControlName=\"buttonGroup\" value=\"two\" id=\"two\"><label for=\"two\">\r\n      <img class=\"state-icon\" src=\"../../../assets/images/states/IL-Illinois.png\">\r\n      <img class=\"state-icon\" src=\"../../../assets/images/states/MN-Minnesota.png\">\r\n      <br>\r\n      IL, MN</label>\r\n    <input (click)=\"enableDice()\" type=\"radio\" name=\"buttonGroup\" formControlName=\"buttonGroup\" value=\"three\" id=\"three\">\r\n    <label *ngIf=\"this.votes.NewMexico\" for=\"three\">\r\n      <img class=\"state-icon\" src=\"../../../assets/images/states/NM-New-Mexico.png\">\r\n      <img class=\"state-icon\" src=\"../../../assets/images/states/CO-Colorado.png\">\r\n      <img class=\"state-icon\" src=\"../../../assets/images/states/NV-Nevada.png\">\r\n      <img class=\"state-icon\" src=\"../../../assets/images/states/AZ-Arizona.png\">\r\n      <br>\r\n      NM, CO, NV, AZ</label>\r\n      <label *ngIf=\"!this.votes.NewMexico\" for=\"three\">\r\n        <img class=\"state-icon\" src=\"../../../assets/images/states/NY-New-York.png\">\r\n        <img class=\"state-icon\" src=\"../../../assets/images/states/NJ-New-Jersey.png\">\r\n        <img class=\"state-icon\" src=\"../../../assets/images/states/CT-Connecticut.png\">\r\n        <br>\r\n        NY, NJ, CT</label>\r\n    <input (click)=\"enableDice()\" type=\"radio\" name=\"buttonGroup\" formControlName=\"buttonGroup\" value=\"four\" id=\"four\"><label for=\"four\">\r\n      <img class=\"state-icon\" src=\"../../../assets/images/states/ME-Maine.png\">\r\n      <img class=\"state-icon\" src=\"../../../assets/images/states/NH-New-Hampshire.png\">\r\n      <img class=\"state-icon\" src=\"../../../assets/images/states/VA-Virginia.png\">\r\n      <img class=\"state-icon\" src=\"../../../assets/images/states/PA-Pennsylvania.png\">\r\n      <br>\r\n      ME, NH, VA, PA</label>\r\n  </div>\r\n  <div class=\"column right\">\r\n    <input (click)=\"enableDice()\" type=\"radio\" name=\"buttonGroup\" formControlName=\"buttonGroup\" value=\"five\" id=\"five\"><label for=\"five\">\r\n      <img class=\"state-icon\" src=\"../../../assets/images/states/WI-Wisconsin.png\">\r\n      <img class=\"state-icon\" src=\"../../../assets/images/states/IA-Iowa.png\">\r\n      <img class=\"state-icon\" src=\"../../../assets/images/states/MI-Michigan.png\">\r\n      <img class=\"state-icon\" src=\"../../../assets/images/states/OH-Ohio.png\">\r\n      <br>\r\n      WI, IA, MI, OH</label>\r\n    <input (click)=\"enableDice()\" type=\"radio\" name=\"buttonGroup\" formControlName=\"buttonGroup\" value=\"six\" id=\"six\"><label for=\"six\">\r\n      <img class=\"state-icon\" src=\"../../../assets/images/states/FL-Florida.png\">\r\n      <img class=\"state-icon\" src=\"../../../assets/images/states/NC-North-Carolina.png\">\r\n      <img class=\"state-icon\" src=\"../../../assets/images/states/GA-Georgia.png\">\r\n      <br>\r\n      FL, NC, GA</label>\r\n    <input (click)=\"enableDice()\" type=\"radio\" name=\"buttonGroup\" formControlName=\"buttonGroup\" value=\"seven\" id=\"seven\">\r\n    <label *ngIf=\"this.votes.Alaska\" for=\"seven\">\r\n      <img class=\"state-icon\" src=\"../../../assets/images/states/TX-Texas.png\">\r\n      <img class=\"state-icon\" src=\"../../../assets/images/states/AK-Alaska.png\">\r\n      <br>\r\n      TX, AK</label>\r\n      <label *ngIf=\"!this.votes.Alaska\" for=\"seven\">\r\n        <img class=\"state-icon\" src=\"../../../assets/images/states/TX-Texas.png\">\r\n        <br>\r\n        TX</label>\r\n    <input (click)=\"enableDice()\" type=\"radio\" name=\"buttonGroup\" formControlName=\"buttonGroup\" value=\"eight\" id=\"eight\"><label for=\"eight\">\r\n      <img class=\"state-icon\" src=\"../../../assets/images/states/SC-South-Carolina.png\">\r\n      <img class=\"state-icon\" src=\"../../../assets/images/states/MO-Missouri.png\">\r\n      <img class=\"state-icon\" src=\"../../../assets/images/states/IN-Indiana.png\">\r\n      <img class=\"state-icon\" src=\"../../../assets/images/states/MS-Mississippi.png\">\r\n      <img class=\"state-icon\" src=\"../../../assets/images/states/LA-Louisiana.png\">\r\n      <br>\r\n      SC, MO, IN, MS, LA</label>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"center\">\r\n  <h5 style=\"margin-top: 4px; max-width: 80%;\">Select what type of ad to run:</h5>\r\n  </div>\r\n<div style=\"border: 2px black solid; box-shadow: 1px 1px 4px 4px #888888; border-radius: 6px; margin-left: 24px; margin-right: 24px; margin-top: 8px; margin-bottom: 6px;\">\r\n  <div class=\"center\">\r\n    <ion-item style=\"margin-top: 2px; margin-bottom: 2px;\">\r\n      <div class=\"d-flex align-items-center\">\r\n        <span class=\"mr-10\"><p *ngIf=\"attackAd\">Positive</p><p *ngIf=\"!attackAd\"><strong style=\"font-size: large;\">Positive</strong></p></span>\r\n        <ion-toggle [(ngModel)]=\"attackAd\" slot=\"end\" color=\"light\"></ion-toggle>\r\n        <span class=\"mr-10\"><p *ngIf=\"!attackAd\">Attack</p><p *ngIf=\"attackAd\"><strong style=\"font-size: large;\">Attack</strong></p></span>\r\n      </div>\r\n    </ion-item>\r\n    </div>\r\n  </div>\r\n\r\n<div *ngIf=\"attackAd\" class=\"center\"><p style=\"color: red; margin-top: 0px; margin-bottom: 0px;\">Running attack ads may backfire</p></div>\r\n<app-dice *ngIf=\"attackAd\" [slot0]='[1]' val0=\"-1%\" [slot1]=\"[2,3]\" val1=\"No Effect\" [slot2]='[4,5]' val2=\"+2%\" [slot3]='[6]' val3=\"+3%\" [canClick]=\"diceEnabled\"  (rollStarted)=\"rollStarted()\"  (diceRolled)=\"handleAttackRoll($event)\"></app-dice>\r\n<app-dice *ngIf=\"!attackAd\" [slot0]='[1]' val0=\"No Effect\" [slot1]=\"[2, 3, 4, 5]\" val1=\"+1%\" [slot2]='[6]' val2=\"+2%\" [canClick]=\"diceEnabled\"  (rollStarted)=\"rollStarted()\"  (diceRolled)=\"handleRoll($event)\"></app-dice>\r\n<div class=\"center\">\r\n  <h5 style=\"margin-top: 2px; max-width: 90%;\">Tap 'Roll' to see how your ads do!</h5>\r\n  </div>\r\n\r\n\r\n\r\n</ion-content>\r\n";

/***/ }),

/***/ 1027:
/*!******************************************************************!*\
  !*** ./src/app/tab1/campaign/campaign.component.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"false\">\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      Visit a State\r\n      <img class='header-icon' *ngIf=\"!isDemocrat\" src=\"../../../assets/images/republicanIcon.png\">\r\n      <img class='header-icon' *ngIf=\"isDemocrat\" src=\"../../../assets/images/democratIcon.png\">\r\n    </ion-title>\r\n    <ion-button fill=\"clear\" id=\"click-triggerCa\"><ion-icon name=\"help-circle-outline\"></ion-icon></ion-button>\r\n    <ion-popover trigger=\"click-triggerCa\" triggerAction=\"click\">\r\n      <ng-template>\r\n        <ion-content class=\"ion-padding\">\r\n          <h3>State Visits!</h3>\r\n          <p>One of the best ways to get people to vote for you is meeting them in person!</p>\r\n          <p>Pick a state, and visit to show people who you are.</p>\r\n          <p>Then roll to see how effective your visit was.</p>\r\n          <p>You can visit any state but be mindful that your efforts will be less successful in states that are less receptive to your party's positions.</p><p> For example, it willl be harder for a Republican campaigning in CA to win over voters than if they visit a swing state like Florida or a red state like Indiana.</p>\r\n          <p>The states marked with a * and the ones where it is harder to influence.</p>\r\n        </ion-content>\r\n      </ng-template>\r\n    </ion-popover>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <div style=\"margin-left: 2px; margin-top: 2px;\">\r\n    <ion-button class=\"backbutton\" size=\"small\" [disabled]=\"!canBack\" (click)=\"back()\"><ion-icon name=\"arrow-back-circle-outline\"></ion-icon><em>Back</em></ion-button>\r\n  </div>\r\n  <div class=\"center\">\r\n  <h1 style=\"margin-top: 14px; max-width: 65%;\">State Visit</h1>\r\n  </div>\r\n  <div class=\"center\">\r\n    <p>Choose 1 state to visit. You will hold an in-person rally to raise support</p>\r\n  </div>\r\n  <ion-list [inset]=\"true\" style=\"width: 80%; margin-left:10%; border: 1px black solid;\">\r\n    <ion-item>\r\n      <ion-select (ionChange)=\"inputChange()\" [(ngModel)]=\"chosenState\" placeholder=\"Select a state...\">\r\n        <ion-select-option *ngFor=\"let state of states\" [value]=\"state\">{{state.protected}}{{state.name}} ({{state | scoreDisplay}}) ({{state.college}} votes)</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <div *ngIf=\"!chosenState\"  class=\"center\">\r\n    <div style=\"box-shadow: 1px 1px 4px 4px #888888; height: 160px; border-radius: 8px; border: 2px black solid; width: 80%; left: 10%;\">\r\n      <img style=\"height: 156px;\" src=\"../../../assets/images/USmystery.png\">\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"chosenState\"  class=\"center\">\r\n    <div style=\"box-shadow: 1px 1px 4px 4px #888888; height: 160px; border-radius: 8px; border: 2px black solid; width: 80%; left: 10%;\">\r\n      <img style=\"height: 100px;\" src=\"../../../assets/images/states/{{chosenState.abbreviation}}-{{chosenState.name.replace(' ', '-')}}.png\">\r\n      <p style=\"font-size: 18px;\">Leans: {{chosenState | scoreDisplay}}</p>\r\n      <p style=\"font-size: 18px;\">Electoral Votes: {{chosenState.college}}</p>\r\n      <h2 style=\"color: black; margin-top: 0px; position: relative; bottom: 120px;\">{{chosenState.name}}</h2>\r\n    </div>\r\n  </div>\r\n\r\n  <br>\r\n\r\n  <app-dice *ngIf=\"effective\" [slot0]='[1]' val0=\"+0%\" [slot1]=\"[2, 3]\" val1=\"+1%\" [slot2]='[4, 5]' val2=\"+2%\" [slot3]=\"[6]\" val3=\"+3%\" [canClick]=\"!!chosenState\" (rollStarted)=\"rollStarted()\" (diceRolled)=\"handleRoll($event)\"></app-dice>\r\n  <div *ngIf=\"!effective\" class=\"center\"><p style=\"color: red;\">Visiting this state will be less effective</p></div>\r\n  <app-dice *ngIf=\"!effective\" [slot0]='[1]' val0=\"-1%\" [slot1]=\"[2, 3]\" val1=\"+0%\" [slot2]='[4, 5]' val2=\"+1%\" [slot3]=\"[6]\" val3=\"+2%\" [canClick]=\"!!chosenState\" (rollStarted)=\"rollStarted()\" (diceRolled)=\"handleRoll($event)\"></app-dice>\r\n\r\n</ion-content>\r\n";

/***/ }),

/***/ 835:
/*!************************************************************!*\
  !*** ./src/app/tab1/event/event.component.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"false\">\r\n  <ion-toolbar>\r\n    <ion-title class=\"ion-text-center\">\r\n      Special Event Card\r\n      <img class='header-icon' *ngIf=\"!isDemocrat\" src=\"../../../assets/images/republicanIcon.png\">\r\n      <img class='header-icon' *ngIf=\"isDemocrat\" src=\"../../../assets/images/democratIcon.png\">\r\n    </ion-title>\r\n    <ion-button fill=\"clear\" id=\"click-triggerEvent\"><ion-icon name=\"help-circle-outline\"></ion-icon></ion-button>\r\n    <ion-popover trigger=\"click-triggerEvent\" triggerAction=\"click\">\r\n      <ng-template>\r\n        <ion-content class=\"ion-padding\">\r\n          <h3>Special Event</h3>\r\n          <p>There are tons of events that have effected previous elections. The events could help you, or hurt you. It is always a good idea to check the MAP tab after a special event to see how the race has changed.</p>\r\n        </ion-content>\r\n      </ng-template>\r\n    </ion-popover>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content [fullscreen]=\"true\">\r\n\r\n<br>\r\n<div class=\"card\">\r\n  <div style=\"margin-top: 0px; margin-bottom: 0px;\" class=\"center\">\r\n  <h1 style=\"margin-top: 2px; margin-bottom: 0px;\">{{eventTitle}}</h1>\r\n  </div>\r\n  <hr style=\"color: white; border-width: 1px;\">\r\n  <div class=\"center\">\r\n  <!-- <p>Before rounds 4,7,10 there will be a debate!  It has rolling rules that effect national climate<br></p> -->\r\n  <!-- <p>Debates, Gaffes, scandals, media tour, endorsements, SuperPacs will appear here</p> -->\r\n  </div>\r\n  <div class=\"center\">\r\n  <h2 style=\"margin-top: 1px;\">{{eventDescription}}</h2>\r\n  </div>\r\n  <div *ngIf=\"!currentEvent?.choiceEvent && !currentEvent?.diceEvent\">\r\n      <div class=\"center\" *ngIf=\"statesInvolved.length === 0\">\r\n      <p *ngIf=\"eventPoints < 0\">This moves the National Climate {{-eventPoints}} points toward your opponent</p>\r\n      <p *ngIf=\"eventPoints === 0\">The National Climate is unaffected</p>\r\n      <p *ngIf=\"eventPoints > 0\">This moves the National Climate {{eventPoints}} points in your favor</p>\r\n      <!-- Or to the right... calculate that on the ts side of this. -->\r\n      </div>\r\n      <div class=\"center\" *ngIf=\"statesInvolved.length !== 0\">\r\n        <p *ngIf=\"eventPoints < 0\">This moves the Climate {{-eventPoints}} points toward your opponent in {{statesInvolvedString}}</p>\r\n        <p *ngIf=\"eventPoints === 0\">This state is now polling EVEN for Republican and Democrat</p>\r\n        <p *ngIf=\"eventPoints > 0\">This moves the Climate {{eventPoints}} points in your favor in {{statesInvolvedString}}</p>\r\n        <!-- Or to the right... calculate that on the ts side of this. -->\r\n        </div>\r\n\r\n\r\n  </div>\r\n\r\n  <div *ngIf=\"currentEvent?.diceEvent\">\r\n    <div class=\"center\">\r\n      <p>Roll to see if this hurts you, or helps you</p>\r\n    </div>\r\n   </div>\r\n\r\n  <div *ngIf=\"currentEvent?.choiceEvent\">\r\n    <div class=\"center\">\r\n      <p>{{currentEvent?.history}}</p>\r\n    </div>\r\n   </div>\r\n</div>\r\n<div class=\"dice\" *ngIf=\"currentEvent?.diceEvent\">\r\n   <app-dice [slot0]='[1, 2]' val0=\"-1%\" [slot1]=\"[3, 4, 5, 6]\" val1=\"+1%\" (diceRolled)=\"handleDiceRoll($event)\"></app-dice>\r\n</div>\r\n\r\n<div *ngIf=\"currentEvent?.choiceEvent\">\r\n  <br>\r\n  <div class=\"center\">\r\n    Your choice will affect 3-5 states.\r\n  </div>\r\n  <div class=\"center\">\r\n    You can help your standing... or hurt it.\r\n  </div>\r\n  <br>\r\n  <div class=\"center\">\r\n\r\n  <ion-button class=\"button43 ion-text-wrap\" style=\"max-width: 90%;\" (click)=\"handleRollToast(currentEvent?.choicePoints1, currentEvent?.statesInvolved)\">{{currentEvent?.choiceText1}}</ion-button>\r\n  </div>\r\n  <div class=\"center\">\r\n\r\n  <ion-button class=\"button43 ion-text-wrap\" style=\"max-width: 90%;\" (click)=\"handleRollToast(currentEvent?.choicePoints2, currentEvent?.statesInvolved2)\">{{currentEvent?.choiceText2}}</ion-button>\r\n    </div>\r\n</div>\r\n<div *ngIf=\"!currentEvent?.choiceEvent && !currentEvent?.diceEvent\">\r\n\r\n<div  class=\"center\">\r\n  <ion-button class=\"button43\" (click)=\"handleRoll(eventPoints, statesInvolved, null)\">Next</ion-button>\r\n  <!-- <p>{{eventRollsL}}</p>\r\n  <p>{{eventRollsR}}</p> -->\r\n  </div>\r\n</div>\r\n\r\n\r\n<div id=\"navcontainer\" *ngIf=\"!!eventPersonInvolved\">\r\n  <ul id=\"navlist\" >\r\n\r\n    <li id=\"active\">Fun Fact</li>\r\n      <div class=\"funfact\">\r\n        <!-- Put this last part in a toast looking box TODO -->\r\n        <p style=\"margin-bottom: 0;\" *ngIf=\"normalFactDisplay\">This event happened to {{eventPersonInvolved}} during the election of {{eventYear}}</p>\r\n        <img [src]=\"eventIcon\" style=\"border-radius: 50%; border: 2px solid black; width:50px; height:50px; padding-top: 0; margin-bottom: 0;\">\r\n        <p style=\"margin-top: 0;\">{{eventHistory}}</p>\r\n      </div>\r\n    </ul>\r\n</div>\r\n\r\n\r\n</ion-content>\r\n";

/***/ }),

/***/ 5596:
/*!**********************************************************!*\
  !*** ./src/app/tab1/event/event.welcome.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"false\">\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      Special Event\r\n    </ion-title>\r\n    <ion-button fill=\"clear\" id=\"click-triggerEW\"><ion-icon name=\"help-circle-outline\"></ion-icon></ion-button>\r\n    <ion-popover trigger=\"click-triggerEW\" triggerAction=\"click\">\r\n      <ng-template>\r\n        <ion-content class=\"ion-padding\">\r\n          <h3>Special Event</h3>\r\n          <p>Every 2 rounds you will draw a special event card. These could help you, or hurt you. Good luck!</p>\r\n        </ion-content>\r\n      </ng-template>\r\n    </ion-popover>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-grid class=\"ion-no-padding bg-image\">\r\n  <div class=\"background\">\r\n    <div class=\"container\">\r\n      <div class=\"center\">\r\n        <h1>It is time for a SPECIAL EVENT!</h1>\r\n      </div>\r\n      <div class=\"center\">\r\n\r\n        <p id=\"info2\">Every 2 rounds you will draw a special event card</p>\r\n      </div>\r\n      <div class=\"center\">\r\n        <p id=\"info1\">National News, Media Coverage, Scandals, Fortunes, and Issues await!</p>\r\n      </div>\r\n      <img src=\"../../../assets/images/deck/{{imgSrc}}.png\">\r\n      <div id=\"ready\" class=\"center\">\r\n      <p>Good luck!</p>\r\n      </div>\r\n      <div id=\"ready\" class=\"center\">\r\n        <ion-button class=\"button43\" (click)=\"continue()\">Draw A Card</ion-button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  </ion-grid>\r\n</ion-content>\r\n";

/***/ }),

/***/ 1304:
/*!********************************************************************!*\
  !*** ./src/app/tab1/fundraise/fundraise.component.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"false\">\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      FUNDRAISE\r\n      <img class='header-icon' *ngIf=\"!isDemocrat\" src=\"../../../assets/images/republicanIcon.png\">\r\n      <img class='header-icon' *ngIf=\"isDemocrat\" src=\"../../../assets/images/democratIcon.png\">\r\n    </ion-title>\r\n    <ion-button fill=\"clear\" id=\"click-triggerFa\"><ion-icon name=\"help-circle-outline\"></ion-icon></ion-button>\r\n    <ion-popover trigger=\"click-triggerFa\" triggerAction=\"click\">\r\n      <ng-template>\r\n        <ion-content class=\"ion-padding\">\r\n          <h3>Fundraising!</h3>\r\n          <p>You cant win without money!</p>\r\n          <p>Use the money you gain here to pay for ads on a later turn.</p>\r\n          <p>Since Ads are so powerful, Fundraising is an important way to progress your candidacy</p>\r\n          <p>Roll the dice to fundraise!</p>\r\n        </ion-content>\r\n      </ng-template>\r\n    </ion-popover>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <div style=\"margin-left: 2px; margin-top: 2px;\">\r\n    <ion-button class=\"backbutton\" size=\"small\" [disabled]=\"!canBack\" (click)=\"back()\"><ion-icon name=\"arrow-back-circle-outline\"></ion-icon><em>Back</em></ion-button>\r\n  </div>\r\n  <div class=\"center\">\r\n    <h1 style=\"margin-top: 14px; max-width: 65%;\">Fundraise</h1>\r\n  </div>\r\n  <div style=\"margin-top: 0px;\" class=\"center\">\r\n    <p style=\"margin-top: 0px;\" >Roll the dice to raise $10-30 million for advertising!</p>\r\n  </div>\r\n<app-dice [slot0]='[1,2,3]' val0=\"$10 Million\" [slot1]=\"[4,5]\" val1=\"$20 Million\" [slot2]=\"[6]\" val2=\"$30 Million\" (rollStarted)=\"rollStarted()\"  (diceRolled)=\"handleRoll($event)\"></app-dice>\r\n\r\n<div id=\"navcontainer\">\r\n  <ul id=\"navlist\" >\r\n\r\n    <li id=\"active\">Fun Fact</li>\r\n      <div class=\"funfact\">\r\n        <!-- Put this last part in a toast looking box TODO -->\r\n        <p style=\"margin-top: 2px; margin-bottom: 1px;\">Fundraising is a big part of every campaign.</p>\r\n        <img style=\"margin-top: 0;\" class=\"photo\" [src]=\"presidentIcon\">\r\n        <p style=\"margin-top: 0; margin-bottom: 2px;\">{{eventHistory}}</p>\r\n      </div>\r\n    </ul>\r\n</div>\r\n\r\n\r\n</ion-content>\r\n";

/***/ }),

/***/ 3409:
/*!******************************************************************!*\
  !*** ./src/app/tab1/opponent/opponent.component.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"false\">\r\n  <ion-toolbar>\r\n    <ion-title class=\"ion-text-center\">\r\n      Your Opponent's Turn\r\n    </ion-title>\r\n    <ion-button fill=\"clear\" id=\"click-triggerOp\"><ion-icon name=\"help-circle-outline\"></ion-icon></ion-button>\r\n    <ion-popover trigger=\"click-triggerOp\" triggerAction=\"click\">\r\n      <ng-template>\r\n        <ion-content class=\"ion-padding\">\r\n          <h3>Your Opponents</h3>\r\n          <p>You are working hard to win, but so is your opponent.</p>\r\n          <p>Every time that you make a move, your opponent will as well.</p>\r\n          <p>Pay attention to the moves your opponent makes, since you might need to fight back.</p>\r\n        </ion-content>\r\n      </ng-template>\r\n    </ion-popover>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <div class=\"center\">\r\n    <h1>THIS IS WHAT YOUR OPPONENT DID:</h1>\r\n  </div>\r\n  <div class=\"center\">\r\n    <h2>{{actionText}}</h2>\r\n  </div>\r\n  <div class=\"center\" *ngFor=\"let state of actionIcons\">\r\n    <img style=\"max-height: 28px;\" [src]='state.path'>\r\n    <h3 *ngIf=\"state.isTowardBlue\" style=\"color:blue\">+ {{state.change}}</h3>\r\n    <h3 *ngIf=\"!state.isTowardBlue\" style=\"color:red\">+ {{state.change}}</h3>\r\n\r\n    <!-- change isTowardBlue -->\r\n  </div>\r\n  <br><br>\r\n  <div class=\"center\">\r\n    <ion-button class=\"button43\" (click)=\"nextEvent()\">Continue</ion-button>\r\n  </div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 9186:
/*!****************************************************************!*\
  !*** ./src/app/tab1/results/results.component.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "";

/***/ }),

/***/ 3852:
/*!************************************************!*\
  !*** ./src/app/tab1/tab1.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"false\">\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      Campaign Headquarters\r\n      <img class='header-icon' *ngIf=\"!isDemocrat && !isThird\" src=\"../../assets/images/republicanIcon.png\">\r\n      <img class='header-icon' *ngIf=\"isDemocrat && !isThird\" src=\"../../assets/images/democratIcon.png\">\r\n    </ion-title>\r\n    <ion-button fill=\"clear\" id=\"click-trigger1\"><ion-icon name=\"help-circle-outline\"></ion-icon></ion-button>\r\n    <ion-popover trigger=\"click-trigger1\" triggerAction=\"click\">\r\n      <ng-template>\r\n        <ion-content class=\"ion-padding\">\r\n          <h3>It is your turn!</h3>\r\n          <p>You have three choices on your turn:</p>\r\n          <p>Fundraise! You can raise money for ads. This is an important part of winning the presidential race.</p>\r\n          <p>Run Ads! Use your fundraised money to affect multiple states.</p>\r\n          <p>State Visit! Visit a state and boost your popularity in that state.</p>\r\n          <p>If you are unsure what to do, go to the MAP tab and pick a state you want to affect</p>\r\n        </ion-content>\r\n      </ng-template>\r\n    </ion-popover>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\" >\r\n  <div class=\"center\">\r\n    <p><strong>Round {{votes.round}} out of {{votes.gameLength}}</strong></p>\r\n  </div>\r\n  <div class=\"center\">\r\n    <p>{{currentTurn}}</p>\r\n  </div>\r\n  <!-- <ion-button class=\"button43\" class=\"option\" (click)=\"fundraise()\"><img src=\"../../assets/images/funds.png\"> Fundraise!</ion-button>\r\n  <ion-button class=\"button43\" class=\"option\" (click)=\"campaign()\"><img src=\"../../assets/images/campaign.png\"> Campaign!</ion-button>\r\n  <ion-button class=\"button43\" class=\"option\" (click)=\"advertising()\"><img src=\"../../assets/images/ads.png\"> Advertise!</ion-button> -->\r\n  <ion-button class=\"option button43\" (click)=\"fundraise()\"><em>FUNDRAISE</em></ion-button>\r\n  <ion-button class=\"option button43\" (click)=\"advertising()\" [disabled]=\"!votes.funds\">\r\n    <div>\r\n      <p style=\"margin-bottom: 1px;\"><em>ADVERTISE</em></p>\r\n      <p style=\"font-size: small; margin-top: 0px;\">COSTS $10 MILLION</p>\r\n      <p style=\"font-size: small; margin-top: 0px;\">({{votes.funds}} AVAILABLE)</p>\r\n    </div>\r\n  </ion-button>\r\n  <ion-button class=\"option button43\" (click)=\"campaign()\"><em>VISIT A STATE</em></ion-button>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tab1_tab1_module_ts.js.map