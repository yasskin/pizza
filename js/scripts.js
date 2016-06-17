// Business (or back-end) logic:
function Pizza (size, toppings) {
  this.pizzaSize = size;
  this.pizzaToppings = toppings;
  this.pizzaCost = 0;
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

// Everything below this line is user interface (or front-end) logic:

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    //collect the user choices
    var size = $("input:radio[name='size']:checked").val();

    var toppings = [];
    $("input:checkbox[name='toppings']:checked").each(function() {
      (toppings).push(this.value);
    });


    //create new pizza
    var pizzaOne = new Pizza (size, toppings);
    //calculate the cost
    pizzaOne.sizeCost();
    pizzaOne.toppingsCost();
    console.log(pizzaOne);
    //display the order with cost
    $("#show-order").show();
    $("#show-size").text(pizzaOne.pizzaSize);
    $("#show-toppings").text(pizzaOne.pizzaToppings);
    $("#show-cost").text(pizzaOne.pizzaCost);

  });
});
