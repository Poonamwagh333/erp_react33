import React, { useState } from 'react';
import OrderManagementList from './OrderManagementList';
import OrderManagementForm from './OrderManagementForm';
import '../assets/css/OrdersManagement.css'

const OrdersManagement = ({ orders, setOrders }) => {
  const [editingOrder, setEditingOrder] = useState(null);

  const handleAddOrder = (newOrder) => {
    setOrders([...orders, newOrder]);
    setEditingOrder(null);
  };

  const handleEditOrder = (updatedOrder) => {
    setOrders(
      orders.map((order) =>
        order.id === updatedOrder.id ? updatedOrder : order
      )
    );
    setEditingOrder(null);
  };

  const handleDeleteOrder = (orderId) => {
    setOrders(orders.filter((order) => order.id !== orderId));
  };

  return (
    <div className="orders-management">
      <h2>Orders Management</h2>
      <OrderManagementList
        orders={orders}
        onDelete={handleDeleteOrder}
      />
      {editingOrder ? (
        <OrderManagementForm
          order={editingOrder}
          onSubmit={handleEditOrder}
          onCancel={() => setEditingOrder(null)}
        />
      ) : (
        <OrderManagementForm onSubmit={handleAddOrder} />
      )}
    </div>
  );
};

export default OrdersManagement;