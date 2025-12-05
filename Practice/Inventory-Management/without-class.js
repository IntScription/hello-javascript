let inventory = [];

// find a product index by name
const findProductIndex = (name) => {
  if (!name) return -1;
  name = name.toLowerCase();

  return inventory.findIndex((item) => item.name.toLowerCase() === name);
};

// add product
const addProduct = (product) => {
  const name = product.name.toLowerCase();
  const qty = product.quantity;
  const index = findProductIndex(name);

  if (index !== -1) {
    inventory[index].quantity += qty;
    console.log(`${name} quantity updated`);
  } else {
    inventory.push({ name, quantity: qty });
    console.log(`${name} added to inventory`);
  }
};

// remove product
const removeProduct = (name, quantity) => {
  name = name.toLowerCase();
  const index = findProductIndex(name);

  // if not found
  if (index === -1) {
    console.log(`${name} not found`);
    return;
  }

  // if not enough quantity
  const currentQty = inventory[index].quantity;

  if (currentQty < quantity) {
    console.log(
      `not enough ${name} available, remaining pieces: ${currentQty}`
    );
    return;
  }

  // subtract quantity
  const newQty = currentQty - quantity;

  // if newQty is 0 - remove items
  if (newQty === 0) {
    inventory.splice(index, 1);
    console.log(`${name} removed from inventory.`);
    return;
  } else {
    // update and log
    inventory[index].quantity = newQty;
    console.log(`Remaining ${name} pieces: ${newQty}`);
  }
};

addProduct({ name: 'FLOUR', quantity: 5 });
addProduct({ name: 'flour', quantity: 10 });

removeProduct('FLOUR', 5);

console.log(inventory);
