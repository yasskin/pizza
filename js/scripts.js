// Business (or back-end) logic:
function Pizza (size, toppings, delivery) {
  this.pizzaSize = size;
  this.pizzaToppings = toppings;
  this.pizzaCost = 0;
  this.pizzaDelivery = delivery;
}

Pizza.prototype.sizeCost = function() {
  if (this.pizzaSize === "small") {
    return this.pizzaCost = 10;
  } else if (this.pizzaSize === "medium") {
    return this.pizzaCost = 15;
  } else { // for "Large" pizza
    return this.pizzaCost = 20;
  }
}

Pizza.prototype.toppingsCost = function () {
  if (this.pizzaSize === "small") {
    for (i=0; i<this.pizzaToppings.length; i++) {
      this.pizzaCost += 1;
    }
  }
  if (this.pizzaSize === "medium") {
    for (i=0; i<this.pizzaToppings.length; i++) {
      this.pizzaCost += 2;
    }
  }
  if (this.pizzaSize === "large") {
    for (i=0; i<this.pizzaToppings.length; i++) {
      this.pizzaCost += 3;
    }
  }
}

Pizza.prototype.toppingsNumber = function () {
  var toppingsNumber = this.pizzaToppings.length;
}

// user interface (or front-end) logic:
$(document).ready(function() {
  $("form#pizza-order").submit(function(event) {
    event.preventDefault();
    //collect the user choices
    var size = $("input:radio[name=size]:checked").val();
    var toppings = [];
    $("input:checkbox[name=toppings]:checked").each(function() {
      (toppings).push(this.value);
    });

    //create new pizza
    var pizzaOne = new Pizza (size, toppings);
    var toppingsNumber;
    //calculate the cost
    pizzaOne.sizeCost();
    pizzaOne.toppingsCost();
    pizzaOne.toppingsNumber();
    //display the order with cost
    $("#show-order").show();
    $("#show-size").text(pizzaOne.pizzaSize);
    $("#show-cost").text(pizzaOne.pizzaCost);
    $("#show#delivery-details").show();
  });
  //add a delivery option
  $("form#request-delivery").submit(function(event) {
    event.preventDefault();

    $("#delivery-details").show();

  });
});
