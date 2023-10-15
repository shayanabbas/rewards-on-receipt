```javascript
const express = require('express');
const router = express.Router();
const Receipt = require('../models/Receipt');
const User = require('../models/User');
const ocr = require('../utils/ocr');

// Route to upload a receipt
router.post('/upload', async (req, res) => {
    try {
        const { userId, image } = req.body;
        const total = await ocr.readReceipt(image);
        const user = await User.findById(userId);
        const points = total * user.conversionRate;
        const receipt = new Receipt({ userId, image, total, points });
        await receipt.save();
        user.points += points;
        await user.save();
        res.status(200).json({ message: 'Receipt uploaded successfully', receipt });
    } catch (error) {
        res.status(500).json({ message: 'Error uploading receipt', error });
    }
});

// Route to get all receipts of a user
router.get('/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        const receipts = await Receipt.find({ userId });
        res.status(200).json({ message: 'Receipts fetched successfully', receipts });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching receipts', error });
    }
});

module.exports = router;
```