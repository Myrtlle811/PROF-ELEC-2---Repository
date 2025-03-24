const http = require("http");
const products = require("./product");
const cart = require("./cart");

const hostname = "127.0.0.1";
const port = 3000;

cart.addToCart(products[0]); // Adding a product manually for testing

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });

  if (req.url === "/products") {
    res.end(JSON.stringify(products));
  } else if (req.url === "/cart") {
    res.end(JSON.stringify(cart.getCartItems()));
  } else if (req.url === "/add-to-cart") {
    cart.addToCart(products[1]); // Adds the second product
    res.end(
      JSON.stringify({ message: "Product added", cart: cart.getCartItems() })
    );
  } else if (req.url === "/get-cart-items") {
    res.end(
      JSON.stringify({
        message: "Loading products in cart",
        cart: cart.getCartItems(),
      })
    ); // Load all the current products in the cart
  } else if (req.url === "/remove-from-cart") {
    cart.removeFromCart(products[0]); // Removes the first product
    res.end(
      JSON.stringify({ message: "Product removed", cart: cart.getCartItems() })
    );
  } else if (req.url === "/cart-total") {
    res.end(
      JSON.stringify({
        message: "Total Cart Price",
        total: cart.getCartTotal(),
      })
    );
  } else {
    res.end(JSON.stringify({ message: "Invalid endpoint" }));
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});

// To avoid ending the session very update, install nodemon globally:
//      npm install -g nodemon
// For dev dependency, install locally:
//      npm install --save-dev nodemon
// Run using:
//      nodemon [nameOfServer].js
