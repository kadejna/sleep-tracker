(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 7212:
/*!**********************************************!*\
  !*** ./src/app/data/overnight-sleep-data.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OvernightSleepData": () => (/* binding */ OvernightSleepData)
/* harmony export */ });
/* harmony import */ var _sleep_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sleep-data */ 533);

class OvernightSleepData extends _sleep_data__WEBPACK_IMPORTED_MODULE_0__.SleepData {
    constructor(sleepStart, sleepEnd) {
        super();
        this.sleepStart = sleepStart;
        this.sleepEnd = sleepEnd;
    }
    summaryString() {
        var sleepStart_ms = this.sleepStart.getTime();
        var sleepEnd_ms = this.sleepEnd.getTime();
        // Calculate the difference in milliseconds
        var difference_ms = sleepEnd_ms - sleepStart_ms;
        // Convert to hours and minutes
        return Math.floor(difference_ms / (1000 * 60 * 60)) + " hours, " + Math.floor(difference_ms / (1000 * 60) % 60) + " minutes.";
    }
    dateString() {
        return "Night of " + this.sleepStart.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
    }
}


/***/ }),

/***/ 533:
/*!************************************!*\
  !*** ./src/app/data/sleep-data.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SleepData": () => (/* binding */ SleepData)
/* harmony export */ });
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shortid */ 9512);
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_0__);

class SleepData {
    constructor() {
        //Assign a random (unique) ID. This may be useful for comparison (e.g., are two logged entries the same).
        this.id = (0,shortid__WEBPACK_IMPORTED_MODULE_0__.generate)();
        this.loggedAt = new Date();
    }
    summaryString() {
        return 'Unknown sleep data';
    }
    dateString() {
        return this.loggedAt.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
    }
}


/***/ }),

/***/ 743:
/*!**************************************************!*\
  !*** ./src/app/data/stanford-sleepiness-data.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StanfordSleepinessData": () => (/* binding */ StanfordSleepinessData)
/* harmony export */ });
/* harmony import */ var _sleep_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sleep-data */ 533);
/* from the Stanford Sleepiness Scale */
/* https://web.stanford.edu/~dement/sss.html */

class StanfordSleepinessData extends _sleep_data__WEBPACK_IMPORTED_MODULE_0__.SleepData {
    constructor(loggedValue, loggedAt = new Date()) {
        super();
        this.loggedValue = loggedValue;
        this.loggedAt = loggedAt;
    }
    summaryString() {
        return this.loggedValue + ": " + StanfordSleepinessData.ScaleValues[this.loggedValue];
    }
}
StanfordSleepinessData.ScaleValues = [undefined,
    'Feeling active, vital, alert, or wide awake',
    'Functioning at high levels, but not at peak; able to concentrate',
    'Awake, but relaxed; responsive but not fully alert',
    'Somewhat foggy, let down',
    'Foggy; losing interest in remaining awake; slowed down',
    'Sleepy, woozy, fighting sleep; prefer to lie down',
    'No longer fighting sleep, sleep onset soon; having dream-like thoughts']; //7


/***/ }),

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 2003);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 3853);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 1020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_sleep_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/sleep.service */ 2517);





let HomePage = class HomePage {
    constructor(sleepService) {
        this.sleepService = sleepService;
    }
    ngOnInit() {
        console.log(this.allSleepData);
    }
    /* Ionic doesn't allow bindings to static variables, so this getter can be used instead. */
    get allSleepData() {
        return _services_sleep_service__WEBPACK_IMPORTED_MODULE_2__.SleepService.AllSleepData;
    }
};
HomePage.ctorParameters = () => [
    { type: _services_sleep_service__WEBPACK_IMPORTED_MODULE_2__.SleepService }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-home',
        template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 2517:
/*!*******************************************!*\
  !*** ./src/app/services/sleep.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SleepService": () => (/* binding */ SleepService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _data_overnight_sleep_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/overnight-sleep-data */ 7212);
/* harmony import */ var _data_stanford_sleepiness_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/stanford-sleepiness-data */ 743);




let SleepService = class SleepService {
    constructor() {
        if (SleepService.LoadDefaultData) {
            this.addDefaultData();
            SleepService.LoadDefaultData = false;
        }
    }
    addDefaultData() {
        this.logOvernightData(new _data_overnight_sleep_data__WEBPACK_IMPORTED_MODULE_0__.OvernightSleepData(new Date('February 18, 2021 01:03:00'), new Date('February 18, 2021 09:25:00')));
        this.logSleepinessData(new _data_stanford_sleepiness_data__WEBPACK_IMPORTED_MODULE_1__.StanfordSleepinessData(4, new Date('February 19, 2021 14:38:00')));
        this.logOvernightData(new _data_overnight_sleep_data__WEBPACK_IMPORTED_MODULE_0__.OvernightSleepData(new Date('February 20, 2021 23:11:00'), new Date('February 21, 2021 08:03:00')));
    }
    logOvernightData(sleepData) {
        SleepService.AllSleepData.push(sleepData);
        SleepService.AllOvernightData.push(sleepData);
    }
    logSleepinessData(sleepData) {
        SleepService.AllSleepData.push(sleepData);
        SleepService.AllSleepinessData.push(sleepData);
    }
};
SleepService.LoadDefaultData = true;
SleepService.AllSleepData = [];
SleepService.AllOvernightData = [];
SleepService.AllSleepinessData = [];
SleepService.ctorParameters = () => [];
SleepService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], SleepService);



/***/ }),

/***/ 9512:
/*!***************************************!*\
  !*** ./node_modules/shortid/index.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = __webpack_require__(/*! ./lib/index */ 4118);

/***/ }),

/***/ 5968:
/*!**********************************************!*\
  !*** ./node_modules/shortid/lib/alphabet.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var randomFromSeed = __webpack_require__(/*! ./random/random-from-seed */ 1664);

var ORIGINAL = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';
var alphabet;
var previousSeed;
var shuffled;

function reset() {
  shuffled = false;
}

function setCharacters(_alphabet_) {
  if (!_alphabet_) {
    if (alphabet !== ORIGINAL) {
      alphabet = ORIGINAL;
      reset();
    }

    return;
  }

  if (_alphabet_ === alphabet) {
    return;
  }

  if (_alphabet_.length !== ORIGINAL.length) {
    throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. You submitted ' + _alphabet_.length + ' characters: ' + _alphabet_);
  }

  var unique = _alphabet_.split('').filter(function (item, ind, arr) {
    return ind !== arr.lastIndexOf(item);
  });

  if (unique.length) {
    throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. These characters were not unique: ' + unique.join(', '));
  }

  alphabet = _alphabet_;
  reset();
}

function characters(_alphabet_) {
  setCharacters(_alphabet_);
  return alphabet;
}

function setSeed(seed) {
  randomFromSeed.seed(seed);

  if (previousSeed !== seed) {
    reset();
    previousSeed = seed;
  }
}

function shuffle() {
  if (!alphabet) {
    setCharacters(ORIGINAL);
  }

  var sourceArray = alphabet.split('');
  var targetArray = [];
  var r = randomFromSeed.nextValue();
  var characterIndex;

  while (sourceArray.length > 0) {
    r = randomFromSeed.nextValue();
    characterIndex = Math.floor(r * sourceArray.length);
    targetArray.push(sourceArray.splice(characterIndex, 1)[0]);
  }

  return targetArray.join('');
}

function getShuffled() {
  if (shuffled) {
    return shuffled;
  }

  shuffled = shuffle();
  return shuffled;
}
/**
 * lookup shuffled letter
 * @param index
 * @returns {string}
 */


function lookup(index) {
  var alphabetShuffled = getShuffled();
  return alphabetShuffled[index];
}

function get() {
  return alphabet || ORIGINAL;
}

module.exports = {
  get: get,
  characters: characters,
  seed: setSeed,
  lookup: lookup,
  shuffled: getShuffled
};

/***/ }),

/***/ 6525:
/*!*******************************************!*\
  !*** ./node_modules/shortid/lib/build.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var generate = __webpack_require__(/*! ./generate */ 5305);

var alphabet = __webpack_require__(/*! ./alphabet */ 5968); // Ignore all milliseconds before a certain time to reduce the size of the date entropy without sacrificing uniqueness.
// This number should be updated every year or so to keep the generated id short.
// To regenerate `new Date() - 0` and bump the version. Always bump the version!


var REDUCE_TIME = 1567752802062; // don't change unless we change the algos or REDUCE_TIME
// must be an integer and less than 16

var version = 7; // Counter is used when shortid is called multiple times in one second.

var counter; // Remember the last time shortid was called in case counter is needed.

var previousSeconds;
/**
 * Generate unique id
 * Returns string id
 */

function build(clusterWorkerId) {
  var str = '';
  var seconds = Math.floor((Date.now() - REDUCE_TIME) * 0.001);

  if (seconds === previousSeconds) {
    counter++;
  } else {
    counter = 0;
    previousSeconds = seconds;
  }

  str = str + generate(version);
  str = str + generate(clusterWorkerId);

  if (counter > 0) {
    str = str + generate(counter);
  }

  str = str + generate(seconds);
  return str;
}

module.exports = build;

/***/ }),

/***/ 5305:
/*!**********************************************!*\
  !*** ./node_modules/shortid/lib/generate.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var alphabet = __webpack_require__(/*! ./alphabet */ 5968);

var random = __webpack_require__(/*! ./random/random-byte */ 768);

var format = __webpack_require__(/*! nanoid/format */ 9081);

function generate(number) {
  var loopCounter = 0;
  var done;
  var str = '';

  while (!done) {
    str = str + format(random, alphabet.get(), 1);
    done = number < Math.pow(16, loopCounter + 1);
    loopCounter++;
  }

  return str;
}

module.exports = generate;

/***/ }),

/***/ 4118:
/*!*******************************************!*\
  !*** ./node_modules/shortid/lib/index.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var alphabet = __webpack_require__(/*! ./alphabet */ 5968);

var build = __webpack_require__(/*! ./build */ 6525);

var isValid = __webpack_require__(/*! ./is-valid */ 8908); // if you are using cluster or multiple servers use this to make each instance
// has a unique value for worker
// Note: I don't know if this is automatically set when using third
// party cluster solutions such as pm2.


var clusterWorkerId = __webpack_require__(/*! ./util/cluster-worker-id */ 3796) || 0;
/**
 * Set the seed.
 * Highly recommended if you don't want people to try to figure out your id schema.
 * exposed as shortid.seed(int)
 * @param seed Integer value to seed the random alphabet.  ALWAYS USE THE SAME SEED or you might get overlaps.
 */

function seed(seedValue) {
  alphabet.seed(seedValue);
  return module.exports;
}
/**
 * Set the cluster worker or machine id
 * exposed as shortid.worker(int)
 * @param workerId worker must be positive integer.  Number less than 16 is recommended.
 * returns shortid module so it can be chained.
 */


function worker(workerId) {
  clusterWorkerId = workerId;
  return module.exports;
}
/**
 *
 * sets new characters to use in the alphabet
 * returns the shuffled alphabet
 */


function characters(newCharacters) {
  if (newCharacters !== undefined) {
    alphabet.characters(newCharacters);
  }

  return alphabet.shuffled();
}
/**
 * Generate unique id
 * Returns string id
 */


function generate() {
  return build(clusterWorkerId);
} // Export all other functions as properties of the generate function


module.exports = generate;
module.exports.generate = generate;
module.exports.seed = seed;
module.exports.worker = worker;
module.exports.characters = characters;
module.exports.isValid = isValid;

/***/ }),

/***/ 8908:
/*!**********************************************!*\
  !*** ./node_modules/shortid/lib/is-valid.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var alphabet = __webpack_require__(/*! ./alphabet */ 5968);

function isShortId(id) {
  if (!id || typeof id !== 'string' || id.length < 6) {
    return false;
  }

  var nonAlphabetic = new RegExp('[^' + alphabet.get().replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&') + ']');
  return !nonAlphabetic.test(id);
}

module.exports = isShortId;

/***/ }),

/***/ 768:
/*!****************************************************************!*\
  !*** ./node_modules/shortid/lib/random/random-byte-browser.js ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";


var crypto = typeof window === 'object' && (window.crypto || window.msCrypto); // IE 11 uses window.msCrypto

var randomByte;

if (!crypto || !crypto.getRandomValues) {
  randomByte = function (size) {
    var bytes = [];

    for (var i = 0; i < size; i++) {
      bytes.push(Math.floor(Math.random() * 256));
    }

    return bytes;
  };
} else {
  randomByte = function (size) {
    return crypto.getRandomValues(new Uint8Array(size));
  };
}

module.exports = randomByte;

/***/ }),

/***/ 1664:
/*!*************************************************************!*\
  !*** ./node_modules/shortid/lib/random/random-from-seed.js ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
 // Found this seed-based random generator somewhere
// Based on The Central Randomizer 1.3 (C) 1997 by Paul Houle (houle@msc.cornell.edu)

var seed = 1;
/**
 * return a random number based on a seed
 * @param seed
 * @returns {number}
 */

function getNextValue() {
  seed = (seed * 9301 + 49297) % 233280;
  return seed / 233280.0;
}

function setSeed(_seed_) {
  seed = _seed_;
}

module.exports = {
  nextValue: getNextValue,
  seed: setSeed
};

/***/ }),

/***/ 3796:
/*!********************************************************************!*\
  !*** ./node_modules/shortid/lib/util/cluster-worker-id-browser.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


module.exports = 0;

/***/ }),

/***/ 9081:
/*!********************************************************************!*\
  !*** ./node_modules/shortid/node_modules/nanoid/format.browser.js ***!
  \********************************************************************/
/***/ ((module) => {

// This file replaces `format.js` in bundlers like webpack or Rollup,
// according to `browser` config in `package.json`.
module.exports = function (random, alphabet, size) {
  // We can’t use bytes bigger than the alphabet. To make bytes values closer
  // to the alphabet, we apply bitmask on them. We look for the closest
  // `2 ** x - 1` number, which will be bigger than alphabet size. If we have
  // 30 symbols in the alphabet, we will take 31 (00011111).
  // We do not use faster Math.clz32, because it is not available in browsers.
  var mask = (2 << Math.log(alphabet.length - 1) / Math.LN2) - 1; // Bitmask is not a perfect solution (in our example it will pass 31 bytes,
  // which is bigger than the alphabet). As a result, we will need more bytes,
  // than ID size, because we will refuse bytes bigger than the alphabet.
  // Every hardware random generator call is costly,
  // because we need to wait for entropy collection. This is why often it will
  // be faster to ask for few extra bytes in advance, to avoid additional calls.
  // Here we calculate how many random bytes should we call in advance.
  // It depends on ID length, mask / alphabet size and magic number 1.6
  // (which was selected according benchmarks).
  // -~f => Math.ceil(f) if n is float number
  // -~i => i + 1 if n is integer number

  var step = -~(1.6 * mask * size / alphabet.length);
  var id = '';

  while (true) {
    var bytes = random(step); // Compact alternative for `for (var i = 0; i < step; i++)`

    var i = step;

    while (i--) {
      // If random byte is bigger than alphabet even after bitmask,
      // we refuse it by `|| ''`.
      id += alphabet[bytes[i] & mask] || ''; // More compact than `id.length + 1 === size`

      if (id.length === +size) return id;
    }
  }
};

/***/ }),

/***/ 1020:
/*!************************************************!*\
  !*** ./src/app/home/home.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbiNjb250YWluZXIgc3Ryb25nIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbn1cclxuXHJcbiNjb250YWluZXIgcCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG5cclxuICBjb2xvcjogIzhjOGM4YztcclxuXHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4jY29udGFpbmVyIGEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufSJdfQ== */";

/***/ }),

/***/ 3853:
/*!************************************************!*\
  !*** ./src/app/home/home.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      Sleep Tracker\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-header collapse=\"condense\">\r\n    <ion-toolbar>\r\n      <ion-title size=\"large\">Sleep Tracker</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <div id=\"container\">\r\n    <strong>Ready to create an app?</strong>\r\n    <p>Start with Ionic <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://ionicframework.com/docs/components\">UI Components</a></p>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map