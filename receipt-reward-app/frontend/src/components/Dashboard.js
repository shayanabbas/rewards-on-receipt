```javascript
import React, { useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [file, setFile] = useState(null);
  const [points, setPoints] = useState(0);
  const [receipts, setReceipts] = useState([]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('receipt', file);
    const response = await axios.post('/api/receipts/upload', formData);
    setPoints(response.data.points);
    setReceipts([...receipts, response.data.receipt]);
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      <h2>Your Points: {points}</h2>
      <h2>Recent Receipts</h2>
      {receipts.map((receipt, index) => (
        <div key={index}>
          <img src={receipt.imageUrl} alt="Receipt" />
          <p>Total: {receipt.total}</p>
          <p>Points Earned: {receipt.points}</p>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
```