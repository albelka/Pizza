//business logic
function Pizza(size, toppings) {
  this.pizzaSize =size;
  this.toppings = toppings;
  this.price = 10;
}

Pizza.prototype.findPriceBySize = function() {
  if(this.pizzaSize === "Personal 8 inch") {
    return this.price;
  } else if(this.pizzaSize === "Small 12 inch") {
      this.price += 2;
  }else if (this.pizzaSize === "Medium 16 inch") {
    this.price += 4;
  }else if (this.pizzaSize === "Large 20 inch") {
    this.price += 8;
  } else {
    alert("You must choose a size!");
    Event.stop(event);
  } return this.price;
};

Pizza.prototype.findPriceByTopping = function(newPrice) {
  if(this.toppings.length === 5) {
    newPrice += 10;
  }else if (this.toppings.length === 4) {
    newPrice += 8;
  }else if (this.toppings.length === 3) {
    newPrice += 6;
  }else if (this.toppings.length === 2) {
      newPrice += 4;
  }else if (this.toppings.length === 1) {
      newPrice += 2;
  } return newPrice;
}



Pizza.prototype.youOrdered = function(toppingsAsString) {
  return "A " + this.pizzaSize + " pizza with " + toppingsAsString + ".<br> Your price will be $" + this.price + " for pick-up."
}

var showImage = function(toppings){
    toppings.forEach(function(topping){
    if(topping === "Olives"){
    } else if(topping === "Extra Cheese"){
    } else if(topping === "Anchovies"){
    } else if(topping === "Pepperoni"){
    } else if(topping === "Salami"){
    } return $("#" + topping).show();
  });
}

function resetFields() {
  $("#pizzaSize").val("");
  $("input:checkbox[name=toppings]:checked").each(function(){
    toppings.push($(this).val(""));
    console.log(size);
  });
};



//front end
$(function() {
  $(".pizzaForm").submit(function(event) {
    event.preventDefault();
    var size = $("#pizzaSize").val();
    var toppings = [];
    var newPizza = new Pizza (size, toppings);
    $("input:checkbox[name=toppings]:checked").each(function(){
      toppings.push($(this).val());
    });
    var newPrice = newPizza.findPriceBySize();
    finalPrice = newPizza.findPriceByTopping(newPrice);
    newPizza = new Pizza (size, toppings);
    var toppingsAsString = newPizza.toppings.join(', ');
    newPizza.price = finalPrice;
    $(".pizzaOrdered").fadeIn(600);
    $("#another").fadeIn(600);
    showImage(newPizza.toppings);
    $("ul#result").append("<li>" + newPizza.youOrdered(toppingsAsString) + "</li>");

      $("#another").click(function(){
        function resetFields() {
          $("#pizzaSize").val([]);
          $("input:checkbox[name=toppings]:checked").each(function(){toppings.push($(this).val([]));
          });
        };
    resetFields();
    // $(".results").empty();
    // $(".results").show();
    });
  });
});
