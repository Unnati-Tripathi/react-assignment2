import React from 'react';
import UserCard from './UserCard';
import './UserGrid.css';

// Accept the new functions as props
const UserGrid = ({ users, onLike, onDelete, onEdit }) => {
  return (
    <div className="user-grid-container">
      {users.map(user => (
        <UserCard 
          key={user.id} 
          user={user} 
          onLike={onLike}    // Pass onLike down
          onDelete={onDelete}  // Pass onDelete down
          onEdit={onEdit}      // Pass onEdit down
        />
      ))}
    </div>
  );
};

export default UserGrid;