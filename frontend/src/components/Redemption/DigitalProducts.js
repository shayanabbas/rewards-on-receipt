```javascript
import React, { useState, useEffect } from 'react';
import { getDigitalProducts } from '../../utils/api';

const DigitalProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        const response = await getDigitalProducts();
        setProducts(response.data);
    };

    return (
        <div>
            <h2>Digital Products</h2>
            {products.map((product, index) => (
                <div key={index}>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>Points required: {product.points}</p>
                    <button>Redeem</button>
                </div>
            ))}
        </div>
    );
};

export default DigitalProducts;
```