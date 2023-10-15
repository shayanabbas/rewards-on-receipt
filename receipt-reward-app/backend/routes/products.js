```javascript
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new product
router.post('/', async (req, res) => {
  const product = new Product({
    title: req.body.title,
    description: req.body.description,
    points: req.body.points,
    type: req.body.type,
    imageUrl: req.body.imageUrl
  });

  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a product
router.patch('/:id', getProduct, async (req, res) => {
  if (req.body.title != null) {
    res.product.title = req.body.title;
  }
  if (req.body.description != null) {
    res.product.description = req.body.description;
  }
  if (req.body.points != null) {
    res.product.points = req.body.points;
  }
  if (req.body.type != null) {
    res.product.type = req.body.type;
  }
  if (req.body.imageUrl != null) {
    res.product.imageUrl = req.body.imageUrl;
  }
  try {
    const updatedProduct = await res.product.save();
    res.json(updatedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a product
router.delete('/:id', getProduct, async (req, res) => {
  try {
    await res.product.remove();
    res.json({ message: 'Deleted Product' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware function for getting product by ID
async function getProduct(req, res, next) {
  let product;
  try {
    product = await Product.findById(req.params.id);
    if (product == null) {
      return res.status(404).json({ message: 'Cannot find product' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.product = product;
  next();
}

module.exports = router;
```