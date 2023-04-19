const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Define the product archive
const products = [
  { id: 1, name: 'Product 1' },
  { id: 2, name: 'Product 2' },
  { id: 3, name: 'Product 3' },
  { id: 4, name: 'Product 4' },
  { id: 5, name: 'Product 5' },
  { id: 6, name: 'Product 6' },
  { id: 7, name: 'Product 7' },
  { id: 8, name: 'Product 8' },
  { id: 9, name: 'Product 9' },
  { id: 10, name: 'Product 10' },
];

// Set up body parser middleware
app.use(bodyParser.json());

// Define the routes
app.get('/products', (req, res) => {
  const limit = req.query.limit || products.length;
  const result = products.slice(0, limit);
  res.json(result);
});

app.get('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
});

// Start the server
app.listen(8080, () => {
  console.log('Server started on port 8080');
});
