/**
 * Task description: Write a method that makes a shallow compare of two arrays and returns true if they are identical.
 * Expected Result: ([1, 2, 3], [1, 2, 3]) => true
 * Task Complexity: 2 of 5
 * @param {Array} firstArray - Array of primitive data types
 * @param {Array} secondArray - Array of primitive data types
 * @returns {boolean}
 */
export const isEqual = (firstArray, secondArray) => {
  let res;

  if (firstArray.length !== secondArray.length) return false;

  for (let i = 0; i <= firstArray.length - 1; i += 1) {
    res = firstArray[i] === secondArray[i];
  }

  return res;
};
