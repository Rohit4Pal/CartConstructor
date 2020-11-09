function Cart() {
  let items = [];
  this.countItem = 0;
  this.TotalCost = 0;

  this.add = function (item) {
    if (this.countItem === 10) {
      console.log("Cart full");
      return;
    }
    let newItem = new createItem(item);
    items.push(newItem);
    let { price } = newItem;
    this.countItem++;
    this.TotalCost += price;
    console.log("update :", this.countItem, this.TotalCost);
  };

  this.delete = function (id) {
    if (this.countItem === 0) {
      console.log("Cart empty");
      return;
    }
    for (let i = 0; i < this.countItem; i++) {
      if (items[i].id === id) {
        this.TotalCost -= items[i].price;
        items.splice(i, 1);
        break;
      }
    }
    this.countItem--;
    console.log(
      "Remaining items in cart " + this.countItem + " and price of cart: " + this.TotalCost
    );
  };

  this.empty = function () {
    console.log("cart is now empty");
    items = [];
    this.countItem = 0;
    this.TotalCost = 0;
  };

  this.checkout = function () {
    console.log("Total Cost = " + this.TotalCost);
    this.empty();
  };

  this.show = function () {
    console.log("Total Cost of Cart Now :" + this.TotalCost);
  };
}

function createItem(item) {
  this.id = item.id;
  this.name = item.name;
  this.price = item.price;
}

let cart = new Cart();
for (let i = 0; i < 10; i++) {
  let item = {
    id: i + 1,
    name: "xyz",
    price: 500 * (i + 1)
  };
  cart.add(item);
}
cart.delete(8);
cart.show();
cart.checkout();
cart.empty();

