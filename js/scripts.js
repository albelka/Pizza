//business logic
function Pizza(size, toppings) {
  this.pizzaSize =size;
  this.toppings = toppings;
  this.price = 10;
}

Pizza.prototype.findPrice = function() {
  if(this.toppings.length > 4) {
    this.price += 8;
  }else if (this.toppings.length > 3) {
    this.price += 4;
  }else if (this.toppings.length > 2) {
    this.price += 2;
  } else if (this.pizzaSize === "Small 12 inch") {
    this.price += 2;
  }else if (this.pizzaSize === "Medium 16 inch") {
    this.price += 4;
  }else if (this.pizzaSize === "large 20 inch") {
    this.price += 8;
  } else{
    alert("You must choose a size!")
  } return this.price;
};

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
    var newPrice = newPizza.findPrice();
     $("input:checkbox[name=toppings]:checked").each(function(){
      toppings.push($(this).val());
    });
    $(".pizzaOrdered").show();
    $("ul#result").append("<li>" + newPizza.youOrdered() + "</li>");
    console.log(newPizza.pizzaSize);

    alert(newPrice);
  });
});
