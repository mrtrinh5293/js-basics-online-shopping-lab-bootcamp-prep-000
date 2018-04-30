var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var newItem = new Object({itemName: item, itemPrice: Math.floor(Math.random() * 100)});
 cart.push(newItem);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  var message = "In your cart, you have ";
  if ( cart.length === 0){
    return "Your shopping cart is empty.";
}
  // for ( var i = 0; i < cart.length; i++){
    
  if ( cart.length === 1){
  return `${message}${cart[0].itemName} at $${cart[0].itemPrice}.`;
    }
      
  if ( cart.length === 2 ){
  return `${message}${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
      }
      
  else{
        var newCart = [];
        for ( var i = 2; i < cart.length; i++){
          newCart.push(`, and ${cart[i].itemName} at $${cart[i].itemPrice}`);
    }
 }
}
function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
