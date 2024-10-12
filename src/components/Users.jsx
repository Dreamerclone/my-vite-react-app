// src/components/Users.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Mock API call
    const fetchUsers = async () => {
      // Replace with actual API call
      const usersData = [
        { id: 1, name: 'User 1', email: 'user1@example.com' },
        { id: 2, name: 'User 2', email: 'user2@example.com' },
      ];
      setUsers(usersData);
    };

    fetchUsers();
  }, []);

  const handleAddUser = () => {
    // Implement add user functionality
    const newUser = { id: users.length + 1, name: `User ${users.length + 1}`, email: `user${users.length + 1}@example.com` };
    setUsers([...users, newUser]);
  };

  const handleEditUser = (id) => {
    // Implement edit user functionality
    const editedUsers = users.map((user) => (user.id === id ? { ...user, name: `${user.name} (edited)` } : user));
    setUsers(editedUsers);
  };

  const handleDeleteUser = (id) => {
    // Implement delete user functionality
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers(filteredUsers);
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
        <h1>Users Page</h1>
        <button onClick={handleAddUser}>Add User</button>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button onClick={() => handleEditUser(user.id)}>Edit</button>
                  <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
