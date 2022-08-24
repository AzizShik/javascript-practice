/**
 * Task description: Write a method that makes a shallow check is object empty
 * Expected Result: ({}) => true, ({ a: undefined }) => true, ({ a: 1 }) => false
 * Empty values: '', null, NaN, undefined
 * Task complexity: 2 of 5
 * @param {Object} object - Object with values of primitive data types
 * @returns {boolean}
 */

const emptyValues = ['', null, NaN, undefined];

export const isEmpty = (object) => {
  for (const key in object) {
    if (!emptyValues.includes(object[key])) {
      return false;
    }
  }
  return true;
};
