/** 
## Example 9 - forEach method

Make the code refactoring using `forEach` method and arrow functions.

```js
*/

function calсulateAverage(...args) {
  let total = 0;

  args.forEach((element) => {
    total += element;
  });

  return total / args.length;
}

console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
console.log(calсulateAverage(14, 8, 2)); // 8
console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2
