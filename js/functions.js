let numberOfPizzas = 1 //Default pizza to order

//Pro
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

function customersOrder(whichType, whichSize, whichTopping, whichCrust) {
    totalAmount = ((whichType.amount + whichSize.sAmount + whichTopping.tAmount + whichCrust.cAmount) * numberOfPizzas);

    return totalAmount;
}






