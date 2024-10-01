/**

## Example 6 - Inline Arrow Functions

Make the code refactoring using arrow functions.

```js
 */

const each = (array, callback) => {
  const newArr = [];

  array.forEach((element) => {
    newArr.push(callback(element));
  });

  return newArr;
};

console.log(each([64, 49, 36, 25, 16], (value) => value * 2));
console.log(each([64, 49, 36, 25, 16], (value) => value - 10));
console.log(each([64, 49, 36, 25, 16], (value) => Math.sqrt(value)));
console.log(
  each([1.5, 2.1, 16.4, 9.7, 11.3], (value) => {
    return Math.ceil(value);
  })
);
console.log(
  each([1.5, 2.1, 16.4, 9.7, 11.3], (value) => {
    return Math.floor(value);
  })
);
