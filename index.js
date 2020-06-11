'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;



/** 
 * identity: take a value and return that input value unchanged.
 * 
 * @param {*} value: a single value that can be any datatype
 * @return {*}: the input value unchanged
 * 
 */
 
 function identity (value) {
     return value;
 }
 
 module.exports.identity = identity;
 
 /** typeOf: take a value and return its datatype
  * 
  * @param {*} value: a single value that can be any datatype
  * @return {*}: the value's datatype
  * 
  */
  
function typeOf (value) {
    if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean' || typeof value === 'function' || typeof value === 'undefined') {
        return typeof value;
    } else if (Array.isArray(value)) {
        return 'array';
    } else if (value === null) {
        return 'null';
    } else if (typeof value === 'object') {
        return typeof value;
    } 
 }
 
 module.exports.typeOf = typeOf; 

 /** first: Designed to return the first <number> of items in an array 
  * 
  * @param {array} arr: the collection whose first <num> element(s) you are searching for
  * @param {number} num: representing the index of the element you are searching for
  * @return {(array | string)} : an empty array, the element at the first index of an array,
  * or the first <number> of elements in an array
  */
 
function first (arr, num) {
    if (!Array.isArray(arr) || num < 0) {
        return [];
    } else if (num === undefined || typeof num !== 'number') {
        return arr[0];
    } else {
        return arr.slice(0, num);
    }
}

module.exports.first = first;
  
/** last: Designed to return the last <number> of items in an array.
 * 
 * @param {array} arr : the collection whose last <num> element(s) you are searching for
 * @param {number} num : representing the index of the element you are searching for
 * @return {(array | string)} : an empty array, the element at the last index of an array,
 * or the last <number> of elements in an array
 * 
 */
 
function last (arr, num) {
    if (!Array.isArray(arr) || num < 0) {
        return [];
    } else if (num === undefined || typeof num !== 'number') {
        return arr[arr.length-1];
    } else if (num > arr.length - 1) {
        return arr;
    } else {
        return arr.slice(num - 1, arr.length);
    }
}

module.exports.last = last;
   
/** indexOf : designed to return the index of an array that is the first
 *  occurance of a value.
 * 
 * @param {array} arr : the array over which to iterate
 * @param {*} value  : the value you are searcing for within the array
 * @return {*} : the index of the first occurance of a value in an array or -1 
 */

function indexOf (arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes(value)) {
            return i;
        } else if (!arr.includes(value)) {
            return -1;
        }
    }
}

module.exports.indexOf = indexOf;

/** contains : designed to evaluate whether or not an array contains a specific value
 * 
 * @param {array} arr : the array in which you are searching for a value
 * @param {*} value : the value you are searching for in an array
 * @return {boolean} result : the result of using the Array.includes() method
 */
 
function contains (arr, value) {
    let result = (arr.includes(value)) ? true : false;
    return result;
}

module.exports.contains = contains;

/** each : designed to loop over a collection and applies the func function to
 * each of the collection's indices/elements or keys/values
 * 
 * @param {array or object} collection : the collection over which to iterate
 * @param {function} func : the function to apply to each of the collection's
 * indices/elements or keys/values
 */ 
 
function each (collection, func) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++)
            func (collection[i], i, collection);
    } else if (typeof collection === 'object') {
        for (var key in collection) {
            func (collection[key], key, collection);
        }
    }
}

module.exports.each = each;


/////////////// NEED //////////////////////////
//////////////// TO ///////////////////////////
////////////// FINISH /////////////////////////
//////////////// THE //////////////////////////
///////////// FOLLOWING //////////////////////
///////////////////////////////////////////////


/** unique : 
 * 
 * @param {array} array : 
 * @return {array} uniqueArr :
 */ 
 
function unique (array) {
    let uniqueArr = [];
    for (let i = 0; i < array.length; i++) {
        if (!uniqueArr.includes(array[i])) {
            uniqueArr.push(array[i]);
        }
    } return uniqueArr;
}

module.exports.unique = unique;

/** filter : 
 * 
 * @param {array} array : 
 * @param {function} callback :
 * @return {array} elements :
 */ 
 
function filter (array, callback) {
    let elements = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array) === true) {
            elements.push(array[i]);
        } 
    }
    return elements;
}

module.exports.filter = filter;

/** reject : 
 * 
 * @param {array} array : 
 * @param {function} callback :
 * @return {array} newArr :
 */ 
 
function reject (array, callback) {
  //create a new array
  let newArr = [];
  filter(array,function(element, i, array){
    if(callback(element, i, array) === false){
      newArr.push(element);
    }
  });
  return newArr;
}

module.exports.reject = reject;

/** partition : 
 * 
 * @param {array} array : 
 * @param {function} callback :
 * @return {array} arr :
 */ 
 
function partition (array, callback) {
    let arr = [];
    let truthyArr = [];
    let falsyArr = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array) == true) {
            truthyArr.push(array[i]);
        } else {
            falsyArr.push(array[i]);
        }
    }
    arr.push(truthyArr);
    arr.push(falsyArr);
    return arr;
    
}

module.exports.partition = partition;

/** map : 
 * 
 * @param {array or object} collection : 
 * @param {function} callback :
 * @return {array} newArr :
 */
 
function map (collection, callback) {
  let newArr = [];
  if (Array.isArray(collection)) {
    each(collection, function(element, i, array) {
      newArr.push(callback(element, i, array));
    }); 
    } 
    else if (typeof collection === 'object') {
    each(collection, function(value, key, object) {
      newArr.push(callback(collection[key], key, collection));
    });
  }
  return newArr;
}

module.exports.map = map;

/** pluck : 
 * 
 * @param {array} array : 
 * @param {property} property :
 * @return {array} propArr :
 */
 
function pluck (array, property) {
  let propArr = [];
  each(array, function(element, i, array) {
    propArr.push(element[property]);
  });
  return propArr;
}

module.exports.pluck = pluck;

/** every : 
 * 
 * @param {array or object} collection : 
 * @param {function} func :
 * @return {boolean} :
 */

function every (collection, func) {
    if (func === undefined) {
        return !collection.includes(false);
    } else if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (func(collection[i], i, collection) === false) {
                return false;
            }
        } return true;
    } else if (typeof collection === 'object') {
        for (var key in collection) {
            if (func(collection[key], key, collection) === false) {
                return false;
            }
        } return true;
    }
}

module.exports.every = every;

/** some : 
 * 
 * @param {array or object} collection : 
 * @param {function} func :
 * @return {boolean} :
 */
 
function some (collection, func) {
    if (func === undefined) {
        return !collection.includes(false);
    } else if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (func(collection[i], i, collection) === true) {
                return true;
            }
        } return false;
    } else if (typeof collection === 'object') {
        for (var key in collection) {
            if (func(collection[key], key, collection) === true) {
                return true;
            }
        } return false;
    }
}

module.exports.some = some;

/** reduce : 
 * 
 * @param {array or object} collection : 
 * @param {function} func :
 * @param {number} seed :
 * @return {number} value :
 */
 
function reduce (arr, func, seed) {
    let previousResult;
    if (seed !== undefined) { 
        previousResult = seed;
        each(arr, function(e, i, a) {
            previousResult = func(previousResult, e, i, a);
        });
    } else { 
        previousResult = arr[0];
        for(let i = 1; i < arr.length; i++) {
            previousResult = func(previousResult, arr[i], i, arr)
        }
    } return previousResult;
}

module.exports.reduce = reduce;

/** extend : 
 * 
 * @param {} collection :
 * @return {object} updated :
 */


function extend (obj1, ...otherObjs) {
    each(otherObjs, function(e, i, a) {
        for (let key in e) {
            obj1[key] = e[key];
        }
    });
    return obj1;
}
module.exports.extend = extend;

 