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

var totalAmount = 0;

/*---------------User Logic---------------*/
function getPizza() {
  let whichPizza = document.getElementById('pizza').value;
  console.log(whichPizza);
  let pizzaType = eval(whichPizza).name;
  let pizzaCost = eval(whichPizza).amount;
  document.getElementById('display-pizza').innerHTML = pizzaType;
  document.getElementById('pizza_cost').innerHTML = "$" + pizzaCost;

  totalAmount += pizzaCost;
  document.getElementById('total_cost').innerHTML = totalAmount;
  let thePizza = [whichPizza, pizzaCost];
  return thePizza;
}

function getPizzaSize() {
  var whatSize = document.getElementById('pizza-size').value;
  let sizeCost = eval(whatSize).sAmount;
  document.getElementById('display-pizza-size').innerHTML = eval(whatSize).size;
  document.getElementById('pSize_cost').innerHTML = "$" + sizeCost;
  console.log(whatSize);

  totalAmount += sizeCost;
  document.getElementById('total_cost').innerHTML = totalAmount;
  let theSize = [whatSize, sizeCost];
  return theSize;
}

function getPizzaTopping() {
  var whatTopping = document.getElementById('pizza-topping').value;
  let toppingCost = eval(whatTopping).tAmount;
  document.getElementById('display-topping').innerHTML = eval(whatTopping).topping;
  document.getElementById('pTopping_cost').innerHTML = "$" + toppingCost;
  console.log(whatTopping);
  let theTopping = [whatTopping, toppingCost];
  return theTopping;
}

function getPizzaCrust() {
  var whichCrust = document.getElementById('pizza-crust').value;
  let crustCost = eval(whichCrust).cAmount;
  document.getElementById('display-crust').innerHTML = eval(whichCrust).crust;
  document.getElementById('pCrust_cost').innerHTML = "$" + crustCost;
  console.log(whichCrust);
  let theCrust = [whichCrust, crustCost];
  return whichCrust;
}

function getDelivery() {
  var deliveryValue = document.querySelector('input[name="delivery-type"]:checked').value;
  let deliveryCost = 1;
  document.getElementById('delivery-details').innerHTML = deliveryValue;
  
  console.log(deliveryValue);

  if (deliveryValue == 'delivery') {
    $('#delivery-form').show('slow');
    $('#delivery-dets').show('slow');
  } else {
    $('#delivery-form').hide('slow');
    $('#delivery-dets').hide('slow');
    deliveryCost = 0;
  }

  document.getElementById('delivery_cost').innerHTML = "$" + deliveryCost;
  /*
  if (deliveryValue == "delivery") {
    document.getElementById('delivery-form').style.display = "block";
  } else {
    document.getElementById('delivery-form').style.display = "none";
  }
  */


  let theDelivery = [deliveryValue, deliveryCost];
  return theDelivery;
}

customersTotalCost();

function getDeliveryName() {
  let nameToDeliver = document.getElementById('deli-name').value;
  document.getElementById('delivery-name').innerHTML = nameToDeliver;
  return nameToDeliver;
}

function getPhoneNumber() {
  let phoneNumber = document.getElementById('deli-number').value;
  document.getElementById('delivery-phoneNumber').innerHTML = phoneNumber;
  return phoneNumber;
}

function getAltNumber() {
  let altPhoneNumber = document.getElementById('deli-alt').value;
  document.getElementById('delivery-altPhoneNumber').innerHTML = altPhoneNumber;
  return altPhoneNumber;
}

function getEmail() {
  let userEmail = document.getElementById('deli-email').value;
  document.getElementById('delivery-email').innerHTML = userEmail;
  return userEmail;
}

function getApartment() {
  let apartment = document.getElementById('deli-apartment').value;
  document.getElementById('delivery-apartment').innerHTML = apartment;
  return apartment;
}

function getHouseNumber() {
  let houseNumber = document.getElementById('deli-house-number').value;
  document.getElementById('delivery-houseNumber').innerHTML = houseNumber;
  return houseNumber;
}


/*---------------Business Logic---------------*/
//Function to calculate the total amount for the order
//Change to listening JQuery function
function customersTotalCost() {
  let pizzaType = getPizza();
  let sizeP = getPizzaSize();
  let toppingP = getPizzaTopping();
  let crustP = getPizzaCrust();
  let deliveryP = getDelivery();

  let totalAmount = pizzaType[1] + sizeP[1] + toppingP[1] + crustP[1] + deliveryP[1];

  

  return totalAmount;
}