/*
## Example 2 - Storagе

Write a `Storage` class that creates objects for managing a warehouse of goods.
When called, it will receive one argument - the initial array of goods, and write
it to the `items` property.

Add class methods:

- `getItems()` - returns an array of products.
- `addItem(item)` - receives a new product and adds it to the current ones.
- `removeItem(item)` - receives the product and, if it exists, removes it from the current.
*/

class Storage {
    constructor(items) {
        this.items = items;
    }

    getItems() {
        return this.items;
    }

    addItem(item) {
        this.items.push(item);
    }
    
    removeItem(item) {
        const index = items.indexOf(item);
        if (index === -1) {
            console.log('Elementul nu exista in stoc');
            return;
        }

        items.splice(index, 1);
    }
}

const storage = new Storage(["🍎", "🍋", "🍇", "🍑"]);

const items = storage.getItems();
console.table(items); // [ '🍎', '🍋', '🍇', '🍑' ]

storage.addItem("🍌");
console.table(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

storage.removeItem("🍋");
console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]
