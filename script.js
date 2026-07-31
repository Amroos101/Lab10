class product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
  getTotalValue() {
    return this.price * this.quantity;
  }
  toString() {
    return "product: " + this.name + ", price: $" + this.price + ", quantity:" this.quantity;
  }
  static applyDiscount(products, discount) {
    for (let i = 0; i < products.length; i++) {
      products[i].price = products[i].price - (products[i].price * discount);
    }
  }
}
class PerishableProduct extends Product {
    constructor(name, price, quantity, expirationDate) {
        super(name, price, quantity);
        this.expirationDate = expirationDate;
    }
    toString() {
        return "product: " + this.name + ", price: $" + this.price + ", quantity " + this.quantity + ", expiration Date: " + this.expirationDate;
    }
}
