```javascript
import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { getReceipts } from '../../utils/api';

const ReceiptList = () => {
  const [receipts, setReceipts] = useState([]);

  useEffect(() => {
    fetchReceipts();
  }, []);

  const fetchReceipts = async () => {
    const response = await getReceipts();
    setReceipts(response.data);
  };

  return (
    <List>
      {receipts.map((receipt, index) => (
        <ListItem key={index}>
          <ListItemText
            primary={`Receipt ${index + 1}`}
            secondary={`Total: ${receipt.total}, Points: ${receipt.points}`}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default ReceiptList;
```