import React from 'react';
import ReactDOM from 'react-dom';
import AddressForm from './components/AddressForm';
import OrderSummary from './components/OrderSummary';
import './index.css';
ReactDOM.render(
  <React.StrictMode>
    <AddressForm />
    <OrderSummary />
  </React.StrictMode>,
  document.getElementById('root')
);

