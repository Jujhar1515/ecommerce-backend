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

  // ================= CLOTHES =================

  {
    id: 1,
    name: "Classic Shirt",
    price: 25,
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=500&q=80",
    category: "clothes"
  },
  {
    id: 2,
    name: "Blue Jeans",
    price: 40,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=500&q=80",
    category: "clothes"
  },
  {
    id: 3,
    name: "Leather Jacket",
    price: 120,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=500&q=80",
    category: "clothes"
  },
  {
    id: 4,
    name: "Black Hoodie",
    price: 55,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=500&q=80",
    category: "clothes"
  },
  {
    id: 5,
    name: "Casual T-Shirt",
    price: 22,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80",
    category: "clothes"
  },
  {
    id: 6,
    name: "Denim Jacket",
    price: 85,
    image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=500&q=80",
    category: "clothes"
  },
  {
    id: 7,
    name: "Grey Sweatshirt",
    price: 45,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=500&q=80",
    category: "clothes"
  },
  {
    id: 8,
    name: "Summer T-Shirt",
    price: 28,
    image: "https://images.unsplash.com/photo-1583743814966-8936f37f4678?auto=format&fit=crop&w=500&q=80",
    category: "clothes"
  },
  {
    id: 9,
    name: "Casual Jacket",
    price: 90,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=500&q=80",
    category: "clothes"
  },
  {
    id: 10,
    name: "Winter Coat",
    price: 145,
    image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&w=500&q=80",
    category: "clothes"
  },


  // ================= SHOES =================

  {
    id: 11,
    name: "Running Shoes",
    price: 60,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80",
    category: "shoes"
  },
  {
    id: 12,
    name: "White Sneakers",
    price: 75,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=500&q=80",
    category: "shoes"
  },
  {
    id: 13,
    name: "Black Sneakers",
    price: 80,
    image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=500&q=80",
    category: "shoes"
  },
  {
    id: 14,
    name: "Sports Shoes",
    price: 95,
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=500&q=80",
    category: "shoes"
  },
  {
    id: 15,
    name: "Casual Sneakers",
    price: 65,
    image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?auto=format&fit=crop&w=500&q=80",
    category: "shoes"
  },
  {
    id: 16,
    name: "High Top Sneakers",
    price: 89,
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=500&q=80",
    category: "shoes"
  },
  {
    id: 17,
    name: "Training Shoes",
    price: 70,
    image: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&w=500&q=80",
    category: "shoes"
  },
  {
    id: 18,
    name: "Classic Sneakers",
    price: 68,
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=500&q=80",
    category: "shoes"
  },


  // ================= ACCESSORIES =================

  {
    id: 19,
    name: "Wrist Watch",
    price: 95,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=80",
    category: "accessories"
  },
  {
    id: 20,
    name: "Sunglasses",
    price: 35,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=500&q=80",
    category: "accessories"
  },
  {
    id: 21,
    name: "Backpack",
    price: 50,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=80",
    category: "accessories"
  },
  {
    id: 22,
    name: "Leather Wallet",
    price: 30,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=500&q=80",
    category: "accessories"
  },
  {
    id: 23,
    name: "Travel Bag",
    price: 70,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=80",
    category: "accessories"
  },
  {
    id: 24,
    name: "Baseball Cap",
    price: 25,
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=500&q=80",
    category: "accessories"
  },
  {
    id: 25,
    name: "Smart Watch",
    price: 149,
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=500&q=80",
    category: "accessories"
  },
  {
    id: 26,
    name: "Travel Backpack",
    price: 65,
    image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=500&q=80",
    category: "accessories"
  },


  // ================= ELECTRONICS =================

  {
    id: 27,
    name: "Wireless Headphones",
    price: 85,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80",
    category: "electronics"
  },
  {
    id: 28,
    name: "Smartphone",
    price: 699,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=500&q=80",
    category: "electronics"
  },
  {
    id: 29,
    name: "Laptop",
    price: 999,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=500&q=80",
    category: "electronics"
  },
  {
    id: 30,
    name: "Bluetooth Speaker",
    price: 79,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=500&q=80",
    category: "electronics"
  },
  {
    id: 31,
    name: "Wireless Earbuds",
    price: 99,
    image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=500&q=80",
    category: "electronics"
  },
  {
    id: 32,
    name: "Digital Camera",
    price: 550,
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=500&q=80",
    category: "electronics"
  },
  {
    id: 33,
    name: "Gaming Keyboard",
    price: 89,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=500&q=80",
    category: "electronics"
  },
  {
    id: 34,
    name: "Wireless Mouse",
    price: 45,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=500&q=80",
    category: "electronics"
  },
  {
    id: 35,
    name: "Tablet",
    price: 449,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=500&q=80",
    category: "electronics"
  },
  {
    id: 36,
    name: "Computer Monitor",
    price: 299,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=500&q=80",
    category: "electronics"
  },


  // ================= HOME =================

  {
    id: 37,
    name: "Desk Lamp",
    price: 45,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=500&q=80",
    category: "home"
  },
  {
    id: 38,
    name: "Coffee Mug",
    price: 18,
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=500&q=80",
    category: "home"
  },
  {
    id: 39,
    name: "Modern Chair",
    price: 130,
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=500&q=80",
    category: "home"
  },
  {
    id: 40,
    name: "Decorative Plant",
    price: 35,
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=500&q=80",
    category: "home"
  }

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
