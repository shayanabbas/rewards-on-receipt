```javascript
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Middleware for admin authentication
const adminAuth = (req, res, next) => {
    // Implement your admin authentication logic here
    next();
};

// Route to set points-to-currency conversion rate
router.post('/setConversionRate', adminAuth, (req, res) => {
    // Implement your logic to set conversion rate here
});

// Route to add a new product for redemption
router.post('/addProduct', adminAuth, (req, res) => {
    const newProduct = new Product({
        name: req.body.name,
        description: req.body.description,
        points: req.body.points,
        type: req.body.type, // 'digital' or 'physical'
    });

    newProduct.save()
        .then(product => res.json(product))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Route to delete a product
router.delete('/deleteProduct/:id', adminAuth, (req, res) => {
    Product.findByIdAndDelete(req.params.id)
        .then(() => res.json('Product deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
```