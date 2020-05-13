let numberOfPizzas = 1 //Default pizza to order

//Constructors
function pizza(pizzaName, pizzaAmount) {
  this.name = pizzaName;
  this.amount = pizzaAmount;
}

function pizzaSize(pSize, sizeAmount) {
  this.size = pSize;
  this.sAmount = sizeAmount;
}

function pizzaTopping(pTopping, toppingAmount) {
  this.topping = pTopping;
  this.tAmount = toppingAmount;
}

function pizzaCrust(pCrust, crustAmount) {
  this.crust = pCrust;
  this.cAmount = crustAmount;
}

//Pizza menu
var meatzza = new pizza("Meatzza", 12);
var hawaiian = new pizza("Hawaiian", 11);
var regina = new pizza("Regina", 12);
var bbqSteak = new pizza("BBQ Steak", 15);
var bbqChicken = new pizza("BBQ Chicken", 17);
var vegTikka = new pizza("Veg Tikka", 10);
var boerewors = new pizza("Boerewors", 11);
var periChicken = new pizza("Peri-Peri Chicken", 18);

//Pizza sizes
var small = new pizzaSize("Small", 0);
var medium = new pizzaSize("Medium", 3);
var large = new pizzaSize("Large", 5.50);

//Pizza Toppings
var pepperoni = new pizzaTopping("Pepperoni", 1.50);
var mushroom = new pizzaTopping("Mushroom", 1);
var sausages = new pizzaTopping("Sausages", 2);
var onions = new pizzaTopping("Onions", 0.50);
var bacon = new pizzaTopping("Bacon", 2.50);
var extraCheese = new pizzaTopping("Extra Cheese", 1.50);
var pepper = new pizzaTopping("Pepper", 0.5);
var blackOlives = new pizzaTopping("Black Olives", 3);

//Pizza Crusts
var crispy = new pizzaCrust("Crispy", 0);
var stuffed = new pizzaCrust("Stuffed", 1);
var gluttenFree = new pizzaCrust("Glutten Free", -2);
var flatBread = new pizzaCrust("Flat Bread", 0);
var veganFriendly = new pizzaCrust("Vegan Friendly", 0);
var doubleDough = new pizzaCrust("Double Dough", 2);

//Function to calculate the total amount for the order
function customersOrder(whichType, whichSize, whichTopping, whichCrust) {
  totalAmount = ((whichType.amount + whichSize.sAmount + whichTopping.tAmount + whichCrust.cAmount) * numberOfPizzas);

  return totalAmount;
}

pizza.prototype.cost = function (whichPizza) {
  return costAmount = whichPizza.amount;
};

/*---------------User Logic---------------*/
function getPizza() {
  let whichPizza = document.getElementById('pizza').value;
  console.log(whichPizza);
  let pizzaCost = whichPizza[amount];
  document.getElementById('display-pizza').innerHTML = whichPizza;
  document.getElementById('pizza_cost').innerHTML = "$" + pizzaCost;
  return whichPizza;
}

function getPizzaSize() {
  var whatSize = document.getElementById('pizza-size').value;
  let sizeCost = whatSize[sAmount];
  document.getElementById('display-pizza-size').innerHTML = whatSize;
  document.getElementById('pSize_cost').innerHTML = "$" + sizeCost;
  console.log(whatSize);
  return whatSize;
}

function getPizzaTopping() {
  var whatTopping = document.getElementById('pizza-topping').value;
  document.getElementById('display-topping').innerHTML = whatTopping;
  console.log(whatTopping);
  return whatTopping;
}

function getPizzaCrust() {
  var whichCrust = document.getElementById('pizza-crust').value;
  document.getElementById('display-crust').innerHTML = whichCrust;
  console.log(whichCrust);
  return whichCrust;
}

function getDelivery() {
  var deliveryValue = document.querySelector('input[name="delivery-type"]:checked').value;
  document.getElementById('delivery-details').innerHTML = deliveryValue;
  console.log(deliveryValue);

  if (deliveryValue == 'delivery') {
    $('#delivery-form').show('slow');
  } else {
    $('#delivery-form').hide('slow');
  }

  /*
  if (deliveryValue == "delivery") {
    document.getElementById('delivery-form').style.display = "block";
  } else {
    document.getElementById('delivery-form').style.display = "none";
  }
  */

  return deliveryValue;
}

function getDeliveryName() {
  let nameToDeliver = document.getElementById('deli-name').value;
  document.getElementById('delivery-name').innerHTML = nameToDeliver;
}

function get(params) {
  
}