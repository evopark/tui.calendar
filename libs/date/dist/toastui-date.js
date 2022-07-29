/*!
 * TOAST UI Date
 * @version 0.0.3 | Fri Jul 29 2022
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 * @license MIT
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["toastui"] = factory();
	else
		root["toastui"] = root["toastui"] || {}, root["toastui"]["Date"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 758:
/***/ ((module) => {

/**
 * @fileoverview Check whether the given variable is a string or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



/**
 * Check whether the given variable is a string or not.
 * If the given variable is a string, return true.
 * @param {*} obj - Target for checking
 * @returns {boolean} Is string?
 * @memberof module:type
 */
function isString(obj) {
  return typeof obj === 'string' || obj instanceof String;
}

module.exports = isString;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ src)
});

// UNUSED EXPORTS: LocalDate, MomentDate, UTCDate

// EXTERNAL MODULE: ../../node_modules/tui-code-snippet/type/isString.js
var isString = __webpack_require__(758);
var isString_default = /*#__PURE__*/__webpack_require__.n(isString);
;// CONCATENATED MODULE: ./src/localDate.js
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


/**
 * datetime regex from https://www.regexpal.com/94925
 * timezone regex from moment
 */

var rISO8601 = /^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(\.)?([0-9]+)?([+-]\d\d(?::?\d\d)?|\s*Z)?$/;

function throwNotSupported() {
  throw new Error('This operation is not supported.');
}

function getDateTime(dateString) {
  var match = rISO8601.exec(dateString);

  if (match) {
    var _match = _slicedToArray(match, 10),
        y = _match[1],
        M = _match[2],
        d = _match[3],
        h = _match[4],
        m = _match[5],
        s = _match[6],
        ms = _match[8],
        zoneInfo = _match[9];

    return {
      y: Number(y),
      M: Number(M) - 1,
      d: Number(d),
      h: Number(h),
      m: Number(m),
      s: Number(s),
      ms: Number(ms) || 0,
      zoneInfo: zoneInfo
    };
  }

  return null;
}

function createFromDateString(dateString) {
  var info = getDateTime(dateString);

  if (info && !info.zoneInfo) {
    var y = info.y,
        M = info.M,
        d = info.d,
        h = info.h,
        m = info.m,
        s = info.s,
        ms = info.ms;
    return new Date(y, M, d, h, m, s, ms);
  }

  return null;
}

var LocalDate = /*#__PURE__*/function () {
  function LocalDate() {
    _classCallCheck(this, LocalDate);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var firstArg = args[0];

    if (firstArg instanceof Date) {
      this.d = new Date(firstArg.getTime());
    } else if (isString_default()(firstArg) && args.length === 1) {
      this.d = createFromDateString(firstArg);
    }

    if (!this.d) {
      this.d = _construct(Date, args);
    }
  }

  _createClass(LocalDate, [{
    key: "setTimezoneOffset",
    value: function setTimezoneOffset() {
      throwNotSupported();
    }
  }, {
    key: "setTimezoneName",
    value: function setTimezoneName() {
      throwNotSupported();
    }
  }, {
    key: "clone",
    value: function clone() {
      return new LocalDate(this.d);
    }
  }, {
    key: "toDate",
    value: function toDate() {
      return new Date(this.d.getTime());
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.d.toString();
    }
  }]);

  return LocalDate;
}();


var getterMethods = ['getTime', 'getTimezoneOffset', 'getFullYear', 'getMonth', 'getDate', 'getHours', 'getMinutes', 'getSeconds', 'getMilliseconds', 'getDay'];
var setterMethods = ['setTime', 'setFullYear', 'setMonth', 'setDate', 'setHours', 'setMinutes', 'setSeconds', 'setMilliseconds'];
getterMethods.forEach(function (methodName) {
  LocalDate.prototype[methodName] = function () {
    var _this$d;

    return (_this$d = this.d)[methodName].apply(_this$d, arguments);
  };
});
setterMethods.forEach(function (methodName) {
  LocalDate.prototype[methodName] = function () {
    var _this$d2;

    return (_this$d2 = this.d)[methodName].apply(_this$d2, arguments);
  };
});
;// CONCATENATED MODULE: ./src/utcDate.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function utcDate_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function utcDate_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function utcDate_createClass(Constructor, protoProps, staticProps) { if (protoProps) utcDate_defineProperties(Constructor.prototype, protoProps); if (staticProps) utcDate_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) utcDate_setPrototypeOf(subClass, superClass); }

function utcDate_setPrototypeOf(o, p) { utcDate_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return utcDate_setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = utcDate_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function utcDate_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var UTCDate = /*#__PURE__*/function (_LocalDate) {
  _inherits(UTCDate, _LocalDate);

  var _super = _createSuper(UTCDate);

  function UTCDate() {
    utcDate_classCallCheck(this, UTCDate);

    return _super.apply(this, arguments);
  }

  utcDate_createClass(UTCDate, [{
    key: "clone",
    value: function clone() {
      return new UTCDate(this.d);
    }
  }, {
    key: "getTimezoneOffset",
    value: function getTimezoneOffset() {
      return 0;
    }
  }]);

  return UTCDate;
}(LocalDate);


var getterProperties = ['FullYear', 'Month', 'Date', 'Hours', 'Minutes', 'Seconds', 'Milliseconds', 'Day'];
var setterProperties = ['FullYear', 'Month', 'Date', 'Hours', 'Minutes', 'Seconds', 'Milliseconds'];
getterProperties.forEach(function (prop) {
  var methodName = "get".concat(prop);

  UTCDate.prototype[methodName] = function () {
    var _this$d;

    return (_this$d = this.d)["getUTC".concat(prop)].apply(_this$d, arguments);
  };
});
setterProperties.forEach(function (prop) {
  var methodName = "set".concat(prop);

  UTCDate.prototype[methodName] = function () {
    var _this$d2;

    return (_this$d2 = this.d)["setUTC".concat(prop)].apply(_this$d2, arguments);
  };
});
;// CONCATENATED MODULE: ./src/momentDate.js
function momentDate_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function momentDate_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function momentDate_createClass(Constructor, protoProps, staticProps) { if (protoProps) momentDate_defineProperties(Constructor.prototype, protoProps); if (staticProps) momentDate_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var moment;

var MomentDate = /*#__PURE__*/function () {
  function MomentDate() {
    momentDate_classCallCheck(this, MomentDate);

    if (!moment) {
      throw new Error('MomentDate requires Moment constructor. Use "MomentDate.setMoment(moment);".');
    }

    this.m = moment.apply(void 0, arguments);
  }

  momentDate_createClass(MomentDate, [{
    key: "setTimezoneOffset",
    value: function setTimezoneOffset(offset) {
      this.m.utcOffset(-offset);
      return this;
    }
  }, {
    key: "setTimezoneName",
    value: function setTimezoneName(zoneName) {
      if (this.m.tz) {
        this.m.tz(zoneName);
      } else {
        throw new Error('It requires moment-timezone. Use "MomentDate.setMoment()" with moment-timezone');
      }

      return this;
    }
  }, {
    key: "clone",
    value: function clone() {
      return new MomentDate(this.m);
    }
  }, {
    key: "toDate",
    value: function toDate() {
      return this.m.toDate();
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.m.format();
    }
  }, {
    key: "getTime",
    value: function getTime() {
      return this.m.valueOf();
    }
  }, {
    key: "getTimezoneOffset",
    value: function getTimezoneOffset() {
      var offset = -this.m.utcOffset();
      return Math.abs(offset) ? offset : 0;
    }
  }, {
    key: "getFullYear",
    value: function getFullYear() {
      return this.m.year();
    }
  }, {
    key: "getMonth",
    value: function getMonth() {
      return this.m.month();
    }
  }, {
    key: "getDate",
    value: function getDate() {
      return this.m.date();
    }
  }, {
    key: "getHours",
    value: function getHours() {
      return this.m.hours();
    }
  }, {
    key: "getMinutes",
    value: function getMinutes() {
      return this.m.minutes();
    }
  }, {
    key: "getSeconds",
    value: function getSeconds() {
      return this.m.seconds();
    }
  }, {
    key: "getMilliseconds",
    value: function getMilliseconds() {
      return this.m.milliseconds();
    }
  }, {
    key: "getDay",
    value: function getDay() {
      return this.m.day();
    }
  }, {
    key: "setTime",
    value: function setTime(t) {
      this.m = moment(t);
      return this.getTime();
    }
  }, {
    key: "setFullYear",
    value: function setFullYear(y) {
      var m = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.getMonth();
      var d = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.getDate();
      this.m.year(y).month(m).date(d);
      return this.getTime();
    }
  }, {
    key: "setMonth",
    value: function setMonth(m) {
      var d = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.m.date();
      this.m.month(m).date(d);
      return this.getTime();
    }
  }, {
    key: "setDate",
    value: function setDate(d) {
      this.m.date(d);
      return this.getTime();
    }
  }, {
    key: "setHours",
    value: function setHours(h) {
      var m = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.getMinutes();
      var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.getSeconds();
      var ms = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.getMilliseconds();
      this.m.hours(h).minutes(m).seconds(s).milliseconds(ms);
      return this.getTime();
    }
  }, {
    key: "setMinutes",
    value: function setMinutes(m) {
      var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.getSeconds();
      var ms = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.getMilliseconds();
      this.m.minutes(m).seconds(s).milliseconds(ms);
      return this.getTime();
    }
  }, {
    key: "setSeconds",
    value: function setSeconds(s) {
      var ms = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.getMilliseconds();
      this.m.seconds(s).milliseconds(ms);
      return this.getTime();
    }
  }, {
    key: "setMilliseconds",
    value: function setMilliseconds(ms) {
      this.m.milliseconds(ms);
      return this.getTime();
    }
  }], [{
    key: "setMoment",
    value: function setMoment(m) {
      moment = m;
      return MomentDate;
    }
  }]);

  return MomentDate;
}();


;// CONCATENATED MODULE: ./src/index.js



/* harmony default export */ const src = ({
  LocalDate: LocalDate,
  UTCDate: UTCDate,
  MomentDate: MomentDate
});

})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=toastui-date.js.map