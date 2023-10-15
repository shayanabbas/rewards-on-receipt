```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button } from 'antd';

const Redemption = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await axios.get('/api/products');
    setProducts(response.data);
  };

  const handleRedeem = async (productId) => {
    try {
      const response = await axios.post(`/api/products/redeem/${productId}`);
      alert(response.data.message);
      fetchProducts();
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div>
      <h2>Redeem Points</h2>
      <div className="product-list">
        {products.map((product) => (
          <Card
            key={product.id}
            title={product.title}
            style={{ width: 300 }}
            cover={<img alt={product.title} src={product.image} />}
          >
            <p>{product.description}</p>
            <p>Points required: {product.points}</p>
            <Button onClick={() => handleRedeem(product.id)}>Redeem</Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Redemption;
```