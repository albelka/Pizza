//business logic
function Pizza(size, toppings) {
  this.pizaSize =size;
  this.toppings = toppings;
  this.price = 10;
}

Pizza.prototype.youOrdered = function() {
  return "A " + this.pizzaSize + " pizza with " + this.toppings + ".<br> Your price will be $" + this.price + " at the door. Don't forget to tip your driver!"
}

// Pizza.prototype.findPrice = function(size, toppings) {
//
// }


//front end
$(function() {
  $(".pizzaForm").submit(function(event) {
    event.preventDefault();
    var size = $("#pizzaSize").val(); console.log(size);
    var toppings = [];
    var newPizza = new Pizza (size, toppings);
     $("input:checkbox[name=toppings]:checked").each(function(){
      toppings.push($(this).val());
    });console.log(size);
    console.log(newPizza);
    $(".pizzaOrdered").show();
    $("ul#result").append("<li>" + newPizza.youOrdered() + "</li>");
    console.log(newPizza.size);
  });
});
