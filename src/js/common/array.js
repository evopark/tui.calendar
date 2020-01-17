/**
 * @fileoverview Utility module for array sort, binary search.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */
'use strict';

var TZDate = require('./timezone').Date;
var util = require('tui-code-snippet');
var datetime = require('../common/datetime');
var model = require('../common/model');
var getMaxTravelTime = model.getMaxTravelTime;

/**
 * A module for sorting array.
 * @module array
 */

/**********
 * Search
 **********/

/**
 * search item index using binary search algorithm.
 *
 * the array must be sorted.
 * @param {array} arr array to search.
 * @param {(string|number|boolean)} search value to search.
 * @param {function} [fn] iteratee for retrieve each element's value to search.
 * @param {function} [compare] compare function for specific sort status. default is string ascending.
 * @returns {number} The number of item index searched. return negative number when no exist that item.
 * It can use insert index after Math.abs()
 * @example
 *
 * var arr = [1, 3, 7, 11, 15, 23];
 *
 * function sortNumber(a, b) {
 *     return a - b;
 * }
 *
 * bsearch(arr, 15, null, sortNumber);    // 4
 * bsearch(arr, 21, null, sortNumber);    // -5
 *
 * arr.splice(Math.abs(bsearch(arr, 21, null, sortNumber)), 0, 21);
 * // [1, 2, 7, 11, 15, 21, 23]
 */
function bsearch(arr, search, fn, compare) {
    var minIndex = 0,
        maxIndex = arr.length - 1,
        currentIndex,
        value,
        comp;

    compare = compare || stringASC;

    while (minIndex <= maxIndex) {
        currentIndex = (minIndex + maxIndex) / 2 | 0; // Math.floor
        value = fn ? fn(arr[currentIndex]) : arr[currentIndex];
        comp = compare(value, search);

        if (comp < 0) {
            minIndex = currentIndex + 1;
        } else if (comp > 0) {
            maxIndex = currentIndex - 1;
        } else {
            return currentIndex;
        }
    }

    return ~maxIndex;
}

/**********
 * Compare Functions
 **********/

/**
 * compare function for array sort.
 *
 * sort array by ascending.
 * @param {boolean} a The boolean to compare
 * @param {boolean} b The boolean to compare.
 * @returns {number} Result of comparison.
 */
function booleanASC(a, b) {
    if (a !== b) {
        return a ? -1 : 1;
    }

    return 0;
}

/**
 * compare function for array sort.
 *
 * sort array by descending.
 * @param {boolean} a The boolean to compare
 * @param {boolean} b The boolean to compare.
 * @returns {number} Result of comparison.
 */
function booleanDESC(a, b) {
    if (a !== b) {
        return a ? 1 : -1;
    }

    return 0;
}

/**
 * compare function for array sort.
 *
 * sort array by number ascending.
 * @param {number} _a The number to compare.
 * @param {number} _b The number to compare.
 * @returns {number} Result of comparison.
 */
function numberASC(_a, _b) {
    var a = Number(_a),
        b = Number(_b);

    return a - b;
}

/**
 * compare function for array sort.
 *
 * sort array by number descending.
 * @param {number} _a The number to compare.
 * @param {number} _b The number to compare.
 * @returns {number} Result of comparison.
 */
function numberDESC(_a, _b) {
    var a = Number(_a),
        b = Number(_b);

    return b - a;
}

/**
 * compare function for array sort.
 *
 * sort array by string ascending
 * @param {string} _a The string to compare.
 * @param {string} _b The string to compare.
 * @returns {number} Result of comparison.
 */
function stringASC(_a, _b) {
    var a = String(_a),
        b = String(_b);

    if (a > b) {
        return 1;
    }
    if (a < b) {
        return -1;
    }

    return 0;
}

/**
 * compare function for array sort.
 *
 * sort array by string descending
 * @param {string} _a The string to compare.
 * @param {string} _b The string to compare.
 * @returns {number} Result of comparison.
 */
function stringDESC(_a, _b) {
    var a = String(_a),
        b = String(_b);

    if (a > b) {
        return -1;
    }
    if (a < b) {
        return 1;
    }

    return 0;
}

/**
 * compare function for array sort.
 *
 * sort array by string ascending with ignore case.
 * @param {string} _a The string to compare.
 * @param {string} _b The string to compare.
 * @returns {number} Result of comparison.
 */
function stringASCIgnoreCase(_a, _b) {
    var a = String(_a).toLowerCase(),
        b = String(_b).toLowerCase();

    if (a > b) {
        return 1;
    }
    if (a < b) {
        return -1;
    }

    return 0;
}

/**
 * compare function for array sort.
 *
 * sort array by string descending with ignore case.
 * @param {string} _a The string to compare.
 * @param {string} _b The string to compare.
 * @returns {number} Result of comparison.
 */
function stringDESCIgnoreCase(_a, _b) {
    var a = String(_a).toLowerCase(),
        b = String(_b).toLowerCase();

    if (a > b) {
        return -1;
    }
    if (a < b) {
        return 1;
    }

    return 0;
}

/**
 * Compare schedule models included a travel time for sort.
 *
 * 1. all day schedule first.
 * 2. early start included a travel time.
 * 3. longest duration.
 * 4. early created.
 * @param {Schedule|ScheduleViewModel} a The object schedule instance.
 * @param {Schedule|ScheduleViewModel} b The object schedule instance.
 * @returns {number} Result of comparison.
 */
function scheduleASC(a, b) {
    var durationA, durationB;
    var allDayCompare, startsCompare;
    var modelA = a.valueOf();
    var modelB = b.valueOf();
    var aTravelTime;
    var bTravelTime;
    var aGoingDuration;
    var bGoingDuration;
    var renderedStartA;
    var renderedStartB;

    allDayCompare = booleanASC(modelA.isAllDay || a.hasMultiDates, modelB.isAllDay || b.hasMultiDates);

    if (allDayCompare) {
        return allDayCompare;
    }

    aTravelTime = getMaxTravelTime(a);
    bTravelTime = getMaxTravelTime(b);
    aGoingDuration = datetime.millisecondsFrom('minutes', aTravelTime.maxGoingDuration);
    bGoingDuration = datetime.millisecondsFrom('minutes', bTravelTime.maxGoingDuration);
    renderedStartA = new TZDate(a.getStarts().getTime() - aGoingDuration);
    renderedStartB = new TZDate(b.getStarts().getTime() - bGoingDuration);

    startsCompare = datetime.compare(renderedStartA, renderedStartB);

    if (startsCompare) {
        return startsCompare;
    }

    durationA = a.duration();
    durationB = b.duration();

    if (durationA < durationB) {
        return 1;
    }
    if (durationA > durationB) {
        return -1;
    }

    return util.stamp(modelA) - util.stamp(modelB);
}

function sortByDuplicate(arr) {
    var clone = arr.slice(0);
    var newArr = [];
    var equal = [];
    var el;

    while (clone.length) {
        el = clone[0];

        newArr.push(el);
        equal = _duplicates(clone, _isEqualVM(el));

        if (equal.length) {
            newArr = newArr.concat(equal);
        }

        clone = _remove(clone, _isEqualVM(el));
    }

    return newArr;
}

function _isEqualVM(vm) {
    return function(value) {
        return vm.model.id === value.model.id;
    };
}

function _duplicates(array, condition) {
    return array.slice(1, array.length).filter(condition);
}

function _remove(arr, condition) {
    return arr.filter(function(el) {
        return !condition(el);
    });
}

module.exports = {
    bsearch: bsearch,
    compare: {
        schedule: {
            asc: scheduleASC
        },
        bool: {
            asc: booleanASC,
            desc: booleanDESC
        },
        num: {
            asc: numberASC,
            desc: numberDESC
        },
        str: {
            asc: stringASC,
            desc: stringDESC,
            ascIgnoreCase: stringASCIgnoreCase,
            descIgnoreCase: stringDESCIgnoreCase
        }
    },
    sortByDuplicate: sortByDuplicate
};
