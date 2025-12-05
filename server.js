const express = require("express");
const cors = require("cors");
const app = express();
const products = require("./products.json");

app.use(cors());
app.use(express.json());

// Get products
app.get("/products", (req, res) => {
  res.json(products);
});

// Simple cart (temporary storage)
let cart = [];

app.post("/cart", (req, res) => {
  cart.push(req.body);
  res.json({ message: "Added to cart", cart });
});

app.get("/cart", (req, res) => {
  res.json(cart);
});

app.listen(5000, () => {
  console.log("Backend running at http://localhost:5000");
});
