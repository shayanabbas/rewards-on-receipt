```javascript
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  pointsRequired: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    enum: ['Digital', 'Physical'],
    required: true
  }
});

module.exports = mongoose.model('Product', ProductSchema);
```