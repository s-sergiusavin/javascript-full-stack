/*
# Module 5 - Lesson 9 - Function call context and this

## Example 1 - Jewelry workshop

Write a `calcTotalPrice(stoneName)` method that takes the name of a stone,
calculates and returns the total cost of stones with that name, price, and
quantity from the `stones` property.
*/

const chopShop = {
  stones: [
    { name: "Emerald", price: 1300, quantity: 4 },
    { name: "Diamond", price: 2700, quantity: 3 },
    { name: "Sapphire", price: 1400, quantity: 7 },
    { name: "Ruby", price: 800, quantity: 2 },
  ],
  calcTotalPrice(stoneName) {
    const stone = this.stones.find((element) => element.name === stoneName);

    if (!stone) {
      return `Nu Avem piatra cu numele de ${stoneName}`
    }

    return stone.price * stone.quantity;
  },
};

console.log(chopShop.calcTotalPrice("Emerald")); // 5200
console.log(chopShop.calcTotalPrice("Diamond")); // 8100
console.log(chopShop.calcTotalPrice("Sapphire")); // 9800
console.log(chopShop.calcTotalPrice("Ruby")); // 1600
