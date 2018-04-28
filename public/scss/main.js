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

let allCakes = [
  layerCake,
  caramelCake,
  macaroonCake,
  fruitCake,
  tiramisuCake,
  cheeseCake,
  fudgeCake,
  cupsCake,
  frostedCake
];

let cakeSelector = [
  "#cake1",
  "#cake2",
  "#cake3",
  "#cake4",
  "#cake5",
  "#cake6",
  "#cake7",
  "#cake8",
  "#cake9"
];

// for (let i = 0; i <= allCakes.length; i++) {
//   document.querySelector(cakeSelector[i]).innerHTML = "Name:" + allcakes[i].name + " Price: " +
//     allCakes[i].price +
//    " Description: " + allCakes[i].description;
// }


let choc_cookie = new Pastry(
  "$1",
  "chocolate cookie",
  "yummy chocolate cookie"
);
let oatmeal_cookie = new Pastry("$1", "oatmeal cookie", "yummy oatmeal cookie");
let almond_cookie = new Pastry("$1", "almond cookie", "yummy almond cookie");
let red_velvet_cookie = new Pastry(
  "$1",
  "red velvet cookie",
  "yummy red velvet cookie"
);
let sugar_cookie = new Pastry(
  "$1",
  "chocolate cookie",
  "yummy chocolate cookie"
);

// for (let i = 0; i <= allCookies.length; i++) {
//   document.querySelector(cookieSelector[i]).innerHTML = `Price: ${
//     allCookies[i].price
//   } </br> Description: ${allCakes[i].description}`;
// }
let allCookies = [
  choc_cookie,
  oatmeal_cookie,
  almond_cookie,
  red_velvet_cookie,
  sugar_cookie
];
let cookieSelector = [
  "#cookie1",
  "#cookie2",
  "#cookies3",
  "#cookie4",
  "#cookie5"
];

allCakes.forEach((cake, i) => {
  document.querySelector(cakeSelector[i]).innerHTML = `Name: ${
    cake.name
  } <br> Price: ${cake.price} <br> Description: ${cake.description}`;
});

allCookies.forEach((cookie, i) => {
  document.querySelector(cookieSelector[i]).innerHTML = `Name: ${
    cookie.name
  } <br> Price: ${cookie.price} <br> Description: ${cookie.description}`;
});