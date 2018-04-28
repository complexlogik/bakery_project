prompt("cookies work!");

let allCookies = [
  chocCookie,
  oatmealCookie,
  almondCookie,
  redVelvetCookie,
  fakeCookie1,
  fakeCookie2,
  fakeCookie3,
  fakeCookie4,
  fakeCookie5
];

let cookieSelector = [
  "#cookie1",
  "#cookie2",
  "#cookie3",
  "#cookie4",
  "#cookie5",
  "#cookie6",
  "#cookie7",
  "#cookie8",
  "#cookie9"
];

allCookies.forEach((cookie, i) => {
  document.querySelector(cookieSelector[i]).innerHTML = `Name: ${
    cookie.name
  } <br> Price: ${cookie.price} <br> Description: ${cookie.description}`;
});