import React, { useState } from 'react';
import '../assets/css/OrdersManagementForm.css';

const OrderManagementForm = ({ order, onSubmit, onCancel }) => {
  const [customerName, setCustomerName] = useState(order ? order.customerName : '');
  const [orderDate, setOrderDate] = useState(order ? order.orderDate : '');
  const [status, setStatus] = useState(order ? order.status : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedOrder = {
      ...order,
      customerName,
      orderDate,
      status,
    };
    onSubmit(updatedOrder);
  };

  return (
    <div className="order-form">
      <h3>{order ? 'Edit Order' : 'Add Order'}</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="customerName">Customer Name:</label>
          <input
            type="text"
            id="customerName"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="orderDate">Order Date:</label>
          <input
            type="date"
            id="orderDate"
            value={orderDate}
            onChange={(e) => setOrderDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="status">Status:</label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
          >
            <option value="Pending">Pending</option>
            <option value="Shipped">Shipped</option>
            <option value="Delivered">Delivered</option>
          </select>
        </div>
        <div className="form-actions">
          <button type="submit">{order ? 'Update' : 'Add'}</button>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default OrderManagementForm;
