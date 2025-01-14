/**
 * Task description: Write a method that returns a deep array like [[key, value]]
 * Expected Result: ({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]
 * Task complexity: 1 of 5
 * @param {Object} object - Any object to transform into array
 * @returns {Array} - a deep array
 */
export const makePairs = (object) => {
  const arr = [];
  for (const keys in object) {
    arr.push([keys, object[keys]]);
  }

  return arr;
};
