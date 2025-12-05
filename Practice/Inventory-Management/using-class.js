class Inventory {
  constructor() {
    this.items = [];
  }

  // finding the index
  findProductIndex(name) {
    if (!name) return -1;
    name = name.toLowerCase();
    return this.items.findIndex((item) => item.name.toLowerCase() === name);
  }

  // add product
  addProduct({ name, quantity }) {
    name = name.toLowerCase();
    const index = this.findProductIndex(name);

    if (index !== -1) {
      this.items[index].quantity += quantity;
      console.log(`${name} quantity updated`);
    } else {
      this.items.push({ name: name, quantity });
      console.log(`${name} added to inventory`);
    }
  }

  // remove product
  removeProduct(name, quantity) {
    name = name.toLowerCase();
    const index = this.findProductIndex(name);

    // if not found
    if (index === -1) {
      console.log(`${name} not found`);
      return;
    }

    // if not enough quantity
    const currentQty = this.items[index].quantity;

    if (currentQty < quantity) {
      console.log(
        `Not enough ${name} available, remaining pieces: ${currentQty}`
      );
      return;
    }

    // subtract quantity
    const newQty = currentQty - quantity;

    // if newQty is 0 - remove items
    if (newQty === 0) {
      this.items.splice(index, 1);
      console.log(`${name} removed from inventory.`);
      return;
    } else {
      this.items[index].quantity = newQty;
      console.log(`Remaining ${name} pieces: ${newQty}`);
    }
  }
}

const store = new Inventory();

store.addProduct({ name: 'FLOUR', quantity: 5 });
store.addProduct({ name: 'flour', quantity: 10 });

store.removeProduct('FLOUR', 5);

console.log(store.items);
