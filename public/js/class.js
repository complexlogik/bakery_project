class Pastry {
  constructor(price, description, items, image) {
    (this.price = price), (this.description = description);
    this.items = [];
    this.image = image;
  }
  allItems() {
    return this.items;
  }
}

class Muffins extends Pastry {
  constructor(allMuffins) {
    super(price, description, image);
    this.allMuffins = [];
  }
  allMuffins() {
    return this.all;
  }
}

class Cookies extends Pastry {
  constructor(allCookies) {
    super(price, description, image);
    this.allCookies = [];
  }
  allCookies() {
    return this.allCookies;
  }
}

class Cakes extends Pastry {
  constructor(allCakes) {
    super(price, description, image);
    this.allCakes = [];
  }
  allCakes() {
    return this.allCakes;
  }
}

chocolate_cake = new Cakes("$10", "chocolate goodness", "url");
