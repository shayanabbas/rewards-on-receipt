```javascript
import React, { useState } from 'react';
import { Button, Input } from 'antd';

const ConversionRate = () => {
  const [conversionRate, setConversionRate] = useState(0);

  const handleConversionRateChange = (e) => {
    setConversionRate(e.target.value);
  };

  const updateConversionRate = () => {
    // API call to update conversion rate in the backend
  };

  return (
    <div>
      <h2>Set Conversion Rate</h2>
      <Input
        type="number"
        value={conversionRate}
        onChange={handleConversionRateChange}
        placeholder="Enter new conversion rate"
      />
      <Button onClick={updateConversionRate}>Update Conversion Rate</Button>
    </div>
  );
};

export default ConversionRate;
```