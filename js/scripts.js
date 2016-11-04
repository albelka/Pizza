//business logic
function Pizza(size, toppings, price) {
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
    alert("You must choose a size!")
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
  } this.price = newPrice;
    return this.price;
}

Pizza.prototype.youOrdered = function() {
  return "A " + this.pizzaSize + " pizza with " + this.toppings + ".<br> Your price will be $" + this.price + " at the door. Don't forget to tip your driver!"
}



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
    newPizza = new Pizza (size, toppings, finalPrice);
    console.log(finalPrice);
    console.log(newPizza.price);
    $(".pizzaOrdered").show();
    $("ul#result").append("<li>" + newPizza.youOrdered() + "</li>");
  });
});
