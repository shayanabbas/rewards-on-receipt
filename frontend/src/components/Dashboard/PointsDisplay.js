```javascript
import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import { getUserPoints } from '../../utils/api';

const PointsDisplay = () => {
  const [points, setPoints] = useState(0);

  useEffect(() => {
    const fetchPoints = async () => {
      try {
        const response = await getUserPoints();
        setPoints(response.data.points);
      } catch (error) {
        console.error('Failed to fetch user points:', error);
      }
    };

    fetchPoints();
  }, []);

  return (
    <div>
      <Typography variant="h6">Your Points</Typography>
      <Typography variant="h4">{points}</Typography>
    </div>
  );
};

export default PointsDisplay;
```