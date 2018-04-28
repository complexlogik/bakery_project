prompt("cakes work!");

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

allCakes.forEach((cake, i) => {
  document.querySelector(cakeSelector[i]).innerHTML = `Name: ${
    cake.name
  } <br> Price: ${cake.price} <br> Description: ${cake.description}`;
});


