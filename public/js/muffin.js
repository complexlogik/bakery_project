let muffinSelector = [
  ciniroll,
  appleOat,
  blueberryMuffin,
  erdbeerMuffin,
  lemonBlueberry,
  meatnegg,
  cornbread,
  ricottafig,
  chocolatechipmuffin
];

let allMuffins = [
  "muffin1",
  "muffin2",
  "muffin3",
  "muffin4",
  "muffin5",
  "muffin6",
  "muffin7",
  "muffin8",
  "muffin9"
];

allMuffins.forEach((muffin, i) => {
  document.querySelector(muffinSelector[i]).innerHTML = `Name: ${muffin.name} <br> Price: ${muffin.price} <br> Description: ${muffin.description}`;
});