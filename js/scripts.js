// Business (or back-end) logic:
var pizzaToppings = [];

function Pizza() {
  this.pizzaToppings = pizzaToppings;
  this.pizzaSize = pizzaSize;
  this.pizzaCost = pizzaCost;
}

Pizza.prototype.sizeCost() {
  if (this.pizzaSize === "Small") {
    return this.pizzaCost += 10;
  } else if (this.pizzaSize === "Medium") {
    return this.pizzaCost += 15; :
  } else { // for "Large" pizza
    return this.pizzaCost += 20;
  }
}

Pizza.prototype.toppingsCost() {
  if (this.pizzaSize === "Small") {
    for (i=0; i<this.pizzaToppings.length; i++) {
      this.pizzaCost += 1;
    }
  }
  if (this.pizzaSize === "Medium") {
    for (i=0; i<thisPizzaToppings.length; i++) {
      this.finalCost += 2;
    }
  }
  if (this.pizzaSize === "Large") {
    for (i=0; i<pizzaToppings.length;) {
      this.finalCost += 3;
    }
  }
}

// Everything below this line is user interface (or front-end) logic:

$(document).ready(function() {

  $("size-form#pizza-size").submit(function(event) {
    event.preventDefault();
    var pizzaSize = $("input#pizza-size").val();

    var pizzaOne = new Pizza(pizzaSize);
    pizzaOne.sizeCost();

  });

  $("toppings-form#pizza-toppings").submit(function(event) {
    event.preventDefault();
    var pizzaToppings = $("input#pizza-toppings").val();
  });
  pizza1.toppingsCost();

});
