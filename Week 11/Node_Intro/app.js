// REPL -> Read-Eval-Print Loop, an interactive programming environment
// Node REPL, runtime environment, allows to put JavaScript files

const products = require("./product");
const cart = require("./cart");
const calculateTotal = require("./order");

// Add products to the cart
cart.addToCart(products[0]);
cart.addToCart(products[1]);
cart.addToCart(products[2]);

// Display the cart items
console.log("Cart Items:", cart.getCartItems());

// Remove products
cart.removeFromCart(products[1]);

// Display the cart items
console.log("Cart Items:", cart.getCartItems());

// Calculate and display the total oder amount
const totalAmount = calculateTotal(cart.getCartItems());
console.log(`Total order amounts: ${totalAmount}`);
