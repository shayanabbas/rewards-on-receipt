```javascript
const mongoose = require('mongoose');

const ReceiptSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    totalAmount: {
        type: Number,
        required: true
    },
    pointsAwarded: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Receipt', ReceiptSchema);
```