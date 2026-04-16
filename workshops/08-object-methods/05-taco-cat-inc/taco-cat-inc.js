let tacoCatInc = {
  gourmetShell: {
    'hard treat shell': {cost: 2, quantity: 100},
    'soft treat shell': {cost: 1.5, quantity: 100}
  },

  gourmetFishFilling: {
    'salmon': {cost: 5, quantity: 100},
    'tuna': {cost: 5.5, quantity: 100},
    'sardines': {cost: 1.5, quantity: 100}
  },

  gourmetVeggie: {
    'cat grass': {cost: 1, quantity: 100}
  },

  gourmetSeasoning: {
    'cat nip': {cost: 0.5, quantity: 100},
    'treat dust': {cost: 0.1, quantity: 100}
  },

  cash: 0,

  currentInventory(){
    let total = 0;

    for (let category in this) {
      if (typeof this[category] === 'object') {
        for (let item in this[category]) {
          let product = this[category][item];
          total += product.cost * product.quantity;
        }
      }
    }

    return total;
  },
  sale(order) {
    let total = 0;

    for (let category in order) {
      let itemName = order[category];

      let product = this[category][itemName];

      total += product.cost;

      product.quantity -= 1;
    }

    this.cash += total;

    return total;
  }
};

// YOUR CODE BELOW
