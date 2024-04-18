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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _intro_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./intro-page.component.html?ngResource */ 3469);
/* harmony import */ var _intro_page_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./intro-page.component.css?ngResource */ 4007);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_audio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/audio.service */ 6425);
/* harmony import */ var _stores_votes_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../stores/votes.store */ 2049);







let IntroPage = class IntroPage {
    constructor(route, audio, votes) {
        this.route = route;
        this.audio = audio;
        this.votes = votes;
        this.passwordRequired = false;
        this.passcode = '';
    }
    ngAfterViewInit() {
        this.audio.preload('chief', 'assets/audio/chief.mp3');
    }
    toTutorial() {
        this.route.navigateByUrl('/welcome'); //TODO was selcome but I changed it
    }
    toTabs() {
        this.route.navigateByUrl('/options'); //TODO was selcome but I changed it
        this.votes.round = 1;
    }
    toTabsTestEnd() {
        this.route.navigateByUrl('/options');
        this.votes.round = 15;
    }
    toAchievements() {
        this.route.navigateByUrl('/records');
    }
};
IntroPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _services_audio_service__WEBPACK_IMPORTED_MODULE_2__.AudioService },
    { type: _stores_votes_store__WEBPACK_IMPORTED_MODULE_3__.VotesStore }
];
IntroPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _intro_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./intro-page.component */ 7709);
/* harmony import */ var _welcome_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome.component */ 6193);
/* harmony import */ var _records_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./records.component */ 3710);
/* harmony import */ var _records2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./records2.component */ 8492);







const routes = [
    {
        path: '',
        component: _intro_page_component__WEBPACK_IMPORTED_MODULE_0__.IntroPage,
    },
    {
        path: 'welcome',
        component: _welcome_component__WEBPACK_IMPORTED_MODULE_1__.WelcomePage
    },
    {
        path: 'records',
        component: _records_component__WEBPACK_IMPORTED_MODULE_2__.RecordsPage
    },
    {
        path: 'records2',
        component: _records2_component__WEBPACK_IMPORTED_MODULE_3__.Records2Page
    },
];
let IntroRoutingModule = class IntroRoutingModule {
};
IntroRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _intro_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./intro-page.component */ 7709);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _intro_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./intro-routing.module */ 1193);
/* harmony import */ var _welcome_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./welcome.component */ 6193);
/* harmony import */ var _records_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./records.component */ 3710);
/* harmony import */ var _records2_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./records2.component */ 8492);











let IntroModule = class IntroModule {
};
IntroModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _intro_routing_module__WEBPACK_IMPORTED_MODULE_2__.IntroRoutingModule
        ],
        declarations: [_intro_page_component__WEBPACK_IMPORTED_MODULE_0__.IntroPage, _welcome_component__WEBPACK_IMPORTED_MODULE_3__.WelcomePage, _records_component__WEBPACK_IMPORTED_MODULE_4__.RecordsPage, _records2_component__WEBPACK_IMPORTED_MODULE_5__.Records2Page]
    })
], IntroModule);



/***/ }),

/***/ 3710:
/*!*************************************************!*\
  !*** ./src/app/intro-page/records.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecordsPage": () => (/* binding */ RecordsPage)
/* harmony export */ });
/* harmony import */ var C_Users_Jeremy_SideProjects_campaign_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _records_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./records.component.html?ngResource */ 6835);
/* harmony import */ var _records_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./records.component.css?ngResource */ 3211);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _stores_votes_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../stores/votes.store */ 2049);







let RecordsPage = class RecordsPage {
  constructor(route, votes) {
    this.route = route;
    this.votes = votes;
    this.unlockedRecords = [];
    this.lockedRecords = [];
  }
  ngOnInit() {
    var _this = this;
    return (0,C_Users_Jeremy_SideProjects_campaign_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.plays = yield _this.votes.getLocalStorage('plays');
      _this.wins = yield _this.votes.getLocalStorage('wins');
      _this.demWins = yield _this.votes.getLocalStorage('demWins');
      _this.repWins = yield _this.votes.getLocalStorage('repWins');
      _this.highVotes = yield _this.votes.getLocalStorage('highVotes');
      //this.setRecords();
    })();
  }

  ionViewWillEnter() {
    var _this2 = this;
    return (0,C_Users_Jeremy_SideProjects_campaign_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.plays = yield _this2.votes.getLocalStorage('plays');
      _this2.wins = yield _this2.votes.getLocalStorage('wins');
      _this2.demWins = yield _this2.votes.getLocalStorage('demWins');
      _this2.repWins = yield _this2.votes.getLocalStorage('repWins');
      _this2.highVotes = yield _this2.votes.getLocalStorage('highVotes');
      _this2.setRecords();
    })();
  }
  setRecords() {
    var _this3 = this;
    return (0,C_Users_Jeremy_SideProjects_campaign_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.unlockedRecords = [];
      _this3.lockedRecords = [];
      const records = [{
        title: 'President!',
        description: 'Win an election',
        id: 'record1'
      }, {
        title: 'Not the President...',
        description: 'Lose an election',
        id: 'record2'
      }, {
        title: 'Party Switch',
        description: 'Win an election with both parties',
        id: 'record3'
      }, {
        title: 'Political Dynasty',
        description: 'Win 10 elections',
        id: 'record8'
      }, {
        title: 'Time to Retire?',
        description: 'Lose 10 elections',
        id: 'record15'
      }, {
        title: 'Close one!',
        description: 'Win an election with exactly 270 votes',
        id: 'record11'
      }, {
        title: 'Big Win!',
        description: 'Win with more than 400 electoral college votes',
        id: 'record13'
      }, {
        title: 'Historian',
        description: 'Play 60 games (the 2024 election will be the 60th in US history!)',
        id: 'record12'
      }, {
        title: 'Learn the Game',
        description: 'Read a Campaign Resource in the HELP tab',
        id: 'record14'
      }, {
        title: 'White House Drop Out',
        description: 'Drop out of an election early in the HELP tab',
        id: 'record16'
      }, {
        title: 'Ivory Tower',
        description: 'Win without visiting a single state',
        id: 'record4'
      }, {
        title: 'State Resident',
        description: 'Visit the same state 5 times in a single Classic Mode game',
        id: 'record9'
      }, {
        title: 'Not Fit For Office',
        description: 'Draw 2 scandal events in 1 game',
        id: 'record5'
      }, {
        title: 'Bellweather State?',
        description: 'Win without Ohio',
        id: 'record7'
      }, {
        title: 'Don\'t mess with Texas',
        description: 'Win Texas as a Democrat',
        id: 'record10'
      }, {
        title: 'Is this possible?',
        description: 'Win California as a Republican',
        id: 'record17'
      }];
      //search "checkRecordCompletion" to see where each of these is set
      for (const record of records) {
        const unlocked = yield _this3.votes.getLocalStorage(record.id);
        if (unlocked) {
          _this3.unlockedRecords.push(record);
        } else {
          _this3.lockedRecords.push(record);
        }
      }
    })();
  }
  continue() {
    this.route.navigateByUrl('/');
  }
};
RecordsPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
}, {
  type: _stores_votes_store__WEBPACK_IMPORTED_MODULE_3__.VotesStore
}];
RecordsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-records-page',
  template: _records_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_records_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], RecordsPage);


/***/ }),

/***/ 8492:
/*!**************************************************!*\
  !*** ./src/app/intro-page/records2.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Records2Page": () => (/* binding */ Records2Page)
/* harmony export */ });
/* harmony import */ var C_Users_Jeremy_SideProjects_campaign_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _records2_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./records2.component.html?ngResource */ 6450);
/* harmony import */ var _records_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./records.component.css?ngResource */ 3211);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _stores_votes_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../stores/votes.store */ 2049);







let Records2Page = class Records2Page {
  constructor(route, votes) {
    this.route = route;
    this.votes = votes;
    this.unlockedRecords = [];
    this.lockedRecords = [];
  }
  ngOnInit() {
    var _this = this;
    return (0,C_Users_Jeremy_SideProjects_campaign_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.plays = yield _this.votes.getLocalStorage('plays');
      _this.wins = yield _this.votes.getLocalStorage('wins');
      _this.demWins = yield _this.votes.getLocalStorage('demWins');
      _this.repWins = yield _this.votes.getLocalStorage('repWins');
      _this.highVotes = yield _this.votes.getLocalStorage('highVotes');
      //this.setRecords();
    })();
  }

  ionViewWillEnter() {
    var _this2 = this;
    return (0,C_Users_Jeremy_SideProjects_campaign_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.plays = yield _this2.votes.getLocalStorage('plays');
      _this2.wins = yield _this2.votes.getLocalStorage('wins');
      _this2.demWins = yield _this2.votes.getLocalStorage('demWins');
      _this2.repWins = yield _this2.votes.getLocalStorage('repWins');
      _this2.highVotes = yield _this2.votes.getLocalStorage('highVotes');
      _this2.setRecords();
    })();
  }
  setRecords() {
    var _this3 = this;
    return (0,C_Users_Jeremy_SideProjects_campaign_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.unlockedRecords = [];
      _this3.lockedRecords = [];
      const records = [{
        title: 'President!',
        description: 'Win an Election',
        id: 'record1'
      }, {
        title: 'Not the President...',
        description: 'Lose an Election',
        id: 'record2'
      }, {
        title: 'Party Switch',
        description: 'Win an Election with Both Parties',
        id: 'record3'
      }, {
        title: 'Political Dynasty',
        description: 'Win 10 elections',
        id: 'record8'
      }, {
        title: 'Time to Retire?',
        description: 'Lose 10 elections',
        id: 'record15'
      }, {
        title: 'Close one!',
        description: 'Win an election with exactly 270 votes',
        id: 'record11'
      }, {
        title: 'Big Win!',
        description: 'Win with more than 400 electoral college votes',
        id: 'record13'
      }, {
        title: 'Historian',
        description: 'Play 60 games (the 2024 election will be the 60th in US history!)',
        id: 'record12'
      }, {
        title: 'Learn the Game',
        description: 'Read a Campaign Resource in the HELP tab',
        id: 'record14'
      }, {
        title: 'White House Drop Out',
        description: 'Drop out of an election early in the HELP tab',
        id: 'record16'
      }, {
        title: 'Ivory Tower',
        description: 'Win without visiting a single state',
        id: 'record4'
      }, {
        title: 'State Resident',
        description: 'Visit the same state 5 times in a single Classic Mode game',
        id: 'record9'
      }, {
        title: 'Not Fit For Office',
        description: 'Draw 2 scandal events in 1 game',
        id: 'record5'
      }, {
        title: 'Bellweather?',
        description: 'Win without Ohio',
        id: 'record7'
      }, {
        title: 'Don\'t mess with Texas',
        description: 'Win Texas as a Democrat',
        id: 'record10'
      }, {
        title: 'Is this possible?',
        description: 'Win California as a Republican',
        id: 'record17'
      }];
      //search "checkRecordCompletion" to see where each of these is set
      for (const record of records) {
        const unlocked = yield _this3.votes.getLocalStorage(record.id);
        if (unlocked) {
          _this3.unlockedRecords.push(record);
        } else {
          _this3.lockedRecords.push(record);
        }
      }
    })();
  }
  continue() {
    this.route.navigateByUrl('/results/final-map');
  }
};
Records2Page.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
}, {
  type: _stores_votes_store__WEBPACK_IMPORTED_MODULE_3__.VotesStore
}];
Records2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-records-page',
  template: _records2_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_records_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], Records2Page);


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
        this.route.navigateByUrl('/');
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

module.exports = ".game-title {\r\n  padding-top: 40%;\r\n  text-align: center;\r\n  font-size: 38px;\r\n}\r\n\r\n.container {\r\n  height: 200px;\r\n  position: relative;\r\n}\r\n\r\n.titleText {\r\n  font-size: 40px;\r\n  color: white;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.skinny {\r\n  margin-left: 20%;\r\n  width: 60%;\r\n  margin-top: 6px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.centerwhite {\r\n  color: white;\r\n  font-size: xx-large;\r\n  font-size: large;\r\n  text-align: center;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  left: 50%\r\n}\r\n\r\nion-button {\r\n  --background: none;\r\n  background-size: 100% auto;\r\n  background-image: linear-gradient(to right, #ff5e5e 0%, #ffffff 51%, #7649ff 100%);\r\n}\r\n\r\n.highcenter {\r\n  position: absolute;\r\n\r\n  color: white;\r\n  top: 20%;\r\n  left: 50%;\r\n  width: 90%;\r\n  text-align: center;\r\n  transform: translate(-50%, -50%);\r\n  background: #5050ff;\r\n  border-radius: 20px;\r\n  box-shadow: 0px 0px 4px 4px rgb(120, 120, 255);\r\n  opacity: .9;\r\n  /* box-shadow: inset 0px 0px 8px 8px #5050ff; */\r\n}\r\n\r\n.center {\r\n  width: 95%;\r\n  position: absolute;\r\n  display: grid;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n.img-wrapper{\r\n  position: relative;\r\n  overflow:hidden;\r\n  height:100%;\r\n}\r\n\r\n.img-wrapper img{\r\n  position: absolute;\r\n  top:-100%; left:0; right: 0; bottom:-100%;\r\n  margin: auto;\r\n  width: 100%;\r\n}\r\n\r\n/* .bg-image {\r\n    background: url(\"../../assets/images/background.png\")!important;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    height: 100%;\r\n} */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludHJvLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQjtBQUNGOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQixrRkFBa0Y7QUFDcEY7O0FBR0E7RUFDRSxrQkFBa0I7O0VBRWxCLFlBQVk7RUFDWixRQUFRO0VBQ1IsU0FBUztFQUNULFVBQVU7RUFDVixrQkFBa0I7RUFFbEIsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsOENBQThDO0VBQzlDLFdBQVc7RUFDWCwrQ0FBK0M7QUFDakQ7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixRQUFRO0VBQ1IsU0FBUztFQUVULGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFlBQVk7RUFDekMsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTs7Ozs7R0FLRyIsImZpbGUiOiJpbnRyby1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2FtZS10aXRsZSB7XHJcbiAgcGFkZGluZy10b3A6IDQwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAzOHB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnRpdGxlVGV4dCB7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4uc2tpbm55IHtcclxuICBtYXJnaW4tbGVmdDogMjAlO1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgbWFyZ2luLXRvcDogNnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5jZW50ZXJ3aGl0ZSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGxlZnQ6IDUwJVxyXG59XHJcblxyXG5pb24tYnV0dG9uIHtcclxuICAtLWJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIGF1dG87XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmY1ZTVlIDAlLCAjZmZmZmZmIDUxJSwgIzc2NDlmZiAxMDAlKTtcclxufVxyXG5cclxuXHJcbi5oaWdoY2VudGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0b3A6IDIwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgd2lkdGg6IDkwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIGJhY2tncm91bmQ6ICM1MDUwZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDRweCA0cHggcmdiKDEyMCwgMTIwLCAyNTUpO1xyXG4gIG9wYWNpdHk6IC45O1xyXG4gIC8qIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggOHB4IDhweCAjNTA1MGZmOyAqL1xyXG59XHJcblxyXG4uY2VudGVyIHtcclxuICB3aWR0aDogOTUlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbn1cclxuXHJcbi5pbWctd3JhcHBlcntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gIGhlaWdodDoxMDAlO1xyXG59XHJcblxyXG4uaW1nLXdyYXBwZXIgaW1ne1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6LTEwMCU7IGxlZnQ6MDsgcmlnaHQ6IDA7IGJvdHRvbTotMTAwJTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi8qIC5iZy1pbWFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQucG5nXCIpIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59ICovXHJcbiJdfQ== */";

/***/ }),

/***/ 3211:
/*!*************************************************************!*\
  !*** ./src/app/intro-page/records.component.css?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = ".center {\r\n  margin-left: 3px;\r\n  margin-right: 3px;\r\n  text-align: center;\r\n\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  left: 50%\r\n}\r\n\r\n.fix-center {\r\n  position: fixed;\r\n  bottom: 16px;\r\n  left: 16px;\r\n}\r\n\r\n.title {\r\n  margin-left: 3px;\r\n  margin-right: 3px;\r\n  text-align: center;\r\n\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  left: 50%\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY29yZHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCOztFQUVsQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQjtBQUNGOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjs7RUFFbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkI7QUFDRiIsImZpbGUiOiJyZWNvcmRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyIHtcclxuICBtYXJnaW4tbGVmdDogM3B4O1xyXG4gIG1hcmdpbi1yaWdodDogM3B4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGxlZnQ6IDUwJVxyXG59XHJcblxyXG4uZml4LWNlbnRlciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMTZweDtcclxuICBsZWZ0OiAxNnB4O1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIG1hcmdpbi1sZWZ0OiAzcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbGVmdDogNTAlXHJcbn1cclxuIl19 */";

/***/ }),

/***/ 9644:
/*!*************************************************************!*\
  !*** ./src/app/intro-page/welcome.component.css?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = ".center {\r\n  margin-left: 3px;\r\n  margin-right: 3px;\r\n  font-size: large;\r\n  text-align: center;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  left: 50%;\r\n}\r\n\r\n.fix-center {\r\n  position: fixed;\r\n  bottom: 16px;\r\n  left: 16px;\r\n}\r\n\r\nimg {\r\n  height: 200px;\r\n}\r\n\r\np {\r\n  margin-top: 10px;\r\n}\r\n\r\n#aid {\r\n  animation: flyaid 15s linear;\r\n  top: 100vw;\r\n  left: 0;\r\n}\r\n\r\n#title {\r\n  animation: flytitle 15s linear;\r\n  top: 100vw;\r\n  left: 0;\r\n}\r\n\r\n#info1 {\r\n  animation: flyinfo1 15s linear;\r\n  top: 100vw;\r\n  left: 0;\r\n}\r\n\r\n#info2 {\r\n  animation: flyinfo2 15s linear;\r\n  top: 100vw;\r\n  left: 0;\r\n}\r\n\r\n#info3 {\r\n  animation: flyinfo3 15s linear;\r\n  top: 100vw;\r\n  left: 0;\r\n}\r\n\r\n#info4 {\r\n  animation: flyinfo4 15s linear;\r\n  top: 100vw;\r\n  left: 0;\r\n}\r\n\r\n#info5 {\r\n  animation: flyinfo5 15s linear;\r\n  top: 100vw;\r\n  left: 0;\r\n}\r\n\r\n#info6 {\r\n  animation: flyinfo6 15s linear;\r\n  top: 100vw;\r\n  left: 0;\r\n}\r\n\r\n#ready {\r\n  animation: flyready 15s linear;\r\n  top: 100vw;\r\n  left: 0;\r\n}\r\n\r\n@keyframes flyaid {\r\n  0%{\r\n    transform: translate(110vw,-90vw);opacity: .75;\r\n  }\r\n  8%{\r\n    transform: translate(0,-90vw);opacity: .75;\r\n  }\r\n\r\n  15%{\r\n      transform: translate(0,-90vw);opacity: .75;\r\n  }\r\n  17%{\r\n    transform: translate(0,-75vw);opacity: .75;\r\n  }\r\n\r\n  25%{\r\n    transform: translate(0,-75vw);opacity: .75;\r\n  }\r\n  27%{\r\n    transform: translate(0,-60vw);opacity: .75;\r\n  }\r\n\r\n\r\n  40%{\r\n    transform: translate(0,-60vw);opacity: .75;\r\n  }\r\n  42%{\r\n    transform: translate(0,-42vw);opacity: .75;\r\n  }\r\n\r\n\r\n  50%{\r\n    transform: translate(0,-42vw);opacity: .75;\r\n  }\r\n  52%{\r\n    transform: translate(0,-24vw);opacity: .75;\r\n  }\r\n\r\n  70%{\r\n    transform: translate(0,-24vw);opacity: .75;\r\n  }\r\n  72%{\r\n    transform: translate(0,0);opacity: .75;\r\n  }\r\n}\r\n\r\n@keyframes flytitle {\r\n  0%{\r\n    transform: translate(110vw,0);opacity: .75;\r\n  }\r\n  10%{\r\n    transform: translate(110vw,0);opacity: .75;\r\n  }\r\n  12%{\r\n    transform: translate(0,0);opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes flyinfo1 {\r\n  0%{\r\n    transform: translate(110vw,0);opacity: .75;\r\n  }\r\n  15%{\r\n    transform: translate(110vw,0);opacity: .75;\r\n  }\r\n  17%{\r\n      transform: translate(0,0);opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes flyinfo2 {\r\n  0%{\r\n    transform: translate(110vw,0);opacity: .75;\r\n  }\r\n  25%{\r\n    transform: translate(110vw,0);opacity: .75;\r\n  }\r\n  27%{\r\n      transform: translate(0,0);opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes flyinfo3 {\r\n  0%{\r\n    transform: translate(110vw,0);opacity: .75;\r\n  }\r\n  40%{\r\n    transform: translate(110vw,0);opacity: .75;\r\n  }\r\n  42%{\r\n      transform: translate(0,0);opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes flyinfo4 {\r\n  0%{\r\n    transform: translate(110vw,0);opacity: .75;\r\n  }\r\n  50%{\r\n    transform: translate(110vw,0);opacity: .75;\r\n  }\r\n  52%{\r\n      transform: translate(0,0);opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes flyinfo5 {\r\n  0%{\r\n    transform: translate(110vw,0);opacity: .75;\r\n  }\r\n  70%{\r\n    transform: translate(110vw,0);opacity: .75;\r\n  }\r\n  72%{\r\n      transform: translate(0,0);opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes flyinfo6 {\r\n  0%{\r\n    transform: translate(110vw,0);opacity: .75;\r\n  }\r\n  85%{\r\n    transform: translate(110vw,0);opacity: .75;\r\n  }\r\n  87%{\r\n      transform: translate(0,0);opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes flyready {\r\n  0%{\r\n    transform: translate(110vw,0);opacity: .75;\r\n  }\r\n  95%{\r\n    transform: translate(110vw,0);opacity: .75;\r\n  }\r\n  100%{\r\n      transform: translate(0,0);opacity: 1;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixVQUFVO0VBQ1YsT0FBTztBQUNUOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLFVBQVU7RUFDVixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsVUFBVTtFQUNWLE9BQU87QUFDVDs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixVQUFVO0VBQ1YsT0FBTztBQUNUOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLFVBQVU7RUFDVixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsVUFBVTtFQUNWLE9BQU87QUFDVDs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixVQUFVO0VBQ1YsT0FBTztBQUNUOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLFVBQVU7RUFDVixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsVUFBVTtFQUNWLE9BQU87QUFDVDs7QUFFQTtFQUNFO0lBQ0UsaUNBQWlDLENBQUMsWUFBWTtFQUNoRDtFQUNBO0lBQ0UsNkJBQTZCLENBQUMsWUFBWTtFQUM1Qzs7RUFFQTtNQUNJLDZCQUE2QixDQUFDLFlBQVk7RUFDOUM7RUFDQTtJQUNFLDZCQUE2QixDQUFDLFlBQVk7RUFDNUM7O0VBRUE7SUFDRSw2QkFBNkIsQ0FBQyxZQUFZO0VBQzVDO0VBQ0E7SUFDRSw2QkFBNkIsQ0FBQyxZQUFZO0VBQzVDOzs7RUFHQTtJQUNFLDZCQUE2QixDQUFDLFlBQVk7RUFDNUM7RUFDQTtJQUNFLDZCQUE2QixDQUFDLFlBQVk7RUFDNUM7OztFQUdBO0lBQ0UsNkJBQTZCLENBQUMsWUFBWTtFQUM1QztFQUNBO0lBQ0UsNkJBQTZCLENBQUMsWUFBWTtFQUM1Qzs7RUFFQTtJQUNFLDZCQUE2QixDQUFDLFlBQVk7RUFDNUM7RUFDQTtJQUNFLHlCQUF5QixDQUFDLFlBQVk7RUFDeEM7QUFDRjs7QUFHQTtFQUNFO0lBQ0UsNkJBQTZCLENBQUMsWUFBWTtFQUM1QztFQUNBO0lBQ0UsNkJBQTZCLENBQUMsWUFBWTtFQUM1QztFQUNBO0lBQ0UseUJBQXlCLENBQUMsVUFBVTtFQUN0QztBQUNGOztBQUVBO0VBQ0U7SUFDRSw2QkFBNkIsQ0FBQyxZQUFZO0VBQzVDO0VBQ0E7SUFDRSw2QkFBNkIsQ0FBQyxZQUFZO0VBQzVDO0VBQ0E7TUFDSSx5QkFBeUIsQ0FBQyxVQUFVO0VBQ3hDO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLDZCQUE2QixDQUFDLFlBQVk7RUFDNUM7RUFDQTtJQUNFLDZCQUE2QixDQUFDLFlBQVk7RUFDNUM7RUFDQTtNQUNJLHlCQUF5QixDQUFDLFVBQVU7RUFDeEM7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsNkJBQTZCLENBQUMsWUFBWTtFQUM1QztFQUNBO0lBQ0UsNkJBQTZCLENBQUMsWUFBWTtFQUM1QztFQUNBO01BQ0kseUJBQXlCLENBQUMsVUFBVTtFQUN4QztBQUNGOztBQUVBO0VBQ0U7SUFDRSw2QkFBNkIsQ0FBQyxZQUFZO0VBQzVDO0VBQ0E7SUFDRSw2QkFBNkIsQ0FBQyxZQUFZO0VBQzVDO0VBQ0E7TUFDSSx5QkFBeUIsQ0FBQyxVQUFVO0VBQ3hDO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLDZCQUE2QixDQUFDLFlBQVk7RUFDNUM7RUFDQTtJQUNFLDZCQUE2QixDQUFDLFlBQVk7RUFDNUM7RUFDQTtNQUNJLHlCQUF5QixDQUFDLFVBQVU7RUFDeEM7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsNkJBQTZCLENBQUMsWUFBWTtFQUM1QztFQUNBO0lBQ0UsNkJBQTZCLENBQUMsWUFBWTtFQUM1QztFQUNBO01BQ0kseUJBQXlCLENBQUMsVUFBVTtFQUN4QztBQUNGOztBQUVBO0VBQ0U7SUFDRSw2QkFBNkIsQ0FBQyxZQUFZO0VBQzVDO0VBQ0E7SUFDRSw2QkFBNkIsQ0FBQyxZQUFZO0VBQzVDO0VBQ0E7TUFDSSx5QkFBeUIsQ0FBQyxVQUFVO0VBQ3hDO0FBQ0YiLCJmaWxlIjoid2VsY29tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlciB7XHJcbiAgbWFyZ2luLWxlZnQ6IDNweDtcclxuICBtYXJnaW4tcmlnaHQ6IDNweDtcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbGVmdDogNTAlO1xyXG59XHJcblxyXG4uZml4LWNlbnRlciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMTZweDtcclxuICBsZWZ0OiAxNnB4O1xyXG59XHJcblxyXG5pbWcge1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbnAge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbiNhaWQge1xyXG4gIGFuaW1hdGlvbjogZmx5YWlkIDE1cyBsaW5lYXI7XHJcbiAgdG9wOiAxMDB2dztcclxuICBsZWZ0OiAwO1xyXG59XHJcblxyXG4jdGl0bGUge1xyXG4gIGFuaW1hdGlvbjogZmx5dGl0bGUgMTVzIGxpbmVhcjtcclxuICB0b3A6IDEwMHZ3O1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuXHJcbiNpbmZvMSB7XHJcbiAgYW5pbWF0aW9uOiBmbHlpbmZvMSAxNXMgbGluZWFyO1xyXG4gIHRvcDogMTAwdnc7XHJcbiAgbGVmdDogMDtcclxufVxyXG5cclxuI2luZm8yIHtcclxuICBhbmltYXRpb246IGZseWluZm8yIDE1cyBsaW5lYXI7XHJcbiAgdG9wOiAxMDB2dztcclxuICBsZWZ0OiAwO1xyXG59XHJcblxyXG4jaW5mbzMge1xyXG4gIGFuaW1hdGlvbjogZmx5aW5mbzMgMTVzIGxpbmVhcjtcclxuICB0b3A6IDEwMHZ3O1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuXHJcbiNpbmZvNCB7XHJcbiAgYW5pbWF0aW9uOiBmbHlpbmZvNCAxNXMgbGluZWFyO1xyXG4gIHRvcDogMTAwdnc7XHJcbiAgbGVmdDogMDtcclxufVxyXG5cclxuI2luZm81IHtcclxuICBhbmltYXRpb246IGZseWluZm81IDE1cyBsaW5lYXI7XHJcbiAgdG9wOiAxMDB2dztcclxuICBsZWZ0OiAwO1xyXG59XHJcblxyXG4jaW5mbzYge1xyXG4gIGFuaW1hdGlvbjogZmx5aW5mbzYgMTVzIGxpbmVhcjtcclxuICB0b3A6IDEwMHZ3O1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuXHJcbiNyZWFkeSB7XHJcbiAgYW5pbWF0aW9uOiBmbHlyZWFkeSAxNXMgbGluZWFyO1xyXG4gIHRvcDogMTAwdnc7XHJcbiAgbGVmdDogMDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBmbHlhaWQge1xyXG4gIDAle1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTEwdncsLTkwdncpO29wYWNpdHk6IC43NTtcclxuICB9XHJcbiAgOCV7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLC05MHZ3KTtvcGFjaXR5OiAuNzU7XHJcbiAgfVxyXG5cclxuICAxNSV7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsLTkwdncpO29wYWNpdHk6IC43NTtcclxuICB9XHJcbiAgMTcle1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwtNzV2dyk7b3BhY2l0eTogLjc1O1xyXG4gIH1cclxuXHJcbiAgMjUle1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwtNzV2dyk7b3BhY2l0eTogLjc1O1xyXG4gIH1cclxuICAyNyV7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLC02MHZ3KTtvcGFjaXR5OiAuNzU7XHJcbiAgfVxyXG5cclxuXHJcbiAgNDAle1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwtNjB2dyk7b3BhY2l0eTogLjc1O1xyXG4gIH1cclxuICA0MiV7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLC00MnZ3KTtvcGFjaXR5OiAuNzU7XHJcbiAgfVxyXG5cclxuXHJcbiAgNTAle1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwtNDJ2dyk7b3BhY2l0eTogLjc1O1xyXG4gIH1cclxuICA1MiV7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLC0yNHZ3KTtvcGFjaXR5OiAuNzU7XHJcbiAgfVxyXG5cclxuICA3MCV7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLC0yNHZ3KTtvcGFjaXR5OiAuNzU7XHJcbiAgfVxyXG4gIDcyJXtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsMCk7b3BhY2l0eTogLjc1O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbkBrZXlmcmFtZXMgZmx5dGl0bGUge1xyXG4gIDAle1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTEwdncsMCk7b3BhY2l0eTogLjc1O1xyXG4gIH1cclxuICAxMCV7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMTB2dywwKTtvcGFjaXR5OiAuNzU7XHJcbiAgfVxyXG4gIDEyJXtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsMCk7b3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmx5aW5mbzEge1xyXG4gIDAle1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTEwdncsMCk7b3BhY2l0eTogLjc1O1xyXG4gIH1cclxuICAxNSV7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMTB2dywwKTtvcGFjaXR5OiAuNzU7XHJcbiAgfVxyXG4gIDE3JXtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwwKTtvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmbHlpbmZvMiB7XHJcbiAgMCV7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMTB2dywwKTtvcGFjaXR5OiAuNzU7XHJcbiAgfVxyXG4gIDI1JXtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDExMHZ3LDApO29wYWNpdHk6IC43NTtcclxuICB9XHJcbiAgMjcle1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLDApO29wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZseWluZm8zIHtcclxuICAwJXtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDExMHZ3LDApO29wYWNpdHk6IC43NTtcclxuICB9XHJcbiAgNDAle1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTEwdncsMCk7b3BhY2l0eTogLjc1O1xyXG4gIH1cclxuICA0MiV7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsMCk7b3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmx5aW5mbzQge1xyXG4gIDAle1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTEwdncsMCk7b3BhY2l0eTogLjc1O1xyXG4gIH1cclxuICA1MCV7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMTB2dywwKTtvcGFjaXR5OiAuNzU7XHJcbiAgfVxyXG4gIDUyJXtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwwKTtvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmbHlpbmZvNSB7XHJcbiAgMCV7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMTB2dywwKTtvcGFjaXR5OiAuNzU7XHJcbiAgfVxyXG4gIDcwJXtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDExMHZ3LDApO29wYWNpdHk6IC43NTtcclxuICB9XHJcbiAgNzIle1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLDApO29wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZseWluZm82IHtcclxuICAwJXtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDExMHZ3LDApO29wYWNpdHk6IC43NTtcclxuICB9XHJcbiAgODUle1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTEwdncsMCk7b3BhY2l0eTogLjc1O1xyXG4gIH1cclxuICA4NyV7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsMCk7b3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmx5cmVhZHkge1xyXG4gIDAle1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTEwdncsMCk7b3BhY2l0eTogLjc1O1xyXG4gIH1cclxuICA5NSV7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMTB2dywwKTtvcGFjaXR5OiAuNzU7XHJcbiAgfVxyXG4gIDEwMCV7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsMCk7b3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 3469:
/*!*****************************************************************!*\
  !*** ./src/app/intro-page/intro-page.component.html?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <div class=\"img-wrapper\">\r\n    <img src=\"../../assets/images/background6.png\">\r\n  </div>\r\n  <ion-grid class=\"ion-no-padding\">\r\n  <div class=\"background\">\r\n    <!--<h2>PLACEHOLDER TITLE SCREEN</h2-->\r\n\r\n    <!--p>A Jonas Linde Creation with production assistance from Julie Linde and Jeremy Lewis</p> -->\r\n      <div class=\"center\">\r\n        <div class=\"centerwhite\">\r\n        <h1 class=\"titleText\"><em>ELECTION GAME</em></h1>\r\n        </div>\r\n        <div class=\"centerwhite\">\r\n        <p style=\"color: white; margin-top: 0px;\"><em>The Presidential Election Challenge</em></p>\r\n        </div>\r\n        <ion-button class=\"button43 skinny\" (click)=\"toTabs()\"><em>Play</em></ion-button>\r\n        <ion-button class=\"button43 skinny\" (click)=\"toTabsTestEnd()\">TEST (Start at round 15)</ion-button>\r\n        <ion-button class=\"button43 skinny\" (click)=\"toTutorial()\"><em>Instructions</em></ion-button>\r\n        <ion-button class=\"button43 skinny\" (click)=\"toAchievements()\"><em>Achievements</em></ion-button>\r\n        <div class=\"centerwhite\">\r\n        <p style=\"font-size: small; color: white; margin-top: 0px;\"><em>Based on a Board Game by Jonas Linde</em></p>\r\n        </div>\r\n        <!-- <ion-button class=\"button43\" [disabled]=\"true\" (click)=\"toTabs()\">Start 2 player</button> -->\r\n      </div>\r\n    </div>\r\n  </ion-grid>\r\n</ion-content>\r\n";

/***/ }),

/***/ 6835:
/*!**************************************************************!*\
  !*** ./src/app/intro-page/records.component.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "\r\n<ion-header [translucent]=\"false\">\r\n  <ion-toolbar>\r\n    <ion-title class=\"ion-text-center\">\r\n      Achievements\r\n    </ion-title>\r\n    <ion-button fill=\"clear\" id=\"click-triggerGH\"><ion-icon name=\"help-circle-outline\"></ion-icon></ion-button>\r\n    <ion-popover trigger=\"click-triggerGH\" triggerAction=\"click\">\r\n      <ng-template>\r\n        <ion-content class=\"ion-padding\">Check up here on how many games you have played, and how many times you have won!</ion-content>\r\n      </ng-template>\r\n    </ion-popover>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-grid class=\"ion-no-padding bg-image\">\r\n    <div class=\"title\">\r\n      <h1>Game History:</h1>\r\n    </div>\r\n\r\n    <p style=\"margin-left: 20%;\">Games Played: {{plays || 0}}</p>\r\n\r\n    <p style=\"margin-left: 20%;\">Games won: {{wins  || 0}}</p>\r\n\r\n    <p style=\"margin-left: 20%;\">Wins as Republican: {{repWins || 0}}</p>\r\n\r\n    <p style=\"margin-left: 20%;\">Wins as Democrat: {{demWins || 0}}</p>\r\n\r\n    <p style=\"margin-left: 20%;\">Most Electoral Votes Won: {{highVotes || 0}}</p>\r\n    <div class=\"title\">\r\n\r\n      <h1>Achievements:</h1>\r\n      </div>\r\n      <div *ngFor=\"let unlocked of unlockedRecords\" style=\"margin-top: 4px; margin-left: 6%; display: flex; height: 72px; width: 88%;\">\r\n        <div style=\"width: 64px; border-radius: 10px 0px 0px 10px; border: black 2px solid; background-color: #606060 ;\">\r\n          <ion-icon style=\"color: #FFD700; font-size: 48px; margin-left: 3px; margin-right: 3px; margin-top: 8px; margin-bottom: 8px;\" name=\"trophy\"></ion-icon>\r\n        </div>\r\n        <div style=\"border-radius: 0px 10px 10px 0px; border: black 2px solid; width: 100%; overflow: hidden; background-image: linear-gradient(to right, #ffffff 0%, #ffffff 50%, #c9cd9b 100%);\">\r\n          <p style=\"margin-top: 0; margin-bottom: 0; margin-left: 3px;\"><strong>{{unlocked.title}}</strong></p>\r\n          <p style=\"margin-top: 0; margin-bottom: 0; margin-left: 3px;\">{{unlocked.description}}</p>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngFor=\"let locked of lockedRecords\" style=\"margin-top: 4px; margin-left: 6%; display: flex; height: 72px; width: 88%;\">\r\n        <div style=\"width: 64px; border-radius: 10px 0px 0px 10px; border: black 2px solid; background-color: #606060;\">\r\n          <ion-icon style=\"font-size: 48px; margin-left: 3px; margin-right: 3px; margin-top: 3px; margin-bottom: 3px;\" name=\"lock-closed\"></ion-icon>\r\n        </div>\r\n        <div style=\"border-radius: 0px 10px 10px 0px; border: black 2px solid; width: 100%; overflow: hidden;  background-image: linear-gradient(to right, #a2a2a2 0%, #a2a2a2 50%, #606060 100%);\">\r\n          <p style=\"margin-top: 0; margin-bottom: 0; margin-left: 3px;\"><strong>???</strong></p>\r\n          <p style=\"margin-top: 0; margin-bottom: 0; margin-left: 3px;\">{{locked.description}}</p>\r\n        </div>\r\n      </div>\r\n      <br>      <br>      <br>      <br>      <br>\r\n    <div class=\"fix-center\">\r\n      <ion-button class=\"button43\" (click)=\"continue()\"><ion-icon name=\"arrow-back-circle-outline\"></ion-icon>Back To Main Menu</ion-button>\r\n    </div>\r\n\r\n  </ion-grid>\r\n</ion-content>\r\n";

/***/ }),

/***/ 6450:
/*!***************************************************************!*\
  !*** ./src/app/intro-page/records2.component.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "<!-- JERMY MAKE SURE THIS IS MATCHING WITH RECORDS 1 -->\r\n<ion-header [translucent]=\"false\">\r\n  <ion-toolbar>\r\n    <ion-title class=\"ion-text-center\">\r\n      Achievements\r\n    </ion-title>\r\n    <ion-button fill=\"clear\" id=\"click-triggerGH\"><ion-icon name=\"help-circle-outline\"></ion-icon></ion-button>\r\n    <ion-popover trigger=\"click-triggerGH\" triggerAction=\"click\">\r\n      <ng-template>\r\n        <ion-content class=\"ion-padding\">Check up here on how many games you have played, and how many times you have won!</ion-content>\r\n      </ng-template>\r\n    </ion-popover>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-grid class=\"ion-no-padding bg-image\">\r\n    <div class=\"title\">\r\n      <h1>Game History:</h1>\r\n    </div>\r\n\r\n    <p style=\"margin-left: 20%;\">Games Played: {{plays || 0}}</p>\r\n\r\n    <p style=\"margin-left: 20%;\">Games won: {{wins  || 0}}</p>\r\n\r\n    <p style=\"margin-left: 20%;\">Wins as Republican: {{repWins || 0}}</p>\r\n\r\n    <p style=\"margin-left: 20%;\">Wins as Democrat: {{demWins || 0}}</p>\r\n\r\n    <p style=\"margin-left: 20%;\">Most Electoral Votes Won: {{highVotes || 0}}</p>\r\n    <div class=\"title\">\r\n\r\n      <h1>Achievements:</h1>\r\n      </div>\r\n      <div *ngFor=\"let unlocked of unlockedRecords\" style=\"margin-top: 4px; margin-left: 6%; display: flex; height: 72px; width: 88%;\">\r\n        <div style=\"width: 64px; border-radius: 10px 0px 0px 10px; border: black 2px solid; background-color: #606060 ;\">\r\n          <ion-icon style=\"color: #FFD700; font-size: 48px; margin-left: 3px; margin-right: 3px; margin-top: 8px; margin-bottom: 8px;\" name=\"trophy\"></ion-icon>\r\n        </div>\r\n        <div style=\"border-radius: 0px 10px 10px 0px; border: black 2px solid; width: 100%; overflow: hidden; background-image: linear-gradient(to right, #ffffff 0%, #ffffff 50%, #c9cd9b 100%);\">\r\n          <p style=\"margin-top: 0; margin-bottom: 0; margin-left: 3px;\"><strong>{{unlocked.title}}</strong></p>\r\n          <p style=\"margin-top: 0; margin-bottom: 0; margin-left: 3px;\">{{unlocked.description}}</p>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngFor=\"let locked of lockedRecords\" style=\"margin-top: 4px; margin-left: 6%; display: flex; height: 72px; width: 88%;\">\r\n        <div style=\"width: 64px; border-radius: 10px 0px 0px 10px; border: black 2px solid; background-color: #606060;\">\r\n          <ion-icon style=\"font-size: 48px; margin-left: 3px; margin-right: 3px; margin-top: 3px; margin-bottom: 3px;\" name=\"lock-closed\"></ion-icon>\r\n        </div>\r\n        <div style=\"border-radius: 0px 10px 10px 0px; border: black 2px solid; width: 100%; overflow: hidden;  background-image: linear-gradient(to right, #a2a2a2 0%, #a2a2a2 50%, #606060 100%);\">\r\n          <p style=\"margin-top: 0; margin-bottom: 0; margin-left: 3px;\"><strong>???</strong></p>\r\n          <p style=\"margin-top: 0; margin-bottom: 0; margin-left: 3px;\">{{locked.description}}</p>\r\n        </div>\r\n      </div>\r\n      <br>      <br>      <br>      <br>      <br>\r\n    <div class=\"fix-center\">\r\n      <ion-button class=\"button43\" (click)=\"continue()\"><ion-icon name=\"arrow-back-circle-outline\"></ion-icon>Back To Election Results</ion-button>\r\n    </div>\r\n\r\n  </ion-grid>\r\n</ion-content>\r\n";

/***/ }),

/***/ 804:
/*!**************************************************************!*\
  !*** ./src/app/intro-page/welcome.component.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "\r\n<ion-header [translucent]=\"false\">\r\n  <ion-toolbar>\r\n    <ion-title class=\"ion-text-center\">\r\n      Instructions\r\n    </ion-title>\r\n    <ion-button fill=\"clear\" id=\"click-triggerWc\"><ion-icon name=\"help-circle-outline\"></ion-icon></ion-button>\r\n    <ion-popover trigger=\"click-triggerWc\" triggerAction=\"click\">\r\n      <ng-template>\r\n        <ion-content class=\"ion-padding\">Understanding the Electoral College is central to the US presidential election. If you want to learn more, there are great resources all over the internet!</ion-content>\r\n      </ng-template>\r\n    </ion-popover>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content [fullscreen]=\"true\">\r\n  <div class=\"center\">\r\n  <h1>What is the Electoral College?</h1>\r\n  </div>\r\n  <!-- <ion-grid class=\"ion-no-padding bg-image\">\r\n  <div class=\"background\">\r\n    <div class=\"container\">\r\n      <div class=\"center\">\r\n      <h1 id=\"title\">Hello There Candadit!</h1>\r\n    </div>\r\n    <div class=\"center\">\r\n      <p id=\"info1\">My name is Paige and I am your campaign manager!</p>\r\n    </div>\r\n    <div class=\"center\">\r\n\r\n      <p id=\"info2\">It is my job to make sure you have everything you need to win the presidency!</p></div>\r\n      <div class=\"center\">\r\n        <p id=\"info3\">We are on our way to campaign headquarters now...</p></div>\r\n        <div class=\"center\">\r\n          <p id=\"info4\">That's where you can campaign, and see a map of the current state of the race</p></div>\r\n          <div class=\"center\">\r\n            <p id=\"info5\">You can reach me in the HELP tab if you need anything</p></div>\r\n       <div class=\"center\"><img id=\"aid\" src=\"../../../assets/images/aid.png\">\r\n      <div id=\"ready\" class=\"center\">\r\n        <p id=\"info6\">If you are ready to go, let's campaign!</p>\r\n\r\n        <ion-button class=\"button43\" (click)=\"continue()\">Ready</ion-button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  </ion-grid> -->\r\n  <div class=\"center\"><img src=\"../../assets/images/constitution.png\"></div>\r\n\r\n  <div class=\"center\">\r\n    <p>When the US constitution was written in 1787, the Office Of The President was created.</p>\r\n  </div>\r\n  <div class=\"center\">\r\n\r\n  <p>To fill this office, every 4 years each state would help to elect a new President.</p>\r\n  </div>\r\n  <div class=\"center\"><img src=\"../../assets/images/horses.jpg\"></div>\r\n\r\n  <div class=\"center\">\r\n  <p>Due to the limits of communication and travel, each state had to send Electors to a meeting to record their votes. </p>\r\n  </div>\r\n  <div class=\"center\">\r\n  <p>Large states would get to send lots of electors, and small states would get to send fewer electors.</p>\r\n</div>\r\n<div class=\"center\"><img src=\"../../assets/images/ElectoralMap.jpg\"></div>\r\n\r\n<div class=\"center\">\r\n  <p>Today, each state* puts their Electoral Votes toward the candidate that was most popular in the election in their state.\r\n  </p></div> <div class=\"center\">\r\n      <p>   To become president, a candidate needs to receive 270 electoral votes out of the 538.</p>\r\n</div>\r\n<div class=\"center\">\r\n  <h1>What do you do in this game?</h1>\r\n</div>\r\n<div class=\"center\"><img src=\"../../assets/images/vs.jpg\"></div>\r\n<div class=\"center\">\r\n    <p> You will be competing in a 2 party race, meaning that you will run against just 1 opponent. The Republican Party will be represented by the color RED and the Democratic Party will be represented by the color BLUE.</p>\r\n</div>\r\n<div class=\"center\"><img src=\"../../assets/images/options.png\"></div>\r\n\r\n<div class=\"center\">\r\n    <p> Your job in this game is to win enough States/Electoral Votes to become president. You can raise money, spend it on advertisements, travel to states for campaign events, and weigh in on national issues to become more popular -- and win the election in states. The game will last 16 turns, so use every move wisely.</p></div>\r\n\r\n    <div class=\"center\"><img src=\"../../assets/images/score.png\"></div>\r\n\r\n    <div class=\"center\">\r\n\r\n\r\n   <p> You will see how popular you are in a states shown as a Percentage.  (A +3% means you are predicted to win that state by 3% of the vote. A state that is EVEN could vote for either candidate on election day.)</p>\r\n  </div>\r\n  <div class=\"center\"><img src=\"../../assets/images/map.png\"></div>\r\n\r\n  <div class=\"center\">\r\n      <p> You will be given a map that shows how close the race is in each state (based on real past elections data), as well as how many votes you could gain by winning that state.</p></div>\r\n\r\n      <div class=\"center\">\r\n\r\n       <p> It is a good idea to check in on this often, and use it to decide which states you are going to target in your campaign.</p>\r\n    </div>\r\n    <div class=\"center\">\r\n        <p> Good luck! If you need any more info, check out the HELP tab during a game</p>\r\n      </div>\r\n      <br><br><br><br>\r\n      <div class=\"fix-center\">\r\n        <ion-button class=\"button43\" (click)=\"continue()\"><ion-icon name=\"arrow-back-circle-outline\"></ion-icon>Back To Main Menu</ion-button>\r\n      </div>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_intro-page_intro_module_ts.js.map