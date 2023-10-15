```javascript
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Receipt = require('../models/Receipt');

// Get total points of a user
router.get('/:userId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ points: user.points });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update points after receipt upload
router.post('/update/:userId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const receipt = await Receipt.findById(req.body.receiptId);
    if (!receipt) {
      return res.status(404).json({ message: 'Receipt not found' });
    }
    // Assume conversion rate is 1 point per dollar
    const points = receipt.totalAmount;
    user.points += points;
    await user.save();
    res.json({ message: 'Points updated successfully', points: user.points });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
```