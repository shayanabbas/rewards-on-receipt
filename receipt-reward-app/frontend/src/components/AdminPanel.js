```javascript
import React, { useState } from 'react';
import axios from 'axios';

const AdminPanel = () => {
    const [conversionRate, setConversionRate] = useState(0);
    const [product, setProduct] = useState({ name: '', points: 0, type: '' });

    const handleRateChange = (event) => {
        setConversionRate(event.target.value);
    };

    const handleProductChange = (event) => {
        setProduct({ ...product, [event.target.name]: event.target.value });
    };

    const updateConversionRate = () => {
        axios.post('/api/admin/conversion-rate', { rate: conversionRate })
            .then(res => console.log(res.data))
            .catch(err => console.error(err));
    };

    const addProduct = () => {
        axios.post('/api/admin/products', product)
            .then(res => console.log(res.data))
            .catch(err => console.error(err));
    };

    return (
        <div>
            <h1>Admin Panel</h1>
            <div>
                <h2>Set Conversion Rate</h2>
                <input type="number" value={conversionRate} onChange={handleRateChange} />
                <button onClick={updateConversionRate}>Update Rate</button>
            </div>
            <div>
                <h2>Add Product</h2>
                <input type="text" name="name" value={product.name} onChange={handleProductChange} placeholder="Product Name" />
                <input type="number" name="points" value={product.points} onChange={handleProductChange} placeholder="Points Required" />
                <select name="type" value={product.type} onChange={handleProductChange}>
                    <option value="">Select Type</option>
                    <option value="digital">Digital</option>
                    <option value="physical">Physical</option>
                </select>
                <button onClick={addProduct}>Add Product</button>
            </div>
        </div>
    );
};

export default AdminPanel;
```