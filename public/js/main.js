class Pastry {
  constructor(name, price, description) {
    this.name = name;
    (this.price = price), (this.description = description);
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

let cheeseCake = new Pastry(
  "Strawberry cheesecake",
  "$11.99",
  "better then Juniors"
);

let fudgeCake = new Pastry(
  "Fudge Cake",
  "$9.99",
  " made with chocolate cake mix, chocolate pudding, and chocolate chips"
);

let cupsCake = new Pastry("Cake in Cups", "$33.99", "yes they are worth it");

let frostedCake = new Pastry("Frosted Cake", "$77.99", "Special Cake");

// for (let i = 0; i <= allCakes.length; i++) {
//   document.querySelector(cakeSelector[i]).innerHTML = "Name:" + allcakes[i].name + " Price: " +
//     allCakes[i].price +
//    " Description: " + allCakes[i].description;
// }

let chocCookie = new Pastry(
  "chocolate cookie",
  "$1",
  "yummy chocolate cookie"
);

let oatmealCookie = new Pastry(
   "oatmeal cookie",
   "$1", 
   "yummy oatmeal cookie"
  );

let almondCookie = new Pastry(
  "almond cookie", 
  "$1", 
  "yummy almond cookie"
);

let redVelvetCookie = new Pastry(
  "red velvet cookie",
  "$1",
  "yummy red velvet cookie"
);

let fakeCookie1 = new Pastry(
  "chocolate cookie",
  "$1",
  "yummy chocolate cookie"
);

let fakeCookie2 = new Pastry(
  "chocolate cookie",
  "$1",
  "yummy chocolate cookie"
);
let fakeCookie3 = new Pastry(
  "chocolate cookie",
  "$1",
  "yummy chocolate cookie"
);
let fakeCookie4 = new Pastry(
  "chocolate cookie",
  "$1",
  "yummy chocolate cookie"
);
let fakeCookie5 = new Pastry(
  "chocolate cookie",
  "$1",
  "yummy chocolate cookie"
);

// for (let i = 0; i <= allCookies.length; i++) {
//   document.querySelector(cookieSelector[i]).innerHTML = `Price: ${
//     allCookies[i].price
//   } </br> Description: ${allCakes[i].description}`;
// }
