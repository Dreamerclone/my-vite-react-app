// src/components/Products.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Mock API call
    const fetchProducts = async () => {
      // Replace with actual API call
      const productsData = [
        { id: 1, name: 'Product 1', price: '$100' },
        { id: 2, name: 'Product 2', price: '$200' },
      ];
      setProducts(productsData);
    };

    fetchProducts();
  }, []);

  const handleAddProduct = () => {
    // Implement add product functionality
    const newProduct = { id: products.length + 1, name: `Product ${products.length + 1}`, price: `$${(products.length + 1) * 100}` };
    setProducts([...products, newProduct]);
  };

  const handleEditProduct = (id) => {
    // Implement edit product functionality
    const editedProducts = products.map((product) => (product.id === id ? { ...product, name: `${product.name} (edited)` } : product));
    setProducts(editedProducts);
  };

  const handleDeleteProduct = (id) => {
    // Implement delete product functionality
    const filteredProducts = products.filter((product) => product.id !== id);
    setProducts(filteredProducts);
  };

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
        <h1>Products Page</h1>
        <button onClick={handleAddProduct}>Add Product</button>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                  <button onClick={() => handleEditProduct(product.id)}>Edit</button>
                  <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
