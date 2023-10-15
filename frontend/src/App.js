```javascript
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ReceiptUpload from './components/Dashboard/ReceiptUpload';
import ReceiptList from './components/Dashboard/ReceiptList';
import PointsDisplay from './components/Dashboard/PointsDisplay';
import DigitalProducts from './components/Redemption/DigitalProducts';
import PhysicalProducts from './components/Redemption/PhysicalProducts';
import ConversionRate from './components/Admin/ConversionRate';
import ManageProducts from './components/Admin/ManageProducts';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/upload-receipt" component={ReceiptUpload} />
          <Route path="/receipts" component={ReceiptList} />
          <Route path="/points" component={PointsDisplay} />
          <Route path="/redeem/digital" component={DigitalProducts} />
          <Route path="/redeem/physical" component={PhysicalProducts} />
          <Route path="/admin/conversion-rate" component={ConversionRate} />
          <Route path="/admin/manage-products" component={ManageProducts} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
```