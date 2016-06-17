// Business (or back-end) logic:

//initialize new pizza
var pizzaOne;
var toppings;

// constructor function for pizza object
function Pizza (size, toppings, delivery) {
  this.pizzaSize = size;
  this.pizzaToppings = toppings;
  this.pizzaCost = 0;
  this.pizzaDelivery = delivery;
}

// calculates the cost by size
Pizza.prototype.sizeCost = function() {
  if (this.pizzaSize === "small") {
    return this.pizzaCost = 10;
  } else if (this.pizzaSize === "medium") {
    return this.pizzaCost = 15;
  } else { // for "Large" pizza
    return this.pizzaCost = 20;
  }
}

// increases the price per topping
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

// function resetFields() {
//   $("#show-size").hide();
//   $("#show-cost").hide();
// }

// user interface (or front-end) logic:
$(document).ready(function() {
  //start a new order
  $("form#start-button").click(function(event) {
    event.preventDefault();
    resetFields();
  });

  $("#pizza-order").submit(function(event) {
    event.preventDefault();
    //collect the user choices
    var size = $("input:radio[name=size]:checked").val();
    toppings = [];
    $("input:checkbox[name=toppings]:checked").each(function() {
      (toppings).push(this.value);
    });

    //create new pizza
    pizzaOne = new Pizza (size, toppings);
    console.log(pizzaOne);
    //calculate the cost
    pizzaOne.sizeCost();
    pizzaOne.toppingsCost();
    //display the order with cost
    $("#show-order").show();
    $("#show-size").text(pizzaOne.pizzaSize);
    $("#show-cost").text(pizzaOne.pizzaCost);
  });
    //add a delivery option
  // $("#delivery-button").click(function(event) {
  //   event.preventDefault();
  //
  //   $("#conctact-delivery").show();
  //
  // });
});
