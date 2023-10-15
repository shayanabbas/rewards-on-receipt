```javascript
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    points: {
        type: Number,
        required: true
    },
    isDigital: {
        type: Boolean,
        default: false
    },
    imageUrl: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Product', ProductSchema);
```