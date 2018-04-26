class Pastry {
  constructor(name, price, description, items) {
    this.name = name;
    (this.price = price), (this.description = description);
    this.items = [];
  }
  allItems() {
    return this.items;
  }
}

// class Muffins extends Pastry {
//   constructor(allMuffins) {
//     super(name,price, description, image);
//     this.allMuffins = [];
//   }
//   allMuffins() {
//     return this.all;
//   }
// }

// class Cookies extends Pastry {
//   constructor(allCookies) {
//     super(name, price, description, image);
//     this.allCookies = [];
//   }
//   allCookies() {
//     return this.allCookies;
//   }
// }

// class Cakes extends Pastry {
//   super(name, price, description, image)
//   constructor(allCakes) {
//     // super(name, price, description, image);
//     this.allCakes = [];
//   }
//   allCakes() {
//     return this.allCakes;
//   }
// }

// class CupCakes extends Pastry {
//   constructor(allCupCakes) {
//     super(name, price, description, image);
//     this.allCupCakes = [];
//   }
//   allCupCakes() {
//     return this.allCupCakes;
//   }
// }


let layerCake = new Pastry(
  "Layer Cake",
  "$7.99",
  "Chocolatey goodness,with tons of layer for extra sweetness, and crunch"
);
let caramelCake = new Pastry(
  "Caramel Almond Cake",
  "$9.99",
  "Caramel flavored cake with caramel syrup with candied nuts"
);
let macaroonCake = new Pastry(
  "Macaroon Cake",
  "$15.99",
  "chocolate ganashe with an assortment of macroons on top"
);
let fruitCake = new Pastry(
  "Fruit Cake",
  "$12.99",
  "vanilla cake with assortment of fresh fruit"
);
let tiramisuCake = new Pastry(
  "Tiramisu Cake",
  "$17.99",
  "ladyfingers dipped in coffee, layered with a whipped mixture of eggs, sugar, and mascarpone cheese, flavoured with cocoa"
);

let allCakes = [layerCake, caramelCake, macaroonCake, fruitCake, tiramisuCake];

// strawberryCheeseCake = new Cakes();
// fudgeCake = new Cakes();
// cupsCake = new Cakes();
// frostedCake = new Cakes();

// for (let i = 0; i < allCakes.length; i++) {
// document.querySelector("#cake"${i}).innerHTML = `Name:${
//   allCakes[i].name
// } </br>Price: ${allCakes[i].price} </br> Description: ${allCakes[i].description}`;
// }

document.querySelector("#cake1").innerHTML = `Name:${
  allCakes[0].name
} </br>Price: ${allCakes[0].price} </br> Description: ${allCakes[0].description}`;