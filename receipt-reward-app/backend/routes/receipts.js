```javascript
const express = require('express');
const router = express.Router();
const Receipt = require('../models/Receipt');
const User = require('../models/User');
const { googleOCR } = require('../utils/googleOCR');

// Route to upload receipt
router.post('/upload', async (req, res) => {
  try {
    const { userId, imageUrl } = req.body;

    // Use Google OCR API to extract total amount from receipt
    const totalAmount = await googleOCR(imageUrl);

    // Create new receipt
    const newReceipt = new Receipt({
      userId,
      imageUrl,
      totalAmount,
    });

    // Save receipt to database
    await newReceipt.save();

    // Update user's total points
    const user = await User.findById(userId);
    user.points += totalAmount; // Assuming 1 point per currency unit
    await user.save();

    res.status(200).json({ message: 'Receipt uploaded successfully', receipt: newReceipt });
  } catch (error) {
    res.status(500).json({ message: 'Error uploading receipt', error });
  }
});

// Route to get all receipts of a user
router.get('/:userId', async (req, res) => {
  try {
    const { userId } = req.params;

    // Fetch all receipts of the user
    const receipts = await Receipt.find({ userId });

    res.status(200).json({ receipts });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching receipts', error });
  }
});

module.exports = router;
```