// src/components/Dashboard.jsx
import React, { useState } from "react";
import "./Dashboard.css";

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const [postContent, setPostContent] = useState("");

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (postContent.trim()) {
      setPosts([...posts, { content: postContent, author: "User" }]);
      setPostContent("");
    }
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <ul>
          <li>Home</li>
          <li>Profile</li>
          <li>Friends</li>
          <li>Messages</li>
          <li>Logout</li>
        </ul>
      </div>
      <div className="main-feed">
        <div className="post-form">
          <textarea
            placeholder="What's on your mind?"
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
          />
          <button onClick={handlePostSubmit}>Post</button>
        </div>
        <div className="posts">
          {posts.map((post, index) => (
            <div key={index} className="post">
              <div className="author">{post.author}</div>
              <div className="content">{post.content}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
