/**
 * Task description: Write a method that returns an array without listed values
 * Expected Result: [1, 2, 3, 1, 2] without 1, 2 => [3]
 * Task Complexity: 2 of 5
 * @param {Array} array - Array of primitive data types
 * @param {?} args list of values to remove
 * @returns {Array}
 */
export const without = (array, ...args) => {
  let newArr = JSON.parse(JSON.stringify(array));

  for (let i = 0; i <= args.length - 1; i += 1) {
    newArr = newArr.filter((e) => e !== args[i]);
  }

  return newArr;
};
