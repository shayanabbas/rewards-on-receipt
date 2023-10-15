```javascript
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const receiptRoutes = require('./routes/receipts');
const pointsRoutes = require('./routes/points');
const productRoutes = require('./routes/products');

const app = express();

// Database connection
mongoose.connect('mongodb://localhost/receipt-reward-app', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/receipts', receiptRoutes);
app.use('/api/points', pointsRoutes);
app.use('/api/products', productRoutes);

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
```