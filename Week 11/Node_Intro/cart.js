// Importing order.js
const calculateTotal = require("./order");

let cartItems = [];

// Add a product to the cart
const addToCart = (product) => {
  cartItems.push(product);
};

// Get all cart items
const getCartItems = () => {
  return cartItems;
};

// Remove a product from the cart
const removeFromCart = (product) => {
  const index = cartItems.findIndex((item) => item.id === product.id);
  if (index !== -1) {
    cartItems.splice(index, 1);
  }
};

// Get total price of all cart items
const getCartTotal = () => {
  return calculateTotal(cartItems); // Using the function from order.js
};

module.exports = {
  addToCart,
  getCartItems,
  removeFromCart,
  getCartTotal,
};
