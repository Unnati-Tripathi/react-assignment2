import React, { useState } from 'react';
import './App.css';
import { userList } from './userData'; 
import Navbar from './components/Navbar';
import UserGrid from './components/UserGrid';
import EditModal from './components/EditModal'; // <-- Import the new modal

function App() {
  // The user list is now in state, so it can be changed
  const [users, setUsers] = useState(userList);
  
  // State for managing the modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  // --- Logic Functions ---

  const handleLike = (id) => {
    setUsers(currentUsers => 
      currentUsers.map(user =>
        user.id === id ? { ...user, isLiked: !user.isLiked } : user
      )
    );
  };

  const handleDelete = (id) => {
    setUsers(currentUsers =>
      currentUsers.filter(user => user.id !== id)
    );
  };
  
  // This function is called by UserCard to open the modal
  const handleEditOpen = (user) => {
    setEditingUser(user);
    setIsModalOpen(true);
  };

  // This function is called by the modal to close it
  const handleModalClose = () => {
    setIsModalOpen(false);
    setEditingUser(null);
  };

  // This function is called by the modal to save changes
  const handleEditSave = (updatedUser) => {
    setUsers(currentUsers =>
      currentUsers.map(user =>
        user.id === updatedUser.id ? updatedUser : user
      )
    );
    handleModalClose(); // Close the modal after saving
  };

  return (
    <div className="app-container">
      <Navbar />
      
      <main className="content-area">
        <UserGrid 
          users={users} 
          onLike={handleLike}
          onDelete={handleDelete}
          onEdit={handleEditOpen}
        />
      </main>

      {/* Render the modal component. It's hidden by default. */}
      <EditModal
        isOpen={isModalOpen}
        user={editingUser}
        onClose={handleModalClose}
        onSave={handleEditSave}
      />
    </div>
  );
}

export default App;