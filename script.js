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
class Store {
  constructor() {
    this.inventory = [];
  
  }
  addProduct(product) {
    this.inventory.push(product);
  }
  getInventoryValue() {
    let total = 0;
    for (let i = 0; i < this.inventory.length; i++) {
      total = total + this.inventory[i].getTotalValue();
    }
    return total;
  }
  findProductByName(name) {
    for (let i = 0; i < this.inventory.length; i++) {
      if (this.inventory[i].name === name) {
        return this.inventory[i];
      }
    }
    return null;
  }
}
let product1 = new Product("chocolate" , 2.25, 40);
let product2 = new Product("book" , 1.14, 30);
let product3 = new Product("water" , 10, 45);
