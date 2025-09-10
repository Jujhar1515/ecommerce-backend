const fs = require("fs");

// Helper functions to read/write JSON
function readJSON(file) {
  try {
    return JSON.parse(fs.readFileSync(file));
  } catch (err) {
    return [];
  }
}

function writeJSON(file, data) {
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Fake product "database" (array)
let products = [
  { id: 1, name: "Classic Shirt", price: 25, image: "https://via.placeholder.com/300x200?text=Shirt", category: "clothes" },
  { id: 2, name: "Blue Jeans", price: 40, image: "https://via.placeholder.com/300x200?text=Jeans", category: "clothes" },
  { id: 3, name: "Running Shoes", price: 60, image: "https://via.placeholder.com/300x200?text=Shoes", category: "shoes" },
  { id: 4, name: "Leather Jacket", price: 120, image: "https://via.placeholder.com/300x200?text=Jacket", category: "clothes" }
];


// Home route
app.get("/", (req, res) => {
  res.send("E-commerce API running ✅");
});

// Get all products
app.get("/products", (req, res) => {
  res.json(products);
});

// Products
app.get("/products", (req, res) => {
  const products = readJSON("products.json");
  res.json(products);
});

app.post("/products", (req, res) => {
  const products = readJSON("products.json");
  const newProduct = { id: products.length + 1, ...req.body };
  products.push(newProduct);
  writeJSON("products.json", products);
  res.json(newProduct);
});
// NEW: Categories array
let categories = ["clothes", "shoes"];

// Categories
app.get("/categories", (req, res) => {
  const categories = readJSON("categories.json");
  res.json(categories);
});

app.post("/categories", (req, res) => {
  const categories = readJSON("categories.json");
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: "Category required" });

  const lower = name.toLowerCase();
  if (!categories.includes(lower)) {
    categories.push(lower);
    writeJSON("categories.json", categories);
  }
  res.json({ success: true, categories });
});

// Users "database"
let users = [];

// Signup
app.post("/signup", (req, res) => {
  const { username, password } = req.body;
  const users = readJSON("users.json");

  if (!username || !password)
    return res.status(400).json({ error: "Username and password required" });

  if (users.find(u => u.username === username))
    return res.status(400).json({ error: "User already exists" });

  users.push({ username, password });
  writeJSON("users.json", users);

  res.json({ success: true, message: "Signup successful" });
});

// Login
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const users = readJSON("users.json");

  const user = users.find(u => u.username === username && u.password === password);
  if (!user) return res.status(401).json({ error: "Invalid credentials" });

  res.json({ success: true, message: "Login successful", username });
});

// User carts (key: username, value: array of products)
let carts = {};

// Carts
app.get("/cart/:username", (req, res) => {
  const carts = JSON.parse(fs.readFileSync("carts.json"));
  const userCart = carts[req.params.username] || [];
  res.json(userCart);
});

app.post("/cart/:username", (req, res) => {
  const carts = JSON.parse(fs.readFileSync("carts.json"));
  const { username } = req.params;

  if (!carts[username]) carts[username] = [];
  carts[username].push(req.body);

  fs.writeFileSync("carts.json", JSON.stringify(carts, null, 2));
  res.json(carts[username]);
});

app.delete("/cart/:username", (req, res) => {
  const carts = JSON.parse(fs.readFileSync("carts.json"));
  carts[req.params.username] = [];
  fs.writeFileSync("carts.json", JSON.stringify(carts, null, 2));
  res.json({ success: true });
});
// Orders
app.get("/orders/:username", (req, res) => {
  const orders = readJSON("orders.json");
  const userOrders = orders.filter(o => o.username === req.params.username);
  res.json(userOrders);
});

app.post("/orders/:username", (req, res) => {
  const orders = readJSON("orders.json");
  const { username } = req.params;
  const newOrder = {
    username,
    items: req.body.items,
    total: req.body.total,
    date: new Date().toISOString()
  };
  orders.push(newOrder);
  writeJSON("orders.json", orders);
  res.json({ success: true, order: newOrder });
});




// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
