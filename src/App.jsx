import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ProductsManagement from './components/ProductsManagement';
import OrdersManagement from './components/OrdersManagement';
import './index.css'
import { useState } from 'react';

// Mock data for products
const mockProducts = [
  { id: 1, name: 'Product 1', category: 'Category A', price: 9.99, stock: 10 },
  { id: 2, name: 'Product 2', category: 'Category B', price: 14.99, stock: 5 },
];

// Mock data for orders
const mockOrders = [
  {
    id: 1,
    customerName: 'John Doe',
    orderDate: '2023-05-01',
    status: 'Pending',
  },
  {
    id: 2,
    customerName: 'Jane Smith',
    orderDate: '2023-05-03',
    status: 'Shipped',
  },
  {
    id: 3,
    customerName: 'Bob Johnson',
    orderDate: '2023-05-05',
    status: 'Delivered',
  },
];

function App() {
  const [products, setProducts] = useState(mockProducts);
  const [orders, setOrders] = useState(mockOrders);
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/products">Products Management</Link>
            </li>
            <li>
              <Link to="/orders">Orders Management</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Dashboard products={products} orders={orders} />}></Route>
          <Route path="/products" element={<ProductsManagement products={products} setProducts={setProducts} />}></Route>
          <Route path="/orders" element={<OrdersManagement orders={orders} setOrders={setOrders} />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;