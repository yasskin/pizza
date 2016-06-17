// Business (or back-end) logic:
var pizzaToppings = [];
var pizzaSize;
var pizzaCost;

function Pizza(size, toppings, sizeCost, toppingsCost) {
  this.pizzaSize = size;
  this.pizzaToppings = toppings;
  this.pizzaCost = pizzaCost;
}

Pizza.prototype.sizeCost = function() {
  if (this.pizzaSize === "Small") {
    return this.pizzaCost += 10;
  } else if (this.pizzaSize === "Medium") {
    return this.pizzaCost += 15;
  } else { // for "Large" pizza
    return this.pizzaCost += 20;
  }
}

Pizza.prototype.toppingsCost = function() {
  if (this.pizzaSize === "Small") {
    for (i=0; i<this.pizzaToppings.length; i++) {
      this.pizzaCost += 1;
    }
  }
  if (this.pizzaSize === "Medium") {
    for (i=0; i<thisPizzaToppings.length; i++) {
      this.pizzaCost += 2;
    }
  }
  if (this.pizzaSize === "Large") {
    for (i=0; i<pizzaToppings.length;) {
      this.pizzaCost += 3;
    }
  }
}

// Everything below this line is user interface (or front-end) logic:

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    //collect the user choices
    var size = $("input:radio[name=size]:checked").val();
    console.log(size);

    var toppings = [];
    $("input:checkbox[name=toppings]:checked").each(function() {
      toppings.push(this.value);
      console.log(toppings);
    });


    //create new pizza
    var pizzaOne = new Pizza(size, toppings);
    console.log(pizzaOne);
    //calculate the cost
    pizzaOne.sizeCost();
      console.log(this.PizzaCOst);
    pizzaOne.toppingsCost();
    console.log(this.pizzaCost);

    //display the cost

  });
});
