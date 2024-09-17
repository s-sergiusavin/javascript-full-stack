/*## Example 3 - Array iteration

Write a script to iterate over the `fruits` array with a `for` loop. For each array element
print a string in the format `element_number: element_value` to the console.
Element numbering must start from `1`.
*/

const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋"];

for (let i = 0; i < fruits.length; i++) {
    console.log(`${i + 1}: ${fruits[i]}`);
}

let i = 0;

for (const fruit of fruits) {
    i++;
    console.log(`${i}: ${fruit}`)
}

let j = 0;
fruits.forEach( function(fruit) {
    j++;
    console.log(`${j}: ${fruit}`)
})