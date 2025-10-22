// import React from 'react';
// import './UserCard.css';

// // We now accept 4 props, passed from UserGrid
// const UserCard = ({ user, onLike, onDelete, onEdit }) => {
//   return (
//     <div className="user-card">
//       <div className="card-avatar-section">
//         <img 
//           src={user.avatar} 
//           alt={user.name} 
//           className="card-avatar-img" 
//         />
//       </div>

//       <div className="card-info-section">
//         <h3 className="user-name">{user.name}</h3>
//         <p className="info-item">
//           <span className="info-icon">📧</span>
//           {user.email}
//         </p>
//         <p className="info-item">
//           <span className="info-icon">📞</span>
//           {user.phone}
//         </p>
//         <p className="info-item">
//           <span className="info-icon">🌐</span>
//           {user.website}
//         </p>
//       </div>

//       <div className="card-action-bar">
//         {/* Like Button */}
//         <button 
//           className={`action-icon-btn ${user.isLiked ? 'liked' : ''}`}
//           onClick={() => onLike(user.id)}
//         >
//           {user.isLiked ? '💖' : '❤️'}
//         </button>
//         <span className="action-divider"></span>
        
//         {/* Edit Button */}
//         <button 
//           className="action-icon-btn" 
//           onClick={() => onEdit(user)}
//         >
//           ✏️
//         </button>
//         <span className="action-divider"></span>
        
//         {/* Delete Button */}
//         <button 
//           className="action-icon-btn" 
//           onClick={() => onDelete(user.id)}
//         >
//           🗑️
//         </button>
//       </div>
//     </div>
//   );
// };

// export default UserCard;







import React from 'react';
import './UserCard.css';

// We now accept 4 props, passed from UserGrid
const UserCard = ({ user, onLike, onDelete, onEdit }) => {
  return (
    <div className="user-card">
      {/* This section is updated to show the placeholder */}
      <div className="card-avatar-section">
        <div className="avatar-placeholder-circle">
          <div className="api-warning">
            <p>You are using an outdated API endpoint.</p>
            <span>Documentation</span>
          </div>
        </div>
      </div>

      <div className="card-info-section">
        <h3 className="user-name">{user.name}</h3>
        {/* Changed icons to match the image */}
        <p className="info-item">
          <span className="info-icon">✉</span>
          {user.email}
        </p>
        <p className="info-item">
          <span className="info-icon">☎</span>
          {user.phone}
        </p>
        <p className="info-item">
          <span className="info-icon">🌐</span>
          {user.website}
        </p>
      </div>

      <div className="card-action-bar">
        {/* Like Button: Changed icons to non-emoji characters */}
        <button 
          className={`action-icon-btn ${user.isLiked ? 'liked' : ''}`}
          onClick={() => onLike(user.id)}
        >
          {user.isLiked ? '♥' : '♡'}
        </button>
        <span className="action-divider"></span>
        
        {/* Edit Button: Changed icon */}
        <button 
          className="action-icon-btn" 
          onClick={() => onEdit(user)}
        >
          {/* Using a pencil character */}
          ✎
        </button>
        <span className="action-divider"></span>
        
        {/* Delete Button: Changed icon */}
        <button 
          className="action-icon-btn" 
          onClick={() => onDelete(user.id)}
        >
          {/* Using a trash bin character */}
          🗑
        </button>
      </div>
    </div>
  );
};

export default UserCard;