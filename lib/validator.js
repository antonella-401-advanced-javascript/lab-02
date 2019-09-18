
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
 * Is this an array of strings?
 * @param {string[]} input 
 * @returns {boolean}
 */
const isArrayOfStrings = (input) => {
  for(let i = 0; i < input.length; i++) {
    if(typeof input[i] === 'string') {
      return input;
    }
  }
};

/**
 * Is this an array of number?
 * @param {number[]} input 
 * @returns {boolean}
 */
const isArrayOfNumbers = (input) => {
  for(let i = 0; i < input.length; i++) {
    if(typeof input[i] === 'number') {
      return input;
    }
  }
};

/**
 * Is this an array of objects?
 * @param {Object[]} input 
 * @returns {boolean}
 */
const isArrayOfObjects = (input) => {
  for(let i = 0; i < input.length; i++) {
    if(typeof input[i] === 'object') {
      return input;
    }
  }
};

/**
 * Is this an array of booleans?
 * @param {boolean[]} input 
 * @returns {boolean}
 */
const isArrayOfBooleans = (input) => {
  for(let i = 0; i < input.length; i++) {
    if(typeof input[i] === 'boolean') {
      return input;
    }
  }
};

/**
 * Based on a set of rules, what is correct validator?
 * @param input
 * @returns {boolean}
 */
const getValidator = (input) => {
  if(typeof input === 'string') {
    return isString;
  }
  if(typeof input === 'number') {
    return isNumber;
  }
  if(Array.isArray(input) === true) {
    if(input.length > 1) {
      for(let i = 0; i < input.length; i++) {
        if(typeof input[i] === 'string') {
          return isArrayOfStrings;
        }
        if(typeof input[i] === 'number') {
          return isArrayOfNumbers;
        }
        if(typeof input[i] === 'object') {
          return isArrayOfObjects;
        }
        if(typeof input[i] === 'boolean') {
          return isArrayOfBooleans;
        }
      }
    }
    return isArr;
  }
  if(typeof input === 'object') {
    return isObject;
  }
  if(typeof input === 'boolean') {
    return isBoolean;
  }
  if(typeof input === 'function') {
    return isFunction;
  }
};

module.exports = {
  isString,
  isNumber,
  isArr,
  isObject,
  isFunction,
  isBoolean,
  isArrayOfStrings,
  isArrayOfNumbers,
  isArrayOfObjects,
  isArrayOfBooleans,
  getValidator
};


