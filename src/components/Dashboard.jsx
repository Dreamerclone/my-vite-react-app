// src/components/Dashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="topnav">
        <div className="logo">MyStore</div>
        <nav>
          <ul>
            <li><Link to="/dashboard">Home</Link></li>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/">Logout</Link></li>
          </ul>
        </nav>
      </div>
      <div className="content">
        <div className="banner">
          <img src="https://via.placeholder.com/800x200" alt="Banner" />
        </div>
        <div className="categories">
          <div className="category-item">Category 1</div>
          <div className="category-item">Category 2</div>
          <div className="category-item">Category 3</div>
          <div className="category-item">Category 4</div>
          <div className="category-item">Category 5</div>
          <div className="category-item">Category 6</div>
        </div>
        <div className="product-list">
          <div className="product-item">
            <img src="https://via.placeholder.com/150" alt="Product" />
            <h3>Product Name</h3>
            <p>$100</p>
          </div>
          <div className="product-item">
            <img src="https://via.placeholder.com/150" alt="Product" />
            <h3>Product Name</h3>
            <p>$100</p>
          </div>
          <div className="product-item">
            <img src="https://via.placeholder.com/150" alt="Product" />
            <h3>Product Name</h3>
            <p>$100</p>
          </div>
          {/* Add more product items as needed */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
