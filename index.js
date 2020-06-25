'use strict';

// YOU KNOW WHAT TO DO //

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
  * @return {string}: a string of the value's datatype
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
  * @return {(array | string)} : an empty array if <arr> is not an array or <num> is 
  * negative, the element at the first index of an array if <num> is undefined or if 
  * <num> is not actually a number, or the first <number> of elements in an array if 
  * no edge cases are passed in.
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
 * @return {(array | string)} : an empty array if <arr> is not an array or <num> is 
 * negative, the element at the last index of an array if <num> is undefined or if 
 * <num> is not actually a number, or the last <number> of elements in an array if 
 * no edge cases are passed in.
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
 * @return {number} : the numerical index of the first occurance of a value in an array or -1 
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

/** unique : designed to take an array with duplicate values & return a new
 * array with the duplicates removed
 * 
 * @param {array} array : the original array with duplicates
 * @return {array} uniqueArr : a new array with duplicates removed / with unique values only
 */ 
 
function unique (array) {
    let uniqueArr = [];
    for (let i = 0; i < array.length; i++) {
        if (indexOf(array, array[i]) !== -1 && !uniqueArr.includes(array[i])) {
            uniqueArr.push(array[i]);
        }
    } return uniqueArr;
}

module.exports.unique = unique;

/** filter : designed to loop through an array and call a function for each of the array's
 * elements. if the function returns true, that element should be pushed into a new array.
 * 
 * @param {array} array : the array in which you'll iterate
 * @param {function} func : the function you will pass to each of the array's elements
 * @return {array} newArr : an array with elements that returned true after being passed
 * to the function
 */ 
 
function filter (array, func) {
    let newArr = [];
    each(array, function(e, i, a) {
        if (func(e, i, a) === true) {
            newArr.push(e);
        } 
    });
    return newArr;
}

module.exports.filter = filter;

/** reject : designed to loop through an array and call a function for each of the array's
 * elements. if the function returns false, that element should be pushed into a new array.
 * 
 * @param {array} array : the array in which you'll iterate 
 * @param {function} func : the function you will pass to each of the array's elements, 
 * their indices, & then the entire array
 * @return {array} newArr : an array with elements that returned false after being passed
 * to the function
 */ 
 
function reject (array, func) {
  let newArr = [];
  filter(array, function(e, i, a){
    if(func(e, i, a) === false){
        newArr.push(e);
    }
  });
  return newArr;
}

module.exports.reject = reject;

/** partition : designed to loop through an array and call a function for each of the array's 
 * elements. a master array will be made with two sub arrays: one for elements that returned
 * true after being passed to the function & one for elements that returned false.
 * 
 * @param {array} array : the array in which you'll iterate
 * @param {function} func : the function you will pass to each of the array's elements, 
 * their indices, & then the entire array
 * @return {array} newArr : a master array with two sub arrays. one will be filled with 
 * elements that returned true after being passed to the function; the other will be filled
 * with elements that returned false after being passed to the function.
 */ 
 
function partition (array, func) {
    let newArr = [];
    let truthyArr = filter(array, function(e, i, a) {
        return func(e, i, a) === true;
    });
    newArr.push(truthyArr);
    let falsyArr = reject(array, function(e, i, a){
        return func(e, i, a) === true;
    });
    newArr.push(falsyArr);
    return newArr;
};

module.exports.partition = partition;

/** map : designed to loop over a collection & apply a function to each of the elements.
 * a new array is returned with each of the returned values from the function's loop.
 * 
 * @param {array or object} collection : the collection in which you'll iterate
 * @param {function} func : the function you will pass to each of the collection's values, 
 * their positions, & then the entire collection
 * @return {array} newArr : a new array with the return values from the function's loop.
 */
 
function map (collection, func) {
    let newArr = [];
    each(collection, function(value, position, collection){
        newArr.push(func(value, position, collection));
    });
    return newArr;
};

module.exports.map = map;

/** pluck : designed to iterate through an array of objects and push the values of a 
 * specific property into a new array that is then returned.
 * 
 * @param {array} array : an array of objects through which you'll iterate
 * @param {string} property : the property whose values you are interested in storing
 * @return {array} properties : a new array with values that correspond to the property passed in
 */
 
function pluck (array, property) {
    let newArr = [];
    map(array, function(e, i, a) {
        newArr.push(e[property]);
    });
    return newArr;
};

module.exports.pluck = pluck;

/** every : designed to iterate through a collection & call a function for each element.
 * returns a boolean dependent on whether or not every element returns as true.
 * 
 * @param {array or object} collection : a collection through which you'll iterate
 * @param {function} func : the function you will pass to each of the collection's elements
 * @return {boolean} : after being passed into the function, does every element return as true?
 * if no callback function is given, the truthiness of the collection's values will be evaluated.
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

/** some : designed to iterate through a collection & call a function for each element.
 * returns a boolean dependent on whether or not at least one element returns as true.
 * 
 * @param {array or object} collection : a collection through which you'll iterate
 * @param {function} func : the function you will pass to each of the collection's elements
 * @return {boolean} : after being passed into the function, does any of the elements return true?
 * if no callback function is given, the truthiness of the collection's values is evaluated.
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

/** reduce : designed to sum together the elements of a collection. will call a function for
 * every element of a collection passing the arguments previousResult, element, & index. 
 * 
 * @param {array} arr : a collection through which you'll iterate
 * @param {function} func : the function you will pass to each of the collection's elements
 * @param {*} seed : used as previousResult for first iteration. if seed is not passed in,
 * the first element of the collection is used. not limited to only being a number. 
 * @return {*} previousResult : the accumulation of a collection's elements; will match
 * the seed's datatype.
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

/** extend : designed to update one object's value with another object's value if they 
 * share the same key. if a key of the second object is not already in the first object,
 * it will be added in with its value
 * 
 * @param {object} collection : the original collection through which you'll iterate
 * @param {an array of multiple objects} ...otherObjs : the additional objects
 * @return {object} updated : the original object updated
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

 