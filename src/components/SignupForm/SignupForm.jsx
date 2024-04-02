import React from 'react';

const SignupForm = ({ onClose, onSubmit }) => {
  return (
    <div className="signup-form">
      <h2>Sign Up</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
        <button type="submit">Sign Up</button>
      </form>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default SignupForm;
