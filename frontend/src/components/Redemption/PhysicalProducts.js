```javascript
import React, { useState, useEffect } from 'react';
import { Card, Button } from 'antd';
import { api } from '../../utils/api';

const PhysicalProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await api.get('/products/physical');
      setProducts(response.data);
    } catch (error) {
      console.error('Failed to fetch products:', error);
    }
  };

  const handleRedeem = async (productId) => {
    try {
      await api.post(`/products/redeem/${productId}`);
      fetchProducts();
    } catch (error) {
      console.error('Failed to redeem product:', error);
    }
  };

  return (
    <div className="product-list">
      {products.map((product) => (
        <Card
          key={product.id}
          title={product.name}
          cover={<img alt={product.name} src={product.image} />}
        >
          <p>{product.description}</p>
          <p>Points required: {product.points}</p>
          <Button onClick={() => handleRedeem(product.id)}>Redeem</Button>
        </Card>
      ))}
    </div>
  );
};

export default PhysicalProducts;
```