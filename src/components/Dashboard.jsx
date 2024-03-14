import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Dashboard.css';

const Dashboard = ({ products, orders }) => {
  const totalProducts = products.length;
  const totalOrders = orders.length;

  return (
    <div className='dashboard'>
      <main>
        <h2><span>Dashboard</span></h2>
        <div className="metrics">
          <div className="metric">
            <h3>Total Products</h3>
            <p>{totalProducts}</p>
          </div>
          <div className="metric">
            <h3>Total Orders</h3>
            <p>{totalOrders}</p>
          </div>
        </div>
        <div className="quick-links">
          <h3>Quick Links</h3>
          <Link to="/products" className="link">Products Management</Link>
          <Link to="/orders" className="link">Orders Management</Link>
        </div>
      </main>
      
    </div>
  );
};

export default Dashboard;
