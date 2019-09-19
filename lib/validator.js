const { CastError } = require('./Errors');
/**
 * Is this a string?
 * @param input
 * @returns {boolean}
 */
const isString = input => {
  return typeof input === 'string';
};

/**
 * Is this a number?
 * @param input
 * @returns {boolean}
 */
const isNumber = input => {
  return typeof input === 'number';
};

/**
 * Is this an array?
 * @param input
 * @returns {boolean}
 */
const isArr = input => {
  return Array.isArray(input) === true;
};

/**
 * Is this an object?
 * @param input
 * @returns {boolean}
 */
const isObject = input => {
  if(Array.isArray(input) === false) {
    return typeof input === 'object';
  }
};

/**
 * Is this a function?
 * @param input
 * @returns {boolean}
 */
const isFunction = input => {
  return typeof input === 'function';
};

/**
 * Is this a boolean?
 * @param input
 * @returns {boolean}
 */
const isBoolean = input => {
  return typeof input === 'boolean';
};

/**
 * 
 * @param input 
 * @returns {number}
 */

const toNumber = input => {
  if(isNumber(input)) {
    return Number(input);
  }
  else {
    return CastError;
  }
};

const toString = input => {
  if(isString(input)) {
    return input;
  }
};

/**
 * Based on a set of rules, what is correct validator?
 * @param input
 * @returns {boolean}
 */
const getCaster = (input) => {
  const casterList = {
    'string': toString,
    'number': toNumber,
    // 'boolean': toBoolean,
    // 'date': toDate
  };
  return casterList[input];
};

module.exports = {
  isString,
  isNumber,
  isArr,
  isObject,
  isFunction,
  isBoolean,
  getCaster
};


