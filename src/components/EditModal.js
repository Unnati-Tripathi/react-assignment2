import React, { useState, useEffect } from 'react';
import './EditModal.css'; // <-- MAKE SURE THIS LINE EXISTS

const EditModal = ({ user, isOpen, onClose, onSave }) => {
  // ... rest of the file is correct ...
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
  });

  useEffect(() => {
    if (user) {
      setFormData(user);
    }
  }, [user]);

  if (!isOpen) {
    return null;
  }

  // A helper function to update the form state as you type
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // This runs when you click the "OK" (save) button
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the form from refreshing the page
    onSave(formData); // Sends the new data back to App.js
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h3 className="modal-title">Basic Modal</h3>
        <button className="modal-close-btn" onClick={onClose}>×</button>
        
        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-group">
            <label htmlFor="name">
              <span className="required-star">*</span> Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">
              <span className="required-star">*</span> Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">
              <span className="required-star">*</span> Phone:
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="website">
              <span className="required-star">*</span> Website:
            </label>
            <input
              type="text"
              id="website"
              name="website"
              value={formData.website}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="modal-actions">
            <button type="button" className="btn btn-cancel" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-ok">
              OK
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;