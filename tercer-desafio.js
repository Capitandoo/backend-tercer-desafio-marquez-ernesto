const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const products = [
  { id: 1, name: 'Producto 1' },
  { id: 2, name: 'Producto 2' },
  { id: 3, name: 'Producto 3' },
  { id: 4, name: 'Producto 4' },
  { id: 5, name: 'Producto 5' },
  { id: 6, name: 'Producto 6' },
  { id: 7, name: 'Producto 7' },
  { id: 8, name: 'Producto 8' },
  { id: 9, name: 'Producto 9' },
  { id: 10, name: 'Producto 10' },
];

app.use(bodyParser.json());

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
    res.status(404).json({ error: 'Producto no encontrado' });
  }
});

app.listen(8080, () => {
  console.log('Server iniciado en el puerto 8080');
});
